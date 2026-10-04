import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, profile } from "@/lib/data";

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-white/80 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-site">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#home" className="font-heading text-xl font-bold text-white">
            {profile.name}
          </a>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm transition-colors hover:text-white">
                {l.name}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
