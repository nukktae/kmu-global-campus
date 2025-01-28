import type { Project } from '~/types'

export const makeEat: Project = {
  id: 7,
  title: "MakeEat: AI Recipe Generator",
  description: "MakeEat is a personalized recipe generation system that creates tailored recipes based on user preferences and available ingredients. It leverages OCR technology for receipt analysis and AI for precise nutritional calculations.",
  category: "LLM",
  status: "completed",
  technologies: [
    "FatSecret API",
    "Tesseract OCR",
    "PyTorch",
    "FastAPI"
  ],
  team: [
    { id: 1, name: "Anu B", role: "Developer" },
    { id: 2, name: "Kyoungin Nam", role: "Developer" }
  ],
  github: undefined,
  demo: undefined,
  projectImage: "/images/projects/makeeat.png",
  highlights: [
    "Achieved 98.88% accuracy in nutritional calculations",
    "Enhanced OCR processing speed by 30% with hybrid models",
    "Reduced processing costs by 80.67% using optimized pipelines",
    "Scalable architecture with integration of GPT-4 and FatSecret API",
    "Interactive recipe generation supported by user preferences and receipts"
  ],
  presentation: "/files/presentations/makeeat.pdf",
  introduction: "MakeEat revolutionizes recipe generation through AI-powered analysis of receipts and ingredients, providing personalized cooking suggestions with precise nutritional calculations.",
  coreFeatures: [
    {
      title: "Receipt Analysis",
      description: "3-stage hybrid OCR system for accurate ingredient extraction"
    },
    {
      title: "Recipe Generation",
      description: "AI-powered personalized recipe creation"
    },
    {
      title: "Nutritional Calculation",
      description: "Precise nutritional estimation using multi-stage prompting"
    }
  ],
  targetAudience: [
    {
      range: "Home Cooks",
      description: "Users seeking personalized recipe suggestions"
    },
    {
      range: "Health-Conscious Users",
      description: "People tracking nutritional intake"
    }
  ],
  userFlow: [
    {
      step: "Receipt Upload",
      description: "User uploads receipt image for ingredient analysis"
    },
    {
      step: "Ingredient Extraction",
      description: "System processes receipt using hybrid OCR"
    },
    {
      step: "Recipe Generation",
      description: "AI generates personalized recipes"
    },
    {
      step: "Nutritional Analysis",
      description: "System calculates precise nutritional values"
    }
  ],
  technicalPipeline: [
    {
      title: "OCR Processing",
      technology: "Tesseract & PyTorch",
      description: "Multi-stage receipt analysis"
    },
    {
      title: "Recipe Engine",
      technology: "GPT-4",
      description: "AI-powered recipe generation"
    },
    {
      title: "Nutrition API",
      technology: "FatSecret API",
      description: "Precise nutritional calculations"
    }
  ],
  expectedOutcomes: [
    "98.88% accuracy in nutritional calculations",
    "80.67% reduction in processing costs",
    "30% improvement in processing speed",
    "Enhanced user satisfaction through personalization"
  ],
  expansionPlans: [
    "Integration with grocery delivery services",
    "Enhanced dietary restriction support",
    "Real-time cooking guidance features",
    "Community recipe sharing platform"
  ],
  developmentNotes: "System architecture prioritizes accuracy and efficiency through multi-stage processing and hybrid approaches to OCR and recipe generation."
} 