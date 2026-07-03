export const profile = {
  name: "Hazem Meqdad",
  title: "Full Stack Developer",
  location: "Amman, Jordan",
  email: "info@hazemmeqdad.com",
  phone: "+962789383023",
  github: "https://github.com/HazemMeqdad",
  githubUser: "hazemmeqdad",
  linkedin: "https://www.linkedin.com/in/hazemmeqdad",
  resume: "/Hazem-Meqdad-Resume.pdf",
  summary:
    "Full stack developer with 2+ years shipping production apps for web and mobile. I build backends in .NET and Node.js, dashboards in React and Next.js, and mobile apps in React Native and Flutter that are live on Google Play and the App Store. I like owning a project end to end, from designing the API to deploying it on AWS with Docker, Kubernetes, and CI/CD.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Excellence Smart Solutions",
    role: "Full Stack Developer",
    period: "January 2026 — Present",
    location: "Amman, Jordan",
    highlights: [
      "Shipped 8+ production apps in healthcare AI, media streaming, e-commerce, and delivery/logistics. On each one I owned the backend API, the web dashboard, the mobile app, and the cloud deployment.",
      "Built a medical AI diagnostic platform from scratch: a .NET + SQL Server backend, a React.js dashboard, and a Flutter app now on Google Play and the App Store. Set up the production infrastructure on AWS (EKS + EC2) and load-tested it with 100,000 simulated concurrent users.",
      "Designed and launched a live TV streaming platform on my own: a Next.js web app plus a React Native (Expo) mobile app on Google Play.",
      "Took a multi-vendor delivery platform from first commit to launch, including two React Native (Expo) apps on Google Play and the App Store.",
      "Built a news-media content-creation app for mobile, distributed through Apple TestFlight for closed beta testing.",
      "Built the React 19 frontend for a major airline's real-time, large-format flight-tracking display.",
      "Put a mobile e-commerce marketplace app on Google Play and the App Store.",
      "Led the dev team on an AI language-learning platform: broke the work into Jira tasks, assigned them, and tracked progress through delivery.",
    ],
  },
  {
    company: "CSC Beyond",
    role: "Full Stack Developer",
    period: "February 2024 — January 2026",
    location: "Amman, Jordan",
    highlights: [
      "Shipped 9 full-stack projects to production: e-commerce platforms, admin dashboards, AI-powered tools, and marketing landing pages.",
      "Wrote backends in Python (FastAPI), Node.js (Nest.js, Express.js), and PHP (Laravel), with both REST and GraphQL APIs.",
      "Worked in a large engineering team, with Git/GitHub, code reviews, and Jira for task tracking.",
      "Set up CI/CD with GitHub Actions and pull-request workflows to catch problems before staging and production releases.",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native (Expo)",
      "Flutter",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
    ],
  },
  {
    label: "Backend",
    items: [
      ".NET",
      "Nest.js",
      "Express.js",
      "FastAPI",
      "Django",
      "Flask",
      "Laravel (PHP)",
      "GraphQL",
    ],
  },
  {
    label: "State Management",
    items: ["Redux", "Redux Toolkit"],
  },
  {
    label: "Databases",
    items: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "RxDB",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (EKS, EC2)",
      "DigitalOcean",
      "Docker",
      "Docker Swarm",
      "Kubernetes",
      "Nginx",
      "Apache",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    label: "AI-Assisted Dev",
    items: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "ChatGPT",
      "Prompt Engineering",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "lavaplay.py",
    description:
      "A Lavalink node manager for building Discord music bots. My most-starred repo.",
    language: "Python",
    stars: 51,
    url: "https://github.com/HazemMeqdad/lavaplay.py",
    tags: ["Library", "Async", "Audio"],
  },
  {
    name: "discord-cloner",
    description:
      "Clones a Discord server's channels, roles, and structure into a fresh server in a few clicks.",
    language: "Python",
    stars: 15,
    url: "https://github.com/HazemMeqdad/discord-cloner",
    tags: ["Automation", "Discord API"],
  },
  {
    name: "quranbot",
    description:
      "An Islamic Discord bot that sends prayer times and plays the Holy Quran in voice channels.",
    language: "Python",
    stars: 10,
    url: "https://github.com/HazemMeqdad/quranbot",
    tags: ["Bot", "Voice"],
  },
  {
    name: "cdn",
    description:
      "An image and video hosting API with a small panel for uploading and managing files.",
    language: "JavaScript",
    stars: 4,
    url: "https://github.com/HazemMeqdad/cdn",
    tags: ["API", "Storage", "Dashboard"],
  },
  {
    name: "quran-api",
    description:
      "A REST API that serves Quran pages, surahs, and audio from multiple reciters.",
    language: "Python",
    stars: 1,
    url: "https://github.com/HazemMeqdad/quran-api",
    tags: ["REST API"],
  },
  {
    name: "TinyCord",
    description:
      "A small, flexible Discord wrapper for building bots without much boilerplate.",
    language: "Python",
    stars: 1,
    url: "https://github.com/HazemMeqdad/TinyCord",
    tags: ["Library", "Framework"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
