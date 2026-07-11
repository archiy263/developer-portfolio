import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} Archi Yadav. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-secondary">
          <a href="https://github.com/archiy263" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/archiyadav" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm">
            <FaLinkedin size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-sm">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
