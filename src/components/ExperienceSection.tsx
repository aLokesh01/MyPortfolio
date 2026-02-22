import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Majestic Technologies",
    location: "Korattur",
    role: "Java Backend Developer Intern",
    period: "DEC 2024 - JAN 2024",
    points: [
      "Engineered core backend modules for an E-commerce application using Java, optimizing data processing for high-volume order management.",
      "Implemented secure payment gateway integration and order validation logic, ensuring 100% data integrity.",
      "Designed normalized database schemas in MySQL, reducing data redundancy and improving query response times.",
    ],
  },
  {
    company: "CodeBind Technologies",
    location: "T-Nagar",
    role: "Web Development Intern",
    period: "JUN 2024 - JUL 2024",
    points: [
      "Developed a full-stack Online Shopping platform using PHP and MySQL with responsive frontend.",
      "Engineered secure user authentication modules and dynamic shopping cart functionality.",
      "Deployed the application to a live shared hosting environment, managing database connectivity.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative pattern-dots">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary tracking-[0.2em] uppercase mb-2">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-12 md:pl-20 mb-12 last:mb-0 group"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300"
                whileHover={{ scale: 1.4 }}
              />

              <div className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-500 group-hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.company}</h3>
                    <p className="text-secondary font-medium flex items-center gap-2">
                      <Briefcase size={14} /> {exp.role}
                    </p>
                    <p className="text-muted-foreground text-sm">{exp.location}</p>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                    <Calendar size={12} /> {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
