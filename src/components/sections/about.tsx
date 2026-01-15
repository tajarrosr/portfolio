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
          graduate from Pamantasan ng Lungsod ng Pasig and currently working as a <span className="text-white font-medium">Front-End Web Developer at NetGlobal Solutions, Inc.</span>{" "} I enjoy building  <span className="text-white font-medium">clean, user-friendly web interfaces</span>{" "} and improving user experience.


          
        </p>
        <p className="text-muted-foreground leading-relaxed">
          While front-end development is my main focus, I&apos;m also interested in exploring back-end development, AI, and Web3. Outside of coding, I spend my time doing crypto trading, watching anime and K-dramas, playing sports like badminton and ultimate frisbee, and gaming to maintain a healthy work-life balance.

        </p>
      </motion.div>
    </section>
  );
}
