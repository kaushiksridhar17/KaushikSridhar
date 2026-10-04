"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { profile } from "@/lib/data";

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 pt-20">
      {/* Soft background shape */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-tint" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div {...rise(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm text-ink-soft">
          <HiOutlineLocationMarker className="text-accent" />
          {profile.location}
        </motion.div>

        <motion.h1 {...rise(0.08)} className="font-heading text-5xl font-bold text-ink md:text-6xl lg:text-7xl">
          {profile.name}
        </motion.h1>

        <motion.p {...rise(0.16)} className="mt-4 text-xl font-semibold text-accent md:text-2xl">
          {profile.role}
        </motion.p>

        <motion.p {...rise(0.24)} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {profile.summary}
        </motion.p>

        <motion.div {...rise(0.32)} className="mt-9 flex justify-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="icon-circle h-12 w-12 bg-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div {...rise(0.4)} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Download resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
