"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-6xl mx-auto px-6 py-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}
