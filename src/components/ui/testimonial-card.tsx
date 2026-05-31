"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[300px]"
    >
      {/* Quote Icon */}
      <Quote className="text-primary/20 w-10 h-10 mb-4" />

      {/* Text */}
      <p className="text-foreground/80 italic leading-relaxed mb-6">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
          {/* Using standard img tag to avoid needing to whitelist domains in next.config.js for this demo */}
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
