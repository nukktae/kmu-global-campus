import type { Project } from '~/types'

export const newsExplorer: Project = {
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
  github: undefined,
  demo: undefined,
  projectImage: "/images/projects/explorer.png",
  highlights: [
    "Offers tailored news summaries based on user interests",
    "Enhances fact-checking reliability through cascading and stacking approaches",
    "Balances diverse perspectives for unbiased news consumption",
    "Reduces information overload with concise, relevant content",
    "Achieved 83% accuracy in summarization through optimized logic"
  ],
  presentation: "/files/presentations/newsexplorer.pdf",
  introduction: "News Explorer addresses information overload by providing personalized, balanced news curation through AI-driven analysis and summarization.",
  coreFeatures: [
    {
      title: "Topic Generation",
      description: "Creates personalized news topics based on user interests"
    },
    {
      title: "News Aggregation",
      description: "Collects relevant articles from multiple trusted sources"
    },
    {
      title: "Smart Summarization",
      description: "Generates concise, balanced summaries of news stories"
    },
    {
      title: "Interactive Q&A",
      description: "Allows users to explore topics through conversational queries"
    }
  ],
  targetAudience: [
    {
      range: "General Users",
      description: "Adults seeking efficient, balanced news consumption"
    },
    {
      range: "Premium Users",
      description: "34.4M adults willing to pay for curated news services"
    }
  ],
  userFlow: [
    {
      step: "Topic Selection",
      description: "Users choose interests or trending topics"
    },
    {
      step: "Content Aggregation",
      description: "System fetches and analyzes relevant articles"
    },
    {
      step: "Summary Generation",
      description: "AI creates balanced summaries with multiple perspectives"
    },
    {
      step: "Interactive Exploration",
      description: "Users can query for additional details or clarification"
    }
  ],
  technicalPipeline: [
    {
      title: "Curation Engine",
      technology: "Custom Search APIs",
      description: "Aggregates news from multiple sources"
    },
    {
      title: "Analysis System",
      technology: "GPT-4",
      description: "Processes and summarizes news content"
    },
    {
      title: "Fact Checking",
      technology: "Cascading Verification",
      description: "Ensures accuracy through multiple validation layers"
    }
  ],
  expectedOutcomes: [
    "83% accuracy in fact-checking with cascade method",
    "81.5% accuracy with stack method",
    "Reduced news consumption time",
    "Enhanced user trust through balanced reporting"
  ],
  expansionPlans: [
    "Integration with additional news sources",
    "Enhanced personalization algorithms",
    "Real-time news analysis capabilities",
    "Multi-language support expansion"
  ],
  developmentNotes: "System prioritizes balance between accuracy and response time, with cascade method showing optimal performance in real-world testing."
} 