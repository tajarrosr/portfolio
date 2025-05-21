"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === "dark"
  const [activeSection, setActiveSection] = useState("home")

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "contact"]
      let closestSection = "home"
      let closestDistance = Number.MAX_VALUE

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)

          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = section
          }
        }
      }

      // Determine active section
      if (window.scrollY < 100) {
        setActiveSection("home")
      } else {
        setActiveSection(closestSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Fixed Vertical Navigation (Desktop) */}
      <motion.nav
        className="hidden md:flex fixed top-10 right-10 flex-col items-end space-y-5 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col space-y-5 items-center">
          {/* Navigation Links */}
          <motion.a
            href="#about"
            className={`text-sm font-medium transition-all ${
              activeSection === "about" ? "text-primary" : "text-foreground hover:text-primary"
            }`}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            About Me
          </motion.a>
          <motion.a
            href="#skills"
            className={`text-sm font-medium transition-all ${
              activeSection === "skills" ? "text-primary" : "text-foreground hover:text-primary"
            }`}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#experience"
            className={`text-sm font-medium transition-all ${
              activeSection === "experience" ? "text-primary" : "text-foreground hover:text-primary"
            }`}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            Experience
          </motion.a>
          <motion.a
            href="#projects"
            className={`text-sm font-medium transition-all ${
              activeSection === "projects" ? "text-primary" : "text-foreground hover:text-primary"
            }`}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className={`text-sm font-medium transition-all ${
              activeSection === "contact" ? "text-primary" : "text-foreground hover:text-primary"
            }`}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 cursor-pointer"
          >
            {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
            <span className="sr-only">Toggle theme</span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation (Hamburger Menu) */}
      <motion.div
        className="md:hidden fixed top-6 right-6 z-50 flex items-center space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hamburger Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-foreground"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Menu</span>
        </motion.button>
      </motion.div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center z-40"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-foreground text-lg space-y-6"
            >
              <motion.a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-primary transition-all"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                About Me
              </motion.a>
              <motion.a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-primary transition-all"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Skills
              </motion.a>
              <motion.a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-primary transition-all"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Experience
              </motion.a>
              <motion.a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-primary transition-all"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-primary transition-all"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.a>
            </motion.div>

            {/* Dark Mode Toggle (Mobile) */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 cursor-pointer mt-8 text-foreground"
            >
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
              <span className="sr-only">Toggle theme</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
