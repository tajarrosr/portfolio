"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm leading-loose text-muted-foreground"
        >
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-xs text-muted-foreground"
        >
          Built with Next.js, Tailwind CSS, and Framer Motion
        </motion.p>
      </div>
    </footer>
  );
}
