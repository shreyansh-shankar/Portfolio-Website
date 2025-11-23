export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  category: 'FullStack' | 'DevOps' | 'OpenSource' | 'Design' | 'AI' | 'Mobile';
  color?: string; // Hex code for accent color
  gridClass?: string; // Tailwind classes for Bento Grid (e.g., 'col-span-2 row-span-2')
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  DEVOPS = 'devops',
  SKILLS = 'skills',
  CONTACT = 'contact'
}

export interface TerminalMessage {
  role: 'user' | 'system' | 'assistant';
  content: string;
  timestamp: Date;
}