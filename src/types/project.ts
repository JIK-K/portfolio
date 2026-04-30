export interface Problem {
  title: string;
  description: string;
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  icon?: string;
  problems: Problem[];
  link: string;
  imagePosition: 'left' | 'right';
}
