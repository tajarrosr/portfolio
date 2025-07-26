"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="portfolio-layout">
        {/* Left Sidebar - Desktop Only */}
        <div className="sticky-sidebar">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="content-wrapper">
            {/* Mobile Header - Mobile Only */}
            <div className="lg:hidden mb-12 pb-8 border-b border-border">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                    <Image
                      src="/images/pic.jpg"
                      alt="Ritchmond Tajarros"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-foreground leading-tight mb-1">
                      Ritchmond Tajarros
                    </h1>
                    <h2 className="text-sm font-medium text-primary leading-relaxed">
                      Fresh Graduate with Full-Stack Web Development Experience
                    </h2>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Sections */}
            <div className="space-y-24">
              <About />
              <Skills />
              <Experience />
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
