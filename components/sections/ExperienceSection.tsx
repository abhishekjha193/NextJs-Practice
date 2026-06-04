"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { experiences } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

function Card({ exp }: any) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.02 }}
      className="
        relative group rounded-xl border p-4
        backdrop-blur-xl bg-[var(--surface)]
        border-[var(--border)]
      "
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_55%)]" />

      <div className="relative flex flex-col gap-3">

        {/* TOP */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3">

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              {exp.role}
            </h3>

            <p className="text-xs text-[var(--accent)]">{exp.company}</p>

            {exp.currentlyWorking && (
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[10px] text-green-400">Active</span>
              </div>
            )}
          </div>

          {/* DATE + LOCATION */}
          <div className="text-[10px] text-[var(--text-tertiary)] sm:text-right flex sm:flex-col gap-2 sm:gap-1">
            <div className="flex items-center gap-1">
              <Calendar size={10} />
              {exp.duration}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={10} />
              {exp.location}
            </div>
          </div>

        </div>

        {/* ACHIEVEMENTS */}
        <div className="space-y-2">
          {exp.achievements.slice(0, 2).map((a: string, i: number) => (
            <div
              key={i}
              className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]"
            >
              <CheckCircle2 size={12} className="text-[var(--accent)] mt-0.5" />
              {a}
            </div>
          ))}
        </div>

      </div>
    </motion.div>
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

      {/* TITLE */}
      <div className="text-center mb-12 px-4">
        <p className="text-xs text-red-500 tracking-widest">Journey</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
          Experience & Career
        </h2>
      </div>

      {/* GRID */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4">

        {/* CENTER LINE (only desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 via-white/10 to-transparent" />

        {/* WORK */}
        <div className="flex flex-col gap-5">
          <p className="text-xs text-red-500 tracking-widest text-center md:text-left">
            Work Experience
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {workExp.map((exp) => (
              <Card key={exp.id} exp={exp} />
            ))}
          </motion.div>
        </div>

        {/* EDUCATION */}
        <div className="flex flex-col gap-5">
          <p className="text-xs text-red-500 tracking-widest text-center md:text-left">
            Education / Career
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {education.map((exp) => (
              <Card key={exp.id} exp={exp} />
            ))}
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
}