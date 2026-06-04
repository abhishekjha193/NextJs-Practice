"use client";

import { motion } from "framer-motion";
import { ExternalLink, Activity, Code, Zap, Layers, GitCommit, Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Props {
  data: any;
}

function getColor(count: number) {
  if (count === 0) return "bg-black/5 dark:bg-white/5";
  if (count < 2) return "bg-red-500/20";
  if (count < 5) return "bg-red-500/40";
  if (count < 10) return "bg-red-500/70";
  return "bg-red-500";
}

function Grid({ weeks }: any) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px] grid grid-rows-7 grid-flow-col gap-[3px] p-2">
        {weeks.map((w: any, i: number) =>
          w.contributionDays.map((d: any, j: number) => (
            <div
              key={`${i}-${j}`}
              title={`${d.contributionCount} contributions on ${d.date}`}
              className={`w-3 h-3 rounded-sm transition hover:scale-125 ${getColor(
                d.contributionCount
              )}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default function GitHubSection({ data }: Props) {
  if (!data) {
    return (
      <SectionWrapper id="github">
        <p className="text-center text-black/60 dark:text-white/60">
          Loading GitHub data...
        </p>
      </SectionWrapper>
    );
  }

  const weeks = data.weeks;
  const total = data.totalContributions;

  const totalDays = weeks?.reduce(
    (acc: number, w: any) =>
      acc + w.contributionDays.filter((d: any) => d.contributionCount > 0).length,
    0
  );

  return (
    <SectionWrapper id="github">
      {/* HEADER */}
      <div className="mb-10">
        <p className="text-red-500 text-xs tracking-widest uppercase">
          Developer Profile
        </p>

        <h2 className="text-4xl font-semibold text-black dark:text-white">
          GitHub Activity
        </h2>

        <a
          href={data.url}
          target="_blank"
          className="text-sm text-black/60 dark:text-white/60 hover:text-red-500 flex items-center gap-1 mt-1 transition"
        >
          @{data.login} <ExternalLink size={14} />
        </a>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-md hover:shadow-xl transition"
        >
          <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
            <Activity size={16} className="text-red-500" />
            Overview
          </div>

          <div className="mt-4 text-3xl font-bold text-black dark:text-white">
            {data.repos}
          </div>
          <div className="text-xs text-black/50 dark:text-white/50">
            Public Repositories
          </div>

          <div className="mt-4 text-red-500 font-semibold text-xl">
            {total}
          </div>
          <div className="text-xs text-black/50 dark:text-white/50">
            Total Contributions
          </div>

          <div className="mt-4 text-sm text-black/70 dark:text-white/70">
            Active Days:{" "}
            <span className="text-black dark:text-white font-semibold">
              {totalDays}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="p-3 rounded-xl border border-black/10 dark:border-white/10 text-center hover:scale-105 transition">
              <Code size={14} className="mx-auto text-red-500" />
              <p className="text-xs mt-2 text-black/60 dark:text-white/60">
                Clean
              </p>
            </div>

            <div className="p-3 rounded-xl border border-black/10 dark:border-white/10 text-center hover:scale-105 transition">
              <Zap size={14} className="mx-auto text-red-500" />
              <p className="text-xs mt-2 text-black/60 dark:text-white/60">
                Fast
              </p>
            </div>

            <div className="p-3 rounded-xl border border-black/10 dark:border-white/10 text-center hover:scale-105 transition">
              <Layers size={14} className="mx-auto text-red-500" />
              <p className="text-xs mt-2 text-black/60 dark:text-white/60">
                Scalable
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-md hover:shadow-xl transition"
        >
          <div className="flex justify-between mb-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Contribution Graph (Last Activity)
            </h3>

            <span className="text-xs text-black/50 dark:text-white/50">
              GitHub Heatmap
            </span>
          </div>

          {weeks?.length > 0 ? (
            <Grid weeks={weeks} />
          ) : (
            <p className="text-center text-black/50 dark:text-white/50 py-10">
              No contribution data found
            </p>
          )}

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 hover:scale-[1.02] transition">
              <h4 className="text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                <GitCommit size={14} className="text-red-500" />
                Commit Activity
              </h4>
              <p className="text-xs mt-1 text-black/60 dark:text-white/60">
                Consistent daily development contributions.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 hover:scale-[1.02] transition">
              <h4 className="text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                <Star size={14} className="text-red-500" />
                Impact
              </h4>
              <p className="text-xs mt-1 text-black/60 dark:text-white/60">
                Open-source focused and production-ready code.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}