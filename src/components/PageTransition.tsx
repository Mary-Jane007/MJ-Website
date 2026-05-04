"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/** Keeps content visible without JS and avoids “stuck” opacity:0 on hydration. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
