"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function AquagradePage() {
  const projectDetails = {
    title: "Aquagrade",
    liveDemo: "https://flaskapi-c0lk.onrender.com/",
    description:
      "Aquagrade is a thesis project that leverages artificial intelligence to classify the freshness of fish, specifically bangus (milkfish) and tilapia. This web-based application uses a convolutional neural network (CNN) to analyze fish images and determine their quality in real-time. Users can either upload an image from their device or use a live camera feed to detect and label fish freshness instantly. The system integrates with the Roboflow API to utilize a pre-trained model that has been specifically trained to recognize different levels of fish freshness, making it a valuable tool for fish vendors, consumers, and quality control inspectors.",
    images: [
      "/images/projects/aquagrade_2.png",
      "/images/projects/aquagrade_3.png",
    ],
    contribution: [
      "Developed the dashboard and sidebar interface for smooth user navigation",
      "Made the dashboard and sidebar fully responsive across different screen sizes",
    ],
    role: "Front-end Developer",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "Flask",
      "Roboflow API",
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
        {/* Project Title and Live Demo */}
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
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg?height=300&width=400"}
                  alt={`Aquagrade Screenshot ${index + 1}`}
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
