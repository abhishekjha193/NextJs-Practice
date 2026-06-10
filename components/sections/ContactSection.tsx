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

    const text = `New Message\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;

    window.open(
      `https://wa.me/919960485406?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/919960485406", color: "#25D366" },
    { label: "GitHub", icon: FaGithub, href: "https://github.com/abhishekjha193" },
    { label: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/abhishek-jha-594b31268", color: "#0A66C2" },
    { label: "Twitter", icon: FaXTwitter, href: "https://twitter.com/Abhishek_Jha_10" },
    { label: "Email", icon: MdEmail, href: "mailto:abhibj2003@gmail.com", color: "#EA4335" },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-4xl px-4">

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[10px] tracking-[0.35em] text-red-500 uppercase mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Connect with me
          </h2>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Open for opportunities & collaborations
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 md:p-6 space-y-3"
          >
            <div className="relative space-y-3">

              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Name"
                className="w-full h-11 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-zinc-900 dark:focus:border-white transition"
              />

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="Email"
                className="w-full h-11 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-zinc-900 dark:focus:border-white transition"
              />

              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Message"
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 outline-none resize-none focus:border-zinc-900 dark:focus:border-white transition"
              />

              <button
                type="submit"
                className="w-full h-11 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium flex items-center justify-center gap-2 transition active:scale-[0.98]"
              >
                <Send size={16} />
                Send Message
              </button>
            </div>
          </motion.form>

          <div className="flex flex-row lg:flex-col justify-center lg:items-start gap-4">

            {socials.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="
                    group flex items-center justify-center
                    h-12 w-12 lg:w-full lg:h-auto lg:px-4 lg:py-3
                    rounded-2xl
                    border border-zinc-200 dark:border-zinc-800
                    bg-white dark:bg-zinc-900
                    hover:shadow-lg hover:-translate-y-1
                    transition-all duration-300
                    lg:justify-start lg:gap-3
                    text-zinc-900 dark:text-white
                  "
                >
                  <Icon size={20} className="shrink-0" style={s.color ? { color: s.color } : undefined} />

                  <span className="hidden lg:block text-sm font-medium">
                    {s.label}
                  </span>
                </motion.a>
              );
            })}

          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}