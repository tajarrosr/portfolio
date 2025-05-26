"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Calendar, Building2, MapPin, Users, Code, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
  achievements?: string[]
  type: "internship" | "project" | "freelance"
}

export default function Experience() {
  const sectionRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: false, margin: "-10%" })
  const [lineWidth, setLineWidth] = useState(0)
  const [activeExperience, setActiveExperience] = useState(0)

  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform for background elements only
  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const bgCircle2X = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const startScroll = 1200
      const endScroll = 1600
      const clampedScroll = Math.max(0, Math.min(scrollY - startScroll, endScroll - startScroll))
      const progress = clampedScroll / (endScroll - startScroll)
      setLineWidth(progress * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences: ExperienceItem[] = [
    {
      title: "Full-Stack Web Developer Intern",
      company: "Rizal Technological University (RTU)",
      location: "Mandaluyong City, Philippines",
      period: "March 2025 - May 2025",
      type: "internship",
      description: [
        "Developed a comprehensive queuing system for the university's MIS office as part of my OJT internship program.",
        "Implemented secure login and authentication systems for both admin and super-admin accounts with role-based access control.",
        "Collaborated effectively with a team of student developers using Trello to deliver a complete solution.",
        "Gained hands-on experience with full-stack development in a real-world enterprise environment.",
      ],
      skills: ["React", "Node.js", "MySQL", "JavaScript", "Trello", "TypeScript", "Prisma"],
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "internship":
        return <Building2 className="w-4 h-4" />
      case "project":
        return <Code className="w-4 h-4" />
      case "freelance":
        return <Users className="w-4 h-4" />
      default:
        return <Building2 className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-primary/10 text-primary border-primary/20"
      case "project":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20"
      case "freelance":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 lg:py-32 -mt-8 md:-mt-16 overflow-hidden"
      ref={sectionRef}
    >
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
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto">
        <div ref={contentRef}>
          {/* Left-aligned header like About and Skills sections */}
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
              Experience
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
              My professional journey and hands-on experience in web development.
            </motion.p>
          </motion.div>

          {/* Enhanced Experience Timeline */}
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative"
                onMouseEnter={() => setActiveExperience(index)}
              >
                {/* Timeline connector */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

                {/* Timeline dot with pulse animation */}
                <motion.div
                  className="absolute left-4 top-8 w-4 h-4 rounded-full bg-primary z-10"
                  animate={{
                    scale: activeExperience === index ? [1, 1.3, 1] : 1,
                    boxShadow:
                      activeExperience === index
                        ? [
                            "0 0 0 0 rgba(29, 205, 159, 0.4)",
                            "0 0 0 10px rgba(29, 205, 159, 0)",
                            "0 0 0 0 rgba(29, 205, 159, 0)",
                          ]
                        : "0 0 0 0 rgba(29, 205, 159, 0)",
                  }}
                  transition={{ duration: 1.5, repeat: activeExperience === index ? Number.POSITIVE_INFINITY : 0 }}
                />

                {/* Experience card */}
                <motion.div className="ml-12 mb-12 group" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  <div className="relative bg-gradient-to-br from-background via-background to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    {/* Header section */}
                    <div className="relative z-10 mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <motion.div
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="flex items-center gap-1.5">
                                {getTypeIcon(exp.type)}
                                {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                              </div>
                            </motion.div>
                          </div>

                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h3>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-primary" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="relative z-10 mb-6">
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                            className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                          >
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills tags */}
                    <div className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
