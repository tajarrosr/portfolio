"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ExternalLink, Github, Eye, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/project"
import Image from "next/image"

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: false, margin: "-10%" })
  const [lineWidth, setLineWidth] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform for background elements
  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const bgCircle2X = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const startScroll = 1800
      const endScroll = 2200
      const clampedScroll = Math.max(0, Math.min(scrollY - startScroll, endScroll - startScroll))
      const progress = clampedScroll / (endScroll - startScroll)
      setLineWidth(progress * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Define projects
  const projects: Project[] = [
    {
      title: "RTU Queuing System",
      description:
        "A comprehensive queuing management system for Rizal Technological University's MIS office, streamlining student services and reducing wait times.",
      image: "/images/projects/rtu_queueing_system.png",
      tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Trello"],
      link: "#",
      details: [
        "Developed secure authentication system with role-based access control",
        "Implemented real-time queue management with live updates",
        "Built responsive admin dashboard for queue monitoring",
        "Integrated notification system for queue status updates",
        "Collaborated with team using Agile methodology and Trello",
      ],
      color: "#1a237e",
    },
    {
      title: "Flux Lura",
      description:
        "A free online multimedia conversion tool that transforms images, audio, and videos effortlessly with a modern, intuitive interface.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "FFmpeg", "Tailwind CSS", "Framer Motion"],
      link: "#",
      details: [
        "Built multimedia converter supporting multiple file formats",
        "Integrated FFmpeg for efficient media processing",
        "Designed intuitive drag-and-drop interface",
        "Implemented batch conversion capabilities",
        "Optimized for performance with client-side processing",
      ],
      color: "#004d40",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and dark mode support.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      link: "#",
      details: [
        "Designed with modern UI/UX principles and accessibility in mind",
        "Implemented smooth scroll animations and page transitions",
        "Built responsive design that works across all devices",
        "Added dark/light theme toggle with system preference detection",
        "Optimized for performance and SEO",
      ],
      color: "#1dcd9f",
    },
  ]

  return (
    <section id="projects" className="relative py-16 md:py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background decorative elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"
        style={{ y: bgCircle1Y }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl -z-10"
        style={{ x: bgCircle2X }}
      />

      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/2 blur-2xl -z-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto">
        <div ref={contentRef}>
          {/* Left-aligned header like other sections */}
          <motion.div
            className="mb-16 text-left px-4 sm:px-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4"
            >
              Featured Projects
            </motion.h2>

            {/* Animated line below title */}
            <motion.div
              style={{ width: `${lineWidth}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${lineWidth}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-1 bg-primary relative overflow-hidden rounded-full max-w-xs mb-8"
            >
              <motion.div
                className="absolute inset-0 bg-primary/30"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "linear",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground max-w-2xl"
            >
              Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
              modern web technologies.
            </motion.p>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
              >
                {/* Project Card */}
                <div className="relative bg-gradient-to-br from-background via-background to-primary/5 rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-500">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />

                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <motion.div
                      className="absolute inset-0 z-10"
                      style={{ backgroundColor: project.color }}
                      initial={{ opacity: 0.1 }}
                      animate={{ opacity: hoveredProject === index ? 0.2 : 0.1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay with action buttons */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary/80 transition-colors duration-200"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary/80 transition-colors duration-200"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                    </motion.div>

                    {/* Project number indicator */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-bold z-30">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="relative z-10 p-6">
                    {/* Title and external link */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 flex-shrink-0"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.details?.slice(0, 2).map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="line-clamp-1">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Action button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group/btn border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <span className="mr-2">View Project</span>
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent" />
                </div>

                {/* Floating glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  animate={{
                    scale: hoveredProject === index ? [1, 1.05, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16 px-4 sm:px-0"
          >
            <p className="text-muted-foreground mb-6">Interested in working together or want to see more of my work?</p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
