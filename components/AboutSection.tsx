"use client";

import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { about, profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Portrait() {
  // Show initials until the photo (public/kaushik.jpeg) has loaded
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasPhoto(true);
    img.src = profile.photo;
  }, []);

  return (
    <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
      <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-accent/30" />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-accent shadow-lg">
        {hasPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
        ) : (
          <span className="font-heading text-7xl font-bold text-white/90 md:text-8xl">{profile.initials}</span>
        )}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section bg-mist">
      <div className="mx-auto max-w-site">
        <SectionHeader title="About Me" />

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-40}>
            <Portrait />
          </Reveal>

          <Reveal x={40} delay={0.1}>
            <h3 className="font-heading text-2xl font-bold text-ink md:text-3xl">{about.heading}</h3>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              <FaFileDownload />
              Download resume
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
