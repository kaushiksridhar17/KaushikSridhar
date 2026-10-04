import { FaBriefcase, FaExternalLinkAlt, FaGraduationCap, FaSchool } from "react-icons/fa";
import { timeline } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const icons = [FaGraduationCap, FaBriefcase, FaSchool];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section bg-white">
      <div className="mx-auto max-w-site">
        <SectionHeader title="Experience & Education" />

        <div className="relative">
          {/* Vertical line */}
          <div aria-hidden className="absolute left-5 top-0 h-full w-0.5 bg-line md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-12">
            {timeline.map((item, i) => {
              const Icon = icons[i] ?? FaBriefcase;
              const leftSide = i % 2 === 0;
              return (
                <li key={item.title} className={`relative flex flex-col md:flex-row ${leftSide ? "md:flex-row-reverse" : ""}`}>
                  {/* Marker */}
                  <span
                    className={`absolute left-5 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 md:left-1/2 ${
                      item.current ? "border-accent bg-accent text-white" : "border-line bg-white text-accent"
                    }`}
                  >
                    <Icon size={16} />
                  </span>

                  <Reveal
                    x={leftSide ? -30 : 30}
                    className={`ml-14 md:ml-0 md:w-1/2 ${leftSide ? "md:pr-14 md:text-right" : "md:pl-14"}`}
                  >
                    <div className="card p-6 transition-shadow duration-300 hover:shadow-md">
                      <span className="inline-block rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold text-accent">
                        {item.period}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-ink">{item.title}</h3>
                      <p className="font-medium text-accent">{item.org}</p>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{item.detail}</p>
                      {item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                        >
                          <FaExternalLinkAlt size={12} />
                          {item.link.label}
                        </a>
                      )}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
