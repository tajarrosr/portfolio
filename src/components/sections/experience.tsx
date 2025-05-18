"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar, Building2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startScroll = 700;
      const endScroll = 1200;
      const clampedScroll = Math.max(
        0,
        Math.min(scrollY - startScroll, endScroll - startScroll)
      );
      const progress = clampedScroll / (endScroll - startScroll);
      setLineWidth(progress * 173);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences: ExperienceItem[] = [
    {
      title: "Full-Stack Web Developer Intern",
      company: "Rizal Technological University (RTU) - MIS Office",
      period: "March 2025 - May 2025",
      description: [
        "Developed a queuing system for the university's MIS office as part of my OJT Internship.",
        "Implemented the login and authentication system for both admin and super-admin accounts.",
        "Collaborated with a team of student developers to deliver a complete solution.",
        "Gained hands-on experience with full-stack development in a real-world environment.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div ref={ref}>
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4"
            >
              Experience
            </motion.h2>
            <motion.div
              style={{ width: `${lineWidth}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${lineWidth}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-1 bg-primary mb-8 mx-auto max-w-[173px]"
            />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-muted last:border-l-0 last:pb-0 ml-6"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

                {/* Experience card */}
                <div className="bg-muted/20 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground mt-2 sm:mt-0">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-sm text-primary">
                    <Building2 className="h-4 w-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>

                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
