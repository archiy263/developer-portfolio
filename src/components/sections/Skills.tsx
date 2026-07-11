import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const skills = [
  { category: 'Programming Languages', items: [{ name: 'JavaScript', icon: FaNodeJs }, { name: 'Python', icon: FaPython }, { name: 'C++', icon: SiTypescript }, { name: 'SQL', icon: SiPostgresql }] },
  { category: 'Frontend', items: [{ name: 'React.js', icon: FaReact }, { name: 'HTML5 & CSS3', icon: SiTailwindcss }, { name: 'Responsive Web Design', icon: FaReact }] },
  { category: 'Backend', items: [{ name: 'Node.js & Express.js', icon: FaNodeJs }, { name: 'Django & Flask', icon: FaPython }, { name: 'REST APIs & JWT', icon: FaDocker }] },
  { category: 'Databases', items: [{ name: 'MySQL & PostgreSQL', icon: SiPostgresql }, { name: 'MongoDB', icon: SiMongodb }, { name: 'SQLite', icon: SiPostgresql }] },
  { category: 'AI Tools', items: [{ name: 'ChatGPT & Claude', icon: FaPython }, { name: 'GitHub Copilot', icon: FaGithub }, { name: 'Cursor AI', icon: FaDocker }] },
  { category: 'Tools & Practices', items: [{ name: 'Git & GitHub', icon: FaGithub }, { name: 'Docker & Linux', icon: FaDocker }, { name: 'Postman & CI/CD', icon: FaAws }] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Arsenal</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card"
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-secondary hover:text-white transition-colors">
                      <skill.icon className="text-accent" size={20} />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
