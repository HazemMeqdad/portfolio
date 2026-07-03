import { Section } from "./section";
import { Reveal } from "./reveal";
import { profile } from "@/lib/data";
import {
  MailIcon,
  PhoneIcon,
  GitHubIcon,
  LinkedInIcon,
  ArrowUpRightIcon,
} from "./icons";

export function Contact() {
  return (
    <Section id="contact" className="bg-[var(--color-bg-soft)]">
      <Reveal>
        <div className="ambient overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center sm:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s work together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-[var(--color-muted-foreground)]">
            Have a project in mind, or just want to say hi? Send me an email
            and I&apos;ll get back to you as soon as I can.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-indigo-500"
          >
            <MailIcon className="h-4 w-4" /> {profile.email}
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[var(--color-muted-foreground)]">
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-fg)]"
            >
              <PhoneIcon className="h-4 w-4" /> {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-fg)]"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub{" "}
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-fg)]"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn{" "}
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-[var(--color-muted-foreground)] sm:flex-row">
        <p>
          © {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p className="font-mono">{profile.title}</p>
      </div>
    </footer>
  );
}
