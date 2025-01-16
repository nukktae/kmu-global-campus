export interface Student {
  id: string;
  name: string;
  photo: string;
  role: string;
  location: string;
  nationality: string;
  bio: string;
  currentProject: string;
  technologies: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  education: string;
  interests: string[];
  story?: {
    title: string;
    content: string;
    publishDate: string;
  };
}

export const students: Student[] = [
  {
    id: '1',
    name: 'Anu Bilegdemberel',
    photo: '/images/students/anu.jpg',
    role: 'Full Stack Developer',
    location: 'Irvine, United States',
    nationality: 'Mongolia',
    bio: 'Dynamic Full Stack Developer with expertise in cross-platform mobile and web application development, delivering innovative solutions to enhance user engagement. Proficient in modern frameworks like Flutter and React, with a strong foundation in backend technologies such as Node.js and PostgreSQL. Skilled in implementing robust architectures and AI-driven features to create seamless, responsive applications. Dedicated to driving impactful projects and optimizing user experiences across diverse platforms.',
    currentProject: 'Rootin, Full Stack App Development at Grepp',
    technologies: [
      'Flutter/Dart',
      'React',
      'Node.js',
      'PostgreSQL',
      'Firebase',
      'TypeScript',
      'Express',
      'Python',
      'JavaScript',
      'React',
      'PostgreSQL',
      'Express'
    ],
    socialLinks: {
      github: 'https://github.com/anub',
      linkedin: 'https://linkedin.com/in/anub',
      portfolio: 'https://www.anubilegdemberel.com'
    },
    education: 'Bachelor, Software Engineering, Kookmin University (Mar 2023 - Mar 2027)',
    interests: [
      'Mobile Development',
      'Cross-Platform Apps',
      'AI Integration',
      'Cloud Architecture'
    ],
    story: {
      title: 'Building Cross-Platform Solutions',
      content: `My journey in full-stack development has been focused on creating seamless user experiences across different platforms:

Rootin, Full Stack App Development, Grepp (Sep 2024 - Present):
- Developed cross-platform mobile application using Flutter/Dart, achieving 95% notification delivery rate through Firebase Cloud Messaging
- Implemented MVVM architecture pattern, designed reusable components, and integrated BLE protocol for IoT sensor communication
- Built multi-language support system (EN/KO) and ensured cross-platform support for iOS 14+ and Android 8+

MakeEat, Full Stack App Development, Grepp (Oct 2024 - Dec 2024):
- Led end-to-end development of a cross-platform mobile application using Flutter, integrating AI for personalized recipe generation, and completed full iOS development cycle in 5 days, demonstrating rapid prototyping abilities
- Implemented MVVM architecture with Provider for scalable state management, designed modular architecture, and created reusable widget system for consistent UI/UX
- Integrated Firebase Authentication and Cloud Firestore for backend, built secure API communication with OpenAI GPT

Major Match, Full Stack Web Development, Individual Project (Nov 2024 - Present):
- Developed an AI-powered educational platform that helps students choose academic majors through personalized assessments and mentor matching, enhancing user decision-making
- Built a full-stack application using React 18, TypeScript, and Nodejs with a PostgreSQL database, ensuring robust and scalable backend support
- Implemented a secure authentication system using Firebase with role-based access for mentors/students, improving security and user management

RealMo, AWS Application, Grepp (Sep 2024 - Dec 2024):
- Designed and deployed a real-time content moderation system using AWS Kinesis and Rekognition, improving accuracy by 95% and reducing false positives by 20%
- Developed a cost-effective real-time moderation pipeline with AWS Kinesis and Rekognition, delivering low-latency performance during peak traffic`,
      publishDate: 'December 15, 2024'
    }
  },
  {
    id: '2',
    name: 'Haram Lee',
    photo: '/images/students/haram.jpg',
    role: 'Full-stack Developer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Full-stack Developer with expertise in backend technologies and frontend frameworks. Proficient in CI/CD, Docker, and AWS, enabling independent MVP development. Contributed to two startup MVPs and commercial service launches. Skilled at understanding client and team needs to deliver effective solutions in Agile and CI/CD environments.',
    currentProject: 'PAWSOMEDAY - Back-End Developer',
    technologies: [
      'Node.js',
      'Express',
      'AWS',
      'Firebase Auth',
      'PM2',
      'GitHub Actions',
      'React',
      'Django'
    ],
    socialLinks: {
      github: 'https://github.com/haram8009',
      linkedin: 'https://linkedin.com/in/haram-8009-lee',
      portfolio: 'mailto:haram8009@gmail.com'
    },
    education: 'Bachelor of Science, Computer Science, Kookmin University (Mar 2021 - Feb 2025)',
    interests: [
      'Backend Development',
      'Cloud Architecture',
      'System Design',
      'Agile Development'
    ],
    story: {
      title: 'Building Scalable Solutions',
      content: `My journey in full-stack development has focused on creating robust and scalable applications:

PAWSOMEDAY (Sep 2024 - Dec 2024):
- Developed a notification and scheduling app for dog daycare centers based on field research
- Built RESTful APIs using Node.js and Express, integrated Firebase Auth for secure authentication
- Implemented booking management, photo-sharing, and notification features
- Automated deployment using CI/CD pipelines with PM2 and GitHub Actions

Previous Experience:
- Product MVP at DeepscienceX: Integrated Korea Investment & Securities (KIS) OpenAPI
- UZULive MVP: Implemented real-time bidirectional streaming with WebSocket and AWS WebRTC
- Favorfit: Contributed to e-commerce platform development and implemented GA4 analytics`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '3',
    name: 'Deokryong (Nathan) Na',
    photo: '/images/students/nathan.png',
    role: 'UX Designer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Design measurable UX solutions with a focus on research-driven insights and emerging technologies.',
    currentProject: 'Product Designer at Rootin',
    technologies: [
      'Figma',
      'Adobe XD',
      'React',
      'Flutter',
      'HTML/CSS',
      'Prototyping',
      'User Research',
      'Design Systems'
    ],
    socialLinks: {
      email: 'deokryongna@gmail.com',
      linkedin: 'https://linkedin.com/in/deokryongna',
      portfolio: 'deokryongna.com'
    },
    education: 'B.A. Management Information Systems & B.A. Convergence Design, Kookmin University (Expected Sep 2024)',
    interests: [
      'UX Research',
      'Design Systems',
      'IoT Solutions',
      'User-Centered Design'
    ],
    story: {
      title: 'Creating User-Centric Experiences',
      content: `Leading innovative UX/UI solutions across various projects:

Rootin (Sep 2024 - Present):
- Lead the design process for a wireless IoT soil moisture sensor app
- Collect and analyze web crawling data, interviews, and competitor analysis
- Collaborate with software engineers as a scrum master

Grepp (Sep 2024 - Dec 2024):
- Prototyped and developed MVPs leveraging LLM and AWS technologies
- Streamlined design-to-frontend development workflows, achieving 52% reduction in time-to-market

Hyodol (Aug 2023 - Mar 2024):
- Redesigned care provider app for AI care robots
- Optimized workflows through A/B testing, improving efficiency by 64%
- Delivered 100+ user interfaces with 15+ components`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '4',
    name: 'Kihoon Kim',
    photo: '/images/students/Kihoon.jpeg',
    role: 'Software Engineer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Software Engineer specializing in automating CI/CD pipelines, managing cloud-native applications, and optimizing system scalability and reliability. Proficient in AWS, Kubernetes, Docker, and Terraform, with a proven track record of reducing deployment time by 40% and achieving 99.9% uptime through efficient cloud infrastructure automation.',
    currentProject: 'Data Engineer at Duel',
    technologies: [
      'Python',
      'AWS',
      'Terraform',
      'Docker',
      'Kubernetes',
      'DynamoDB',
      'Lambda',
      'CloudWatch'
    ],
    socialLinks: {
      github: 'https://github.com/kihoon-kim',
      linkedin: 'https://linkedin.com/in/kihoon-noah-kim',
      email: 'kihoon.kim1220@gmail.com'
    },
    education: 'Bachelor of Science, Physics & Electronic Engineering, Kookmin University (Expected Feb 2025)',
    interests: [
      'Cloud Architecture',
      'Data Engineering',
      'System Automation',
      'Infrastructure Optimization'
    ],
    story: {
      title: 'Building Scalable Data Solutions',
      content: `Leading data engineering initiatives across multiple projects:

Duel (Sep 2024 - present):
- Automated video content extraction into Quizlet decks by optimizing costs through reuse of existing deck categories
- Reduced S3 read times from 4,000 seconds to 0.05 seconds by implementing a DynamoDB category-based querying system
- Deployed serverless pipelines with AWS Lambda, enabling seamless processing for 20M+ user requests

NewsExplorer (Sep 2024 - present):
- Designed a system to filter, summarize, and analyze news articles based on preferences
- Evaluated Cascade and Stacking methods for FactCheck Agent orchestration
- Integrated CloudWatch for monitoring and alerting during real-time data analysis

Rootin (Sep 2024 - present):
- Developing automated plant care system with soil moisture measurement
- Implemented real-time IoT data pipelines with AWS Kinesis and MSK (Kafka)
- Utilized CloudWatch and Lambda for dynamic workload management`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '5',
    name: 'Kyoungin (Kellan) Nam',
    photo: '/images/students/kyongin.jpeg',
    role: 'Data Engineer',
    location: 'Irvine, California, USA',
    nationality: 'South Korea',
    bio: 'Experience developing data pipelines for various structured and unstructured data such as image and audio formats through diverse projects. Practical knowledge of Python, with experience using PyTorch, Spark, Whisper, and other AI models. Studied distributed systems by applying Kafka in various environments. Experienced with SQL databases, particularly PostgreSQL, for data management and optimization. Familiar with cloud platforms like AWS, GCP and Azure, as well as on-premises systems. Proficient in Tableau and Power BI for creating dashboards.',
    currentProject: 'Voice to Reports — Backend Developer at Vori',
    technologies: [
      'Apache Kafka',
      'Apache Spark',
      'PySpark',
      'TypeScript',
      'Node.JS',
      'Express',
      'Python',
      'FastAPI',
      'Prisma',
      'PostgreSQL',
      'OpenAI Whisper',
      'WebSocket',
      'Swagger UI',
      'Docker',
      'GCP VM',
      'AWS Lambda',
      'AWS EC2',
      'AWS S3',
      'AWS MSK'
    ],
    socialLinks: {
      github: 'https://github.com/knam12',
      linkedin: 'https://linkedin.com/in/knam12',
      portfolio: 'mailto:knam12@outlook.com'
    },
    education: 'Information Technology & International Business, Bachelor of Engineering & Business Administration, Kookmin University (Mar 2019 - Feb 2026)',
    interests: [
      'Data Pipeline Development',
      'Distributed Systems',
      'Cloud Architecture',
      'AI/ML Integration'
    ],
    story: {
      title: 'Building Data-Driven Solutions',
      content: `My journey in data engineering has focused on creating efficient and scalable data solutions:

Vori | Voice to Reports — Backend Developer:
- Designed a distributed system with Kafka and Spark to extract actionable meeting insights
- Implemented a microservices architecture with Kafka for fault-tolerant and scalable services
- Built a WebSocket-based system using Whisper for real-time speech-to-text processing
- Developed a pipeline using Claude 3.5 API to generate Kanban board tickets from processed audio
- Utilized AWS MSK and Lambda for audio streaming and distributed processing

MakeEat | From Receipts to Delicious Recipes with AI — Backend Developer:
- Achieved 56.19% improved text recognition accuracy compared to Google's Tesseract OCR alone
- Reduced API costs by 80.67% through preprocessing text instead of sending raw images to GPT-4
- Attained 30% faster processing speed compared to direct image analysis with GPT-4
- Developed 55.13% more accurate nutritional analysis compared to similar recipe apps in the market

FPT Software (Hanoi, Vietnam) — Data Analyst:
- Managed a system to monitor attendance and commuting records for employees across global offices
- Extracted data from APIs and SharePoint using Azure Data Factory for integration
- Processed data with SQL queries and SRS documentation in SQL Server
- Visualized data through real-time dashboards using Power BI for reporting and analysis`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '6',
    name: 'Dongyeon (Marco) Kim',
    photo: '/images/students/marco.jpeg',
    role: 'Front-End Developer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Front-End Developer skilled in building responsive web and mobile applications using React, React Native, and Next.js, with expertise in modern front-end tools such as TypeScript, Zustand, and TailwindCSS. Complementing my front-end focus, I have experience in backend development with Node.js, Express, and cloud platforms like AWS. I am committed to producing clean, maintainable code, leveraging scalable patterns, and delivering optimized solutions that enhance team productivity and application performance.',
    currentProject: 'Front-End Developer at Pawsome Day',
    technologies: [
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'Zustand',
      'TailwindCSS',
      'Node.js',
      'Express',
      'AWS Lambda',
      'AWS API Gateway',
      'MongoDB',
      'Firebase',
      'Docker',
      'Figma'
    ],
    socialLinks: {
      github: 'https://github.com/0yeonnnnn0',
      email: 'marco.dykim@gmail.com',
      phone: '657-460-0918'
    },
    education: 'Bachelor of Science, Computer Science, Kookmin University (Mar 2020 - Expected 2026)',
    interests: [
      'Front-End Development',
      'Mobile Development',
      'UI/UX Design',
      'Cloud Architecture'
    ],
    story: {
      title: 'Building User-Centric Applications',
      content: `My journey in software development has focused on creating intuitive and efficient user experiences:

Pawsome Day (Sep 2024 - Dec 2024):
- Developed a mobile app to streamline communication between dog daycare centers and pet owners
- Utilized React Native with Expo for rapid prototyping and robust development
- Implemented Zustand for efficient state management
- Contributed to design process using Figma and collaborated with backend team on API integration

Duel (Oct 2024 - Dec 2024):
- Developed a platform for streamlined Quizlet deck creation from educational videos
- Enabled 96% reduction in question creation time through video submission workflow
- Designed AWS architecture diagram and contributed to backend development
- Refactored frontend codebase for enhanced performance

Devmon (Nov 2024 - Dec 2024):
- Built a platform addressing coding test explanations for "Baekjoon"
- Delivered features including recommended algorithms and detailed explanations
- Independently developed the project with focus on prompt engineering

Kookmin Open-Source Society (KOSS) (Sep 2023 - Jun 2024):
- Led advanced web development study group teaching React and TypeScript
- Managed "Mogakko" study group fostering collaboration among new members`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '7',
    name: 'Cathy Joo',
    photo: '/images/students/cathy.jpeg',
    role: 'Product Designer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Tech-savvy UI/UX Designer with a passion for creating user-centered digital experiences. Skilled in designing intuitive workflows, integrating AI technologies, and managing end-to-end product development. Bringing the gap between design and technology, I deliver impactful, innovative solutions that align user needs with business objectives.',
    currentProject: 'Voice-to-Kanban Automation Tool at Kookmin University',
    technologies: [
      'Figma',
      'FigJam',
      'Adobe Illustrator',
      'Photoshop',
      'SketchUp',
      '3D Max',
      'AutoCAD',
      'Enscape',
      'V-Ray',
      'HTML/CSS',
      'JavaScript',
      'OpenAI API',
      'Google Cloud STT/TTS',
      'Visual Studio Code',
      'GitHub',
      'Jira',
      'Slack'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/cathyjoo',
      portfolio: 'Portfolio Link',
      email: 'cathyjoo0305@kookmin.ac.kr'
    },
    education: 'Bachelor of Arts in Spatial Design, Kookmin University (Mar 2021 - Expected 2025)',
    interests: [
      'UI/UX Design',
      'AI Integration',
      'Product Development',
      'Sustainable Design'
    ],
    story: {
      title: 'Creating User-Centered Digital Experiences',
      content: `My journey in product design focuses on creating intuitive and innovative solutions:

Voice-to-Kanban Automation Tool (Oct 2024 - Dec 2024):
- Developed a React-based Kanban board with voice automation, integrating AWS S3, CloudFront, and CloudWatch
- Enhanced team productivity with real-time task updates and intuitive UI, reducing manual management time by 30%
- Presented a business case emphasizing time and cost savings, showcasing the tool's ROI for agile teams

Pet Daycare Communication App (Sep 2024 - Dec 2024):
- Led the development of a dual-facing app prototype to improve transparency and efficiency in pet owner-daycare communication
- Designed intuitive UI/UX flows and positioned the prototype for real-world deployment to address pet care challenges

AI-Powered Educational Platform (Nov 2024 - Dec 2024):
- Developed an AI-driven digital library that facilitates live, interactive conversations and generates visuals based on book content
- Designed user flows and implemented AI prompting using RAG techniques for seamless, engaging experiences
- Independently managed the entire product lifecycle as a non-developer

Achievements:
- CareerView – AI-Based Mock Interview Platform: Winner, PBL 1st Hackathon (Sep 2024)
- Garden in The Sharp – Sustainable Urban Installation: POSCO INFINELI Award (Aug 2022)`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '8',
    name: 'Casey Lee',
    photo: '/images/students/casey.jpg',
    role: 'UI/UX Designer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Creative UI/UX Designer with expertise in crafting intuitive digital experiences and implementing design systems. Skilled in user research, prototyping, and collaborative design processes. Experienced in working with cross-functional teams to deliver user-centered solutions that drive engagement and business value.',
    currentProject: 'Design Systems Lead at HealthTech Innovation Lab',
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Principle',
      'Adobe Creative Suite',
      'HTML/CSS',
      'Protopie',
      'Miro',
      'UserTesting',
      'Maze',
      'Zeplin',
      'Abstract',
      'Notion'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/caseylee',
      portfolio: 'https://caseylee.design',
      email: 'casey.lee@design.com'
    },
    education: 'Bachelor of Fine Arts, Digital Design, Kookmin University (Mar 2020 - Expected 2024)',
    interests: [
      'Design Systems',
      'User Research',
      'Interaction Design',
      'Accessibility'
    ],
    story: {
      title: 'Designing for Impact and Inclusivity',
      content: `My journey in design focuses on creating accessible and impactful digital experiences:

HealthTech Innovation Lab (Sep 2024 - Present):
- Leading the development of a comprehensive design system for healthcare applications
- Reduced design-to-development handoff time by 40% through standardized components
- Implemented accessibility guidelines resulting in WCAG 2.1 AA compliance
- Conducted user research sessions with 200+ healthcare professionals

Financial Services App Redesign (Jun 2024 - Aug 2024):
- Led the complete redesign of a mobile banking application serving 50,000+ users
- Improved user satisfaction scores by 45% through intuitive navigation and simplified workflows
- Implemented biometric authentication flows reducing login time by 60%
- Created detailed interaction specifications for development team

E-Commerce Platform Enhancement (Mar 2024 - May 2024):
- Redesigned the checkout process reducing cart abandonment by 25%
- Conducted A/B testing leading to a 35% increase in conversion rate
- Developed responsive design solutions for mobile and tablet experiences
- Created animation specifications for micro-interactions enhancing user feedback

Achievements:
- Best Design Solution Award, Korea Design Week 2024
- Featured Designer, Figma Community Spotlight 2024
- Speaker, UX/UI Design Conference Seoul 2024`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '9',
    name: 'Hojun Lim',
    photo: '/images/students/hojun.jpeg',
    role: 'Backend Engineer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Backend Engineer specializing in distributed systems and cloud architecture. Experienced in designing and implementing scalable microservices, optimizing database performance, and building robust API infrastructures. Strong focus on system reliability, performance optimization, and best practices in cloud-native development.',
    currentProject: 'Senior Backend Engineer at FinTech Innovation Lab',
    technologies: [
      'Java',
      'Spring Boot',
      'Python',
      'Django',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Apache Kafka',
      'Docker',
      'Kubernetes',
      'AWS ECS',
      'AWS Lambda',
      'Terraform',
      'GitHub Actions'
    ],
    socialLinks: {
      github: 'https://github.com/hojunlim',
      linkedin: 'https://linkedin.com/in/hojunlim',
      email: 'hojun.lim@engineer.com'
    },
    education: 'Bachelor of Science, Computer Engineering, Kookmin University (Mar 2019 - Expected 2024)',
    interests: [
      'Distributed Systems',
      'Cloud Architecture',
      'System Design',
      'Performance Optimization'
    ],
    story: {
      title: 'Building Scalable Backend Solutions',
      content: `My journey in backend engineering focuses on creating robust and scalable systems:

FinTech Innovation Lab (Sep 2024 - Present):
- Architected and implemented a high-throughput payment processing system handling 10,000+ TPS
- Reduced system latency by 60% through implementation of Redis caching and database optimization
- Designed and deployed microservices architecture using Kubernetes and AWS ECS
- Implemented real-time transaction monitoring using Apache Kafka and ELK stack

E-commerce Platform Optimization (Jun 2024 - Aug 2024):
- Led backend development for a major e-commerce platform serving 1M+ daily active users
- Improved API response times by 75% through query optimization and caching strategies
- Implemented horizontal scaling solution reducing infrastructure costs by 40%
- Developed automated deployment pipeline using GitHub Actions and Terraform

Banking Integration System (Mar 2024 - May 2024):
- Developed secure API gateway for integrating multiple banking services
- Implemented OAuth 2.0 and JWT-based authentication system
- Created comprehensive API documentation using OpenAPI/Swagger
- Achieved 99.99% uptime for critical banking operations

Achievements:
- Best Technical Solution Award, Korea Developer Conference 2024
- Published paper on Distributed Systems Architecture, IEEE Conference 2024
- Open Source Contributor to Spring Framework`,
      publishDate: 'December 20, 2024'
    }
  },
]; 