"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "RTU-MISO Queuing System",
      description:
        "A web-based queuing system designed for Rizal Technological University’s MIS office. The project aimed to streamline student services and reduce wait times through real-time status updates and role-based access for admin-level users.",
      image: "/images/projects/rtu_queueing_system.png?height=200&width=300",
      skills: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn",
        "Framer Motion",
        "MySQL",
        "Node.js",
        "Prisma",
      ],
      links: {
        github: "https://github.com/Brhylle",
        live: "#skills",
      },
    },
    {
      title: "Aquagrade",
      description:
        "A thesis project that classifies the freshness of fish (specifically bangus and tilapia) using a web-based convolutional neural network (CNN). Users can either upload an image or use a live camera feed to detect and label fish quality in real time, using a trained model integrated via the Roboflow API.",
      image: "/images/projects/aquagrade.png?height=200&width=300",
      skills: ["Flask", "Python", "HTML", "Tailwind CSS"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Chupurple",
      description:
        "A modern, responsive portfolio website showcasing skills and projects with smooth animations, dark mode support, and optimized performance.",
      image: "/placeholder.svg?height=200&width=300",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ];

  return (
    <section id="projects" className="content-section">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          Projects I Worked On
        </h2>
        <div className="w-12 h-px bg-primary"></div>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            role="link"
            tabIndex={0}
            onClick={() => window.open(project.links.live, "_blank")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(project.links.live, "_blank");
              }
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card group grid grid-cols-1 lg:grid-cols-4 gap-4 cursor-pointer hover:bg-card/50 p-4 rounded-lg transition-all duration-300"
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
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <div className="flex items-center gap-2">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.description}
              </p>

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
  );
}
