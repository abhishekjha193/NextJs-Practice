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
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.12,
      duration: 0.6,
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
        whileHover={{ y: -8 }}
        className="
          group relative overflow-hidden
          rounded-[32px]
          border
          transition-all duration-500
          backdrop-blur-2xl
        "
        style={{
          background: "var(--surface)",
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
        }}
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition duration-500
            bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.16),transparent_38%)]
          "
        />

        {/* Top Blur */}
        <div
          className="
            absolute -top-24 right-0
            h-52 w-52 rounded-full
            blur-3xl opacity-20
          "
          style={{
            background: "rgb(239 68 68)",
          }}
        />

        {/* Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
              object-cover
              transition duration-700
              group-hover:scale-105
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
            "
          />

          {/* Badge */}
          <div
            className="
              absolute left-4 top-4
              inline-flex items-center gap-2
              rounded-full
              border
              px-3 py-1.5
              text-[11px]
              font-medium
              backdrop-blur-xl
            "
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.4)",
              color: "white",
            }}
          >
            <Sparkles size={11} className="text-red-400" />
            Featured Project
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-7 md:p-8">
          {/* Title */}
          <h3
            className="
              text-2xl md:text-3xl
              font-bold tracking-tight
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-4
              text-sm md:text-[15px]
              leading-7
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  px-3 py-1.5
                  text-[11px]
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

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={project.liveUrl}
              target="_blank"
              className="
                inline-flex items-center gap-2
                rounded-2xl
                px-5 py-3
                text-sm font-semibold
                text-white
                transition-all duration-300
                hover:scale-[1.03]
              "
              style={{
                background:
                  "linear-gradient(135deg,rgb(239 68 68),rgb(220 38 38))",

                boxShadow:
                  "0 12px 30px rgba(239,68,68,0.28)",
              }}
            >
              Live Preview

              <ArrowUpRight size={16} />
            </Link>

            <Link
              href={project.githubUrl}
              target="_blank"
              className="
                inline-flex items-center gap-2
                rounded-2xl
                border
                px-5 py-3
                text-sm font-medium
                transition-all duration-300
                hover:scale-[1.03]
              "
              style={{
                borderColor: "var(--border)",
                background: "rgba(255,255,255,0.03)",
                color: "var(--text-primary)",
              }}
            >
              <Github size={16} />

              Source Code
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
      {/* Header */}
      <div className="mb-14 text-center">
        <div
          className="
            inline-flex items-center gap-2
            rounded-full
            border
            px-4 py-1.5
            text-xs font-medium
            backdrop-blur-xl
          "
          style={{
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.03)",
            color: "var(--text-secondary)",
          }}
        >
          <BriefcaseBusiness
            size={13}
            className="text-red-500"
          />

          Selected Work
        </div>

        <h2
          className="
            mt-6
            text-4xl md:text-6xl
            font-bold tracking-tight
          "
          style={{
            color: "var(--text-primary)",
          }}
        >
          Featured Projects
        </h2>

        <p
          className="
            mx-auto mt-5
            max-w-2xl
            text-sm md:text-base
            leading-7
          "
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Production-grade full stack applications focused on
          scalable backend architecture, premium UI systems,
          AI integrations, and real-world performance.
        </p>
      </div>

      {/* Grid */}
      <div
        className="
          grid grid-cols-1
          xl:grid-cols-2
          gap-8
        "
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            i={i}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 flex justify-center">
        <Link
          href="https://github.com/abhishekjha193"
          target="_blank"
          className="
            group inline-flex items-center gap-3
            rounded-2xl
            border
            px-7 py-4
            text-sm font-medium
            transition-all duration-300
            hover:-translate-y-1
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--text-primary)",
          }}
        >
          <Github size={18} />

          View Complete GitHub

          <ArrowUpRight
            size={16}
            className="
              transition-transform
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </Link>
      </div>
    </SectionWrapper>
  );
}