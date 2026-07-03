import { Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" className="bg-[var(--color-bg-soft)]">
      <SectionHeading eyebrow="Toolbox" title="Skills & technologies" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 70}>
            <div className="card-hover h-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
              <h3 className="text-sm font-semibold text-[var(--color-fg)]">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs text-[var(--color-muted-foreground)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
