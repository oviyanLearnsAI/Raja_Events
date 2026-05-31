"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./progress-bar";
import { SITE_CONFIG } from "@/lib/constants";

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // 2.5 seconds animation time

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        <h1 className="text-4xl font-bold tracking-widest text-foreground">
          {SITE_CONFIG.name}
          <span className="text-primary">.</span>
        </h1>

        <ProgressBar />

        <p className="text-sm text-muted-foreground tracking-widest uppercase">
          Preparing Your Experience
        </p>
      </motion.div>
    </motion.div>
  );
}
