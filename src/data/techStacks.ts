export type TechRow = {
  label: string;
  items: string[];
  direction: "left" | "right";
};

export const TECH_ROWS: TechRow[] = [
  {
    label: "Core Languages & UI",
    items: ["C++", "C#", "Java", "TypeScript", "JavaScript", "React", "Nextjs", "WPF"],
    direction: "left",
  },
  {
    label: "Backend & Database",
    items: ["NestJS", "Nodejs", "Express", "MySQL", "SQLite", "Redis", "TypeORM"],
    direction: "right",
  },
  {
    label: "System & Tools",
    items: ["OpenCV", "Docker", "Nginx", "CMake", "Win32-API", "Github-Actions", "Firebase"],
    direction: "left",
  },
  {
    label: "Monitoring & DevTools",
    items: ["Prometheus", "Grafana", "k6", "Github", "Git", "Notion"],
    direction: "right",
  },
];
