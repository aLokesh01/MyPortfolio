import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Globe } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 relative pattern-dots">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary tracking-[0.2em] uppercase mb-2">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="bg-gradient-card border border-border rounded-xl p-8 hover:border-secondary/30 hover:shadow-glow-secondary transition-all duration-500 group mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
              <GraduationCap size={28} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Bachelor of Computer Science Engineering</h3>
                  <p className="text-muted-foreground">Panimalar Engineering College</p>
                </div>
                <span className="flex items-center gap-1 font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                  <Calendar size={12} /> Sep 2023 - Sep 2027
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-3">
                <span className="text-primary">▹</span> Relevant coursework in Full Stack Development and Project Management.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <Award className="text-accent" size={18} />
              <h4 className="font-mono text-sm text-accent tracking-wider uppercase">Certifications</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-accent shrink-0">▹</span>CIP Accenture Nordics - Software Engineering</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">▹</span>Tata Group - Cybersecurity Analyst Simulation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <Globe className="text-primary" size={18} />
              <h4 className="font-mono text-sm text-primary tracking-wider uppercase">Languages</h4>
            </div>
            <div className="flex gap-3">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">English</span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-lg text-sm font-medium">Tamil</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
