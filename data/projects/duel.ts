import type { Project } from '~/types'

export const duel: Project = {
  id: 3,
  title: "Duel: Automated Quizlet Deck Creator",
  description: "AWS-powered service that automates flashcard deck creation from video content, reducing creation time by 96% and improving Quizlet's user engagement through efficient, scalable content generation.",
  category: "AWS",
  status: "completed",
  technologies: [
    "React.js",
    "TypeScript",
    "AWS Lambda",
    "AWS S3",
    "AWS DynamoDB",
    "AWS Transcribe",
    "AWS Bedrock"
  ],
  team: [
    { id: 1, name: "Deokryong Na", role: "Frontend Engineer" },
    { id: 2, name: "Dongyeon Kim", role: "Backend Engineer" },
    { id: 3, name: "Kihoon Kim", role: "Data Engineer" }
  ],
  github: "https://github.com/duel/app",
  demo: "https://youtu.be/duel-demo",
  projectImage: "/images/projects/duel.png",
  highlights: [
    "Reduces flashcard creation time by 96%",
    "Handles up to 10M decks per month",
    "42% cost savings over on-premises solutions",
    "Scalable AWS architecture",
    "Automated content categorization"
  ],
  presentation: "/files/presentations/duel.pdf",
  introduction: "Duel is an automated deck creation service that leverages AWS to transform video content into organized flashcard decks, addressing the time-consuming nature of manual creation while improving user engagement.",
  coreFeatures: [
    {
      title: "Video Processing",
      description: "Automated script and subtitle extraction from uploaded videos"
    },
    {
      title: "Flashcard Generation",
      description: "AI-powered conversion of content into Q&A format"
    },
    {
      title: "Category Organization",
      description: "Automatic categorization and storage of flashcard decks"
    },
    {
      title: "Historical Tracking",
      description: "User access to creation history and deck management"
    }
  ],
  targetAudience: [
    {
      range: "Students",
      description: "Learners seeking efficient study material creation"
    },
    {
      range: "Educators",
      description: "Teachers creating learning materials from video content"
    },
    {
      range: "Content Creators",
      description: "YouTubers and educators repurposing video content"
    }
  ],
  userFlow: [
    {
      step: "Video Upload",
      description: "Users upload educational videos to S3 via pre-signed URL"
    },
    {
      step: "Processing",
      description: "AWS Lambda extracts and processes content"
    },
    {
      step: "Generation",
      description: "System creates and categorizes flashcard decks"
    },
    {
      step: "Access",
      description: "Users retrieve and manage organized decks"
    }
  ],
  technicalPipeline: [
    {
      title: "Storage",
      technology: "AWS S3",
      description: "Secure video and content storage"
    },
    {
      title: "Processing",
      technology: "AWS Lambda",
      description: "Serverless content extraction and processing"
    },
    {
      title: "Database",
      technology: "DynamoDB",
      description: "Scalable deck storage and retrieval"
    },
    {
      title: "AI Processing",
      technology: "AWS Bedrock",
      description: "Intelligent flashcard generation"
    }
  ],
  expectedOutcomes: [
    "80% user engagement within six months",
    "Re-engagement of 7.5 million users",
    "Annual cost savings of $16M compared to on-premises",
    "Improved user satisfaction through time savings"
  ],
  expansionPlans: [
    "Integration with additional video platforms",
    "Enhanced AI-powered content optimization",
    "Multi-language support expansion",
    "Advanced analytics and personalization"
  ],
  developmentNotes: "Built with scalability in mind, utilizing AWS services for cost-effective processing of up to 10M decks monthly during peak periods."
} 