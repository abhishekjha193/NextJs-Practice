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
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-8"
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
        <motion.div variants={stagger.item} className="my-1">
          <MagneticImage />
        </motion.div>

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
            <span className="text-green-500 font-medium">Currently Working As Full Stack Intern</span>          
          </span>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          variants={stagger.item}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-4 w-full sm:w-auto"
        >
          <Button href="#projects" primary>
            View Projects
          </Button>
          <Button href="/resume.pdf">Download Resume</Button>
          <Button href="#contact">Contact Me</Button>
        </motion.div>

        {/* SCROLL INDICATOR - LEFT */}
        <div
          className="
  pointer-events-none absolute
  left-2 sm:left-4 md:left-8 lg:left-14 xl:left-20
  top-16 sm:top-20 md:top-24 lg:top-40
  z-30
  opacity-25 sm:opacity-30 md:opacity-40
  transition-opacity
"
        >
          <div className="flex flex-col items-center gap-3 scale-75 sm:scale-90 md:scale-100">
            {/* MOUSE */}
            <div
              className="
      h-12 w-7 sm:h-14 sm:w-8 md:h-16 md:w-9 lg:h-20 lg:w-10
      rounded-full border border-zinc-400/40 dark:border-red-500/40
      flex items-center justify-center backdrop-blur-sm
    "
            >
              <div className="w-1 h-3 sm:h-4 bg-red-500 rounded-full animate-scroll-wheel" />
            </div>

            {/* ARROW */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* SCROLL INDICATOR - RIGHT */}
        <div
          className="
  pointer-events-none absolute
  right-2 sm:right-4 md:right-8 lg:right-14 xl:right-20
  top-16 sm:top-20 md:top-24 lg:top-40
  z-30
  opacity-25 sm:opacity-30 md:opacity-40
  transition-opacity
"
        >
          <div className="flex flex-col items-center gap-3 scale-75 sm:scale-90 md:scale-100">
            {/* MOUSE */}
            <div
              className="
      h-12 w-7 sm:h-14 sm:w-8 md:h-16 md:w-9 lg:h-20 lg:w-10
      rounded-full border border-zinc-400/40 dark:border-red-500/40
      flex items-center justify-center backdrop-blur-sm
    "
            >
              <div className="w-1 h-3 sm:h-4 bg-red-500 rounded-full animate-scroll-wheel" />
            </div>

            {/* ARROW */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* TECH STACK */}
        <motion.div
          variants={stagger.item}
          className="relative mt-2 w-full overflow-hidden bg-transparent"
        >
          {/* SIDE GLOW LINES */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/40 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/40 to-transparent" />

          <div className="space-y-4 py-5 overflow-hidden">
            {/* ROW 1 - LEFT TO RIGHT */}
            <div className="flex w-max gap-3 animate-marqueeLeft">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React.js",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Redux",
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "Redis",
                "REST APIs",
                "JWT Auth",
                "Git",
                "Postman",
              ].map((tech, i) => (
                <span
                  key={`r1-${i}`}
                  className="
            px-4 py-2 text-xs sm:text-sm font-medium
            rounded-full shrink-0
            border border-zinc-200/60 dark:border-zinc-800/60
            bg-white/60 dark:bg-zinc-900/40
            backdrop-blur-xl
            text-zinc-700 dark:text-zinc-300
            transition-all duration-300
            hover:scale-105 hover:-translate-y-1
            hover:border-red-400/60 hover:text-red-500
            cursor-default
          "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ROW 2 - RIGHT TO LEFT */}
            <div className="flex w-max gap-3 animate-marqueeRight">
              {[
                "LangChain",
                "LangGraph",
                "AI Integration",
                "Prompt Engineering",
                "Vercel",
                "Render",
                "GitHub",
                "OOP",
                "MVC",
                "API Design",
                "Authentication",
                "Client-Server",
                "Debugging",
                "Performance Optimization",
              ].map((tech, i) => (
                <span
                  key={`r2-${i}`}
                  className="
            px-4 py-2 text-xs sm:text-sm font-medium
            rounded-full shrink-0
            border border-zinc-200/60 dark:border-zinc-800/60
            bg-white/60 dark:bg-zinc-900/40
            backdrop-blur-xl
            text-zinc-700 dark:text-zinc-300
            transition-all duration-300
            hover:scale-105 hover:-translate-y-1
            hover:border-red-400/60 hover:text-red-500
            cursor-default
          "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
