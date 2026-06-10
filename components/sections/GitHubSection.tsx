"use client";

import { motion } from "framer-motion";
import { ExternalLink, Activity, Code, Zap, Layers, GitCommit, Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Props {
  data: any;
}

function getColor(count: number) {
  if (count === 0) return "bg-zinc-300/40 dark:bg-zinc-800/60";
  if (count < 2) return "bg-red-500/20";
  if (count < 5) return "bg-red-500/40";
  if (count < 10) return "bg-red-500/70";
  return "bg-red-500";
}

function Grid({ weeks }: any) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[720px] grid grid-rows-7 grid-flow-col gap-[2px] p-2">
        {weeks.map((w: any, i: number) =>
          w.contributionDays.map((d: any, j: number) => (
            <div
              key={`${i}-${j}`}
              title={`${d.contributionCount} contributions on ${d.date}`}
              className={`w-[9px] h-[9px] rounded-[3px] transition-all duration-300 hover:scale-125 ${getColor(
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
        <div className="text-center text-sm text-zinc-500 dark:text-zinc-400 py-10">
          Loading GitHub activity...
        </div>
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
      <div className="space-y-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <p className="text-[10px] tracking-[0.35em] text-red-500 uppercase">
            Developer Profile
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            GitHub Activity
          </h2>

          <a
            href={data.url}
            target="_blank"
            className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 hover:text-red-500 flex items-center gap-1 transition"
          >
            @{data.login}
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black/60 backdrop-blur-xl p-5 hover:border-red-500/40 transition"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <Activity size={14} className="text-red-500" />
              Overview
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {data.repos}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Repos
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-red-500">
                  {total}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Contributions
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Active Days:{" "}
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    {totalDays}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { icon: Code, label: "Clean" },
                { icon: Zap, label: "Fast" },
                { icon: Layers, label: "Scalable" },
              ].map((i, idx) => {
                const Icon = i.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black/40 p-2 text-center hover:border-red-500/40 transition"
                  >
                    <Icon size={14} className="mx-auto text-red-500" />
                    <p className="text-[10px] mt-1 text-zinc-500 dark:text-zinc-400">
                      {i.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black/60 backdrop-blur-xl p-5 hover:border-red-500/40 transition"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Contribution Heatmap
              </h3>

              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Last year activity
              </span>
            </div>

            {weeks?.length > 0 ? (
              <Grid weeks={weeks} />
            ) : (
              <div className="text-center text-sm text-red-500 py-10">
                No contribution data found
              </div>
            )}

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">

              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black/40 hover:border-red-500/40 transition">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white">
                  <GitCommit size={14} className="text-red-500" />
                  Consistency
                </div>
                <p className="text-[11px] mt-1 text-zinc-500 dark:text-zinc-400">
                  Daily development workflow and commits.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black/40 hover:border-red-500/40 transition">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white">
                  <Star size={14} className="text-red-500" />
                  Impact
                </div>
                <p className="text-[11px] mt-1 text-zinc-500 dark:text-zinc-400">
                  Production-grade open source contributions.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}