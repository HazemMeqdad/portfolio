import { Section } from "./section";
import { Reveal } from "./reveal";

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "17+", label: "Production apps shipped" },
  { value: "100k", label: "Concurrent users load-tested" },
  { value: "8+", label: "Apps on Play Store & App Store" },
];

export function About() {
  return (
    <Section id="about" className="bg-[var(--color-bg-soft)]">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
            About
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Building products end to end.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-[var(--color-muted)]">
            <p>
              I&apos;m a full stack developer who enjoys owning the whole
              lifecycle from API design and database modeling to polished web
              dashboards, cross-platform mobile apps, and the cloud
              infrastructure that runs them.
            </p>
            <p>
              I work across <span className="text-[var(--color-fg)]">.NET</span>{" "}
              and <span className="text-[var(--color-fg)]">Node.js</span>{" "}
              backends, <span className="text-[var(--color-fg)]">React</span> /{" "}
              <span className="text-[var(--color-fg)]">Next.js</span> on the web,
              and <span className="text-[var(--color-fg)]">React Native</span> /{" "}
              <span className="text-[var(--color-fg)]">Flutter</span>&nbsp;on mobile, and I&apos;m comfortable taking a project from idea to production, including
              shipping to AWS/DigitalOcean with Docker, Kubernetes, and CI/CD.
            </p>
            <p>
              I work fluently with modern AI-assisted development tools like{" "}
              <span className="text-[var(--color-fg)]">Claude Code</span> and{" "}
              <span className="text-[var(--color-fg)]">Cursor</span> to ship
              faster while keeping quality high.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
              >
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
