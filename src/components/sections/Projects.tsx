import { motion } from 'framer-motion';

const projects = [
  {
    title: 'WatchWise',
    description: 'A comprehensive media tracking application allowing users to discover, save, and review movies and TV shows.',
    features: ['Real-time search', 'User authentication', 'Media recommendations', 'Watchlist management'],
    tech: ['React', 'Node.js', 'MongoDB', 'TMDB API'],
    github: 'https://github.com/archiy263/watchwise',
    live: '#',
    status: 'Completed',
    challenges: 'Handling large API datasets efficiently and implementing secure user sessions.',
    imageAlt: 'WatchWise Application Screenshot'
  },
  {
    title: 'VBEAM',
    description: 'Advanced system for specialized AI generation and workflow automation, upgrading enterprise workflows.',
    features: ['Workflow automation', 'AI-driven insights', 'Customized dashboards'],
    tech: ['Python', 'FastAPI', 'React', 'Docker'],
    github: 'https://github.com/archiy263/vbeam',
    live: '#',
    status: 'Completed',
    challenges: 'Optimizing container orchestration and reducing latency in AI inferences.',
    imageAlt: 'VBEAM Dashboard'
  },
  {
    title: 'TeamTaskManager',
    description: 'Collaborative project management tool with real-time updates, kanban boards, and team analytics.',
    features: ['Real-time updates via WebSockets', 'Kanban boards', 'Role-based access control'],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
    github: 'https://github.com/archiy263/team-task-manager',
    live: '#',
    status: 'Completed',
    challenges: 'Ensuring consistent state across multiple concurrent active users.',
    imageAlt: 'TeamTaskManager Interface'
  },
  {
    title: 'Voice Email Assistant',
    description: 'AI-powered assistant that reads, summarizes, and drafts emails using voice commands.',
    features: ['Voice recognition', 'Email parsing', 'AI summarization', 'Speech-to-text drafting'],
    tech: ['Python', 'OpenAI API', 'Google Speech API', 'IMAP/SMTP'],
    github: 'https://github.com/archiy263/voicemail-ai',
    live: '#',
    status: 'In Progress',
    challenges: 'Accurately capturing domain-specific terminology via speech-to-text.',
    imageAlt: 'Voice Email Assistant Console'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-accent"></span>
            Featured Projects
          </h2>

          <div className="space-y-24">
            {projects.map((project, idx) => (
              <div key={idx} className="flex flex-col gap-8 items-start">
                <div className="w-full">
                  <p className="text-accent text-sm font-mono mb-2">{project.status}</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="glass-card mb-6 md:-mx-6 relative z-10 text-secondary text-left space-y-2">
                    <p>{project.description}</p>
                    {project.features && (
                      <p className="text-sm"><span className="text-white font-semibold">Features:</span> {project.features.join(', ')}</p>
                    )}
                    {project.challenges && (
                      <p className="text-sm"><span className="text-white font-semibold">Challenges:</span> {project.challenges}</p>
                    )}
                  </div>
                  <ul className="flex flex-wrap gap-4 text-sm font-mono text-secondary/80 mb-6 justify-start">
                    {project.tech.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 justify-start">
                    <a href={project.github} className="hover:text-accent transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
