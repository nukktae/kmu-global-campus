import type { Project } from '~/types'

export const hrm: Project = {
  id: 8,
  title: "HRM: Restaurant Menu Translator",
  description: "HRM is a restaurant menu translator designed specifically for Korean travelers abroad. It leverages AI to recognize, translate, and summarize restaurant menus while addressing challenges such as mixed-language descriptions and inaccurate menu counts.",
  category: "LLM",
  status: "completed",
  technologies: [
    "GPT-4",
    "Google OCR",
    "Papago",
    "Few-Shot Learning"
  ],
  team: [
    { id: 1, name: "Anu B", role: "AI Developer" },
    { id: 2, name: "Kyoungin Nam", role: "AI Developer" }
  ],
  github: undefined,
  demo: undefined,
  projectImage: "/images/projects/hrm.png",
  highlights: [
    "Incorporates Few-Shot Learning to reduce mixed-language errors by 42%",
    "Enhances menu item count accuracy by 8.71% with Chain of Thought (CoT) prompting",
    "Switches to asynchronous processing, reducing response time by 3 seconds per query",
    "Supports seamless integration with popular translation APIs for higher accuracy",
    "Scalable and optimized for diverse languages and menu structures"
  ],
  presentation: "/files/presentations/hrm.pdf",
  introduction: "HRM addresses the challenges Korean travelers face when dining abroad by providing accurate menu translations and cultural context through advanced AI technology.",
  coreFeatures: [
    {
      title: "Menu Recognition",
      description: "Identifies and processes menu images using GPT-4 mini"
    },
    {
      title: "Translation Service",
      description: "Provides contextual translations with pronunciation guides"
    },
    {
      title: "Interactive Chat",
      description: "Supports menu-related inquiries and additional translations"
    },
    {
      title: "Data Storage",
      description: "Stores and retrieves restaurant and menu data for future use"
    }
  ],
  targetAudience: [
    {
      range: "Korean Travelers",
      description: "Tourists facing language barriers when dining abroad"
    },
    {
      range: "Restaurants",
      description: "Establishments seeking to better serve international customers"
    }
  ],
  userFlow: [
    {
      step: "Image Capture",
      description: "User photographs and submits menu image"
    },
    {
      step: "Processing",
      description: "System extracts text and identifies menu structure"
    },
    {
      step: "Translation",
      description: "Provides translated items with pronunciation and descriptions"
    }
  ],
  technicalPipeline: [
    {
      title: "OCR Processing",
      technology: "Google OCR",
      description: "Extracts text from menu images"
    },
    {
      title: "Translation",
      technology: "Papago & GPT-4",
      description: "Provides accurate translations with context"
    },
    {
      title: "Learning System",
      technology: "Few-Shot Learning",
      description: "Improves accuracy for mixed-language content"
    }
  ],
  expectedOutcomes: [
    "42% reduction in mixed-language errors",
    "8.71% improvement in menu item count accuracy",
    "3 second reduction in response time per query",
    "Enhanced user satisfaction through accurate translations"
  ],
  expansionPlans: [
    "Integration with more translation APIs",
    "Support for additional Asian languages",
    "Real-time menu translation feature",
    "Restaurant partnership program"
  ],
  developmentNotes: "System performance is optimized through asynchronous processing and Few-Shot Learning techniques, with continuous improvements in accuracy and response time."
} 