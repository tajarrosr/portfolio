"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.6 }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-medium text-primary mb-4"
          >
            Hi, my name is
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Ritchmond Tajarros.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
          >
            I build websites and web applications with hands-on full-stack
            experience from my OJT.
          </motion.p>

          {/* Scroll Down Indicator */}
          <AnimatePresence>
            {isVisible && (
              <motion.div
                key="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              >
                <motion.a
                  href="#about"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="mb-2">Scroll Down</span>
                  <ArrowDown size={20} />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
