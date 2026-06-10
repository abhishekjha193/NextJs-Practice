"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { experiences } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function Card({ exp }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      variants={item}
      whileHover={{ y: -3 }}
      className="
      group relative overflow-hidden
      rounded-2xl
      border border-[var(--border)]
      bg-[var(--surface)]
      backdrop-blur-xl
      "
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent_60%)]" />

      <div className="relative p-4">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                {exp.role}
              </h3>

              <p className="mt-1 text-xs text-[var(--accent)]">
                {exp.company}
              </p>
            </div>

            <motion.div
              animate={{
                rotate: open ? 180 : 0,
              }}
            >
              <ChevronDown
                size={16}
                className="text-[var(--text-secondary)]"
              />
            </motion.div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-[var(--text-tertiary)]">
            <div className="flex items-center gap-1">
              <Calendar size={10} />
              {exp.duration}
            </div>

            {exp.currentlyWorking && (
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="text-green-400">
                  Active
                </span>
              </div>
            )}
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t border-[var(--border)] pt-4">
                <div className="mb-4 flex items-center gap-1 text-[10px] text-[var(--text-tertiary)]">
                  <MapPin size={10} />
                  {exp.location}
                </div>

                <div className="space-y-2">
                  {exp.achievements.map(
                    (achievement: string, i: number) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: i * 0.05,
                        }}
                        className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]"
                      >
                        <CheckCircle2
                          size={12}
                          className="mt-0.5 shrink-0 text-[var(--accent)]"
                        />

                        <span>{achievement}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
      <div className="px-4">
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.25em] text-red-500 uppercase">
            Journey
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
            Experience & Career
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs tracking-widest text-red-500 uppercase">
              Work Experience
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {workExp.map((exp) => (
                <Card key={exp.id} exp={exp} />
              ))}
            </motion.div>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-widest text-red-500 uppercase">
              Education
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {education.map((exp) => (
                <Card key={exp.id} exp={exp} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

