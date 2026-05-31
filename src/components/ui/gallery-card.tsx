"use client";

import { motion } from "framer-motion";

interface GalleryCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

export default function GalleryCard({
  title,
  category,
  imageUrl,
}: GalleryCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="aspect-square md:aspect-auto md:h-72 w-full overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-primary text-xs font-bold uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-white text-xl font-bold mt-1">{title}</h3>
      </div>
    </motion.div>
  );
}
