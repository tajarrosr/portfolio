"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      period: "2024 — PRESENT",
      title: "Full-Stack Web Developer Intern",
      company: "Rizal Technological University",
      description:
        "Developed a comprehensive queuing system for the university's MIS office as part of my OJT internship program. Implemented secure login and authentication systems for both admin and super-admin accounts with role-based access control.",
      skills: ["React", "Node.js", "MySQL", "JavaScript", "TypeScript", "Prisma"],
      link: "#",
    },
  ]

  return (
    <section id="experience" className="content-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm font-bold text-foreground tracking-widest uppercase mb-8 lg:hidden"
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="experience-card grid grid-cols-1 lg:grid-cols-4 gap-4"
          >
            {/* Period */}
            <div className="lg:col-span-1">
              <p className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">{exp.period}</p>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {exp.title} · {exp.company}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
