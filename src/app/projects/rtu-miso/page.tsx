"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function RTUMisoPage() {
  const projectDetails = {
    title: "RTU-BONI MISO Queuing System",
    description:
      "A web-based queuing system developed during my internship at RTU to improve the MIS office's service flow. Instead of waiting in long lines, students scan a QR code, fill out a form, and receive a queue number, which allowing them to wait comfortably near the service window. This reduces congestion, shortens visible lines, and speeds up processing time. The system also helps staff track previous transactions (e.g., certificate or registration requests), ensuring efficient service and maintaining accurate records. It includes real-time queue updates, role-based access for admins, and secure user authentication.",
    images: [
      "/images/projects/rtu_queuing_system_2.jpg",
      "/images/projects/rtu_queuing_system_3.jpg",
      "/images/projects/rtu_queuing_system_4.png",
      "/images/projects/rtu_queuing_system_5.png",
    ],
    contribution: [
      "Developed login and authentication system with role-based access (admin/super-admin)",
      "Implemented user management with CRUD operations for super-admin account",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Next.js",
      "Node.js",
      "MySQL",
      "Prisma",
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
        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            {projectDetails.title}
          </h1>
          <div className="w-16 h-px bg-primary mt-4"></div>
        </motion.div>

        {/* Project Description */}
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

        {/* Project Images */}
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
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg?height=300&width=400"}
                  alt={`RTU-MISO Screenshot ${index + 1}`}
                  fill
                  className="object-contain"
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
