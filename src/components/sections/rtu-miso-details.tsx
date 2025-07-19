"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users, Target } from "lucide-react";
import Image from "next/image";

export default function RTUMisoDetails() {
  const projectDetails = {
    title: "RTU-MISO Queuing System",
    period: "March - May 2025",
    role: "Full-Stack Web Developer Intern",
    team: "4 Members",
    myContributions: [
      "Designed and implemented secure authentication system with role-based access control",
      "Built admin and super-admin dashboards with different permission levels",
      "Developed user registration and login functionality with form validation",
      "Integrated MySQL database with Prisma ORM for efficient data management",
      "Collaborated using Trello for project management and GitHub for version control",
      "Implemented responsive UI components using Tailwind CSS and Shadcn UI",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "MySQL",
      "Node.js",
      "Prisma",
      "Trello",
      "GitHub",
    ],
    description:
      "The RTU-MISO Queuing System was developed as part of my OJT internship program at Rizal Technological University. This comprehensive web-based solution was designed to modernize and streamline the queuing process at the university's MIS office, significantly reducing student wait times and improving service efficiency. The system features real-time queue management, role-based authentication, and an intuitive interface for both staff and administrators.",
    challenges: [
      "Implementing secure role-based authentication for different user levels",
      "Designing an intuitive interface that works for both tech-savvy and non-technical users",
      "Ensuring real-time updates and synchronization across multiple user sessions",
      "Managing database relationships and optimizing queries for better performance",
    ],
    images: [
      "/images/projects/rtu-login.png",
      "/images/projects/rtu-dashboard.png",
      "/images/projects/rtu-queue.png",
    ],
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    const mainContent = document.querySelector(".main-content");
    if (element && mainContent) {
      const elementTop = element.offsetTop - 100;
      mainContent.scrollTo({ top: elementTop, behavior: "smooth" });
    }
  };

  return (
    <section id="rtu-miso-details" className="content-section">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={scrollToProjects}
        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </motion.button>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {projectDetails.title}
        </h1>
        <div className="w-16 h-px bg-primary mb-6"></div>

        {/* Project Meta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Duration
              </p>
              <p className="text-sm text-foreground">{projectDetails.period}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Role
              </p>
              <p className="text-sm text-foreground">{projectDetails.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Team Size
              </p>
              <p className="text-sm text-foreground">{projectDetails.team}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Project Overview
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {projectDetails.description}
        </p>
      </motion.div>

      {/* My Contributions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          My Contributions
        </h2>
        <ul className="space-y-3">
          {projectDetails.myContributions.map((contribution, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground leading-relaxed">
                {contribution}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Technologies Used */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {projectDetails.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-primary/10 text-primary border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Project Images */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Project Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectDetails.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden border border-border"
            >
              <Image
                src={image || "/placeholder.svg?height=300&width=400"}
                alt={`RTU-MISO Screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Challenges & Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Key Challenges
        </h2>
        <ul className="space-y-3">
          {projectDetails.challenges.map((challenge, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground leading-relaxed">
                {challenge}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
