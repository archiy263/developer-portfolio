import { motion } from 'framer-motion';

const certificates = [
  { name: 'Advanced Competitive Coding & SAP HANA', issuer: 'SAP' },
  { name: 'Node.js RESTful API Bootcamp', issuer: 'DevTown' },
  { name: 'Programming in Python', issuer: 'KIMO' },
  { name: 'Gen AI Exchange Hackathon 2025', issuer: 'Google Cloud' },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-4">
            Certifications & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="glass-card group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <p className="text-accent text-sm mb-2 font-mono">{cert.issuer}</p>
                  <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
