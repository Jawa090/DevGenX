import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";

const CostCalculator = () => {
  const [projectType, setProjectType] = useState("");
  const [complexity, setComplexity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  const projectTypes = [
    { value: "ai-automation", label: "AI Automation", basePrice: 35000 },
    { value: "saas-mvp", label: "SaaS Platform MVP", basePrice: 75000 },
    { value: "saas-full", label: "Full SaaS Platform", basePrice: 150000 },
    { value: "enterprise", label: "Enterprise Software", basePrice: 125000 },
    { value: "crm-erp", label: "Custom CRM/ERP", basePrice: 100000 },
    { value: "api", label: "API Development", basePrice: 45000 },
    { value: "mobile-app", label: "Mobile App", basePrice: 60000 },
  ];

  const complexityLevels = [
    { value: "simple", label: "Simple", multiplier: 0.7 },
    { value: "moderate", label: "Moderate", multiplier: 1.0 },
    { value: "complex", label: "Complex", multiplier: 1.4 },
    { value: "enterprise", label: "Enterprise-Grade", multiplier: 1.8 },
  ];

  const timelineOptions = [
    { value: "rush", label: "Rush (4-6 weeks)", multiplier: 1.3 },
    { value: "standard", label: "Standard (8-12 weeks)", multiplier: 1.0 },
    { value: "flexible", label: "Flexible (12+ weeks)", multiplier: 0.9 },
  ];

  const additionalFeatures = [
    { value: "ai-integration", label: "AI Integration", price: 15000 },
    { value: "payment", label: "Payment Gateway", price: 8000 },
    { value: "analytics", label: "Analytics Dashboard", price: 12000 },
    { value: "admin", label: "Admin Panel", price: 10000 },
    { value: "mobile", label: "Mobile Responsive", price: 5000 },
    { value: "seo", label: "SEO Optimization", price: 6000 },
  ];

  const calculateCost = () => {
    const selectedProject = projectTypes.find(p => p.value === projectType);
    const selectedComplexity = complexityLevels.find(c => c.value === complexity);
    const selectedTimeline = timelineOptions.find(t => t.value === timeline);

    if (!selectedProject || !selectedComplexity || !selectedTimeline) return { min: 0, max: 0 };

    let basePrice = selectedProject.basePrice;
    basePrice *= selectedComplexity.multiplier;
    basePrice *= selectedTimeline.multiplier;

    const featuresPrice = features.reduce((total, feature) => {
      const feat = additionalFeatures.find(f => f.value === feature);
      return total + (feat?.price || 0);
    }, 0);

    const totalMin = Math.round((basePrice + featuresPrice) * 0.9);
    const totalMax = Math.round((basePrice + featuresPrice) * 1.1);

    return { min: totalMin, max: totalMax };
  };

  const handleCalculate = () => {
    if (projectType && complexity && timeline) {
      setShowEmailForm(true);
    }
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowResults(true);
      setShowEmailForm(false);
      // Here you would send email to your service
      console.log("Email captured:", email);
    }
  };

  const toggleFeature = (feature: string) => {
    setFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const { min, max } = calculateCost();
  const estimatedWeeks = timeline === "rush" ? "4-6" : timeline === "standard" ? "8-12" : "12-16";

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title="Project Cost Calculator"
          subtitle="Get an instant estimate for your project. Takes less than 2 minutes."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="glass-card p-8 border-white/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Calculate Your Project Cost</h2>
                <p className="text-white/70 text-sm">Answer a few questions to get your estimate</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Project Type */}
              <div>
                <Label className="text-white mb-2 block">What type of project do you need?</Label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map(type => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Complexity */}
              <div>
                <Label className="text-white mb-2 block">Project Complexity</Label>
                <Select value={complexity} onValueChange={setComplexity}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select complexity level" />
                  </SelectTrigger>
                  <SelectContent>
                    {complexityLevels.map(level => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Timeline */}
              <div>
                <Label className="text-white mb-2 block">Preferred Timeline</Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelineOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Features */}
              <div>
                <Label className="text-white mb-3 block">Additional Features (Optional)</Label>
                <div className="grid grid-cols-2 gap-3">
                  {additionalFeatures.map(feature => (
                    <button
                      key={feature.value}
                      onClick={() => toggleFeature(feature.value)}
                      className={`p-3 rounded-lg border transition-all text-left ${
                        features.includes(feature.value)
                          ? "border-neon-blue bg-neon-blue/10"
                          : "border-white/20 bg-white/5 hover:border-white/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">{feature.label}</span>
                        {features.includes(feature.value) && (
                          <CheckCircle2 className="h-4 w-4 text-neon-blue" />
                        )}
                      </div>
                      <span className="text-white/60 text-xs">+${feature.price.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              {!showEmailForm && !showResults && (
                <Button
                  onClick={handleCalculate}
                  disabled={!projectType || !complexity || !timeline}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 py-6"
                >
                  Calculate Cost <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}

              {/* Email Form */}
              {showEmailForm && !showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-white/5 rounded-lg border border-white/20"
                >
                  <h3 className="text-white font-semibold mb-2">Get Your Detailed Estimate</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Enter your email to receive a detailed breakdown and timeline.
                  </p>
                  <form onSubmit={handleSubmitEmail} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90"
                    >
                      Show My Estimate
                    </Button>
                  </form>
                  <p className="text-xs text-white/50 mt-2">
                    We respect your privacy. No spam, ever.
                  </p>
                </motion.div>
              )}

              {/* Results */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl border border-neon-blue/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Your Project Estimate</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-white/70 text-sm mb-1">Estimated Cost</p>
                      <p className="text-2xl font-bold text-white">
                        ${min.toLocaleString()} - ${max.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-white/70 text-sm mb-1">Timeline</p>
                      <p className="text-2xl font-bold text-white">{estimatedWeeks} weeks</p>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg mb-6">
                    <h4 className="text-white font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-white/80 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-neon-blue mr-2" />
                        Complete source code ownership
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-neon-blue mr-2" />
                        Weekly demos and progress updates
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-neon-blue mr-2" />
                        30 days free post-launch support
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-neon-blue mr-2" />
                        Deployment and documentation
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90">
                        Book Free Consultation
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowResults(false);
                        setProjectType("");
                        setComplexity("");
                        setTimeline("");
                        setFeatures([]);
                        setEmail("");
                      }}
                      className="border-white/20 text-white hover:bg-white/5"
                    >
                      Recalculate
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CostCalculator;
