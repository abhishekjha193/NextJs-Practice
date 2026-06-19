"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
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
  const speed = 10; 

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
                whileHover={{}}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  group
                  relative
                  min-w-[150px]
                  sm:min-w-[170px]
                  md:min-w-[180px]
                  h-[155px]
                  sm:h-[170px]
                  rounded-3xl
                  overflow-hidden
                  cursor-pointer
                  border
                  border-black/10
                  dark:border-white/10
                  bg-white/80
                  dark:bg-white/[0.04]

                  backdrop-blur-2xl

                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  dark:shadow-[0_15px_40px_rgba(0,0,0,0.45)]

                  hover:border-red-500/40

                  before:absolute
                  before:inset-0
                  before:bg-gradient-to-br
                  before:from-white/80
                  before:via-transparent
                  before:to-transparent

                  dark:before:from-white/10

                  after:absolute
                  after:inset-0
                  after:bg-gradient-to-t
                  after:from-black/[0.02]
                  after:to-transparent

                  dark:after:from-white/[0.02]

                  p-4
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <div
                  className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_60%)]
    "
                />

                <div
                  className="
      relative
      z-10
      w-12
      h-12
      rounded-2xl
      flex
      items-center
      justify-center
      bg-white
      dark:bg-white/10
      shadow-lg
      dark:shadow-black/30
      mb-3
    "
                  style={{
                    transform: "translateZ(40px)",
                  }}
                >
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <h3
                  className="
      relative
      z-10
      text-[12px]
      font-semibold
      text-[var(--text-primary)]
      line-clamp-2
    "
                  style={{
                    transform: "translateZ(30px)",
                  }}
                >
                  {cert.title}
                </h3>

                <p
                  className="
      relative
      z-10
      mt-1
      text-[11px]
      text-[var(--text-secondary)]
    "
                  style={{
                    transform: "translateZ(20px)",
                  }}
                >
                  {cert.issuer}
                </p>

                <CheckCircle
                  size={14}
                  className="relative z-10 text-green-500 mt-2"
                  style={{
                    transform: "translateZ(25px)",
                  }}
                />
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
