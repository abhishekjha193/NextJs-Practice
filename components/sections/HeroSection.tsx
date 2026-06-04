"use client";

import { motion } from "framer-motion";
import { ArrowDown, Briefcase } from "lucide-react";
import LightRays from "@/components/ui/LightRays";
import Image from "next/image";
import { useRef, useState } from "react";

const stagger = {
  container: {
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  },
  item: {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
      x: (e.clientX - (r.left + r.width / 2)) * 0.5,
      y: (e.clientY - (r.top + r.height / 2)) * 0.5,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      className="relative z-20 mx-auto w-[160px] sm:w-[210px] md:w-[250px]"
    >
      <Image
        src="/b.png"
        alt="Abhishek"
        width={400}
        height={400}
        className="w-full h-auto object-contain select-none pointer-events-none"
        priority
      />
    </motion.div>
  );
}

function Button({
  children,
  href,
  primary,
  shine,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  shine?: boolean;
}) {
  return (
    <a
      href={href}
      className={`
        relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium
        transition-all duration-300 active:scale-95 overflow-hidden w-full sm:w-auto group
        ${
          primary
            ? "bg-red-500 text-white shadow-[0_10px_30px_rgba(239,68,68,0.35)]"
            : "border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur-md text-black dark:text-white"
        }
      `}
    >
      <span className="relative z-10">{children}</span>

      {/* hover sweep (FIXED visibility) */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full" />

      {/* premium shine (FIXED for both themes) */}
      {shine && (
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -top-1/2 left-[-70%] w-[45%] h-[220%] rotate-12 bg-gradient-to-r from-transparent via-red-400/20 to-transparent blur-md animate-shine" />
        </span>
      )}
    </a>
  );
}

export default function HeroSection({
  status = "open",
  currentCompany = "XYZ Company",
}) {
  const isOpen = status === "open";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-background text-foreground overflow-hidden">

      {/* LightRays */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ef4444"
          raysSpeed={0.35}
          lightSpread={0.75}
          rayLength={2.2}
          followMouse
          mouseInfluence={0.05}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={0.9}
        />
      </div>

      {/* radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.12),transparent_60%)]" />

      <motion.div
        variants={stagger.container}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-3xl w-full text-center"
      >

        {/* STATUS */}
        <motion.div variants={stagger.item} className="flex justify-center mb-2 mt-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md text-sm">
            <Briefcase size={14} />
            {isOpen ? (
              <span>
                <span className="text-green-500 font-medium">Open to Work</span>{" "}
                • Available for opportunities
              </span>
            ) : (
              <span>
                Currently at{" "}
                <span className="text-red-500 font-medium">{currentCompany}</span>
              </span>
            )}
          </div>
        </motion.div>

        {/* NAME */}
        <motion.h1
          variants={stagger.item}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
        >
          Abhishek Jha
        </motion.h1>

        {/* ROLE */}
        <motion.p variants={stagger.item} className="mt-2 text-lg sm:text-xl opacity-80">
          Full Stack Web Developer
        </motion.p>

        {/* IMAGE */}
        <motion.div variants={stagger.item} className="my-1">
          <MagneticImage />
        </motion.div>

        {/* TAGLINE */}
        <motion.p
          variants={stagger.item}
          className="text-sm sm:text-base max-w-xl mx-auto opacity-70 leading-relaxed"
        >
          I build scalable, performant and clean UI-driven web applications from idea to production.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={stagger.item}
          className="flex flex-col sm:flex-row gap-2 justify-center mt-5"
        >
          <Button href="#projects" primary>
            View Projects
          </Button>

          <Button href="/resume.pdf" shine>
            Download Resume
          </Button>

          <Button href="#contact" shine>
            Contact Me
          </Button>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          variants={stagger.item}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/30"
            >
              {t}
            </span>
          ))}
        </motion.div>

      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-60"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

    </section>
  );
}