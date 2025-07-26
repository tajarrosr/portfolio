"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

// Project type definition
type Project = {
  id: string;
  year: string;
  title: string;
  image: string;
  skills: string[];
  isPrivate: boolean;
  links: {
    github: string;
    live: string;
  };
};

export default function AllProjectsPage() {
  const router = useRouter();

  // All projects data
  const projects: Project[] = [
    {
      id: "rtu-miso",
      year: "2025",
      title: "RTU-BONI MISO Queuing System",
      image: "/images/projects/rtu_queuing_system_1.png?height=60&width=80",
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
      year: "2025",
      title: "Aquagrade",
      image: "/images/projects/aquagrade_1.png?height=60&width=80",
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
        github: "#",
        live: "#",
      },
    },
    {
      id: "chuupurple",
      year: "2024",
      title: "Chuupurple",
      image: "/images/projects/chuupurple.png?height=60&width=80",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "Tailwind CSS",
        "Daisy UI",
      ],
      isPrivate: true,
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: "booksforless",
      year: "2024",
      title: "BooksForLess",
      image: "/images/projects/booksforless_1.png?height=60&width=80",
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
    {
      id: "tee-vibes",
      year: "2023",
      title: "Tee Vibes",
      image: "/images/projects/tee_vibes.png?height=60&width=80",
      skills: ["HTML", "CSS", "JavaScript"],
      isPrivate: true,
      links: {
        github: "#",
        live: "#",
      },
    },
  ];

  const handleProjectClick = (project: Project) => {
    if (project.id === "rtu-miso") {
      router.push("/projects/rtu-miso");
    } else if (project.id === "aquagrade") {
      router.push("/projects/aquagrade");
    } else if (project.id === "chuupurple") {
      router.push("/projects/chuupurple");
    } else if (project.id === "booksforless") {
      router.push("/projects/booksforless");
    } else if (project.id === "tee-vibes") {
      router.push("/projects/tee-vibes");
    } else if (project.links.live !== "#") {
      window.open(project.links.live, "_blank");
    }
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
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            All Projects
          </h1>
          <div className="w-16 h-px bg-primary mt-6"></div>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-2 text-sm font-medium text-muted-foreground uppercase tracking-wide w-20">
                  Year
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-muted-foreground uppercase tracking-wide w-80">
                  Project
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-muted-foreground uppercase tracking-wide w-24">
                  Image
                </th>
                <th className="text-left py-4 px-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Tech Stack
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {projects.map((project, index) => (
                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="border-b border-border/50 hover:bg-card/30 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Year */}
                  <td className="py-6 px-2 text-muted-foreground font-poppins text-sm group-hover:text-foreground transition-colors duration-300">
                    {project.year}
                  </td>

                  {/* Project Name */}
                  <td className="py-6 px-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </td>

                  {/* Project Image */}
                  <td className="py-6 px-2">
                    <div className="relative w-20 h-12 rounded-md overflow-hidden border border-border transition-colors duration-300">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>

                  {/* Tech Stack - Full Width */}
                  <td className="py-6 px-2">
                    <div className="flex flex-wrap gap-2 w-full justify-start">
                      {project.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20 transition-colors duration-200 flex-shrink-0"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile List View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden space-y-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="border-b border-border/50 hover:bg-card/30 transition-all duration-300 group cursor-pointer py-4"
              onClick={() => handleProjectClick(project)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Year */}
                  <span className="text-muted-foreground font-poppins text-sm group-hover:text-foreground transition-colors duration-300 min-w-[3rem]">
                    {project.year}
                  </span>

                  {/* Project Name */}
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Clickable Indicator */}
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            More projects coming soon! I&apos;m always working on new ideas and
            exploring different technologies.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
