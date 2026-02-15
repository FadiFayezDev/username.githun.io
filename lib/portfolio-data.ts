export type HeroData = {
  name: string;
  role: string;
  summary: string;
  coverImage: string;
  myPhoto: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Project = {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
};

const buildFix = '.';

export const portfolio = {
  hero: {
    name: "Fadi Fayez",
    role: ".NET Full-Stack Developer | Next.js | UI/UX",
    summary:
      "I design and build clean, high-performance web products with strong backend architecture and modern frontend experience.",
    coverImage: `${buildFix}/profile-cover.jpg`,
    myPhoto: `${buildFix}/MyPhoto.jpg`,
    ctaLabel: "View My Work",
    ctaHref: "#works",
  } satisfies HeroData,
  projects: [
    {
      title: "Stocka",
      description: "Inventory and sales platform with robust APIs and analytics dashboards.",
      image: `${buildFix}/MyWorks/stocka.png`,
      tech: ["ASP.NET Core", "SQL Server", "Next.js"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Next.js Dashboard",
      description: "A modular admin dashboard with reusable widgets and strong UX consistency.",
      image: `${buildFix}/profile-cover.jpg`,
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Desktop Tool",
      description: "Desktop utility to automate reporting and simplify internal team workflows.",
      tech: [".NET", "WPF", "SQL"],
      repoUrl: "#",
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile app with clean architecture and smooth offline behavior.",
      tech: [".NET MAUI", "REST API", "SQLite"],
      repoUrl: "#",
    },
    {
      title: "UI Concept",
      description: "Experimental visual system for dark product interfaces and dashboard patterns.",
      image: `${buildFix}/profile-cover.jpg`,
      tech: ["Figma", "Design System", "Prototyping"],
    },
    {
      title: "Services Platform",
      description: "Multi-role service marketplace with bookings, notifications, and admin controls.",
      tech: ["React", "Node", "PostgreSQL"],
      liveUrl: "#",
    },
  ] satisfies Project[],
  skillGroups: [
    {
      label: "Backend",
      items: ["ASP.NET Core", "Web API", "Entity Framework", "Dapper", "Authentication"],
    },
    {
      label: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", `HTML/CSS`],
    },
    {
      label: "Database",
      items: ["SQL Server", "PostgreSQL", "SQLite", "Query Optimization"],
    },
    {
      label: "Tools",
      items: ["Git", "Docker", "Postman", "Figma"],
    },
  ] satisfies SkillGroup[],
  contactLinks: [
    { label: "Email", href: "fadyfayez.nt@gmail.com" },
    { label: "GitHub", href: "https://github.com/FadiFayezDev" },
    { label: "LinkedIn", href: "https://linkedin.com/in/FadiFayezDev" },
  ] satisfies ContactLink[],
};
