"use client";

import { motion } from "framer-motion";
import type { ServiceCardProps } from "@/types/service";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 p-6 h-64 flex flex-col justify-end text-white">
        <div className="mb-3 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
          <Icon className="text-white" size={24} />
        </div>

        {/* Text */}
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-200 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
