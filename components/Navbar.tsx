"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently on screen
  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "home" ? "" : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-white/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20" aria-label="Main">
        <a href="#home" className="font-heading text-xl font-bold text-ink">
          {profile.name}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.95rem] transition-colors duration-200 hover:text-accent ${
                active === link.href.slice(1) ? "font-semibold text-accent" : "text-ink-soft"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2 text-sm">
            Resume
          </a>
        </div>

        <button
          type="button"
          className="text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-ink-soft hover:bg-mist hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-3 w-full py-2.5 text-sm"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
