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
  const isDragging = useRef(false);
  const animationRef = useRef<any>(null);

  const CARD_WIDTH = 340;
  const TOTAL_WIDTH = certificates.length * CARD_WIDTH;

  const startLoop = () => {
    animationRef.current?.stop();

    animationRef.current = animate(x, -TOTAL_WIDTH, {
      ease: "linear",
      duration: 35,
      repeat: Infinity,
    });
  };

  useEffect(() => {
    startLoop();
    return () => animationRef.current?.stop();
  }, []);

  return (
    <SectionWrapper id="certificates">
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-red-500">
          Credentials
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
          Certificates
        </h2>
      </div>

      {/* OUTER FRAME */}
      <div className="relative">

        {/* LEFT PREMIUM EDGE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-red-900 via-red-500 to-transparent blur-[1px]" />
        </div>

        {/* RIGHT PREMIUM EDGE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10">
          <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-red-900 via-red-500 to-transparent blur-[1px]" />
        </div>

        {/* MARQUEE */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => animationRef.current?.stop()}
          onMouseLeave={() => startLoop()}
        >
          <motion.div
            className="flex gap-5 w-max cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragElastic={0.1}
            dragMomentum
            onDragStart={() => {
              isDragging.current = true;
              animationRef.current?.stop();
            }}
            onDragEnd={() => {
              isDragging.current = false;
              startLoop();
            }}
          >
            {[...certificates, ...certificates].map((cert, i) => (
              <motion.div
                key={i}
                onClick={() =>
                  !isDragging.current && setSelected(cert)
                }
                whileHover={{ borderColor: "var(--red-500)" }}
                className="
                  min-w-[320px]
                  rounded-2xl p-5
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  backdrop-blur-xl
                  flex items-center gap-4
                  transition
                "
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center ">
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] truncate">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {cert.issuer}
                  </p>
                </div>

                <CheckCircle
                  size={16}
                  className="text-green-500 opacity-80"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100]"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-[110] px-4"
            >
              <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl shadow-xl">

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
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="p-4">
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      width={900}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}