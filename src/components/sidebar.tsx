"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects"];
      const mainContent = document.querySelector(".main-content");

      if (!mainContent) return;

      const scrollPosition = mainContent.scrollTop + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll);
      return () => mainContent.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const mainContent = document.querySelector(".main-content");
    if (element && mainContent) {
      const elementTop = element.offsetTop - 100;
      mainContent.scrollTo({ top: elementTop, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Image and Name + Role */}
          <div className="flex items-start gap-4 mb-3">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
              <Image
                src="/images/pic.jpg"
                alt="Ritchmond Tajarros"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-[28px] font-bold text-foreground leading-tight mb-1">
                Ritchmond Tajarros
              </h1>
              <h2 className="text-[14px] font-medium text-primary leading-relaxed">
                Fresh Graduate with Web Development Experience
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Navigation - Brittany Chiang Style */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 mt-12"
        >
          {[
            { id: "about", label: "ABOUT" },
            { id: "skills", label: "SKILLS" },
            { id: "experience", label: "EXPERIENCE" },
            { id: "projects", label: "PROJECTS" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center space-x-3 text-left transition-all duration-300 w-full ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ x: 6 }}
            >
              <motion.div
                className={`h-px bg-current transition-all duration-300 ${
                  activeSection === item.id ? "w-12" : "w-6 group-hover:w-9"
                }`}
              />
              <span className="text-xs font-medium tracking-widest uppercase whitespace-nowrap">
                {item.label}
              </span>
            </motion.button>
          ))}
        </motion.nav>
      </div>

      {/* Social Links - Brittany Chiang Style (Horizontal) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex space-x-5 mt-6"
      >
        {[
          {
            icon: Github,
            href: "https://github.com/tajarrosr",
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/ritchmondtajarros/",
            label: "LinkedIn",
          },
          {
            icon: Mail,
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=tajarrosrj@gmail.com",
            label: "Email",
          },
        ].map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-5 h-5" />
            <span className="sr-only">{social.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
