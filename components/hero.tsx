import Image from "next/image";
import { profile } from "@/lib/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  DownloadIcon,
  ArrowUpRightIcon,
} from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="ambient relative overflow-hidden px-6 pt-36 pb-20 sm:pt-44"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:gap-14 md:text-left">
        <div className="relative shrink-0">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] opacity-30 blur-2xl" />
          <Image
            src="/avatar.jpeg"
            alt={profile.name}
            width={176}
            height={176}
            priority
            className="animate-float relative h-40 w-40 rounded-full border border-[var(--color-border)] object-cover sm:h-44 sm:w-44"
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs text-[var(--color-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-xl font-medium sm:text-2xl">
            <span className="gradient-text">{profile.title}</span>
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--color-muted)]">
            {profile.summary}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <MapPinIcon className="h-4 w-4" />
            {profile.location}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-indigo-500"
            >
              Get in touch <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
            >
              <DownloadIcon className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <SocialLink href={profile.github} label="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <MailIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
    >
      {children}
    </a>
  );
}
