import { Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";
import { projects, profile } from "@/lib/data";
import { StarIcon, ArrowUpRightIcon, GitHubIcon } from "./icons";

const langColor: Record<string, string> = {
  Python: "#3776ab",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  "C++": "#f34b7d",
  "C#": "#178600",
  CSS: "#563d7c",
};

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionHeading eyebrow="Work" title="Featured projects" />
        </div>
        <Reveal>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-fg)]"
          >
            <GitHubIcon className="h-4 w-4" /> View all on GitHub
          </a>
        </Reveal>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 70}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mono text-base font-semibold text-[var(--color-fg)]">
                  {project.name}
                </h3>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-[var(--color-muted-foreground)] transition-colors group-hover:text-[var(--color-accent-2)]" />
              </div>

              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-muted-foreground)]">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[var(--color-border)] px-2 py-0.5 text-[11px] text-[var(--color-muted-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-border)] pt-4 text-xs text-[var(--color-muted-foreground)]">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: langColor[project.language] ?? "#888" }}
                  />
                  {project.language}
                </span>
                <span className="inline-flex items-center gap-1">
                  <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                  {project.stars}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
