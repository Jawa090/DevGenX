import { motion } from "framer-motion";

const ClientLogos = () => {
  const clients = [
    { name: "BitWords Inc", logo: "BW" },
    { name: "ContractorHub", logo: "CH" },
    { name: "EstimatingHub", logo: "EH" },
    { name: "Ekhata ERP", logo: "EK" },
    { name: "DecExperts", logo: "DE" },
    { name: "FusionCortex", logo: "FC" },
    { name: "Skimming AI", logo: "SA" },
    { name: "FreeTool AI", logo: "FT" },
  ];

  return (
    <section className="py-16 px-6 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-white/60 text-sm mb-6">TRUSTED BY 50+ BUSINESSES</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Companies That Trust <span className="text-gradient">DevGenX</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 flex items-center justify-center hover:border-neon-blue/50 transition-all group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <p className="text-white/70 text-sm font-medium">{client.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-8 glass-card px-8 py-4 rounded-full">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-white/60 text-xs">Projects Delivered</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-white/60 text-xs">On-Time Delivery</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">5.0</p>
              <p className="text-white/60 text-xs">Client Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
