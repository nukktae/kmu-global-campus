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
    title: "Duel: Automated Deck Creation for Quizlet",
    description: "Duel automates flashcard deck generation for Quizlet users by analyzing video content. This solution reduces the time to create flashcards by 96% compared to manual efforts, enhancing user experience and engagement.",
    category: "AWS",
    status: "completed",
    technologies: [
      "AWS Lambda",
      "Amazon S3",
      "Amazon Transcribe",
      "AWS Bedrock"
    ],
    team: [
      { id: 1, name: "Deokryong Na", role: "Frontend Engineer" },
      { id: 2, name: "Dongyeon Kim", role: "Backend Engineer" },
      { id: 3, name: "Kihoon Kim", role: "Data Engineer" }
    ],
    github: null,
    demo: null,
    projectImage: "/images/projects/duel.png",
    highlights: [
      "Automates deck creation from 1-hour video in under 8 minutes",
      "Improves user engagement by 80% within six months",
      "Supports up to 10M decks during peak exam periods",
      "Scalable AWS architecture reducing costs by 42% compared to on-premises solutions",
      "Processes 40M video minutes monthly with real-time performance"
    ],
    presentation: "/presentations/duel-deck.pdf"
  },
  {
    id: 4,
    title: "AWS Content Moderation System",
    description: "A scalable, real-time content moderation system leveraging AWS cloud architecture to process and filter harmful media in streaming platforms. The system incorporates AI and automation to ensure efficient, cost-effective moderation.",
    category: "AWS",
    status: "completed",
    technologies: [
      "AWS Lambda",
      "Kinesis Video Streams",
      "Amazon Rekognition",
      "DynamoDB"
    ],
    team: [
      { id: 1, name: "Anu B", role: "Solution Architect (Demo & Cost Estimation)" },
      { id: 2, name: "Jeonghee Lee", role: "Solution Architect (Business Model)" },
      { id: 3, name: "Haram Lee", role: "Solution Architect (Architecture & Demo)" }
    ],
    github: null,
    demo: null,
    projectImage: "/images/projects/realmo.png",
    highlights: [
      "Dynamic content moderation using AWS Rekognition",
      "Optimized for scalability with cost-effective resource management",
      "Integrated CloudWatch for advanced monitoring and metrics",
      "Achieved 400-500% higher traffic handling capacity post-optimization",
      "Real-time frame analysis and harmful content flagging"
    ],
    presentation: "/presentations/aws-content-moderation.pdf"
  },
  {
    id: 5,
    title: "Vori: Voice-Powered Kanban Board",
    description: "Vori is a voice-driven project management tool integrating AI-powered transcription and real-time updates to Kanban boards. It simplifies ticket creation and status updates, saving time for agile teams during daily standups and sprint reviews.",
    category: "AWS",
    status: "completed",
    technologies: [
      "AWS Lambda",
      "Amazon Transcribe",
      "AWS Bedrock",
      "API Gateway"
    ],
    team: [
      { id: 1, name: "Nahyun Joo", role: "CPO, Frontend & Business" },
      { id: 2, name: "Hojun Lim", role: "CTO, Full-stack Developer" },
      { id: 3, name: "Kyoungin Nam", role: "CEO, Backend & Data Engineer" }
    ],
    github: null,
    demo: null,
    projectImage: "/images/projects/vori.png",
    highlights: [
      "Automatic ticket management based on voice commands",
      "Real-time updates to Kanban boards",
      "Efficient sprint tracking and task capturing",
      "Integration with Amazon Transcribe for accurate speech-to-text conversion",
      "Scalable architecture leveraging AWS cloud services"
    ],
    presentation: "/presentations/vori-deck.pdf"
  },

  // LLM Projects
  {
    id: 6,
    title: "Story Chat: AI Learning Assistant",
    description: "Story Chat is an AI-powered learning assistant for children aged 3-12. It provides an interactive reading experience by combining AI-driven conversations, creative image generation, and educational insights tailored to various age groups.",
    category: "LLM",
    status: "completed",
    technologies: [
      "OpenAI GPT-4",
      "OpenAI Whisper",
      "OpenAI DALL-E",
      "HarryPotterDB"
    ],
    team: [
      { id: 1, name: "Jeonghee Lee", role: "User & Market Research, Business Model" },
      { id: 2, name: "Nahyun Joo", role: "Design and Service Development" }
    ],
    github: null,
    demo: "https://kids-learning-assistant-production.up.railway.app/",
    projectImage: "/images/projects/storychat.png",
    highlights: [
      "Supports over 40,000 children's books via integration with Epic!",
      "Customizes conversations and images for three age groups: 3-5, 6-8, 9-12 years",
      "Enhances creativity, critical thinking, and problem-solving through interactive prompts",
      "Seamless integration of voice-to-text, text-to-voice, and image generation",
      "Highly scalable with plans for plugin support for global e-book platforms"
    ],
    presentation: "/presentations/story-chat-deck.pdf"
  },
  {
    id: 7,
    title: "MakeEat: AI-Powered Recipe Generator",
    description: "MakeEat is an AI-driven smart recipe generator that personalizes meal suggestions based on users' preferences and purchased ingredients, utilizing advanced receipt image analysis and nutritional calculations.",
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
    github: null,
    demo: null,
    projectImage: "/images/projects/makeeat.png",
    highlights: [
      "Achieved 98.88% accuracy in nutritional calculations",
      "Enhanced OCR processing speed by 30% with hybrid models",
      "Reduced processing costs by 80.67% using optimized pipelines",
      "Scalable architecture with integration of GPT-4 and FatSecret API",
      "Interactive recipe generation supported by user preferences and receipts"
    ],
    presentation: "/presentations/makeeat-presentation.pdf"
  },
  {
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
    github: null,
    demo: null,
    projectImage: "/images/projects/hrm.png",
    highlights: [
      "Incorporates Few-Shot Learning to reduce mixed-language errors by 42%",
      "Enhances menu item count accuracy by 8.71% with Chain of Thought (CoT) prompting",
      "Switches to asynchronous processing, reducing response time by 3 seconds per query",
      "Supports seamless integration with popular translation APIs for higher accuracy",
      "Scalable and optimized for diverse languages and menu structures"
    ],
    presentation: "/presentations/hrm-presentation.pdf"
  },
  {
    id: 9,
    title: "News Explorer: Personalized News Aggregator",
    description: "News Explorer is an AI-powered personalized news aggregator that curates and summarizes diverse news articles to provide balanced perspectives. It addresses the problem of information overload and biases by offering tailored summaries, analyses, and interactive insights.",
    category: "LLM",
    status: "completed",
    technologies: [
      "GPT-4",
      "Fact-Checking Tools",
      "Custom Search APIs"
        ],
    team: [
      { id: 1, name: "Kihoon Kim", role: "AI Developer" },
      { id: 2, name: "Haram Lee", role: "Research and Development" }
    ],
    github: null,
    demo: null,
    projectImage: "/images/projects/explorer.png",
    highlights: [
      "Offers tailored news summaries based on user interests",
      "Enhances fact-checking reliability through cascading and stacking approaches",
      "Balances diverse perspectives for unbiased news consumption",
      "Reduces information overload with concise, relevant content",
      "Achieved 83% accuracy in summarization through optimized logic"
    ],
    presentation: "/presentations/news-explorer-presentation.pdf"
  },
  {
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
    github: null,
    demo: null,
    projectImage: "/images/projects/devmon.png",
    highlights: [
      "Generates tailored problem-solving explanations with pseudocode and Python code",
      "Supports beginner to advanced users with algorithmic insights",
      "Optimized prompts for error handling and user-friendly outputs",
      "Integrates real-time problem analysis with Baekjoon Online Judge and Solved.ac",
      "Reduces cognitive load by providing structured and concise solutions"
    ],
    presentation: "/presentations/devmon-presentation.pdf"
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