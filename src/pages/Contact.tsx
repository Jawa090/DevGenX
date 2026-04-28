
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
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
  );
};

export default Contact;
