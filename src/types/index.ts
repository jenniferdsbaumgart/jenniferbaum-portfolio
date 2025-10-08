// Core data types
export interface Project {
  id?: string;
  name?: string;
  title: string;
  tagline: string;
  description?: string;
  desc?: string;
  features: string[];
  visualIdentity: string;
  images?: string[];
  links?: {
    github?: string;
    demo?: string;
    figma?: string;
  };
  github?: string;
  demo?: string;
  url?: string;
  technologies?: Technology[];
  tech?: string[];
  techStack?: string[];
  techUsed?: string;
  challenges?: Challenge[];
  challengesAndSolutions?: Challenge[];
  status?: "completed" | "in-progress" | "planned";
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder?: string;
}

export interface Challenge {
  challenge: string;
  solution: string;
}

export interface Technology {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "database" | "tool" | "design";
}

export interface Experience {
  id: string;
  year: number;
  title: string;
  education: string;
  experience: string[];
  skills: Skill[];
  achievements: Achievement[];
}

export interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: Date;
}

// Translation types
export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    saudation: string;
    contactButton: string;
  };
  about: {
    title: string;
    aboutText: string;
  };
  experience: {
    title: string;
    educationTitle: string;
    experienceTitle: string;
    experienceData: {
      year: number;
      title: string;
      education: string;
      experience: string[];
    }[];
  };
  projects: {
    title: string;
    projectsData: {
      title: string;
      tagline: string;
      description: string;
      features: string[];
      visualIdentity: string;
      images: string[];
      github?: string;
      demo?: string;
      tech: string[];
      techUsed: string;
      challengesAndSolutions?: {
        challenge: string;
        solution: string;
      }[];
    }[];
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submitButton: string;
    };
    thankYouMessage: string;
  };
}

// Theme types
export type Theme = "light" | "dark" | "system";
export type Language = "en" | "pt";

// Component prop types
export interface NavbarProps {
  id: string;
}

export interface HeroIconItem {
  id: string;
  icon: React.ReactNode;
  url: string;
}

export interface NavbarItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// Context types
export interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  translations: Translation;
}

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: "light" | "dark";
}

// Utility types for component variants
export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type CardVariant = "default" | "elevated" | "outlined";
export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

// Animation types
export interface MotionProps {
  initial?: object;
  animate?: object;
  transition?: object;
  whileHover?: object;
  whileTap?: object;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// SEO and metadata types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: "website" | "article";
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    image: string;
  };
}

// Layout types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string | string[] | undefined>;
}

// Window and DOM types
export interface WindowOffset {
  innerWidth: number;
  innerHeight: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

// API types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormResponse extends APIResponse {
  data?: {
    messageId: string;
  };
}
