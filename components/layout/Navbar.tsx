"use client";

import { memo, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Search, Sparkles } from "lucide-react";

import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const NavbarLink = memo(({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="
        group relative
        px-4 py-2
        rounded-2xl
        text-sm font-medium
        transition-all duration-300
      "
    style={{
      color: "var(--text-secondary)",
    }}
  >
    {/* HOVER BG */}
    <span
      className="
          absolute inset-0
          rounded-2xl
          opacity-0 scale-95
          transition-all duration-300
          group-hover:opacity-100
          group-hover:scale-100
        "
      style={{
        background: "var(--surface-hover)",
      }}
    />

    {/* LABEL */}
    <span className="relative z-10">{label}</span>

    {/* ACTIVE DOT */}
    <span
      className="
          absolute -bottom-0.5 left-1/2
          h-1 w-1
          -translate-x-1/2
          rounded-full
          bg-red-500
          opacity-0
          transition-all duration-300
          group-hover:opacity-100
        "
    />
  </Link>
));

NavbarLink.displayName = "NavbarLink";

export default function Navbar() {
  const { theme, toggle } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerSearch = useCallback(() => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      bubbles: true,
    });

    window.dispatchEvent(event);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div
          className="
            relative overflow-hidden
            rounded-[32px]
            border
            transition-all duration-300
          "
          style={{
            borderColor:
              theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",

            background:
              theme === "dark"
                ? scrolled
                  ? "rgba(10,10,10,0.92)"
                  : "rgba(10,10,10,0.82)"
                : scrolled
                  ? "rgba(255,255,255,0.75)"
                  : "rgba(255,255,255,0.55)",

            backdropFilter: "blur(30px)",

            WebkitBackdropFilter: "blur(30px)",

            boxShadow:
              theme === "dark"
                ? "0 20px 60px rgba(0,0,0,0.65)"
                : "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >
          {/* PREMIUM LIGHT */}
          <div
            className="
              absolute inset-0 opacity-70
              pointer-events-none
            "
            style={{
              background:
                theme === "dark"
                  ? "radial-gradient(circle at top right, rgba(239,68,68,0.10), transparent 32%)"
                  : "radial-gradient(circle at top right, rgba(239,68,68,0.08), transparent 30%)",
            }}
          />

          <nav
            className="
              relative z-10
              flex items-center justify-between
              px-5 sm:px-6
              py-3.5
            "
          >
            {/* LOGO */}
            <Link
              href="#hero"
              className="
                group flex items-center gap-3
                min-w-fit
              "
            >
              {/* PREMIUM LOGO */}
              <div className="relative">
                {/* SOFT GLOW */}
                <div
                  className="
                    absolute inset-0
                    rounded-full
                    blur-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all duration-500
                  "
                  style={{
                    background:
                      "radial-gradient(circle, rgba(239,68,68,0.22), transparent 70%)",
                  }}
                />

                {/* IMAGE */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-full
                    transition-all duration-300
                    group-hover:scale-105
                  "
                >
                  <Image
                    src="/a.png"
                    alt="Abhishek Jha"
                    width={46}
                    height={46}
                    priority
                    quality={100}
                    className="
                      rounded-full
                      object-cover
                      shadow-[0_6px_25px_rgba(0,0,0,0.12)]
                    "
                  />
                </div>
              </div>

              {/* NAME */}
              <div className="hidden sm:block">
                <h2
                  className="
                    text-[15px]
                    font-semibold
                    tracking-tight
                  "
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  Abhishek Jha
                </h2>

                <p
                  className="
                    flex items-center gap-1.5
                    text-[11px]
                    mt-0.5
                  "
                  style={{
                    color: "var(--text-tertiary)",
                  }}
                >
                  <Sparkles size={10} className="text-red-500" />
                  Full Stack Developer
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavbarLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-2">
              {/* SEARCH */}
              <button
                onClick={triggerSearch}
                aria-label="Search"
                className="
                  hidden sm:flex
                  items-center justify-center
                  w-10 h-10
                  rounded-2xl
                  transition-all duration-300
                  hover:scale-105
                  active:scale-95
                "
                style={{
                  background: "var(--surface-hover)",
                  color: "var(--text-secondary)",
                }}
              >
                <Search size={16} />
              </button>

              {/* THEME */}
              <button
                onClick={toggle}
                aria-label="Toggle Theme"
                className="
                  flex items-center justify-center
                  w-10 h-10
                  rounded-2xl
                  transition-all duration-300
                  hover:scale-105
                  active:scale-95
                "
                style={{
                  background: "var(--surface-hover)",
                  color: "var(--text-secondary)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* MOBILE MENU */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
                className="
                  lg:hidden
                  flex items-center justify-center
                  w-10 h-10
                  rounded-2xl
                  transition-all duration-300
                "
                style={{
                  background: "var(--surface-hover)",
                  color: "var(--text-secondary)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={menuOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuOpen ? <X size={18} /> : <Menu size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </nav>

          {/* MOBILE NAV */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  lg:hidden
                  overflow-hidden
                "
              >
                <div
                  className="
                    border-t
                    px-4 pb-4 pt-3
                    flex flex-col gap-1
                  "
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="
                        rounded-2xl
                        px-4 py-3
                        text-sm font-medium
                        transition-all duration-300
                      "
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
