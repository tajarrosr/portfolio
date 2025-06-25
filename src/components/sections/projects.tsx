"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "RTU Queuing System",
      description:
        "A comprehensive queuing management system for Rizal Technological University's MIS office, streamlining student services and reducing wait times with real-time updates and role-based authentication.",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["Next.js", "TypeScript", "Prisma", "MySQL", "Trello"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Flux Lura",
      description:
        "A free online multimedia conversion tool that transforms images, audio, and videos effortlessly with a modern, intuitive interface and client-side processing for privacy.",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["Next.js", "TypeScript", "FFmpeg", "Tailwind CSS"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing skills and projects with smooth animations, dark mode support, and optimized performance.",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  return (
    <section id="projects" className="content-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm font-bold text-foreground tracking-widest uppercase mb-8 lg:hidden"
      >
        Projects
      </motion.h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card grid grid-cols-1 lg:grid-cols-4 gap-4"
          >
            {/* Project Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
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

      {/* View All Projects Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="pt-8"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
        >
          View Full Project Archive
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  )
}
