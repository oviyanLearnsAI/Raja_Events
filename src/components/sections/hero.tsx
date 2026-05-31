"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Crafting Your Perfect Event",
    subtitle:
      "From dream weddings to corporate galas, we turn visions into reality.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
  },
  {
    id: 2,
    title: "Elegant Wedding Designs",
    subtitle: "Creating magical moments that last a lifetime.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
  },
  {
    id: 3,
    title: "Corporate Excellence",
    subtitle: "Professional planning for impactful brand experiences.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-md">
              {slides[current].title}
            </h1>

            <p className="text-base  sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons (Static, don't animate out) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            Get a Quote <ArrowRight size={20} />
          </Link>
          <Link
            href="#gallery"
            className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg transition-all"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
