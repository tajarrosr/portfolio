"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Skill {
  name: string;
  icon: string;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startScroll = 200;
      const endScroll = 700;
      const clampedScroll = Math.max(
        0,
        Math.min(scrollY - startScroll, endScroll - startScroll)
      );
      const progress = clampedScroll / (endScroll - startScroll);
      setLineWidth(progress * 173);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills: Skill[] = [
    { name: "JavaScript", icon: "/images/skills/js.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "React", icon: "/images/skills/reactjs.png" },
    { name: "Next.js", icon: "/icons/nextjs.png" },
    { name: "Node.js", icon: "/images/skills/nodejs.png" },
    { name: "Laravel", icon: "/images/skills/laravel.png" },
    { name: "HTML", icon: "/images/skills/html.png" },
    { name: "Tailwind CSS", icon: "/images/skills/tailwindcss.png" },
    { name: "MySQL", icon: "/images/skills/mysql.png" },
    { name: "Git", icon: "/images/skills/git.png" },
    { name: "Trello", icon: "/images/skills/trello.png" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="container py-24 md:py-16">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-4 items-center">
          {/* Left side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-7 space-y-6"
          >
            <motion.div
              className="mb-16 text-left"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter mb-4"
              >
                About Me
              </motion.h2>
              <motion.div
                style={{ width: `${lineWidth}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${lineWidth}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-1 bg-primary mb-8"
              />
            </motion.div>

            <div className="space-y-4 text-justify">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-muted-foreground"
              >
                I'm a Computer Science student at Pamantasan ng Lungsod ng Pasig
                with a passion for real-world web development. I have knowledge
                in software engineering principles like Agile methodology,
                allowing me to work in team-based development.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-muted-foreground"
              >
                During my OJT at Rizal Technological University (RTU), I worked
                with my classmates on a queuing system for the university's MIS
                office. My main responsibility was developing the login and
                authentication system for both admin and super-admin accounts,
                helping ensure secure access and user management.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-muted-foreground"
              >
                In development, I enjoy working on the front-end. I'm also
                interested in cryptocurrency and automation — always exploring
                new ways to improve workflows and efficiency.
              </motion.p>
            </div>
          </motion.div>

          {/* Right side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 0, scale: 0.9, rotate: -5 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-5 flex justify-center mt-0 sm:-mt-6 md:-mt-10 lg:-mb-27"
          >
            <div className="relative">
              <div
                className="w-54 h-54 md:w-60 md:h-60 rounded-full overflow-hidden border-4 bg-gradient-to-br from-primary/5 to-primary/20 p-1"
                style={{ borderColor: "#1dcd9f" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/pic.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section CENTERED below grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-4 sm:grid-cols-6 gap-6 max-w-3xl mx-auto"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                transition={{ duration: 0.5 }}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="w-12 h-12 mx-auto relative">
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform group-hover:scale-90">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div
                  className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded text-xs whitespace-nowrap transition-all duration-200 ${
                    hoveredSkill === skill.name
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
