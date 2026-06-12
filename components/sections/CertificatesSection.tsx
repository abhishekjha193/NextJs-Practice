"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { certificates } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";

export default function CertificatesSection() {
  const [selected, setSelected] = useState<any>(null);

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<any>(null);
  const isDragging = useRef(false);

  const CARD_WIDTH = 170;
  const speed = 40; // lower = smoother/slower

  const startAnimation = () => {
    animationRef.current?.stop();

    const totalWidth = certificates.length * CARD_WIDTH;

    const controls = animate(x, -totalWidth, {
      ease: "linear",
      duration: speed,
      onComplete: () => {
        x.set(0);
        startAnimation();
      },
    });

    animationRef.current = controls;
  };

  useEffect(() => {
    startAnimation();
    return () => animationRef.current?.stop();
  }, []);

  return (
    <SectionWrapper id="certificates">
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-red-500">Credentials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
          Certificates
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div
          className="overflow-hidden"
          onMouseEnter={() => animationRef.current?.stop()}
          onMouseLeave={() => startAnimation()}
        >
          <motion.div
            className="flex gap-4 w-max cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragElastic={0.05}
            dragMomentum={false}
            onDragStart={() => {
              isDragging.current = true;
              animationRef.current?.stop();
            }}
            onDragEnd={() => {
              isDragging.current = false;
              startAnimation();
            }}
          >
            {[...certificates, ...certificates].map((cert, i) => (
              <motion.div
                key={i}
                onClick={() => !isDragging.current && setSelected(cert)}
                whileHover={{ borderColor: "var(--red-500)" }}
                className="
                  min-w-[160px]
                  h-[160px]
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  backdrop-blur-xl
                  p-3
                  flex flex-col
                  items-center
                  justify-center
                  text-center
                  cursor-pointer
                "
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center mb-2">
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-[12px] font-semibold text-[var(--text-primary)] line-clamp-2">
                  {cert.title}
                </h3>

                <p className="mt-1 text-[11px] text-[var(--text-secondary)]">
                  {cert.issuer}
                </p>

                <CheckCircle size={12} className="text-green-500 mt-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-red-600 via-red-500 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-red-600 via-red-500 to-transparent" />
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-[110] px-4"
            >
              <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl shadow-2xl">
                <div className="p-4 flex items-center justify-between border-b border-[var(--border)]">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      {selected.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {selected.issuer}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="p-4">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}