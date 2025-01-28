import type { Project } from '~/types'

export const pawsomeDay: Project = {
  id: 3,
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
    { id: 2, name: "Dongyeon Kim", role: "Frontend Developer" },
    { id: 3, name: "Cathy Joo", role: "UX/UI Designer" },
    { id: 4, name: "Kyoungin Nam", role: "Data Engineer" }
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
  presentation: "/files/presentations/pawsome.pdf",
  introduction: "Pawsome Day is revolutionizing pet daycare communication by bridging the gap between pet owners and daycare centers through an innovative mobile platform.",
  coreFeatures: [
    {
      title: "Daily Reports",
      description: "Automated generation and sharing of pet activity reports"
    },
    {
      title: "Photo Management",
      description: "AI-powered photo selection and organization"
    },
    {
      title: "Schedule Management",
      description: "Centralized booking and appointment system"
    },
    {
      title: "Real-time Updates",
      description: "Instant notifications and status updates for pet owners"
    }
  ],
  targetAudience: [
    {
      range: "Small Centers",
      description: "Pet daycare facilities with up to 20 pets daily"
    },
    {
      range: "Mid-sized Centers",
      description: "Facilities handling 20-50 pets with multiple staff members"
    }
  ],
  userFlow: [
    {
      step: "Owner Registration",
      description: "Pet owners can add pet details and make reservations"
    },
    {
      step: "Daily Updates",
      description: "Staff shares photos and notes about pets' activities"
    },
    {
      step: "Report Generation",
      description: "Automated daily report creation and distribution"
    }
  ],
  technicalPipeline: [
    {
      title: "Frontend",
      technology: "React Native",
      description: "Cross-platform mobile application development"
    },
    {
      title: "Backend",
      technology: "Express.js & SQLite",
      description: "Secure data management and API services"
    },
    {
      title: "ML Server",
      technology: "Face Recognition",
      description: "Pet photo classification and identification"
    }
  ],
  expansionPlans: [
    "Development of in-app payment system",
    "Enhanced two-way communication features",
    "Integration with veterinary services",
    "Advanced analytics for pet behavior tracking"
  ],
  developmentNotes: "Built with scalability in mind, focusing on privacy and security while maintaining user-friendly interfaces for both owners and staff."
} 