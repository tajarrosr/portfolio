"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

export default function Skills() {
  const skillCategories = [
    {
      category: "FRONTEND",
      skills: [
        { name: "HTML", icon: "/images/skills/html.png" },
        { name: "CSS", icon: "/images/skills/css.png" },
        { name: "JavaScript", icon: "/images/skills/js.png" },
        { name: "Vue.js", icon: "/images/skills/vuejs.png" },
        { name: "Tailwind CSS", icon: "/images/skills/tailwindcss.png" },
      ],
    },
    {
      category: "BACKEND & DATABASE",
      skills: [
        { name: "PHP", icon: "/images/skills/php.png" },
        { name: "Laravel", icon: "/images/skills/laravel.png" },
        { name: "Python", icon: "/images/skills/python.png" },
        { name: "Flask", icon: "/images/skills/flask.png" },
        { name: "MySQL", icon: "/images/skills/mysql.png" },
      ],
    },
    {
      category: "TOOLS & PLATFORMS",
      skills: [
        { name: "Git", icon: "/images/skills/git.png" },
        { name: "Github", icon: "/images/skills/github.png" },
        { name: "Figma", icon: "/images/skills/figma.png" },
        { name: "Vercel", icon: "/images/skills/vercel.png" },
        { name: "Trello", icon: "/images/skills/trello.png" },
        { name: "Notion", icon: "/images/skills/notion.png" },
        { name: "InfinityFree", icon: "/images/skills/infinityfree.png" },
      ],
    },
        {
      category: "CURRENTLY EXPLORING",
      skills: [
        { name: "React.js", icon: "/images/skills/reactjs.png" },
        { name: "TypeScript", icon: "/images/skills/typescript.png" },
        { name: "Angular", icon: "/images/skills/angular.png" },
        { name: "Next.js", icon: "/images/skills/nextjs.png" },
        { name: "Node.js", icon: "/images/skills/nodejs.png" },
        { name: "CodeIgniter", icon: "/images/skills/codeigniter.png" },
        { name: "Shadcn UI", icon: "/images/skills/shadcn.png" },
      ],
    },
  ];

  const SkillIcon = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
      className="group relative flex flex-col items-center"
    >
      {/* Desktop: Hover effect */}
      <div className="relative w-16 h-12 border rounded-lg p-2 transition-all duration-300 overflow-hidden bg-card border-border hover:border-primary/50 hidden md:block">
        {/* Icon/Image */}
        <div className="absolute inset-0 flex items-center justify-center p-2 group-hover:opacity-0 transition-opacity duration-300">
          <Image
            src={skill.icon || "/placeholder.svg"}
            alt={skill.name}
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text on Hover */}
        <div className="absolute inset-0 flex items-center justify-center px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10">
          <span className="text-[10px] font-medium text-primary text-center leading-tight">
            {skill.name}
          </span>
        </div>
      </div>

      {/* Mobile: Always show icon and text */}
      <div className="flex flex-col items-center md:hidden">
        <div className="w-12 h-12 border rounded-lg p-2 bg-card border-border mb-2">
          <Image
            src={skill.icon || "/placeholder.svg"}
            alt={skill.name}
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="content-section">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          Skills & Technologies
        </h2>
        <div className="w-12 h-px bg-primary"></div>
      </motion.div>

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-4"
          >
            {/* Category */}
            <div className="lg:col-span-1">
              <p className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                {category.category}
              </p>
            </div>

            {/* Skills Icons */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
