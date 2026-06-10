"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Github,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { projects } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProjectCard = memo(
  ({ project, i }: { project: (typeof projects)[0]; i: number }) => {
    return (
      <motion.article
        custom={i}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="
          group relative overflow-hidden
          rounded-2xl
          border
          transition-all duration-300
          backdrop-blur-2xl
        "
        style={{
          background: "var(--surface)",
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
        }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.16),transparent_40%)]" />

        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-2 top-2 md:left-4 md:top-4 flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[11px] text-white">
            <Sparkles size={10} className="text-red-400" />
            Featured
          </div>
        </div>

        <div className="p-4 md:p-8">
          <h3 className="text-lg md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h3>

          <p className="mt-2 md:mt-4 text-xs md:text-[15px] leading-5 md:leading-7 text-[var(--text-secondary)]">
            {project.description}
          </p>

          <div className="mt-3 md:mt-7 flex flex-wrap gap-1.5 md:gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full border
                  px-2 py-0.5 md:px-3 md:py-1.5
                  text-[9px] md:text-[11px]
                  font-medium
                "
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text-secondary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 md:mt-8 flex flex-col sm:flex-row gap-2">
            <Link
              href={project.liveUrl}
              target="_blank"
              className="
                flex items-center justify-center gap-2
                rounded-xl
                px-4 py-2 md:px-5 md:py-3
                text-xs md:text-sm font-semibold text-white
                bg-red-600 hover:bg-red-500
                transition
              "
            >
              Live <ArrowUpRight size={14} />
            </Link>

            <Link
              href={project.githubUrl}
              target="_blank"
              className="
                flex items-center justify-center gap-2
                rounded-xl
                border
                px-4 py-2 md:px-5 md:py-3
                text-xs md:text-sm
                transition
              "
              style={{
                borderColor: "var(--border)",
                background: "rgba(255,255,255,0.03)",
                color: "var(--text-primary)",
              }}
            >
              <Github size={14} />
              Code
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      {/* HEADER */}
      <div className="mb-10 md:mb-14 text-center px-2">
        <div
          className="
            inline-flex items-center gap-2
            rounded-full border
            px-3 py-1 md:px-4 md:py-1.5
            text-[10px] md:text-xs font-medium
          "
          style={{
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.03)",
            color: "var(--text-secondary)",
          }}
        >
          <BriefcaseBusiness size={12} className="text-red-500" />
          Selected Work
        </div>

        <h2
          className="
            mt-4 md:mt-6
            text-2xl md:text-6xl
            font-bold tracking-tight
            text-[var(--text-primary)]
          "
        >
          Featured Projects
        </h2>

        <p
          className="
            mx-auto mt-2 md:mt-5
            max-w-2xl
            text-xs md:text-base
            leading-5 md:leading-7
            text-[var(--text-secondary)]
          "
        >
          Production-grade full stack applications focused on scalable backend,
          premium UI systems, AI integrations, and real-world performance.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} i={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 md:mt-16 flex justify-center">
        <Link
          href="https://github.com/abhishekjha193"
          target="_blank"
          className="
            flex items-center gap-2
            rounded-xl
            border
            px-5 py-3
            text-xs md:text-sm
            transition
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--text-primary)",
          }}
        >
          <Github size={16} />
          View GitHub
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </SectionWrapper>
  );
}