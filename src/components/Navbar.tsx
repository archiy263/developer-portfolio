import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 top-0 pt-4 flex justify-center`}
    >
      <div className={`container mx-auto max-w-5xl px-6 md:px-8 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'glass-pill shadow-2xl shadow-accent/5' : 'bg-transparent'
      }`}>
        <div className="text-2xl font-bold tracking-tighter">
          Archi<span className="text-accent">.dev</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-secondary">
          <a href="#about" className="hover:text-primary transition-colors hover:text-shadow-glow">About</a>
          <a href="#skills" className="hover:text-primary transition-colors hover:text-shadow-glow">Skills</a>
          <a href="#experience" className="hover:text-primary transition-colors hover:text-shadow-glow">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors hover:text-shadow-glow">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors hover:text-shadow-glow">Contact</a>
        </div>
        <a href="/resume.pdf" className="hidden md:block px-6 py-2 glass-pill text-primary font-semibold hover:bg-accent hover:border-accent hover:text-white transition-all shadow-lg shadow-accent/10">
          Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
