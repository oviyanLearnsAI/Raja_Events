"use client";

import { motion } from "framer-motion";

export default function ProgressBar() {
  return (
    <div className="w-48 h-[2px] bg-gray-300/30 rounded-full overflow-hidden relative">
      <motion.div
        className="h-full bg-primary rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
}
