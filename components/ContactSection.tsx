"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const details = [
  { icon: FaEnvelope, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaMapMarkerAlt, label: "Location", value: profile.location },
];

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
];

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app with the message filled in
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="mx-auto max-w-site">
        <SectionHeader
          title="Get in Touch"
          subtitle="I'm open to software engineering roles in backend and full-stack development."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal x={-30} className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-ink">Contact details</h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Email is the quickest way to reach me. You can also use the form, which opens a pre-filled email in
              your mail app.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-tint text-accent">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-sm text-ink-soft">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-ink hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-circle">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal x={30} delay={0.1} className="lg:col-span-3">
            <form onSubmit={submit} className="card space-y-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                    Name
                  </label>
                  <input id="name" name="name" required value={form.name} onChange={update} className={field} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update}
                    className={field}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update}
                  className={`${field} resize-none`}
                  placeholder="Write your message"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <FaPaperPlane size={14} />
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
