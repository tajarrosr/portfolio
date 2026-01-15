"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-24 pt-8 pb-8 border-t border-border text-center"
    >
      <p className="text-sm text-muted-foreground">
        Inspired from{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium transition-colors"
        >
          Brittany Chiang's Portfolio
        </a>
      </p>
    </motion.footer>
  )
}
