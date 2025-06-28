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
          graduate from Pamantasan ng Lungsod ng Pasig with a passion for
          real-world web development. I build websites and web apps with
          hands-on experience from my OJT as a full-stack web developer.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I&apos;m currently exploring different areas in tech to discover where
          I can grow and contribute best, though I particularly enjoy working on
          the front-end and building user-friendly interfaces.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          When I&apos;m not coding, I usually spend my free time playing online
          games or watching shows. I believe stepping away from the screen helps
          me reset and stay curious about tech in a healthy way.
        </p>
      </motion.div>
    </section>
  );
}
