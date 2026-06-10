"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import LightRays from "@/components/ui/LightRays";
import Image from "next/image";
import { useRef, useState } from "react";

const stagger = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

function MagneticImage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const move = (e: any) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;

    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * 0.2,
      y: (e.clientY - (r.top + r.height / 2)) * 0.2,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="relative mx-auto w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]"
    >
      <Image
        src="/b.png"
        alt="profile"
        width={600}
        height={600}
        className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
        priority
      />
    </motion.div>
  );
}

function Button({
  children,
  href,
  primary,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={`
        relative inline-flex items-center justify-center
        w-full sm:w-auto
        h-12
        px-6
        rounded-xl
        text-sm font-medium
        transition-all duration-300 active:scale-95
        overflow-hidden
        ${
          primary
            ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
            : "border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-black/30 text-zinc-900 dark:text-white backdrop-blur-md"
        }
      `}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center
    px-5 sm:px-6 overflow-hidden bg-background text-foreground
    pt-14 sm:pt-16"
    >
      {" "}
      {/* <-- padding top to avoid navbar overlap */}
      {/* Background */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ef4444"
          raysSpeed={0.25}
          lightSpread={0.7}
          rayLength={2}
          followMouse
          mouseInfluence={0.04}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={0.9}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.10),transparent_65%)]" />
      <motion.div
        variants={stagger.container}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center"
      >
        {/* NAME */}
        <motion.h1
          variants={stagger.item}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
        >
          Abhishek Jha
        </motion.h1>

        {/* ROLE */}
        <motion.p
          variants={stagger.item}
          className="mt-2 text-sm sm:text-lg text-zinc-600 dark:text-zinc-300"
        >
          Full Stack Developer
        </motion.p>

        {/* IMAGE */}
        <motion.div variants={stagger.item} className="my-5">
          <MagneticImage />
        </motion.div>

        {/* TAGLINE */}
        {/* <motion.p
          variants={stagger.item}
          className="text-xs sm:text-base max-w-xl mx-auto text-zinc-500 dark:text-zinc-400 leading-relaxed px-2"
        >
          I build scalable, performant and clean UI-driven web applications from
          idea to production.
        </motion.p> */}

        {/* OPEN TO WORK BADGE */}
        <motion.div
          variants={stagger.item}
          className="
    flex items-center justify-center
    gap-2
    max-w-xl mx-auto
    px-3 py-1.5
    rounded-full
    border border-green-500/20
    bg-green-500/5
    text-xs sm:text-sm
    text-zinc-600 dark:text-zinc-300
  "
        >
          {/* GREEN PULSE DOT */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>

          <span className="text-center">
            <span className="text-green-500 font-medium">Open to Work</span> —
            Available for Full Stack Roles
          </span>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          variants={stagger.item}
          className="flex flex-col sm:flex-row gap-2 justify-center mt-6 w-full sm:w-auto"
        >
          <Button href="#projects" primary>
            View Projects
          </Button>
          <Button href="/resume.pdf">Download Resume</Button>
          <Button href="#contact">Contact Me</Button>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          variants={stagger.item}
          className="flex flex-wrap justify-center gap-2 mt-7 px-2"
        >
          {["React", "Express.js", "TypeScript", "Node.js", "MongoDB"].map(
            (t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[10px] sm:text-xs rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-black/30 text-zinc-600 dark:text-zinc-300"
              >
                {t}
              </span>
            ),
          )}
        </motion.div>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-50"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
