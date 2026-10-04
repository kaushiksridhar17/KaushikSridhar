import { FaCheck, FaExternalLinkAlt, FaGithub, FaLeaf, FaTicketAlt, FaWallet } from "react-icons/fa";
import { profile, projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const projectIcons: Record<Project["icon"], typeof FaWallet> = {
  finance: FaWallet,
  ticket: FaTicketAlt,
  leaf: FaLeaf,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-white">
      <div className="mx-auto max-w-site">
        <SectionHeader title="Projects" subtitle="End-to-end builds, each tested and measured." />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = projectIcons[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <article className="card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Header band */}
                  <div className="relative flex h-40 items-center justify-center overflow-hidden bg-accent">
                    <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
                    <div aria-hidden className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/5" />
                    <Icon className="relative text-white/90" size={52} />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent">{p.subtitle}</p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{p.description}</p>

                    <ul className="mt-4 space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-ink">
                          <FaCheck className="mt-1 shrink-0 text-accent" size={11} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-5 mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-soft">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-5 border-t border-line pt-4">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
                      >
                        <FaGithub />
                        View code
                      </a>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
                        >
                          <FaExternalLinkAlt size={12} />
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FaGithub />
            More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
