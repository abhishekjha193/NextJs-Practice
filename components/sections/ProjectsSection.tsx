"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, BriefcaseBusiness } from "lucide-react";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.article
      ref={ref}
      style={{
        scale,
        y,
        zIndex: index,
      }}
      className="
        sticky top-24
        flex flex-col md:flex-row
        rounded-3xl border
        overflow-hidden
        shadow-2xl
        bg-white dark:bg-zinc-950
        border-zinc-200 dark:border-zinc-800
        will-change-transform
      "
    >
      <div className="relative w-full md:w-[45%] aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-[10px] text-white border border-white/20">
          <Sparkles size={10} className="text-red-400" />
          Featured
        </div>
      </div>

      <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-5">
        <div>
          <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">
            {project.title}
          </h3>

          <p className="mt-5 text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="text-[10px] sm:text-xs px-2 py-1 rounded-full border bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm py-2 transition"
          >
            Live <ArrowUpRight size={14} />
          </Link>

          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl border text-xs sm:text-sm py-2 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800"
          >
            <Github size={14} />
            Code
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-10 md:mb-16 px-2">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] md:text-xs bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800">
          <BriefcaseBusiness size={12} className="text-red-500" />
          Selected Work
        </div>

        <h2 className="mt-4 md:mt-6 text-2xl md:text-6xl font-bold text-zinc-900 dark:text-white">
          Featured Projects
        </h2>

        <p className="mt-3 md:mt-5 max-w-2xl mx-auto text-xs md:text-base text-zinc-600 dark:text-zinc-400">
          Production-grade full stack apps with scalable architecture, AI integrations, and modern UI systems.
        </p>
      </div>

      <div className="relative flex flex-col pb-20 gap-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-10 md:mt-16 flex justify-center">
        <Link
          href="https://github.com/abhishekjha193"
          target="_blank"
          className="flex items-center gap-2 rounded-xl border px-5 py-3 text-xs md:text-sm bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800"
        >
          <Github size={16} />
          View GitHub
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </SectionWrapper>
  );
}