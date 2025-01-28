import type { Project } from '~/types'

export const devmon: Project = {
  id: 10,
  title: "Devmon: Algorithm Problem-Solving Assistant",
  description: "Devmon is a comprehensive assistant for solving algorithmic problems. It provides detailed explanations, recommended algorithms, step-by-step approaches, pseudocode, Python code, and complexity analysis to enhance learning efficiency and problem-solving skills.",
  category: "LLM",
  status: "completed",
  technologies: [
    "GPT-4",
    "Node.js",
    "React.js",
    "Crawling API"
  ],
  team: [
    { id: 1, name: "Dongyeon Kim", role: "Backend Developer" },
    { id: 2, name: "Minjong Kim", role: "Frontend Developer" }
  ],
  github: undefined,
  demo: undefined,
  projectImage: "/images/projects/devmon.png",
  highlights: [
    "Generates tailored problem-solving explanations with pseudocode and Python code",
    "Supports beginner to advanced users with algorithmic insights",
    "Optimized prompts for error handling and user-friendly outputs",
    "Integrates real-time problem analysis with Baekjoon Online Judge and Solved.ac",
    "Reduces cognitive load by providing structured and concise solutions"
  ],
  presentation: "/files/presentations/devmon.pdf",
  introduction: "Devmon is an LLM-powered assistant designed to enhance algorithmic problem-solving skills through comprehensive explanations and guided learning approaches.",
  coreFeatures: [
    {
      title: "Detailed Explanations",
      description: "Provides algorithm recommendations, descriptions, and step-by-step solutions"
    },
    {
      title: "Code Generation",
      description: "Generates pseudocode and Python implementations with complexity analysis"
    },
    {
      title: "Interactive Learning",
      description: "Offers error resolution and code comparison features"
    },
    {
      title: "Problem Analysis",
      description: "Real-time integration with Baekjoon Online Judge and Solved.ac"
    }
  ],
  targetAudience: [
    {
      group: "Beginner",
      range: "0-6 months coding experience",
      description: "Students learning basic algorithms and data structures"
    },
    {
      group: "Intermediate",
      range: "6 months - 2 years coding experience",
      description: "Developers preparing for coding interviews"
    },
    {
      group: "Advanced",
      range: "2+ years coding experience",
      description: "Experienced developers looking to optimize solutions"
    }
  ],
  userFlow: [
    {
      step: "Problem Input",
      description: "User submits problem URL from supported platforms"
    },
    {
      step: "Analysis",
      description: "System processes and analyzes the problem requirements"
    },
    {
      step: "Solution Generation",
      description: "Provides explanations, code, and related problems"
    }
  ],
  technicalPipeline: [
    {
      title: "Frontend",
      technology: "React.js",
      description: "Interactive user interface for problem solving"
    },
    {
      title: "Backend",
      technology: "Node.js",
      description: "API handling and solution generation"
    },
    {
      title: "LLM Integration",
      technology: "GPT-4",
      description: "Intelligent solution generation and explanations"
    },
    {
      title: "Data Collection",
      technology: "Crawling API",
      description: "Problem and related content retrieval"
    }
  ],
  expectedOutcomes: [
    "100% accuracy for Bronze tier problems",
    "92% accuracy for Silver tier problems",
    "56% accuracy for Gold tier problems",
    "Improved learning efficiency and problem-solving skills"
  ],
  expansionPlans: [
    "Implementation of tier-specific explanations",
    "Enhanced error analysis and debugging features",
    "Optimization of GPT models for different problem complexities",
    "Integration with additional coding platforms"
  ],
  developmentNotes: "Performance varies significantly by problem tier, with response times averaging 16-24 seconds. Future optimizations will focus on improving accuracy for higher-tier problems."
} 