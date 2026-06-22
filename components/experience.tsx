import { Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Career" title="Work experience" />

      <div className="relative">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-[var(--color-border)] sm:left-2.5" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 80}>
              <article className="relative pl-10 sm:pl-12">
                <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-bg)] sm:left-0.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">
                    {exp.role}{" "}
                    <span className="text-[var(--color-accent-2)]">
                      @ {exp.company}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-muted)]">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                  {exp.location}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
