import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { PaintBucket, Palette, Layers, Image, Film, Layout, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const SITE_URL = "https://devgenx.vercel.app";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "UI/UX Design & Branding Services NYC",
  "description": "Conversion-optimized UI/UX design and branding services for New York businesses. User research-driven interfaces, brand identity, landing pages, and marketing materials that drive engagement and increase conversions by 35%+.",
  "provider": { "@type": "LocalBusiness", "name": "DevGenX", "url": SITE_URL, "areaServed": { "@type": "City", "name": "New York" } },
  "serviceType": "UI/UX Design",
  "areaServed": ["New York", "Manhattan", "Brooklyn", "Queens"],
  "url": `${SITE_URL}/services/ui-ux-design/`
};

const features = [
  { icon: <Palette size={28} />, title: "UI/UX Design & Research", description: "User-centric interfaces designed from real behavioral data, not guesswork. Wireframing, prototyping, usability testing, and interaction design that increase conversions by 35%+ for NYC businesses.", image: "/28.jpeg" },
  { icon: <PaintBucket size={28} />, title: "Brand Identity Design", description: "Memorable brand identities that differentiate your NYC business. Logo design, color systems, typography, brand guidelines, and visual language that works across digital and print.", image: "/29.jpeg" },
  { icon: <Layers size={28} />, title: "High-Converting Landing Pages", description: "Landing pages optimized for signups, sales, and lead generation. A/B tested designs with persuasive copywriting, trust signals, and clear CTAs that move the needle for New York businesses.", image: "/30.jpeg" },
  { icon: <Layout size={28} />, title: "Design Systems", description: "Scalable design systems with reusable components, design tokens, and documentation. Ensure visual consistency across your entire product suite as your NYC business grows.", image: "/31.jpeg" },
  { icon: <Image size={28} />, title: "Social Media & Marketing Assets", description: "Eye-catching graphics optimized for Instagram, LinkedIn, Twitter, and Facebook. Sized correctly, on-brand, and designed to drive engagement for your New York audience.", image: "/32.jpeg" },
  { icon: <Film size={28} />, title: "Motion Graphics & Video", description: "Animated logos, product demos, explainer videos, and micro-interactions. Professional motion design that communicates your value proposition and keeps NYC audiences engaged.", image: "/33.jpeg" },
];

const UIUXDesign = () => {
  return (
    <>
      <SEO
        title="UI/UX Design & Branding Services NYC | Conversion-Optimized Design | DevGenX"
        description="Expert UI/UX design and branding services in New York City. User research-driven interfaces, brand identity, landing pages & marketing assets. Increase conversions by 35%+. Serving Manhattan, Brooklyn & Queens."
        keywords="UI UX design NYC, user experience design New York, brand identity design Manhattan, landing page design, web design agency Brooklyn, graphic design services NYC, UI design company, conversion optimization New York, UX research NYC, branding agency New York"
        schema={[serviceSchema]}
      />

      <div className="pt-20 pb-20 px-6">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 text-sm px-4 py-2 rounded-full neo-blur border border-white/10 text-neon-blue">
              Design That Converts, Not Just Looks Good
            </motion.span>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight max-w-4xl mx-auto mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              UI/UX Design & Branding for <span className="text-gradient">New York Businesses</span>
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Conversion-optimized interfaces backed by real user research. Complete brand identities,
              high-converting landing pages, and marketing assets that drive results for NYC businesses.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 rounded-lg px-8 py-6 font-bold text-base"><Calendar className="mr-2 h-5 w-5" /> Get a Free Design Consultation</Button>
              </a>
              <Link to="/portfolio/">
                <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">View Design Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </motion.div>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[{ stat: "35%+", label: "Conversion Increase" }, { stat: "50+", label: "Brands Designed" }, { stat: "90+", label: "Lighthouse Scores" }, { stat: "A/B", label: "Tested Designs" }].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <p className="text-3xl font-bold text-white">{item.stat}</p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader title="Design & Branding Services" subtitle="User-centric design services for Manhattan, Brooklyn, Queens, and all of New York City." />
            <div className="space-y-12 mt-12">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed mb-6">{feature.description}</p>
                    <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">Discuss This Service <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </a>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <img src={feature.image} alt={feature.title} className="rounded-xl w-full h-64 object-cover" loading="lazy" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-neon-blue/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Design That Actually Converts?</h2>
              <p className="text-white/70 text-lg mb-8">Stop losing customers to poor UX. Get a free design audit and discover how user-centric design can grow your NYC business.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 px-8 py-6 text-lg"><Calendar className="mr-2 h-5 w-5" /> Book Free Design Audit</Button>
                </a>
                <Link to="/contact/"><Button variant="outline" className="border-white/20 text-white px-8 py-6 text-lg hover:bg-white/5">Contact Us</Button></Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UIUXDesign;
