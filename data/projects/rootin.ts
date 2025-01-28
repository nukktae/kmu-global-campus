import type { Project } from '~/types'

export const rootin: Project = {
  id: 2,
  title: "Rootin",
  description: "Smart plant monitoring system with real-time soil moisture sensing and AI-powered care guidance. Features include LLM-based diagnostics, personalized notifications, and comprehensive plant care data.",
  category: "FullStack",
  status: "completed",
  technologies: [
    "React Native",
    "Node.js",
    "Express",
    "SQLite",
    "Arduino",
    "GPR ML",
    "LLM"
  ],
  team: [
    { id: 1, name: "Anu Bilegdemberel", role: "Frontend Developer" },
    { id: 2, name: "Hojun Lim", role: "Backend Developer" },
    { id: 3, name: "Casey Lee", role: "UX/UI Designer" },
    { id: 4, name: "Deokryong Na", role: "Product Owner" },
    { id: 5, name: "Kihoon Kim", role: "Data Engineer" }
  ],
  github: "https://github.com/rootin/app",
  demo: "https://youtu.be/your-youtube-id",
  projectImage: "/images/projects/rootin.jpeg",
  highlights: [
    "Real-time soil moisture monitoring",
    "LLM-based AI plant diagnostics",
    "Affordable IoT solution ($25/unit)",
    "Comprehensive plant care database",
    "Smart notifications system"
  ],
  presentation: "/files/presentations/rootin.pdf",
  introduction: "Rootin is a smart plant monitoring system designed to provide real-time soil moisture sensing and AI-powered care guidance. It integrates advanced technologies to ensure optimal plant health and growth.",
  coreFeatures: [
    {
      title: "Real-time Soil Monitoring",
      description: "Wireless sensor tracks moisture levels and provides status updates"
    },
    {
      title: "AI Plant Diagnostics",
      description: "LLM-based chatbot for plant care advice and troubleshooting"
    },
    {
      title: "Plant Database",
      description: "Over 1 billion data points covering plant care information"
    },
    {
      title: "Smart Notifications",
      description: "Alerts for underwatering and water-logged conditions"
    }
  ],
  targetAudience: [
    {
      range: "Urban Millennials",
      description: "Tech-savvy plant enthusiasts in urban areas like Irvine"
    },
    {
      range: "Plant Retailers",
      description: "Partners for bundled sales and distribution"
    }
  ],
  userFlow: [
    {
      step: "Sensor Setup",
      description: "Install wireless sensor and connect to mobile app"
    },
    {
      step: "Monitoring",
      description: "Track real-time soil moisture and receive notifications"
    },
    {
      step: "AI Assistance",
      description: "Get personalized care advice and diagnostics"
    }
  ],
  technicalPipeline: [
    {
      title: "IoT Sensor",
      technology: "Arduino",
      description: "Real-time soil moisture monitoring"
    },
    {
      title: "Mobile App",
      technology: "React Native",
      description: "User interface and data visualization"
    },
    {
      title: "Backend",
      technology: "Node.js & Express",
      description: "Data processing and API services"
    },
    {
      title: "AI System",
      technology: "LLM & GPR ML",
      description: "Plant diagnostics and care recommendations"
    }
  ],
  expectedOutcomes: [
    "Reduce plant care failures by 90%",
    "Achieve market growth in line with 15.9% CAGR",
    "Maintain competitive pricing with $25/unit cost",
    "Build comprehensive plant care database"
  ],
  expansionPlans: [
    "Integration with plant retailers",
    "Enhanced AI diagnostics capabilities",
    "Additional sensor types for comprehensive plant health monitoring",
    "Global market expansion"
  ],
  developmentNotes: "Initial development focused on cost-effective IoT hardware while maintaining accuracy. Future iterations will expand AI capabilities and sensor features."
} 
  // Reference existing Rootin data
  startLine: 63
  endLine: 191
} 