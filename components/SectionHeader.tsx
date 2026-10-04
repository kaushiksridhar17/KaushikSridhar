import Reveal from "./Reveal";

type Props = { title: string; subtitle?: string };

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <Reveal className="mb-14 text-center">
      <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-accent" />
      {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">{subtitle}</p>}
    </Reveal>
  );
}
