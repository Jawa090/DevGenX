
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TeamMember from "@/components/TeamMember";

const About = () => {
  const teamMembers = [
    {
      name: "Jawad Abbas",
      role: "MERN Stack Developer & AI Enthusiast",
      bio: "Jawad is a passionate MERN stack developer with expertise in building scalable web applications and integrating AI solutions. With years of experience in the tech industry, he brings technical excellence and innovation to every project.",
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
        title="Our Team"
        subtitle="Meet the talented individuals behind our exceptional digital solutions"
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
          title="Our Mission"
          subtitle="To transform ideas into exceptional digital experiences through innovative development, creative design, and data-driven insights."
        />

        <div className="mt-8 max-w-3xl mx-auto glass-card p-8 rounded-xl">
          <p className="text-white/70 mb-4">
            At DevGenX, we believe in the power of combining technical expertise with creative design and data analytics to create digital solutions that not only look stunning but also perform exceptionally well and deliver measurable results.
          </p>
          <p className="text-white/70 mb-4">
            Our approach is collaborative and client-focused, ensuring that we understand your unique needs and deliver solutions that exceed your expectations. We're committed to staying at the forefront of technology and design trends to bring you the most innovative solutions.
          </p>
          <p className="text-white/70">
            Whether you need a complex web application, an AI integration, stunning graphic design, Python-based solutions, or data analytics services, we have the skills and passion to bring your vision to life.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;