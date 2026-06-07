"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `👋 New Message

Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    window.open(
      `https://wa.me/919960485406?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const socials = [
    {
      label: "WhatsApp",
      handle: "Direct message",
      href: "https://wa.me/919960485406",
      icon: FaWhatsapp,
      color: "#25D366",
    },
    {
      label: "GitHub",
      handle: "Explore my work",
      href: "https://github.com/abhishekjha193",
      icon: FaGithub,
      color: "#181717",
    },
    {
      label: "LinkedIn",
      handle: "Let's connect",
      href: "https://linkedin.com/in/abhishek-jha-594b31268",
      icon: FaLinkedin,
      color: "#0A66C2",
    },
    {
      label: "X",
      handle: "Follow me",
      href: "https://twitter.com/Abhishek_Jha_10",
      icon: FaXTwitter,
      color: "#000000",
    },
    {
      label: "Email",
      handle: "abhibj2003@gmail.com",
      href: "mailto:abhibj2003@gmail.com",
      icon: MdEmail,
      color: "#EA4335",
    },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="section-label mb-4">Contact</p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
            Let&apos;s create something
            <span className="block text-zinc-400">
              worth remembering.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Open for opportunities and
            meaningful collaborations.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.8fr]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              rounded-[32px]
              border
              border-zinc-200
              dark:border-zinc-800
              bg-white
              dark:bg-zinc-900
              p-6 md:p-8
              shadow-sm
            "
          >
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-500">
                  Name
                </label>

                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      name: e.target.value,
                    }))
                  }
                  placeholder="John Doe"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    bg-zinc-50
                    dark:bg-zinc-950
                    px-4
                    outline-none
                    transition
                    focus:border-black
                    dark:focus:border-white
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-500">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      email: e.target.value,
                    }))
                  }
                  placeholder="you@example.com"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    bg-zinc-50
                    dark:bg-zinc-950
                    px-4
                    outline-none
                    transition
                    focus:border-black
                    dark:focus:border-white
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-500">
                  Message
                </label>

                <textarea
                  rows={7}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      message: e.target.value,
                    }))
                  }
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    bg-zinc-50
                    dark:bg-zinc-950
                    p-4
                    outline-none
                    transition
                    focus:border-black
                    dark:focus:border-white
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  mt-2
                  h-14
                  w-full
                  rounded-2xl
                  bg-black
                  text-white
                  dark:bg-white
                  dark:text-black
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  hover:scale-[1.01]
                "
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.form>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    rounded-[28px]
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    bg-white
                    dark:bg-zinc-900
                    p-5
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                      <Icon size={28} style={{ color: social.color }} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-black dark:text-white">
                        {social.label}
                      </h3>

                      <p className="text-sm text-zinc-500">
                        {social.handle}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}