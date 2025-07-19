"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

// ✅ Define the project type
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  isPrivate: boolean;
  links: {
    github: string;
    live: string;
  };
};

export default function Projects() {
  const router = useRouter();

  // ✅ Use the Project[] type for the array
  const projects: Project[] = [
    {
      id: "rtu-miso",
      title: "RTU-BONI MISO Queuing System",
      description:
        "Developed a web-based queuing system during my internship at RTU to reduce long physical lines and improve student service flow. Students scan a QR code to submit requests and receive a queue number. Staff access real-time queue updates and transaction history via a secure, role-based admin dashboard.",
      image: "/images/projects/rtu_queueing_system.png?height=200&width=300",
      skills: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Shadcn UI",
        "Tailwind CSS",
        "MySQL",
        "Node.js",
        "Prisma",
      ],
      isPrivate: true,
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: "aquagrade",
      title: "Aquagrade",
      description:
        "Aquagrade is a thesis project that uses a CNN-based AI model to classify the freshness of bangus and tilapia. It allows users to upload fish images or use a live camera for real-time quality detection, integrating Roboflow’s pre-trained model. Designed for vendors and inspectors, which helps to ensure accurate, fast freshness assessment.",
      image: "/images/projects/aquagrade.png?height=200&width=300",
      skills: [
        "Flask",
        "Python",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "Roboflow API",
      ],
      isPrivate: true,
      links: {
        github: "https://github.com/Brhylle",
        live: "#skills",
      },
    },
    {
      id: "chuupurple",
      title: "Chuupurple",
      description:
        "A modern, responsive portfolio website showcasing skills and projects with smooth animations, dark mode support, and optimized performance.",
      image: "/images/projects/chuupurple.png?height=200&width=300",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      isPrivate: false,
      links: {
        github: "#",
        live: "#",
      },
    },
  ];

  // ✅ Use the Project type here instead of "any"
  const handleProjectClick = (project: Project) => {
    if (project.id === "rtu-miso") {
      router.push("/projects/rtu-miso");
    } else if (project.id === "aquagrade") {
      router.push("/projects/aquagrade");
    } else {
      window.open(project.links.live, "_blank");
    }
  };

  return (
    <section id="projects" className="content-section">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          Projects I Worked On
        </h2>
        <div className="w-12 h-px bg-primary"></div>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            role="link"
            tabIndex={0}
            onClick={() => handleProjectClick(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleProjectClick(project);
              }
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card group grid grid-cols-1 lg:grid-cols-4 gap-4 cursor-pointer hover:bg-card/50 p-4 rounded-lg transition-all duration-300"
          >
            {/* Project Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                {!project.isPrivate && (
                  <div className="flex items-center gap-2">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="pt-8"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
        >
          View Full Project Archive
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
