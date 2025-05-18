"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(0);

  // Define projects
  const projects: Project[] = [
    {
      title: "Rizal Technological University (RTU) - MIS Office Queuing System",
      description:
        "An educational platform connecting students and instructors, fostering global collaboration and continuous learning.",
      image: "/images/projects/rtu_queueing_system.png?height=600&width=800",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#",
      details: [
        "Built with Next.js, React, and TypeScript for scalability",
        "Styled using Tailwind CSS with animations by Framer Motion",
        "Used Zustand for state management and Zod for validation",
        "Integrated MongoDB and RESTful APIs with Node.js and Express",
        "Designed a user-friendly interface for seamless interactions",
      ],
      color: "#1a237e", // dark blue
    },
    {
      title: "FLux Lura",
      description:
        "A free online tool for seamless multimedia conversion. Effortlessly transform images, audio, and videos with ease and elevate your content instantly!",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FFmpeg"],
      link: "#",
      details: [
        "Developed a multimedia converter using Next.js and TypeScript",
        "Styled with Tailwind CSS and enhanced with Framer Motion for smooth animations",
        "Integrated Shadcn UI for consistent and accessible design components",
        "Leveraged FFmpeg for efficient media processing and conversion",
        "Created a responsive and intuitive user interface for effortless conversions",
      ],
      color: "#004d40", // dark green
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS (this website).",
      image: "/placeholder.svg?height=600&width=800",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
      ],
      link: "#",
      details: [
        "Designed and developed a personal portfolio website using Next.js",
        "Implemented smooth animations and transitions with Framer Motion",
        "Built with a responsive design that works on all devices",
        "Used shadcn/ui components for consistent UI elements",
        "Optimized for performance and accessibility",
      ],
      color: "#1dcd9f", // primary color
    },
  ];

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Update active project based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Calculate which project should be active based on scroll progress
      const projectIndex = Math.min(
        Math.floor(value * projects.length),
        projects.length - 1
      );
      setActiveProject(projectIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, projects.length]);

  return (
    <section id="projects" className="relative py-16 md:py-24 lg:py-32">
      <div className="container mx-auto mb-16">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tighter"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-[700px] mx-auto text-sm sm:text-base"
          >
            Here are some of my recent projects. Each project reflects my
            passion for building intuitive and impactful web applications.
          </motion.p>
        </motion.div>
      </div>

      <div className="container mx-auto" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Scrolling Images Column */}
          <div className="relative h-[200vh]">
            {projects.map((project, index) => (
              <ProjectImage
                key={index}
                project={project}
                index={index}
                scrollYProgress={scrollYProgress}
                totalProjects={projects.length}
              />
            ))}
          </div>

          {/* Static Details Column */}
          <div className="lg:sticky lg:top-32 self-start">
            <ProjectDetails project={projects[activeProject]} isActive={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectImageProps {
  project: Project;
  index: number;
  scrollYProgress: any;
  totalProjects: number;
}

function ProjectImage({
  project,
  index,
  scrollYProgress,
  totalProjects,
}: ProjectImageProps) {
  // Calculate the scroll progress range for this project
  const projectStart = index / totalProjects;
  const projectEnd = (index + 1) / totalProjects;

  // Transform values based on scroll position
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, projectStart - 0.1),
      projectStart,
      (projectStart + projectEnd) / 2,
      projectEnd,
      Math.min(1, projectEnd + 0.1),
    ],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [projectStart, projectEnd],
    [index === 0 ? 0 : 100, -100]
  );

  const scale = useTransform(
    scrollYProgress,
    [
      Math.max(0, projectStart - 0.1),
      projectStart,
      (projectStart + projectEnd) / 2,
      projectEnd,
      Math.min(1, projectEnd + 0.1),
    ],
    [0.8, 1, 1, 1, 0.8]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        position: "sticky",
        top: "20vh",
        zIndex: totalProjects - index,
      }}
      className="w-full aspect-video"
    >
      <div
        className="rounded-lg overflow-hidden shadow-xl p-4 aspect-video relative"
        style={{ backgroundColor: project.color }}
      >
        <div className="relative rounded overflow-hidden aspect-video">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {project.title}
        </motion.div>
      </div>
    </motion.div>
  );
}

interface ProjectDetailsProps {
  project: Project;
  isActive: boolean;
}

function ProjectDetails({ project, isActive }: ProjectDetailsProps) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
      </div>

      <div className="space-y-4">
        {project.details?.map((detail, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
            className="flex items-start"
          >
            <span className="text-primary mr-2 mt-1">+</span>
            <span>{detail}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <Button
        variant="outline"
        className="mt-4 flex items-center gap-2 text-xs sm:text-sm"
        onClick={() => window.open(project.link, "_blank")}
      >
        View Project <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
      </Button>
    </motion.div>
  );
}
