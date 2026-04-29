import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/" && !location.pathname.endsWith("/")) {
      navigate(`${location.pathname}/${location.search}${location.hash}`, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default TrailingSlashRedirect;
