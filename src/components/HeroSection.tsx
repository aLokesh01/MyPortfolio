import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 border-2 border-secondary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent/40 rounded-full animate-pulse-glow"
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient-primary">LOKESH</span>{" "}
            <span className="text-foreground">A</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Building responsive web applications with React, Java, Node.js & Firebase. 
            Strong in frontend, backend, API integration & deployment.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:lokesh.ajw@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300">
            <Mail size={16} /> lokesh.ajw@gmail.com
          </a>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground">
            <Phone size={16} /> +91 99622 88545
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground">
            <MapPin size={16} /> Chennai, Tamilnadu
          </span>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lokesh-a-6b9854353/" },
            { icon: Github, label: "GitHub", href: "https://github.com/aLokesh01" },
            { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/alokesh01/" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="group relative p-3 rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon size={22} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-primary/60" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
