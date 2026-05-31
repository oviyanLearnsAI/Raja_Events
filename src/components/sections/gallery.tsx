"use client";

import { motion } from "framer-motion";
import { galleryData } from "@/data/gallery";
import GalleryCard from "@/components/ui/gallery-card";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Our Recent Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            A glimpse into the moments we've curated and the memories we've
            created.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GalleryCard
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
