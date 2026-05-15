"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="mb-12">
        <p className="section-label mb-3">Career</p>
        <h2
          className="text-4xl font-bold"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          Experience
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-4 top-2 bottom-2 w-px hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="md:pl-12 relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-6 w-8 h-8 rounded-full glass border items-center justify-center hidden md:flex"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </div>

              <div className="glass card-glow rounded-2xl p-6 transition-all hover:border-[var(--border-strong)]">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {exp.role}
                    </h3>

                    <div
                      className="text-sm font-medium mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {exp.company}
                    </div>

                    {/* 🔥 ONLY ID 1 LIVE INDICATOR */}
                    {exp.id === "1" && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>

                        <span className="text-xs font-medium text-green-400">
                          Currently Working Here
                        </span>
                      </div>
                    )}
                  </div>

                  <div
                    className="flex flex-col gap-1 sm:text-right text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar size={11} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin size={11} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.achievements.map((achievement, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "var(--accent)" }}
                      />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
