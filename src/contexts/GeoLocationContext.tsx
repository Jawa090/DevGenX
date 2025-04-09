
import React, { createContext, useContext, useState, useEffect } from "react";

interface GeoLocation {
  country: string;
  city: string;
  continent: string;
  latitude: number;
  longitude: number;
  loading: boolean;
  error: string | null;
}

interface GeoLocationContextType {
  location: GeoLocation;
}

const defaultLocation: GeoLocation = {
  country: "",
  city: "",
  continent: "",
  latitude: 0,
  longitude: 0,
  loading: true,
  error: null,
};

const GeoLocationContext = createContext<GeoLocationContextType | undefined>(undefined);

export const GeoLocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState<GeoLocation>(defaultLocation);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Failed to fetch location data");
        }
        
        const data = await response.json();
        setLocation({
          country: data.country_name || "",
          city: data.city || "",
          continent: data.continent_code || "",
          latitude: data.latitude || 0,
          longitude: data.longitude || 0,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching location:", error);
        setLocation({
          ...defaultLocation,
          loading: false,
          error: "Failed to detect location",
        });
      }
    };

    fetchGeoLocation();
  }, []);

  return (
    <GeoLocationContext.Provider value={{ location }}>
      {children}
    </GeoLocationContext.Provider>
  );
};

export const useGeoLocation = () => {
  const context = useContext(GeoLocationContext);
  if (context === undefined) {
    throw new Error("useGeoLocation must be used within a GeoLocationProvider");
  }
  return context;
};
