
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TeamMember from "@/components/TeamMember";

const About = () => {
  const teamMembers = [
    {
      name: "Jawad Abbas",
      role: "Founder & Lead Developer",
      bio: "Enterprise SaaS architect specializing in high-performance MERN stack applications. 8+ years building scalable web platforms for startups and Fortune 500 companies. Expert in React.js, Node.js, MongoDB, and cloud infrastructure. Delivered 50+ production applications serving millions of users.",
      image: "./173764082.jpeg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/-alijawad/",
        twitter: "https://twitter.com/jawadabbas",
        github: "https://github.com/Jawa090",
        whatsapp: "034364680",
      },
    },
  ];

  return (
    <section className="container mx-auto py-16 px-6 md:px-12">
      <SectionHeader
        title="About DevGenX"
        subtitle="The story behind the code - how we went from bedroom coding to building apps for NYC businesses"
      />

      <motion.div
        className="mt-12 flex justify-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {teamMembers.map((member, index) => (
          <TeamMember
            key={member.name}
            {...member}
            index={index}
          />
        ))}
      </motion.div>

      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <SectionHeader
          title="Our Story"
          subtitle="Building enterprise-grade AI automation and SaaS platforms that transform how businesses operate"
        />

        <div className="mt-8 max-w-3xl mx-auto glass-card p-8 rounded-xl">
          <p className="text-white/70 mb-4">
            DevGenX specializes in enterprise AI automation, large-scale SaaS platforms, and custom software development. We help businesses leverage artificial intelligence to automate workflows, reduce operational costs, and scale efficiently.
          </p>
          <p className="text-white/70 mb-4">
            Our expertise spans intelligent document processing, predictive analytics, multi-tenant SaaS architectures, and enterprise integrations. We've built systems processing millions of transactions daily, handling terabytes of data, and serving users across global markets.
          </p>
          <p className="text-white/70">
            Whether you need AI-powered automation to eliminate manual work, a scalable SaaS platform to reach millions of users, or custom enterprise software to streamline operations - we deliver production-ready solutions built with React, Node.js, Python, and modern cloud infrastructure.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;