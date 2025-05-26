"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, Database, Globe, Server, Sparkles } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "database" | "tools" | "other"
  level?: "Beginner" | "Intermediate" | "Advanced"
}

export default function Skills() {
  const sectionRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: false, margin: "-10%" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [lineWidth, setLineWidth] = useState(0)
  const { theme } = useTheme()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const bgCircle2X = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const startScroll = 700
      const endScroll = 1200
      const clampedScroll = Math.max(0, Math.min(scrollY - startScroll, endScroll - startScroll))
      const progress = clampedScroll / (endScroll - startScroll)
      setLineWidth(progress * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills: Skill[] = [
    { name: "JavaScript", icon: "/images/skills/js.png", category: "frontend", level: "Advanced" },
    { name: "TypeScript", icon: "/images/skills/typescript.png", category: "frontend", level: "Intermediate" },
    { name: "React", icon: "/images/skills/reactjs.png", category: "frontend", level: "Advanced" },
    { name: "Next.js", icon: "/images/skills/nextjs.png", category: "frontend", level: "Advanced" },
    { name: "Node.js", icon: "/images/skills/nodejs.png", category: "backend", level: "Intermediate" },
    { name: "Laravel", icon: "/images/skills/laravel.png", category: "backend", level: "Intermediate" },
    { name: "HTML", icon: "/images/skills/html.png", category: "frontend", level: "Advanced" },
    { name: "Tailwind CSS", icon: "/images/skills/tailwindcss.png", category: "frontend", level: "Advanced" },
    { name: "MySQL", icon: "/images/skills/mysql.png", category: "database", level: "Intermediate" },
    { name: "Git", icon: "/images/skills/git.png", category: "tools", level: "Advanced" },
    { name: "Trello", icon: "/images/skills/trello.png", category: "tools", level: "Intermediate" },
  ]

  const filteredSkills = activeCategory ? skills.filter((skill) => skill.category === activeCategory) : skills

  const categories = [
    { id: "frontend", name: "Frontend", icon: Globe },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Database", icon: Database },
    { id: "tools", name: "Tools", icon: Code },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <section id="skills" className="container py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div ref={sectionRef} className="w-full">
        {/* Background */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"
          style={{ y: bgCircle1Y }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/3 blur-3xl -z-10"
          style={{ x: bgCircle2X }}
        />

        <div className="max-w-6xl mx-auto">
          {/* Header Section - Left Aligned like About section */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-left px-4 sm:px-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4"
            >
              Skills & Technologies
            </motion.h2>

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
              A collection of technologies and tools I've worked with throughout my projects and studies.
            </motion.p>
          </motion.div>

          {/* Main Content - Compressed Sidebar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 px-4 sm:px-0">
            {/* More Compressed Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="space-y-2">
                <motion.button
                  onClick={() => setActiveCategory(null)}
                  className={`w-full group relative px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-500 overflow-hidden backdrop-blur-sm text-left ${
                    activeCategory === null
                      ? "text-white shadow-lg shadow-primary/20 border border-primary/20 bg-primary"
                      : "text-foreground hover:text-white border border-border/30 hover:border-primary/30 hover:bg-primary"
                  }`}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={12} />
                    All
                  </span>
                </motion.button>

                {categories.map((category, index) => {
                  const Icon = category.icon
                  const isActive = activeCategory === category.id
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className={`w-full group relative px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-500 overflow-hidden backdrop-blur-sm text-left ${
                        isActive
                          ? "text-white shadow-lg shadow-primary/20 border border-primary/20 bg-primary"
                          : "text-foreground hover:text-white border border-border/30 hover:border-primary/30 hover:bg-primary"
                      }`}
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Icon size={12} />
                        {category.name}
                      </span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            {/* Skills Grid - Fixed 10 items per row */}
            <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-5">
              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    className="group relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onTouchStart={() => setHoveredSkill(skill.name)}
                    onTouchEnd={() => setHoveredSkill(null)}
                    whileHover={{ y: -6, scale: 1.05 }}
                  >
                    {/* Fixed Container with Better Light Mode Visibility */}
                    <motion.div
                      className={`relative w-full h-12 sm:h-14 rounded-xl backdrop-blur-sm transition-all duration-500 overflow-hidden ${
                        theme === "dark"
                          ? "border border-border/30 group-hover:border-primary/40 bg-gradient-to-br from-white/8 to-white/4"
                          : "border border-gray-200 group-hover:border-primary/60 bg-gradient-to-br from-white/90 to-gray-50/80 shadow-sm group-hover:shadow-md"
                      }`}
                      whileHover={{
                        boxShadow:
                          theme === "dark"
                            ? "0 15px 30px rgba(29, 205, 159, 0.15), 0 0 0 1px rgba(29, 205, 159, 0.1)"
                            : "0 15px 30px rgba(29, 205, 159, 0.15), 0 0 0 1px rgba(29, 205, 159, 0.2)",
                      }}
                    >
                      {/* Animated overlay */}
                      <motion.div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          theme === "dark" ? "bg-primary/10" : "bg-primary/5"
                        }`}
                      />

                      {/* Icon/Name Container */}
                      <div className="relative z-10 w-full h-full flex items-center justify-center p-1.5">
                        {/* Icon - visible when not hovered */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: hoveredSkill === skill.name ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            width={18}
                            height={18}
                            className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter group-hover:brightness-110"
                          />
                        </motion.div>

                        {/* Skill Name - visible when hovered */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center p-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-xs font-semibold text-center text-foreground leading-tight">
                            {skill.name}
                          </span>
                        </motion.div>
                      </div>

                      {/* Subtle glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          theme === "dark" ? "bg-primary/5" : "bg-primary/8"
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
