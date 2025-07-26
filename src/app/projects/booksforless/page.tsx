"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function BooksForLessPage() {
  const projectDetails = {
    title: "BooksForLess",
    liveDemo: "#",
    github: "#",
    description:
      "BooksForLess is an e-commerce web application designed for book lovers who want to find affordable books online. The platform features a clean, user-friendly interface where customers can browse through various book categories, search for specific titles, add books to their cart, and complete purchases. The application includes user authentication, product management, shopping cart functionality, and order tracking. Built with modern web technologies, it provides a seamless shopping experience for both desktop and mobile users.",
    images: [
      "/images/projects/booksforless.png",
      "/images/projects/booksforless.png",
    ],
    contribution: [
      "Created a admin side such as login, registration, and dashboard",
      "Implemented user authentication system with login and registration functionality",
      "Built the books management and user management system with CRUD operations on the admin side",
    ],
    role: "Full-Stack Developer",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "Daisy UI",
      "MySQL",
    ],
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

        {/* Project Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Project Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectDetails.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden border border-border"
              >
                <Image
                  src={
                    image ||
                    "/placeholder.svg?height=300&width=400&query=BooksForLess e-commerce website screenshot"
                  }
                  alt={`BooksForLess Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
          transition={{ duration: 0.5, delay: 0.4 }}
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
          transition={{ duration: 0.5, delay: 0.5 }}
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
