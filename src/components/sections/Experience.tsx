import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI Intern',
    company: 'Infosys SpringBoard Internship 6.0',
    date: 'Feb 2026 - April 2026',
    description: 'Developed AI-powered applications and integrated REST APIs to automate workflows. Utilized Git, CI/CD pipelines, and modern development practices. Leveraged AI tools for rapid prototyping, debugging, and feature development.',
  },
  {
    role: 'Microsoft Elevate Program',
    company: 'FICE Education Pvt. Ltd.',
    date: 'Dec 2025 - Feb 2026',
    description: 'Completed Microsoft Elevate Program focused on AI, Machine Learning, Data Analytics, and Azure fundamentals.',
  },
  {
    role: 'Python Django Backend Developer Intern',
    company: 'BrainyBeam InfoTech Pvt. Ltd.',
    date: 'Jun 2025 - Jul 2025',
    description: 'Developed backend modules and REST APIs using Python and Django for web applications. Worked with databases, authentication systems, API integrations, and debugging. Applied Agile methodologies and Git workflows.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Where I've Worked</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                    <span className="text-accent text-sm font-mono mt-1 md:mt-0">{exp.date}</span>
                  </div>
                  <h4 className="text-secondary font-medium mb-4">{exp.company}</h4>
                  <p className="text-secondary/80 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
