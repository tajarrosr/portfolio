"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates using WebSockets.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS (this website).",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      link: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="container py-24 md:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-[700px] mx-auto"
        >
          Here are some of my recent projects. Each project reflects my passion
          for building intuitive and impactful web applications.
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center mt-8"
      >
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => window.open("#", "_blank")}
        >
          View All Projects <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  );
}
