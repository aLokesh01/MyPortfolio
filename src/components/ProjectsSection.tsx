import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Integrated Learning Platform",
    subtitle: "The Inception",
    period: "DEC 2025",
    description: "Allows AI to teach personally according to your need",
    points: [
      "Developed a personalized learning engine using TensorFlow that adapts content based on user skill gaps.",
      "Integrated React frontend with a Node.js backend to deliver real-time analytics for educators.",
    ],
    tags: ["TensorFlow", "React", "Node.js", "AI/ML"],
    color: "primary" as const,
  },
];

const colorMap = {
  primary: {
    border: "hover:border-primary/40",
    glow: "hover:shadow-glow-primary",
    tag: "bg-primary/10 text-primary",
    icon: "text-primary",
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative pattern-grid">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary tracking-[0.2em] uppercase mb-2">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary">Projects</h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`bg-gradient-card border border-border rounded-xl p-8 ${colors.border} ${colors.glow} transition-all duration-500 group cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className={colors.icon} size={18} />
                      <span className="font-mono text-xs text-accent">{project.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm italic">{project.subtitle} — {project.description}</p>
                  </div>
                  <motion.div whileHover={{ rotate: 45 }} className="text-muted-foreground group-hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </motion.div>
                </div>

                <ul className="space-y-2 mt-4 mb-6">
                  {project.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className={`mt-1 shrink-0 ${colors.icon}`}>▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`${colors.tag} px-3 py-1 rounded-full text-xs font-mono font-medium`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
