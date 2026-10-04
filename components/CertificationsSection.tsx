import { FaAws, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section bg-mist">
      <div className="mx-auto max-w-site">
        <SectionHeader title="Certifications" />

        <div className="mx-auto grid max-w-3xl gap-6">
          {certifications.map((c) => (
            <Reveal key={c.title} className="card flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center md:p-8">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-tint text-accent">
                <FaAws size={34} />
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-ink-soft">
                  {c.issuer} · {c.code}
                </p>
              </div>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-2.5 text-sm">
                <FaExternalLinkAlt size={12} />
                {c.linkLabel}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
