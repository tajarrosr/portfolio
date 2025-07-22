"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function TeeVibesPage() {
  const projectDetails = {
    title: "Tee Vibes",
    liveDemo: "https://tee-vibes.vercel.app/",
    github: "https://github.com/tajarrosr/Tee-Vibes",
    description:
      'A final group project on Web Development Programming , Tee Vibes is a clothing brand that blends style, comfort, and positivity. We offer high-quality shirts designed with affirmations and feel-good aesthetics to help customers look great and feel even better. With both physical and online stores, we cater to all body types and preferences using eco-friendly materials. Our mission: "Wear Tee Vibes, Spread Good Vibes."',
    contribution: [
      "Developed the homepage with engaging hero section and product showcase",
      "Created the apparel/product details page with interactive features",
      "Built the shopping cart page with add/remove functionality",
      "Made the entire website fully responsive across all devices",
    ],
    role: "Front-end Developer",
    techStack: ["HTML", "CSS", "JavaScript"],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 lg:py-6">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 lg:pt-24 max-w-7xl mx-auto px-6 py-12">
        {/* Project Title and Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              {projectDetails.title}
            </h1>
            <div className="flex items-center gap-3">
              <a
                href={projectDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={projectDetails.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium"
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="w-16 h-px bg-primary"></div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Project Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {projectDetails.description}
          </p>
        </motion.div>

        {/* Contribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Contribution
          </h2>
          <ul className="space-y-2">
            {projectDetails.contribution.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground leading-relaxed flex items-start gap-3"
              >
                <span className="text-primary flex-shrink-0 leading-relaxed">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">Role</h2>
          <p className="text-muted-foreground leading-relaxed">
            {projectDetails.role}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {projectDetails.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
