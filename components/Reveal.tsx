"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  x?: number;
};

// Fades content up into place the first time it scrolls into view.
export default function Reveal({ children, delay = 0, className, x = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: x ? 0 : 24, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
