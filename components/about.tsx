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
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-[var(--color-muted-foreground)]">
            <p>
              I&apos;m a full stack developer who likes owning the whole thing:
              the API, the database, the web dashboard, the mobile app, and
              the infrastructure it all runs on.
            </p>
            <p>
              Most of my backend work is in{" "}
              <span className="text-[var(--color-fg)]">.NET</span> and{" "}
              <span className="text-[var(--color-fg)]">Node.js</span>. On the
              web I use <span className="text-[var(--color-fg)]">React</span>{" "}
              and <span className="text-[var(--color-fg)]">Next.js</span>, on
              mobile{" "}
              <span className="text-[var(--color-fg)]">React Native</span> and{" "}
              <span className="text-[var(--color-fg)]">Flutter</span>. I&apos;ve
              taken projects from an idea all the way to production on
              AWS and DigitalOcean, with Docker, Kubernetes, and CI/CD along
              the way.
            </p>
            <p>
              Day to day I also use AI tools like{" "}
              <span className="text-[var(--color-fg)]">Claude Code</span> and{" "}
              <span className="text-[var(--color-fg)]">Cursor</span>. They help
              me ship faster without letting quality slip.
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
                <div className="mt-1 text-xs leading-5 text-[var(--color-muted-foreground)]">
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
