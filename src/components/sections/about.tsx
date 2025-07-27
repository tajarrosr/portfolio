"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="content-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m a{" "}
          <span className="text-white font-medium">Computer Science</span>{" "}
          graduate from Pamantasan ng Lungsod ng Pasig with a strong interest in
          real-world web development. I gained hands-on experience during my OJT
          as a web developer, working on both the front-end and back-end of web
          apps and internal tools.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m currently focused on web development and continuously
          exploring ways to grow as a developer. While I&apos;m particularly
          enjoy front-end development for its focus on user experience and
          designing clean, user-friendly interfaces. At the same time, I&apos;m
          also interested in back-end development, where I can dive deeper into
          logic, data, and functionality to build reliable systems behind the
          scenes.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When I&apos;m not coding, I usually spend my free time playing online
          games or watching shows. I believe stepping away from the screen helps
          me to refresh and relax my mind which is very important to balance
          life and work.
        </p>
      </motion.div>
    </section>
  );
}
