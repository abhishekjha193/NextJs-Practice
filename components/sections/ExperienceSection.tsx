"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { experiences } from "@/lib/data";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function Card({ exp }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      variants={item}
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--surface)]
        backdrop-blur-xl
        min-w-[260px] md:min-w-0
      "
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_60%)]" />

      <div className="relative p-4">
        <button onClick={() => setOpen(!open)} className="w-full text-left">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                {exp.role}
              </h3>
              <p className="mt-1 text-xs text-[var(--accent)]">
                {exp.company}
              </p>
            </div>

            <motion.div animate={{ rotate: open ? 180 : 0 }}>
              <ChevronDown size={16} />
            </motion.div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-[var(--text-tertiary)]">
            <div className="flex items-center gap-1">
              <Calendar size={10} />
              {exp.duration}
            </div>

            {exp.currentlyWorking && (
              <div className="flex items-center gap-2 text-green-500">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Active
              </div>
            )}
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t border-[var(--border)] pt-4">
                <div className="mb-3 flex items-center gap-1 text-[10px] text-[var(--text-tertiary)]">
                  <MapPin size={10} />
                  {exp.location}
                </div>

                <div className="space-y-2">
                  {exp.achievements.map((a: string, i: number) => (
                    <div
                      key={i}
                      className="flex gap-2 text-[11px] text-[var(--text-secondary)]"
                    >
                      <CheckCircle2 size={12} className="text-[var(--accent)] mt-0.5" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function WorkSection({ data }: any) {
  const [showAll, setShowAll] = useState(false);

  const activeOnly = data.filter((e: any) => e.currentlyWorking);
  const visible = showAll ? data : activeOnly;

  return (
    <div>
      <p className="mb-4 text-xs tracking-widest text-red-500 uppercase">
        Work Experience
      </p>

      <div className="flex gap-4 overflow-x-auto pb-4 md:block md:space-y-4 md:overflow-visible snap-x snap-mandatory">
        {visible.map((exp: any) => (
          <div key={exp.id} className="snap-center">
            <Card exp={exp} />
          </div>
        ))}
      </div>

      {data.length > activeOnly.length && (
        <button
          onClick={() => setShowAll((p) => !p)}
          className="mt-2 flex items-center gap-1 text-xs text-[var(--accent)]"
        >
          {showAll ? "View less" : "View more"}
          <ChevronRight
            size={14}
            className={`transition ${showAll ? "rotate-90" : ""}`}
          />
        </button>
      )}
    </div>
  );
}

function EducationSection({ data }: any) {
  return (
    <div>
      <p className="mb-4 text-xs tracking-widest text-red-500 uppercase">
        Education
      </p>

      <div className="space-y-4 md:block md:overflow-visible">
        {data.map((exp: any) => (
          <Card key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const workExp = experiences.filter(
    (e) => e.role !== "B.E. Information Technology"
  );

  const education = experiences.filter(
    (e) => e.role === "B.E. Information Technology"
  );

  return (
    <SectionWrapper id="experience">
      <div className="px-4">

        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.25em] text-red-500 uppercase">
            Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
            Experience & Career
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <WorkSection data={workExp} />

          <EducationSection data={education} />

        </div>
      </div>
    </SectionWrapper>
  );
}