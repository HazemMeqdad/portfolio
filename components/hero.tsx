"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { profile } from "@/lib/data";
import { ParticleField } from "@/components/ui/aether-flow-hero";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  DownloadIcon,
  ArrowUpRightIcon,
} from "./icons";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="ambient relative overflow-hidden px-6 pt-36 pb-20 sm:pt-44"
    >
      <ParticleField
        particleColor="rgba(129, 140, 248, 0.7)"
        lineRgb="99, 102, 241"
        highlightRgb="34, 211, 238"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:gap-14 md:text-left">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="relative shrink-0"
        >
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent-2)] opacity-30 blur-2xl" />
          <Image
            src="/avatar.jpeg"
            alt={profile.name}
            width={176}
            height={176}
            priority
            className="animate-float relative h-40 w-40 rounded-full border border-[var(--color-border)] object-cover sm:h-44 sm:w-44"
          />
        </motion.div>

        <div className="flex flex-col items-center md:items-start">
          <motion.span
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs text-[var(--color-muted-foreground)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </motion.span>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl font-medium sm:text-2xl">
              <span className="gradient-text">{profile.title}</span>
            </p>
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--color-muted-foreground)]"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-5 flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]"
          >
            <MapPinIcon className="h-4 w-4" />
            {profile.location}
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-indigo-500"
            >
              Get in touch <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-accent-2)]"
            >
              <DownloadIcon className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-7 flex items-center gap-3"
          >
            <SocialLink href={profile.github} label="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <MailIcon className="h-5 w-5" />
            </SocialLink>
          </motion.div>
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
    >
      {children}
    </a>
  );
}
