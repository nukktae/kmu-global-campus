import type { Project } from '~/types'

export const storyChat: Project = {
  id: 1,
  title: "StoryChat AI",
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
    { id: 1, name: "Casey Lee", role: "User & Market Research, Business Model" },
    { id: 2, name: "Cathy Joo", role: "Design and Service Development" }
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
  presentation: "/files/presentations/storychat.pdf",
  introduction: "Story Chat is an educational service designed for children to explore creative questions arising from reading books through AI-driven conversations and images.",
  coreFeatures: [
    {
      title: "Book Access",
      description: "Access to over 40,000 children's books through partnerships with leading e-book platforms like Epic!."
    },
    {
      title: "Personalized Recommendations",
      description: "Book recommendations tailored to the user's interests and reading level."
    },
    {
      title: "Learning Tools",
      description: "Word games and quizzes supported by 'Dictionary Lookup.'"
    },
    {
      title: "Virtual Conversations",
      description: "Virtual conversation modules that foster creativity and provide an immersive reading experience."
    }
  ],
  targetAudience: [
    {
      range: "3-5 years",
      description: "Preschoolers focusing on basic vocabulary and story comprehension"
    },
    {
      range: "6-8 years",
      description: "Early elementary students developing reading fluency and comprehension"
    },
    {
      range: "9-12 years",
      description: "Older elementary students enhancing critical thinking and analysis"
    }
  ],
  educationalBenefits: [
    {
      category: "Language Development",
      description: "Enhanced vocabulary, grammar, and expression"
    },
    {
      category: "Cognitive Development",
      description: "Improved comprehension, critical thinking, and creativity"
    },
    {
      category: "Motivation",
      description: "Increased engagement and sustained learning"
    },
    {
      category: "Memory",
      description: "Effective long-term memory retention"
    }
  ],
  userFlow: [
    {
      step: "Book Selection",
      description: "Choose books from a connected list (e.g., Harry Potter)"
    },
    {
      step: "Conversation and Learning",
      description: "AI tailors discussions based on book data"
    },
    {
      step: "Image Generation",
      description: "Create visuals from textual prompts to enrich the experience"
    }
  ],
  technicalPipeline: [
    {
      title: "Speech-to-Text",
      technology: "OpenAI Realtime API",
      description: "Converts user voice input to text"
    },
    {
      title: "AI Conversation",
      technology: "OpenAI GPT-4",
      description: "Generates responses using advanced language models"
    },
    {
      title: "Text-to-Speech",
      technology: "OpenAI TTS-1",
      description: "Converts answers back to audio"
    },
    {
      title: "Image Generation",
      technology: "DALL-E-3",
      description: "Creates visual content from textual descriptions"
    }
  ],
  ageGroupCustomization: {
    "Preschoolers": "Simpler expressions for younger children",
    "Early Elementary": "Engaging scenarios for middle age groups",
    "Older Elementary": "Critical thinking challenges for older children"
  },
  expansionPlans: [
    "Integration with global e-book platforms as plugins",
    "Real-time interactive reading and conversation for an enriched learning journey"
  ],
  developmentNotes: "Early development used Google APIs for voice and image processing before transitioning to OpenAI's suite."
} 