"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, Database, Globe, Server } from "lucide-react"
import Image from "next/image"

interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "database" | "tools" | "other"
}

export default function Skills() {
  const sectionRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: false, margin: "-10%" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [lineWidth, setLineWidth] = useState(0)

  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform opacity based on scroll position
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1], // scroll progress points
    [0, 1, 1, 0.7, 0], // opacity values at those points
  )

  // Transform for background elements
  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const bgCircle2X = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const startScroll = 700
      const endScroll = 1100
      const clampedScroll = Math.max(0, Math.min(scrollY - startScroll, endScroll - startScroll))
      const progress = clampedScroll / (endScroll - startScroll)

      // Set line width based on scroll progress
      setLineWidth(progress * 98)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills: Skill[] = [
    { name: "JavaScript", icon: "/images/skills/js.png", category: "frontend" },
    { name: "TypeScript", icon: "/images/skills/typescript.png", category: "frontend" },
    { name: "React", icon: "/images/skills/reactjs.png", category: "frontend" },
    { name: "Next.js", icon: "/images/skills/nextjs.png", category: "frontend" },
    { name: "Node.js", icon: "/images/skills/nodejs.png", category: "backend" },
    { name: "Laravel", icon: "/images/skills/laravel.png", category: "backend" },
    { name: "HTML", icon: "/images/skills/html.png", category: "frontend" },
    { name: "Tailwind CSS", icon: "/images/skills/tailwindcss.png", category: "frontend" },
    { name: "MySQL", icon: "/images/skills/mysql.png", category: "database" },
    { name: "Git", icon: "/images/skills/git.png", category: "tools" },
    { name: "Trello", icon: "/images/skills/trello.png", category: "tools" },
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
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="skills"
      className="relative container py-16 md:py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
      style={{ opacity }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"
        style={{ y: bgCircle1Y }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl -z-10"
        style={{ x: bgCircle2X }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -30 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-left px-4 sm:px-0"
        >
          <motion.div className="mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold tracking-tighter"
            >
              Skills & Technologies
            </motion.h2>
          </motion.div>
          <motion.div
            style={{ width: `${lineWidth}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${lineWidth}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-1 bg-primary mb-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-primary/30"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "linear",
              }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-muted-foreground max-w-[700px]"
          >
            A collection of technologies and tools I've worked with throughout my projects and studies.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-start gap-2 sm:gap-4 mb-12 px-4 sm:px-0"
        >
          <motion.button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              activeCategory === null ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>

          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors ${
                  activeCategory === category.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={14} />
                {category.name}
              </motion.button>
            )
          })}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 max-w-6xl mx-auto px-4 sm:px-0"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              transition={{ duration: 0.5 }}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onTouchStart={() => setHoveredSkill(skill.name)}
              onTouchEnd={() => setHoveredSkill(null)}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 mx-auto relative bg-background rounded-lg shadow-sm border border-border p-2 flex items-center justify-center"
                whileHover={{
                  boxShadow: "0 0 0 2px rgba(29, 205, 159, 0.3)",
                  borderColor: "rgba(29, 205, 159, 0.5)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform group-hover:scale-90">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={
                  hoveredSkill === skill.name ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.8 }
                }
                transition={{ duration: 0.2 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded text-xs whitespace-nowrap z-10 shadow-sm"
              >
                {skill.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
