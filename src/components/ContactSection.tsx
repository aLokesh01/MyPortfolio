import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-secondary tracking-[0.2em] uppercase mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">Let's Connect</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: Mail, label: "lokesh.ajw@gmail.com", href: "mailto:lokesh.ajw@gmail.com" },
            { icon: Phone, label: "+91 99622 88545", href: "tel:+919962288545" },
            { icon: MapPin, label: "Chennai, TN", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-card border border-border hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
            >
              <item.icon size={18} className="text-primary" />
              <span className="text-foreground text-sm">{item.label}</span>
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center border-t border-border pt-8">
        <p className="text-muted-foreground text-sm font-mono">
          © 2025 Lokesh A · Built with React & TypeScript
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
