import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 filter drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">Archi Yadav</span>
            </h1>
            <h3 className="text-2xl md:text-3xl text-secondary mb-8 h-12">
              <span className="font-light">Full Stack Developer</span>
            </h3>

            <p className="text-secondary/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Computer Engineering graduate with hands-on experience in Full Stack Development using React.js, Node.js, SQL, REST APIs, and AI-assisted development tools.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#contact" className="px-8 py-3 glass-pill text-white font-semibold hover:bg-accent/20 hover:border-accent transition-all flex items-center gap-2 shadow-xl shadow-accent/5">
                <FaEnvelope /> Get in touch
              </a>
              <a href="/resume.pdf" className="px-8 py-3 glass-pill text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 shadow-xl">
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="flex justify-center gap-6 mt-12 text-secondary">
              <a href="https://github.com/archiy263" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-white transition-colors transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/archi-yadav-41150734b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-white transition-colors transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"><FaLinkedin size={24} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
