export type ProjectNavItem = {
  id: string;
  num: string;
  label: string;
};

export const PROJECT_NAV_ITEMS: ProjectNavItem[] = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "stack", num: "02", label: "Tech Stack" },
  { id: "architecture", num: "03", label: "Architecture" },
  { id: "features", num: "04", label: "Key Features" },
  { id: "challenges", num: "05", label: "Challenges" },
  { id: "optimization", num: "06", label: "Core Logic" },
  { id: "retrospective", num: "07", label: "Retrospective" },
  { id: "links", num: "08", label: "Links" },
];
