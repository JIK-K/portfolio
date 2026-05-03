export interface Problem {
  title: string;
  description: string;
}

export interface ProjectDetail {
  overview: {
    description: string;
    period: string;
    role: string;
    goal?: string;
  };
  techStack: {
    categories: { label: string; items: string[] }[];
    mainLibraries?: { name: string; reason: string }[];
  };
  architecture?: {
    description: string;
    diagram?: string;
    tree?: string;
  };
  features: {
    title: string;
    description: string;
    image?: string;
  }[];
  challenges: {
    title: string;
    problem: string;
    solution: string;
    result: string;
  }[];
  optimizations: {
    title: string;
    description: string;
    metric?: string;
  }[];
  retrospective: {
    learned: string;
    achievement: string;
  };
  links: {
    label: string;
    url: string;
  }[];
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  icon?: string;
  problems: Problem[];
  link: string;
  imagePosition: 'left' | 'right';
  details: ProjectDetail;
}
