export type NavItem = {
  name: string;
  href: string;
  id: string;
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Intro", href: "#intro", id: "intro" },
  { name: "Tech Stack", href: "#tech", id: "tech" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Career", href: "#career", id: "career" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Certification", href: "#certification", id: "certification" },
];
