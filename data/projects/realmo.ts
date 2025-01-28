import type { Project } from '~/types'

export const realmo: Project = {
  id: 4,
  title: "RealMo: AWS Content Moderation System",
  description: "Cloud-based content moderation system for a streaming platform, handling real-time video analysis and automated content filtering. Built to scale with growing user demand following Twitch Korea's exit from the market.",
  category: "AWS",
  status: "completed",
  technologies: [
    "AWS API Gateway",
    "AWS Kinesis",
    "AWS Lambda",
    "AWS Rekognition",
    "AWS DynamoDB",
    "AWS SNS",
    "AWS CloudWatch"
  ],
  team: [
    { id: 1, name: "Kihoon Kim", role: "Cloud Architect" },
    { id: 2, name: "Dongyeon Kim", role: "Backend Developer" },
    { id: 3, name: "Cathy Joo", role: "Business Analyst" }
  ],
  github: undefined,  // Changed from null to undefined
  demo: undefined,
  projectImage: "/images/projects/realmo.png",
  highlights: [
    "Handles 102K average concurrent viewers with peaks of 422K",
    "Reduces moderation costs by 45% through optimization",
    "Supports 2.3x user growth post-Twitch Korea exit",
    "Processes real-time content moderation for 1,700 daily streamers",
    "Achieves monthly savings of $42,102 through AWS optimization"
  ],
  presentation: "/files/presentations/realmo.pdf",
  introduction: "RealMo is a scalable AWS-based content moderation system designed for a major streaming platform, addressing the challenges of increased user traffic and content monitoring needs.",
  coreFeatures: [
    {
      title: "Real-time Video Analysis",
      description: "Processes streaming content through AWS Rekognition for immediate moderation"
    },
    {
      title: "Automated Filtering",
      description: "Uses AI-powered detection for content policy enforcement"
    },
    {
      title: "Scalable Infrastructure",
      description: "Handles traffic spikes with dynamic resource allocation"
    },
    {
      title: "Cost Optimization",
      description: "Implements frame filtering and compression for efficient processing"
    }
  ],
  targetAudience: [
    {
      range: "Content Moderators",
      description: "Platform staff managing content compliance"
    },
    {
      range: "Platform Users",
      description: "2.067M monthly active users across various age groups"
    }
  ],
  userFlow: [
    {
      step: "Content Ingestion",
      description: "Streaming content enters through API Gateway to Kinesis"
    },
    {
      step: "Processing",
      description: "Lambda functions analyze content via Rekognition"
    },
    {
      step: "Notification",
      description: "Flagged content triggers SNS alerts for review"
    }
  ],
  technicalPipeline: [
    {
      title: "Ingestion",
      technology: "API Gateway & Kinesis",
      description: "Handles incoming video streams"
    },
    {
      title: "Processing",
      technology: "Lambda & Rekognition",
      description: "Analyzes content for policy violations"
    },
    {
      title: "Storage",
      technology: "DynamoDB",
      description: "Maintains moderation results and metrics"
    },
    {
      title: "Monitoring",
      technology: "CloudWatch",
      description: "Tracks system performance and alerts"
    }
  ],
  expectedOutcomes: [
    "Monthly cost reduction of $42,102",
    "Support for 400-500% traffic increase",
    "Improved moderation accuracy and speed",
    "Enhanced platform stability and user experience"
  ],
  expansionPlans: [
    "Integration of advanced AI models for better detection",
    "Enhanced reporting and analytics dashboard",
    "Multi-region deployment for global scaling",
    "Additional content type support (clips, VODs)"
  ],
  developmentNotes: "System optimizations include H.265 compression, frame filtering, and dynamic shard allocation, resulting in significant cost savings while maintaining performance."
} 