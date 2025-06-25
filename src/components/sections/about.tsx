"use client"

import { motion } from "framer-motion"

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
          I'm a <span className="text-primary font-medium">Computer Science student</span> at Pamantasan ng Lungsod ng
          Pasig with a passion for real-world web development. I have knowledge in software engineering principles like
          Agile methodology, allowing me to work in team-based development.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          During my OJT at <span className="text-primary font-medium">Rizal Technological University (RTU)</span>, I
          worked with my classmates on a queuing system for the university's MIS office. My main responsibility was
          developing the login and authentication system for both admin and super-admin accounts, helping ensure secure
          access and user management.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          In development, I enjoy working on the <span className="text-primary font-medium">front-end</span>. I'm also
          interested in cryptocurrency and automation — always exploring new ways to improve workflows and efficiency.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          In my spare time, I'm usually exploring new technologies, working on personal projects, or learning about the
          latest trends in web development and blockchain technology.
        </p>
      </motion.div>
    </section>
  )
}
