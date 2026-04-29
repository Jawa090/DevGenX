
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact DevGenX - Get a Free Software Development Quote NYC",
  "description": "Contact DevGenX for custom software development, AI automation, and SaaS platform development in New York City. Free consultation. Response within 24 hours.",
  "url": "https://devgenx.vercel.app/contact/"
};

const Contact = () => {
  return (
    <>
    <SEO
      title="Contact DevGenX | Get a Free Software Development Quote NYC"
      description="Contact DevGenX for AI automation, SaaS development, and custom enterprise software in New York City. Free 30-minute consultation. We respond within 24 hours. Manhattan, Brooklyn, Queens."
      keywords="contact DevGenX, software development quote NYC, free consultation New York, hire developers NYC, custom software quote Manhattan, AI development consultation, SaaS development inquiry, DevGenX contact"
      schema={[contactSchema]}
    />
    <section className="container mx-auto py-16 px-6 md:px-12">
      <SectionHeader
        title="Let's Talk"
        subtitle="Got a project? Need a quote? Just want to chat about tech? Drop us a message - we usually respond within 24 hours."
      />

      <motion.div
        className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ContactForm />
      </motion.div>
    </section>
    </>
  );
};

export default Contact;
