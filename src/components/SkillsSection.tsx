import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "C++", "SQL", "JavaScript"],
    color: "primary",
  },
  {
    title: "Frameworks",
    skills: ["React", "Spring Boot", "Node.js", "TensorFlow"],
    color: "secondary",
  },
  {
    title: "Tools",
    skills: ["Git/GitHub", "Docker", "VS Code", "MySQL Workbench"],
    color: "accent",
  },
  {
    title: "Concepts",
    skills: ["Data Structures & Algorithms", "OOP", "REST APIs"],
    color: "primary",
  },
];

const colorStyles: Record<string, { bar: string; text: string; bg: string }> = {
  primary: { bar: "bg-gradient-accent", text: "text-primary", bg: "bg-primary/10" },
  secondary: { bar: "bg-secondary", text: "text-secondary", bg: "bg-secondary/10" },
  accent: { bar: "bg-accent", text: "text-accent", bg: "bg-accent/10" },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary tracking-[0.2em] uppercase mb-2">Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => {
            const styles = colorStyles[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <h3 className={`font-mono text-sm tracking-wider uppercase ${styles.text} mb-5 flex items-center gap-2`}>
                  <span className={`w-2 h-2 rounded-full ${styles.bar}`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`${styles.bg} ${styles.text} px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all duration-200 border border-transparent hover:border-current/20`}
                    >
                      {skill}
                    </motion.span>
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

export default SkillsSection;
