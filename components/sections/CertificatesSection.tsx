"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { certificates } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";

export default function CertificatesSection() {
  const [selected, setSelected] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  // ✅ FIX: default 3 only
  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 3);

  return (
    <SectionWrapper id="certificates">

      {/* HEADER */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-red-500">Credentials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
          Certificates
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleCertificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(cert)}
            className="
              group cursor-pointer
              rounded-xl p-4
              border backdrop-blur-xl
              bg-[var(--surface)]
              border-[var(--border)]
              transition-all
            "
          >
            <div className="flex items-center gap-3">

              {/* LOGO (FIXED - no circle, clean square bigger) */}
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-transparent flex items-center justify-center">
                <Image
                  src={cert.logo}
                  alt={cert.issuer}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] truncate">
                  {cert.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)]">
                  {cert.issuer}
                </p>
              </div>

              <CheckCircle
                size={14}
                className="text-green-500 opacity-60 group-hover:opacity-100 transition"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE BUTTON */}
      {certificates.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="
              px-6 py-2 text-sm
              rounded-lg border
              bg-[var(--surface)]
              border-[var(--border)]
              text-[var(--text-primary)]
              hover:border-red-500/40
              transition
            "
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-[100]"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-[110] px-4"
            >
              <div className="w-full max-w-xl rounded-2xl overflow-hidden border bg-[var(--surface)] border-[var(--border)]">

                {/* HEADER */}
                <div className="p-4 flex items-center justify-between border-b border-white/10">
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
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* IMAGE */}
                <div className="p-4">
                  <div className="rounded-xl overflow-hidden border border-white/10">
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