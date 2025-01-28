import type { Project } from '~/types'

export const vori: Project = {
  id: 5,
  title: "Vori: Voice-Powered Kanban Board",
  description: "Vori is a voice-driven project management tool integrating AI-powered transcription and real-time updates to Kanban boards. It simplifies ticket creation and status updates, saving time for agile teams during daily standups and sprint reviews.",
  category: "AWS",
  status: "completed",
  technologies: [
    "AWS Lambda",
    "Amazon Transcribe",
    "AWS Bedrock",
    "API Gateway",
    "AWS MSK",
    "Amazon S3"
  ],
  team: [
    { id: 1, name: "Cathy Joo", role: "CPO, Frontend & Business" },
    { id: 2, name: "Hojun Lim", role: "CTO, Full-stack Developer" },
    { id: 3, name: "Kyoungin Nam", role: "CEO, Backend & Data Engineer" }
  ],
  github: undefined,
  demo: undefined,
  projectImage: "/images/projects/vori.png",
  highlights: [
    "Automatic ticket management based on voice commands",
    "Real-time updates to Kanban boards",
    "Efficient sprint tracking and task capturing",
    "Integration with Amazon Transcribe for accurate speech-to-text conversion",
    "Scalable architecture leveraging AWS cloud services"
  ],
  presentation: "/files/presentations/vori.pdf",
  introduction: "Vori revolutionizes Agile team management by automating task updates through voice commands, saving teams an average of 4.5 hours weekly while improving sprint velocity and team synchronization.",
  coreFeatures: [
    {
      title: "Voice Command Processing",
      description: "Real-time voice-to-task conversion using Amazon Transcribe"
    },
    {
      title: "Automated Task Management",
      description: "Intelligent ticket creation and status updates"
    },
    {
      title: "Meeting Integration",
      description: "Seamless integration with daily standups and sprint reviews"
    },
    {
      title: "Real-time Updates",
      description: "Instant Kanban board updates with voice commands"
    }
  ],
  userFlow: [
    {
      step: "Voice Input",
      description: "Team members provide updates via voice commands"
    },
    {
      step: "Processing",
      description: "System processes and categorizes the updates"
    },
    {
      step: "Board Update",
      description: "Automatic task creation and status changes"
    }
  ],
  technicalPipeline: [
    {
      title: "Voice Processing",
      technology: "Amazon Transcribe",
      description: "High-accuracy speech-to-text conversion"
    },
    {
      title: "Data Streaming",
      technology: "AWS MSK",
      description: "Real-time event processing"
    },
    {
      title: "Task Processing",
      technology: "AWS Lambda",
      description: "Serverless compute for updates"
    },
    {
      title: "AI Analysis",
      technology: "AWS Bedrock",
      description: "Intelligent task categorization"
    }
  ],
  expectedOutcomes: [
    "4.5 hours saved per week per team",
    "30% faster sprint tracking",
    "Improved team synchronization",
    "Reduced manual update errors"
  ],
  expansionPlans: [
    "Q1 2025: Freemium launch for startups",
    "Q2 2025: Enterprise customer acquisition",
    "Q3 2025: Global market expansion",
    "Development of industry-specific solutions"
  ],
  developmentNotes: "Initial development focused on AWS services for scalability and cost-efficiency. Future updates will enhance AI capabilities and add industry-specific features."
} 