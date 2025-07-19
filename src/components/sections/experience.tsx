"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      period: "March - May 2025",
      title: "Full-Stack Web Developer Intern",
      company: "Rizal Technological University (RTU) - Boni Campus",
      description:
        "Collaborated with a team using Trello and Github to develop a queuing system for the university’s MIS office during my OJT. I was mainly responsible for building the login and authentication system with role-based access for admin and super-admin accounts, ensuring secure user management and access control.",
      skills: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Shadcn UI",
        "Tailwind CSS",
        "MySQL",
        "Node.js",
        "Prisma",
      ],
    },
  ];

  return (
    <section id="experience" className="content-section">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          My Experience
        </h2>
        <div className="w-12 h-px bg-primary"></div>
      </motion.div>

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
              <p className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                {exp.period}
              </p>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {exp.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-base text-muted-foreground mt-1">
                  {exp.company}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {exp.description}
              </p>

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
  );
}
