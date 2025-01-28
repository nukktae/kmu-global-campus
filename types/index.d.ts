export interface TeamMember {
  id: number;
  name: string;
  role: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface AgeGroup {
  group: string;
  range: string;
  description: string;
}

export interface EducationalBenefit {
  category: string;
  description: string;
}

export interface PipelineStep {
  title: string;
  technology: string;
  description: string;
}

export interface UserFlow {
  step: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'FullStack' | 'AWS' | 'LLM';
  status: 'completed' | 'in-progress' | 'planned';
  technologies: string[];
  team: TeamMember[];
  github?: string;
  demo?: string;
  projectImage: string;
  highlights: string[];
  presentation?: string;
  introduction?: string;
  features?: Feature[];
  coreFeatures?: Feature[];
  targetAudience?: AgeGroup[];
  educationalBenefits?: EducationalBenefit[];
  expectedOutcomes?: string[];
  userFlow?: UserFlow[];
  technicalPipeline?: PipelineStep[];
  ageGroupCustomization?: Record<string, string>;
  expansionPlans?: string[];
  developmentNotes?: string;
} 