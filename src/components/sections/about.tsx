"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: false, margin: "-10%" })
  const [lineWidth, setLineWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)

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
  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const bgCircle2X = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const startScroll = 100
      const endScroll = 500
      const clampedScroll = Math.max(0, Math.min(scrollY - startScroll, endScroll - startScroll))
      const progress = clampedScroll / (endScroll - startScroll)

      // Set line width based on content width
      if (contentRef.current) {
        const width = contentRef.current.offsetWidth
        setContentWidth(width)
        setLineWidth(progress * 100) // Use percentage instead of fixed width
      }
    }

    const handleResize = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    // Initial calculation
    handleResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.section
      id="about"
      className="relative container py-4 md:py-8 lg:py-10 -mt-8 md:-mt-16 overflow-hidden"
      ref={sectionRef}
      style={{ opacity }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"
        style={{ y: bgCircle1Y }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl -z-10"
        style={{ x: bgCircle2X }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-4 items-center">
          {/* Left side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -30 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 space-y-6 px-4 sm:px-0"
            ref={contentRef}
          >
            <motion.div
              className="mb-8 md:mb-12 text-left"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0.7 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="mb-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl font-bold tracking-tighter"
                >
                  About Me
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
            </motion.div>

            <div className="space-y-4 text-justify">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base text-muted-foreground"
              >
                I&#39;m a <span className="text-primary font-medium">Computer Science student</span> at Pamantasan ng
                Lungsod ng Pasig with a passion for real-world web development. I have knowledge in software engineering
                principles like Agile methodology, allowing me to work in team-based development.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-muted-foreground"
              >
                During my OJT at <span className="text-primary font-medium">Rizal Technological University (RTU)</span>,
                I worked with my classmates on a queuing system for the university&#39;s MIS office. My main
                responsibility was developing the login and authentication system for both admin and super-admin
                accounts, helping ensure secure access and user management.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base text-muted-foreground"
              >
                In development, I enjoy working on the <span className="text-primary font-medium">front-end</span>.
                I&#39;m also interested in cryptocurrency and automation — always exploring new ways to improve
                workflows and efficiency.
              </motion.p>
            </div>
          </motion.div>

          {/* Right side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0.7, scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 flex justify-center mt-0 sm:-mt-6 md:-mt-10 lg:-mb-27"
          >
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-md opacity-70"
              />
              <div
                className="w-48 h-48 sm:w-54 sm:h-54 md:w-60 md:h-60 rounded-full overflow-hidden border-4 bg-gradient-to-br from-primary/5 to-primary/20 p-1 relative z-10"
                style={{ borderColor: "#1dcd9f" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/pic.png"
                    alt="Profile"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative dots around profile */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2
                const x = Math.cos(angle) * 140
                const y = Math.sin(angle) * 140
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary"
                    style={{
                      left: "50%",
                      top: "50%",
                      x: x,
                      y: y,
                      opacity: 0.6,
                    }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
