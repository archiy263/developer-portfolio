import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-accent"></span>
            About Me
          </h2>
          
          <div className="max-w-3xl glass-card">
            <div className="space-y-6 text-secondary leading-relaxed">
              <p className="text-lg">
                Hello! I'm <span className="text-white font-semibold">Archi Yadav</span>, a Computer Engineering graduate from Sigma Institute of Engineering, Vadodara (2022 - 2026, CGPA: 8.94/10).
              </p>
              <p>
                I have hands-on experience in Full Stack Development using React.js, Node.js, SQL, REST APIs, and AI-assisted development tools. I am passionate about building scalable web applications, solving problems, and delivering production-ready software solutions.
              </p>
              <p>
                I thrive in environments where I can leverage my skills in JavaScript, Python, C++, and various modern frameworks to build impactful software.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
