interface TeamMember {
  id: number;
  name: string;
  role: string;
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
}

export const projects: Project[] = [
  // FullStack Projects
  {
    id: 1,
    title: "Rootin: Smart Plant Care",
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
      { id: 3, name: "Jeonghee Lee", role: "UX/UI Designer" },
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
    presentation: "/presentations/rootin-pitch-deck.pdf"
  },
  {
    id: 2,
    title: "Pawsome Day",
    description: "Mobile platform connecting pet owners with daycare centers, featuring real-time updates, photo sharing, and automated pet management. Streamlines communication and daily operations for pet daycare facilities.",
    category: "FullStack",
    status: "completed",
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "SQLite",
      "AI/ML",
      "Face Recognition"
    ],
    team: [
      { id: 1, name: "Haram Lee", role: "Backend Developer" },
      { id: 2, name: "Jeonghee Lee", role: "Frontend Developer" },
      { id: 3, name: "Casey Lee", role: "UX/UI Designer" }
    ],
    github: "https://github.com/pawsomeday/app",
    demo: "https://youtu.be/pawsomeday-demo",
    projectImage: "/images/projects/pawsomeday.png",
    highlights: [
      "In-app daily report sharing",
      "Automated pet management system",
      "AI-powered photo selection",
      "Secure data management",
      "Real-time updates and notifications"
    ],
    presentation: "/presentations/pawsomeday-deck.pdf"
  },

  // AWS Projects
  {
    id: 3,
    title: "CloudScale Analytics",
    description: "Serverless analytics platform processing real-time student engagement data.",
    category: "AWS",
    status: "completed",
    technologies: ["AWS Lambda", "DynamoDB", "Kinesis", "CloudFront", "React"],
    team: [
      { id: 5, name: "Michael Zhang", avatar: "/avatars/michael.jpg", role: "Cloud Architect" },
      { id: 6, name: "Lisa Wang", avatar: "/avatars/lisa.jpg", role: "Data Engineer" },
      { id: 7, name: "Tom Johnson", avatar: "/avatars/tom.jpg", role: "Frontend Developer" }
    ],
    github: "https://github.com/cloudscale/analytics",
    projectImage: "/images/projects/cloudscale.jpeg",
    highlights: ["Real-time processing", "Serverless architecture", "Custom dashboards"]
  },
  {
    id: 4,
    title: "ServerlessVision",
    description: "AI-powered image processing pipeline using serverless architecture for real-time content moderation.",
    category: "AWS",
    status: "completed",
    technologies: ["AWS Lambda", "Rekognition", "S3", "SQS", "CloudWatch", "React"],
    team: [
      { id: 8, name: "Kihoon Kim", role: "Cloud Architect" },
      { id: 9, name: "Sarah Park", role: "ML Engineer" },
      { id: 10, name: "David Chen", role: "Frontend Developer" }
    ],
    github: "https://github.com/serverless-vision",
    projectImage: "/images/projects/serverless-vision.jpeg",
    highlights: [
      "Real-time image processing",
      "Content moderation API",
      "Scalable architecture",
      "Cost-effective solution"
    ]
  },
  {
    id: 5,
    title: "DataStream Hub",
    description: "Real-time data streaming and processing platform using AWS managed services.",
    category: "AWS",
    status: "completed",
    technologies: ["AWS Kinesis", "MSK", "ECS", "DynamoDB", "CloudFormation"],
    team: [
      { id: 11, name: "Kyoungin Nam", role: "Data Engineer" },
      { id: 12, name: "Alex Wong", role: "Backend Developer" },
      { id: 13, name: "Emma Liu", role: "DevOps Engineer" }
    ],
    github: "https://github.com/datastream-hub",
    projectImage: "/images/projects/datastream.jpeg",
    highlights: [
      "Real-time analytics",
      "Fault-tolerant architecture",
      "Auto-scaling capabilities",
      "Monitoring dashboard"
    ]
  },

  // LLM Projects
  {
    id: 6,
    title: "CodeMentor AI",
    description: "AI-powered coding assistant using advanced LLMs to provide real-time code suggestions and reviews.",
    category: "LLM",
    status: "in-progress",
    technologies: ["Python", "PyTorch", "FastAPI", "Redis", "Vue.js"],
    team: [
      { id: 11, name: "Ryan Kim", avatar: "/avatars/ryan.jpg", role: "ML Engineer" },
      { id: 12, name: "Sophie Chen", avatar: "/avatars/sophie.jpg", role: "NLP Specialist" },
      { id: 13, name: "James Lee", avatar: "/avatars/james.jpg", role: "Full Stack Developer" }
    ],
    github: "https://github.com/codementor/ai",
    thumbnail: "/projects/codementor-thumb.jpg",
    highlights: ["Custom LLM model", "Real-time suggestions", "Code analysis"]
  },
  {
    id: 7,
    title: "LangChain Assistant",
    description: "Customizable AI assistant platform using LangChain for enterprise applications.",
    category: "LLM",
    status: "completed",
    technologies: ["Python", "LangChain", "FastAPI", "MongoDB", "React", "GPT-4"],
    team: [
      { id: 14, name: "Sarah Chen", role: "ML Engineer" },
      { id: 15, name: "James Park", role: "Backend Developer" }
    ],
    github: "https://github.com/langchain-assistant",
    projectImage: "/images/projects/langchain.jpeg",
    highlights: [
      "Custom LLM integration",
      "Multi-model support",
      "Enterprise security",
      "Scalable architecture"
    ]
  },
  {
    id: 8,
    title: "VoiceToKanban",
    description: "AI-powered voice transcription and task management system using advanced LLMs.",
    category: "LLM",
    status: "completed",
    technologies: ["Python", "Whisper", "Claude", "Node.js", "React", "MongoDB"],
    team: [
      { id: 16, name: "Cathy Joo", role: "Product Designer" },
      { id: 17, name: "Emily Wong", role: "ML Engineer" }
    ],
    github: "https://github.com/voice-kanban",
    projectImage: "/images/projects/voice-kanban.jpeg",
    highlights: [
      "Real-time transcription",
      "Task automation",
      "Team collaboration",
      "Custom LLM pipelines"
    ]
  },
  {
    id: 9,
    title: "RAGMaster",
    description: "Advanced RAG implementation for enterprise document processing and Q&A.",
    category: "LLM",
    status: "in-progress",
    technologies: ["Python", "LlamaIndex", "Pinecone", "FastAPI", "Vue.js", "Claude"],
    team: [
      { id: 18, name: "David Kim", role: "AI Engineer" },
      { id: 19, name: "Lisa Chen", role: "Full Stack Developer" }
    ],
    github: "https://github.com/ragmaster",
    projectImage: "/images/projects/ragmaster.jpeg",
    highlights: [
      "Document processing",
      "Semantic search",
      "Custom RAG pipeline",
      "Enterprise integration"
    ]
  },
  {
    id: 10,
    title: "LLM Optimizer",
    description: "Platform for fine-tuning and optimizing LLMs for specific business domains.",
    category: "LLM",
    status: "completed",
    technologies: ["Python", "PyTorch", "PEFT", "LoRA", "FastAPI", "Redis"],
    team: [
      { id: 20, name: "Michael Park", role: "ML Engineer" },
      { id: 21, name: "Sophie Wang", role: "Data Scientist" }
    ],
    github: "https://github.com/llm-optimizer",
    projectImage: "/images/projects/llm-optimizer.jpeg",
    highlights: [
      "Model fine-tuning",
      "Performance optimization",
      "Domain adaptation",
      "Deployment pipeline"
    ]
  }
];

export const projectCategories = [
  {
    name: 'FullStack',
    icon: 'fas fa-layer-group',
    color: '#00F5A0'
  },
  {
    name: 'AWS',
    icon: 'fab fa-aws',
    color: '#FF9900'
  },
  {
    name: 'LLM',
    icon: 'fas fa-brain',
    color: '#6C5CE7'
  }
]; 