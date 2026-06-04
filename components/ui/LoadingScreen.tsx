"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import LightRays from "@/components/ui/LightRays";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Same Light Rays */}
          <div className="absolute inset-0 opacity-50">
            <LightRays
              raysOrigin="top-center"
              raysColor="#ef4444"
              raysSpeed={0.3}
              lightSpread={0.7}
              rayLength={2}
              followMouse={false}
            />
          </div>

          {/* Same Hero Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.12),transparent_60%)]" />

          <motion.div
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center"
          >
            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src="/b.png"
                alt=""
                width={250}
                height={250}
                priority
                className="w-[180px] md:w-[220px]"
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="text-3xl md:text-5xl font-bold mt-4"
            >
              Abhishek Jha
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="mt-2 text-sm tracking-[0.3em] uppercase"
            >
              Full Stack Developer
            </motion.p>

            {/* Minimal Progress */}
            <motion.div
              className="mt-8 h-[2px] w-40 bg-white/5 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}