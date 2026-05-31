"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
// import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50">
      <Link
        href="/"
        className="text-xl font-bold tracking-wider hover:opacity-80 transition-opacity text-foreground"
      >
        {SITE_CONFIG.name.split(" ")[0]}{" "}
        <span className="text-primary">Events</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-foreground transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </Link>
        ))}
        {/* <ThemeToggle /> */}
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center gap-4 md:hidden">
        {/* <ThemeToggle /> */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8 text-xl font-semibold z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-colors text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
