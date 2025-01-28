export interface Student {
  id: string;
  name: string;
  photo: string;
  role: string;
  location: string;
  nationality: string;
  bio: string;
  currentProject: string;
  isAvailable?: boolean;
  email?: string;
  mentor: {
    name: string;
    company: string;
    role: string;
  };
  technologies: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  education: string;
  interests: string[];
  resume: string;
  story?: {
    content: string;
  };
} 