import { FaBrain, FaCode, FaDatabase, FaDesktop, FaServer, FaTools } from "react-icons/fa";
import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const icons = [FaCode, FaServer, FaDesktop, FaDatabase, FaBrain, FaTools];

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-mist">
      <div className="mx-auto max-w-site">
        <SectionHeader title="Skills & Expertise" subtitle="Languages, frameworks and tools I use to build and test software." />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i] ?? FaCode;
            return (
              <Reveal key={group.title} delay={i * 0.06} className="card p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-tint text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="pill transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
