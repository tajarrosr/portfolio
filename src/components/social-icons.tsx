"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function SocialIcons() {
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, color: "#FF7F50" }}
        transition={{ duration: 0.2 }}
        className="text-foreground hover:text-primary transition-colors"
      >
        <Github size={24} />
        <span className="sr-only">GitHub</span>
      </motion.a>
      <motion.a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, color: "#FF7F50" }}
        transition={{ duration: 0.2 }}
        className="text-foreground hover:text-primary transition-colors"
      >
        <Linkedin size={24} />
        <span className="sr-only">LinkedIn</span>
      </motion.a>
    </motion.div>
  );
}
