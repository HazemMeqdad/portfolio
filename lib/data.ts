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
    "Full Stack Developer with 2+ years of experience building and shipping production applications across web and mobile. Skilled across the full stack .NET and Node.js backends, React/Next.js dashboards, and React Native and Flutter mobile apps published to Google Play and the App Store. Comfortable owning projects end to end, from API design to cloud deployment on AWS with Docker, Kubernetes, and CI/CD pipelines.",
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
      "Delivered 8+ production applications end-to-end across healthcare AI, media streaming, e-commerce, and delivery/logistics owning backend APIs, web dashboards, mobile apps, and cloud deployment.",
      "Built a medical AI diagnostic platform from the ground up: a .NET + SQL Server backend, a React.js dashboard, and a Flutter mobile app published to Google Play and the App Store. Provisioned the production infrastructure on AWS (EKS + EC2) and validated scalability with a load test simulating 100,000 concurrent users.",
      "Single-handedly designed and launched a live TV streaming platform a Next.js web app paired with a React Native (Expo) mobile app published to Google Play.",
      "Delivered a multi-vendor delivery platform from A to Z, including two React Native (Expo) mobile apps published to Google Play and the App Store.",
      "Built and shipped a mobile news-media content-creation app, distributed through Apple TestFlight for closed beta testing.",
      "Built the React 19 frontend for a real-time, large-format flight-tracking display for a major airline.",
      "Published a mobile e-commerce marketplace app to Google Play and the App Store.",
      "Led the development team on an AI language-learning platform, breaking work into Jira tasks, assigning them, and tracking the team's progress through delivery.",
    ],
  },
  {
    company: "CSC Beyond",
    role: "Full Stack Developer",
    period: "February 2024 — January 2026",
    location: "Amman, Jordan",
    highlights: [
      "Built and shipped 9 full-stack projects to production, spanning e-commerce platforms, admin dashboards, AI-powered tools, and marketing landing pages.",
      "Developed backends in Python (FastAPI), Node.js (Nest.js, Express.js), and PHP (Laravel), exposing both REST and GraphQL APIs.",
      "Collaborated within a large engineering team using Git/GitHub, code reviews, and Jira for task management.",
      "Set up CI/CD pipelines with GitHub Actions and used pull-request workflows to maintain code quality before staging and production releases.",
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
      "A Lavalink nodes manager for building feature-rich music bots for Discord. The library most starred on my GitHub.",
    language: "Python",
    stars: 51,
    url: "https://github.com/HazemMeqdad/lavaplay.py",
    tags: ["Library", "Async", "Audio"],
  },
  {
    name: "discord-cloner",
    description:
      "A tool to clone Discord servers channels, roles, and structure into a fresh server in a few clicks.",
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
      "An images & videos hosting API with a simple panel to upload and manage files.",
    language: "JavaScript",
    stars: 4,
    url: "https://github.com/HazemMeqdad/cdn",
    tags: ["API", "Storage", "Dashboard"],
  },
  {
    name: "quran-api",
    description:
      "A REST API serving Quran pages, surahs, and audio from multiple reciters.",
    language: "Python",
    stars: 1,
    url: "https://github.com/HazemMeqdad/quran-api",
    tags: ["REST API"],
  },
  {
    name: "TinyCord",
    description:
      "An easy and flexible Discord wrapper for building Discord bots with minimal boilerplate.",
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
