"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
        "A web-based queuing system developed during my internship at RTU to streamline the MIS office's service flow. Students scan a QR code, fill out a form, and receive a queue number, reducing long lines while enabling staff to track past transactions and process requests more efficiently.",
      image: "/images/projects/rtu_queuing_system_1.png?height=200&width=300",
      skills: [
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
        "Aquagrade is a web-based thesis project that uses AI and a convolutional neural network (CNN) to classify the freshness of bangus and tilapia in real time. Users can upload an image or use a live camera feed, and the system, powered by a Roboflow-trained model, instantly detects and labels fish freshness.",
      image: "/images/projects/aquagrade_1.png?height=200&width=300",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Python",
        "Flask",
        "Roboflow API",
      ],
      isPrivate: true,
      links: {
        github: "https://github.com/Brhylle",
        live: "#skills",
      },
    },
    // {
    //   id: "chuupurple",
    //   title: "Chuupurple",
    //   description:
    //     "ChuuPurple is a final group project for our Parallel and Distributed Programming subject, a Single Page Application (SPA) built with Vue.js that showcases independently developed UI components. Despite being created by different team members, all components were integrated into one cohesive and seamless platform.",
    //   image: "/images/projects/chuupurple.png?height=200&width=300",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Vue.js",
    //     "Tailwind CSS",
    //     "Daisy UI",
    //   ],
    //   isPrivate: true,
    //   links: {
    //     github: "#",
    //     live: "#",
    //   },
    // },
    {
      id: "booksforless",
      title: "BooksForLess",
      description:
        "An e-commerce web application for book lovers to find affordable books online. Features user authentication, shopping cart functionality, product catalog with search and filtering, and integrated payment processing for a complete online shopping experience.",
      image: "/images/projects/booksforless.png?height=200&width=300",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Laravel",
        "Tailwind CSS",
        "Daisy UI",
        "MySQL",
      ],
      isPrivate: true,
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
    } else if (project.id === "chuupurple") {
      router.push("/projects/chuupurple");
    } else if (project.id === "booksforless") {
      router.push("/projects/booksforless");
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
                  className="object-cover"
                />
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
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
        >
          View All Projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
