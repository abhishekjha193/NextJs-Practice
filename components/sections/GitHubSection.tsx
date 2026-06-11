"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitCommit } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Props {
  data: any;
}

function Grid({ weeks }: any) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[680px] grid grid-rows-7 grid-flow-col gap-[3px]">
        {weeks.map((w: any, i: number) =>
          w.contributionDays.map((d: any, j: number) => {
            const level =
              d.contributionCount === 0
                ? "bg-zinc-200/40 dark:bg-zinc-800/40"
                : d.contributionCount < 3
                ? "bg-red-500/30"
                : d.contributionCount < 6
                ? "bg-red-500/50"
                : d.contributionCount < 10
                ? "bg-red-500/80"
                : "bg-red-500";

            return (
              <div
                key={`${i}-${j}`}
                title={`${d.contributionCount} contributions`}
                className={`w-[8px] h-[8px] rounded-[2px] transition hover:scale-125 ${level}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default function GitHubSection({ data }: Props) {
  if (!data) {
    return (
      <SectionWrapper id="github">
        <div className="text-center text-sm text-zinc-500 py-10">
          Loading GitHub activity...
        </div>
      </SectionWrapper>
    );
  }

  const weeks = data.weeks;
  const total = data.totalContributions;

  return (
    <SectionWrapper id="github">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-[10px] tracking-[0.4em] text-red-500 uppercase">
            GitHub Activity
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
            Contribution Heatmap
          </h2>

          <a
            href={data.url}
            target="_blank"
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-red-500 transition"
          >
            @{data.login}
            <ExternalLink size={12} />
          </a>
        </motion.div>

        {/* SINGLE COMPACT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="
            rounded-2xl border
            border-zinc-200/60 dark:border-zinc-800
            bg-white/60 dark:bg-black/30
            backdrop-blur-xl
            p-4 md:p-5
          "
        >

          {/* INLINE STATS */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">

            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span>
                <span className="text-zinc-900 dark:text-white font-semibold">
                  {data.repos}
                </span>{" "}
                repos
              </span>

              <span>
                <span className="text-red-500 font-semibold">
                  {total}
                </span>{" "}
                commits
              </span>
            </div>

            <div className="flex items-center gap-1 text-[10px] text-zinc-500">
              <GitCommit size={12} className="text-red-500" />
              Active dev
            </div>
          </div>

          {/* GRAPH */}
          {weeks?.length ? (
            <Grid weeks={weeks} />
          ) : (
            <div className="text-center text-sm text-red-500 py-6">
              No data available
            </div>
          )}

        </motion.div>
      </div>
    </SectionWrapper>
  );
}