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
    location: 'Irvine, CA',
    nationality: 'Mongolia',
    bio: 'Dynamic Full Stack Developer with expertise in cross-platform mobile and web application development, delivering innovative solutions to enhance user engagement. Proficient in modern frameworks like Flutter and React, with a strong foundation in backend technologies such as Node.js and PostgreSQL. Skilled in implementing robust architectures and AI-driven features to create seamless, responsive applications. Dedicated to driving impactful projects and optimizing user experiences across diverse platforms.',
    currentProject: 'Rootin, Full Stack App Development at Grepp',
    technologies: [
      // Frontend
      'React',
      'TypeScript',
      'Next.js',
      'TailwindCSS',
      'Flutter/Dart',
      
      // Backend
      'Node.js',
      'Express',
      'NestJS',
      'Python',
      'FastAPI',
      
      // Database
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Firebase',
      
      // DevOps/Cloud
      'Docker',
      'AWS',
      'CI/CD',
      'Git',
      
      // Mobile
      'React Native',
      'Flutter',
      
      // Testing
      'Jest',
      'Cypress',
      
      // Tools & Others
      'GraphQL',
      'REST APIs',
      'Prisma',
      'Swagger'
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

MakeEat, Full Stack App Development, Grepp (Oct 2024 - Dec 2024):
- Led end-to-end development of a cross-platform mobile application using Flutter, integrating AI for personalized recipe generation.
- Completed full iOS development cycle in 5 days, demonstrating rapid prototyping abilities.
- Implemented MVVM architecture with Provider for scalable state management.
- Designed modular architecture and created a reusable widget system for consistent UI/UX.
- Integrated Firebase Authentication and Cloud Firestore for backend, building secure API communication with OpenAI GPT.

Rootin, Full Stack App Development, Grepp (Sep 2024 - Present):
- Developed cross-platform mobile application using Flutter/Dart, achieving 95% notification delivery rate through Firebase Cloud Messaging.
- Implemented MVVM architecture pattern, designed reusable components, and integrated BLE protocol for IoT sensor communication.
- Built multi-language support system (EN/KO) and ensured cross-platform support for iOS 14+ and Android 8+.

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
      // Languages & Frameworks
      'Django',
      'FastAPI',
      'Spring',
      'JPA',
      'ReactJs',
      'NextJs',
      'NodeJs',
      
      // Cloud & DevOps
      'AWS EC2',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      
      // Databases
      'SQL',
      'PostgreSQL',
      'Redis',
      
      // Frontend
      'HTML & CSS',
      'React Query',
      'Zustand',
      'PWA',
      'MUI (emotion)',
      'Bootstrap',
      'WebSocket',
      
      // Tools & Others
      'Agile',
      'Figma',
      'Jira',
      'UML Diagram',
      'UI design'
    ],
    socialLinks: {
      email: 'haram8009@gmail.com',
      linkedin: 'https://linkedin.com/in/haram-8009-lee',
      github: 'https://github.com/haram8009'
    },
    education: 'Bachelor of Science, Computer Science, Kookmin University, Seoul, South Korea (Expected Feb 2025)',
    interests: [
      'Full-Stack Development',
      'Cloud Architecture',
      'DevOps',
      'System Design'
    ],
    story: {
      title: 'Building Scalable Solutions',
      content: `My journey in software development spans across various technologies and domains:

Product MVP - Full-Stack Developer (Sep 2023 - Jan 2024) | Seoul, South Korea:
- Built an MVP for a new startup project aimed at delivering actionable investment insights.
- Developed the full-stack components and integrated the Korea Investment & Securities (KIS) OpenAPI to provide real-time market data, demonstrating experience with secure, enterprise-level API integration.
- Deployed the platform on AWS EC2, configured load balancing, and set up Route 53 for domain management and traffic routing to ensure scalability and high availability.

UZULive MVP - Front-End Developer Intern (Jan 2023 - Feb 2023) | Seoul, South Korea:
- Designed and developed the UI for a live streaming MVP, aligned with project specifications to provide real-time interactive streaming service.
- Implemented real-time bidirectional streaming with WebSocket and AWS WebRTC, creating reusable components using React and Styled-Components.

Favorfit - Front-End Developer Intern (Sep 2022 - Feb 2023) | Seoul, South Korea:
- Contributed as a frontend developer as part of 5-member team to develop e-commerce platform designed to assist with product photography.
- Managed QA processes and facilitated communication between the marketing and development teams using Notion and GitHub Project, ensuring smooth collaboration and efficient progress tracking.
- Implemented GA4 to analyze user behavior and track events, optimizing the platform based on data insights.
- Integrated Korean-to-English translation functionality using i18n, enhancing accessibility for a broader user base.

Recent Projects:

PAWSOMEDAY - Back-End Developer (Sep 2024 - Dec 2024) | Irvine, CA:
- Developed a notification and scheduling app for dog daycare centers based on field research, to address real market needs.
- Built RESTful APIs using Node.js and Express, integrated Firebase Auth for secure authentication, and AWS S3 for file storage.
- Implemented booking management, photo-sharing, and notification features to enhance communication between daycare centers and clients.
- Automated deployment and delivery using CI/CD pipelines with PM2 and GitHub Actions, ensuring seamless updates and stability.

Mango Diary - Front-End Developer (Jul 2024 - Aug 2024) | Seoul, South Korea:
- Developed the frontend of an AI-powered emotional diary service using ReactJS, Zustand, React Query, and MUI (emotion).
- Integrated AI-generated feedback to provide users with insights on emotional states and patterns.
- Contributed to the LikeLion Hackathon with 1,600+ participants, hosted by South Korea's largest developer community.

CareerCup - Back-End Developer (Mar 2024 - Jun 2024) | Seoul, South Korea:
- Built a real-time coffee chat matching platform with Spring Boot to facilitate casual, face-to-face networking for developers.
- Managed database migrations using Flyway, ensuring smooth and consistent schema evolution and designed RESTful APIs for matching and user management.
- Implemented real-time messaging with WebSocket and STOMP, ensuring reliable and scalable user interactions.
- Developed an admin dashboard using Bootstrap to monitor and manage platform activities.`,
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
    currentProject: 'Rootin - Product Designer',
    technologies: [
      // Design
      'Design Thinking',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'User Flows',
      'Storyboarding',
      'User Personas',
      
      // Research
      'User Interviews',
      'Usability Testing',
      'Surveys',
      'Competitors Analysis',
      'A/B Testing',
      'Contextual Inquiry',
      'User Journey Mapping',
      'Card Sorting',
      'Focus Groups',
      'Heuristic Evaluation',
      
      // Tools
      'Google/Microsoft Suite',
      'Figma',
      'Adobe XD',
      'Photoshop',
      'Illustrator',
      'SPSS',
      'Tableau',
      'SurveyMonkey',
      'Jira',
      'Miro',
      'Notion',
      
      // Programming
      'HTML',
      'CSS',
      'R',
      'SQL',
      'React',
      'Flutter'
    ],
    socialLinks: {
      email: 'deokryongna@gmail.com',
      linkedin: 'https://linkedin.com/in/deokryongna',
      github: 'https://github.com/deokryongna'
    },
    education: 'B.A. Management Information Systems (MIS), B.A. Convergence Design - Kookmin University (Expected Sep 2025)',
    interests: [
      'UX Research',
      'Product Design',
      'User-Centered Design',
      'Emerging Technologies'
    ],
    story: {
      title: 'Creating User-Centric Design Solutions',
      content: `My journey in UX design focuses on research-driven solutions and emerging technologies:

Product Designer - Rootin (Sep 2024 - Present) | Irvine, CA:
- Lead the design process for a wireless IoT soil moisture sensor app, reducing guesswork in plant watering routines.
- Collect and analyze web crawling data, interviews, and competitor analysis to generate strategic insights for app development.
- Collaborate with 3 software engineers as a scrum master to align functional and design specifications, ensuring feasibility during implementation.

UX Engineer Intern - Grepp (Sep 2024 - Dec 2024) | Irvine, CA:
- Prototyped and developed two MVPs leveraging LLM and AWS technologies, enhancing innovation in product offerings.
- Streamlined design-to-frontend development workflows, achieving a 52% reduction in time-to-market.

UX Designer - Hyodol (Aug 2023 - Mar 2024) | Anyang, Korea:
- Redesigned a care provider app to manage AI care robots and recipients, improving usability through iterative design processes.
- Optimized preparation of care providers' work flows through A/B testing, improving monitoring efficiency by 64%.
- Recruited 17 users and conducted a System Usability Scale (SUS) survey with in-depth interviews to uncover 3 key usability issues.
- Delivered 100+ user interfaces with 15+ components, in collaboration with 2 engineers to improve development efficiency.

UX Research Intern - YoonDesign Group (Sep 2023 - Dec 2023) | Seoul, Korea:
- Led generative and evaluative research to drive the growth of a web font magazine with 20K+ monthly active users.
- Analyzed user behavior via Google Analytics to identify content preferences, driving a 50% increase in monthly active users.
- Designed and executed a user survey, leveraging insights to create ad proposals that secured the first ad revenue.

Undergraduate UX Researcher - Kookmin University (Mar 2023 - Jun 2023) | Seoul, Korea:
- Developed gesture-based interactions for AR Smart Glasses (ARSGs), utilizing Spotify to enhance music control during cycling.
- Conducted mixed-method usability tests with 5 users, achieving a 5.43x improvement in music control efficiency and a 12.6x increase in cycling safety compared to smartphones.
- Created user storyboards and service blueprints to integrate interface design with technical requirements for ARSGs.`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '4',
    name: 'Kihoon Kim',
    photo: '/images/students/kihoon.png',
    role: 'Software Engineer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Software Engineer specializing in automating CI/CD pipelines, managing cloud-native applications, and optimizing system scalability and reliability. Proficient in AWS, Kubernetes, Docker, and Terraform, with a proven track record of reducing deployment time by 40% and achieving 99.9% uptime through efficient cloud infrastructure automation. Skilled in designing cost-effective and secure systems for large-scale environments.',
    currentProject: 'Rootin - Data Engineer',
    technologies: [
      // Programming Languages
      'Python',
      'Bash',
      'JavaScript',
      'PowerShell',
      'HTML',
      
      // Frameworks & Libraries
      'Express.js',
      'Flask',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'Matplotlib',
      
      // Automation & Tools
      'Terraform',
      'Airflow',
      'Figma',
      'Slack',
      'Notion',
      'Jira',
      'LLM(GPT)',
      
      // Database Systems
      'PostgreSQL',
      'MySQL',
      'DynamoDB'
    ],
    socialLinks: {
      email: 'kihoon.kim1220@gmail.com',
      linkedin: 'https://linkedin.com/in/kihoon-noah-kim',
      github: 'https://github.com/kihoonkim1220'
    },
    education: 'Bachelor of Science, Physics & Electronic Engineering - Kookmin University, Seoul, South Korea (Expected graduation Feb 2025)',
    interests: [
      'Cloud Engineering',
      'Data Engineering',
      'CI/CD Automation',
      'Machine Learning'
    ],
    story: {
      title: 'Building Scalable and Reliable Systems',
      content: `My journey in software engineering focuses on cloud-native applications and automation:

Data Engineer - Duel (Sep 2024 - Present) | Irvine, CA:
- Automated video content extraction into Quizlet decks by optimizing costs through reuse of existing deck categories and streamlined deployment workflows using Terraform.
- Reduced S3 read times from 4,000 seconds to 0.05 seconds by implementing a DynamoDB category-based querying system.
- Deployed serverless pipelines with AWS Lambda, enabling seamless processing for 20M+ user requests.

Data Engineer - NewsExplorer (Sep 2024 - Present) | Irvine, CA:
- Designed a system to filter, summarize, and analyze news articles based on preferences, supported by scalable infrastructure for FactCheck pipelines.
- Evaluated Cascade and Stacking methods for FactCheck Agent orchestration, balancing accuracy and resource efficiency.
- Integrated CloudWatch for monitoring and alerting to ensure pipeline reliability during real-time data analysis.

Data Engineer - Rootin (Sep 2024 - Present) | Irvine, CA:
- Developing a system to automate plant care through soil moisture measurement while optimizing automation costs by 50% through migration from MWAA (Airflow) to EventBridge.
- Implemented real-time IoT data pipelines with AWS Kinesis and MSK (Kafka) for reliable data ingestion and processing.
- Utilized CloudWatch and Lambda to dynamically manage workloads and ensure system stability.

AWS Practitioner Certification:
- Leveraging AWS Infrastructure and Analytics Services to Build a Serverless Data Lake.
- Implemented a large-scale data processing and content generation system leveraging AI/ML and automation services.`,
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
    bio: 'Experience developing data pipelines for various structured and unstructured data such as image and audio formats through diverse projects. Practical knowledge of Python, with experience using PyTorch, Spark, Whisper, and other AI models. Studied distributed systems by applying Kafka in various environments. Experienced with SQL databases, particularly PostgreSQL for data management and optimization. Familiar with cloud platforms like AWS, GCP, and Azure, as well as on-premises systems. Proficient in Tableau and Power BI for creating dashboards.',
    currentProject: 'Vori - Voice to Reports — Backend Developer',
    technologies: [
      'WebSocket',
      'OpenAI Whisper',
      'Python',
      'FastAPI',
      'TypeScript',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Apache Kafka',
      'Apache Spark (PySpark)',
      'Docker',
      'GCP VM',
      'Swagger',
      'AWS Lambda',
      'AWS EC2',
      'AWS S3',
      'AWS MSK'
    ],
    socialLinks: {
      email: 'kname12@outlook.com',
      linkedin: 'https://linkedin.com/in/kyongin-nam',
      github: 'https://github.com/nampaca123'
    },
    education: 'Information Technology, Bachelor of Engineering, Kookmin University, Seoul, South Korea (Expected 2026); International Business, Bachelor of Business Administration, Kookmin University, Seoul, South Korea (Expected 2026)',
    interests: [
      'Data Pipeline Development',
      'Distributed Systems',
      'Cloud Architecture',
      'AI/ML Integration'
    ],
    story: {
      title: 'Building Data-Driven Solutions',
      content: `My journey in data engineering has focused on creating efficient and scalable data solutions:

Vori | Voice to Reports — Backend Developer (Sep 2024 - Present) | Irvine, CA:
- Built a real-time transcription system using WebSocket and Whisper to convert meeting audio into text.
- Utilized generative AI to turn transcribed meetings into Kanban tasks with automated management.
- Leveraged Spark for analytics and LLM for advanced decisions to boost efficiency and reduce token usage.
- Designed a highly scalable service using Kafka partitioning and a microservices architecture.
- Redeveloped the legacy AWS-based project, improving workflow speed by 57% and reducing costs by 83%.

MakeEat | From Receipts to Delicious Recipes with AI — Backend Developer (Jul 2024 - Aug 2024) | Seoul, South Korea:
- Achieved 56.19% improved text recognition accuracy compared to Google’s Tesseract OCR alone.
- Reduced API costs by 80.67% through preprocessing text instead of sending raw images to GPT-4.
- Attained 30% faster processing speed compared to direct image analysis with GPT-4.
- Developed 55.13% more accurate nutritional analysis compared to similar recipe apps in the market.

FPT Software | Data Analyst (Jul 2024 - Aug 2024) | Hanoi, Vietnam:
- Managed a system to monitor attendance and commuting records for employees across global offices.
- Extracted data from APIs and SharePoint using Azure Data Factory for integration.
- Processed data with SQL queries and SRS documentation in SQL Server.
- Visualized data through real-time dashboards using Power BI for reporting and analysis.`,
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
    currentProject: 'Pawsome Day - Front-End Developer',
    technologies: [
      // Front-End
      'HTML',
      'CSS',
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'Expo',
      'TailwindCSS',
      'Zustand',
      'Docker',
      
      // Back-End
      'Node.js',
      'Express',
      'MongoDB',
      'AWS (EC2, S3, Lambda, API Gateway)'
    ],
    socialLinks: {
      email: 'marco.dykim@gmail.com',
      linkedin: 'https://linkedin.com/in/marco-dy-kim',
      github: 'https://github.com/0yeonnnnn0'
    },
    education: 'Bachelor of Science, Computer Science - Kookmin University, Seoul, South Korea (Expected 2026)',
    interests: [
      'Front-End Development',
      'Mobile Development',
      'UI/UX Design',
      'Cloud Architecture'
    ],
    story: {
      title: 'Building User-Centric Applications',
      content: `My journey in software development has focused on creating intuitive and efficient user experiences:

Pawsome Day - Front-End Developer (Sep 2024 - Dec 2024) | Irvine, CA:
- Developed a mobile app to streamline communication between dog daycare centers and pet owners, focusing on seamless reservation and diary functionalities.
- Utilized React Native for its minimal learning curve and robust JavaScript ecosystem, leveraging Expo for rapid prototyping.
- Implemented Zustand for efficient and straightforward state management.
- Contributed to the design process by identifying and fixing inconsistencies in the design system using Figma.
- Collaborated with backend developers by reviewing API documentation, defining required data structures, and ensuring seamless integration with frontend functionalities.

Duel - Full-Stack Developer (Oct 2024 - Dec 2024) | Irvine, CA:
- Developed a platform to streamline the creation of Quizlet decks by extracting key points from submitted videos, addressing the limitations of self-created questions and reducing manual effort.
- Enabled users to create and organize questions in just 8 minutes by submitting a video, reducing the process time by 96% compared to the traditional 120-minute workflow.
- Designed the AWS architecture diagram and contributed to backend development for efficient video data processing.
- Refactored the frontend codebase to enhance performance and maintainability.

Devmon - Full-Stack Developer (Nov 2024 - Dec 2024) | Irvine, CA:
- Built a platform to address the lack of explanations for coding test problems on "Baekjoon," a Korean platform known for its extensive collection of coding test questions.
- Delivered features such as recommended algorithms, detailed explanations, solution approaches, code samples, step-by-step breakdowns, space complexity analysis, and related problem suggestions.
- Independently developed the entire project and implemented prompt engineering to ensure accurate and well-structured outputs.`,
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
      email: 'cathyjoo0305@kookmin.ac.kr',
      linkedin: 'https://linkedin.com/in/cathyjoo',
      github: 'https://github.com/cathyjoo'
    },
    education: 'Bachelor of Arts in Spatial Design, Kookmin University (Expected 2025)',
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
    photo: '/images/students/casey.jpeg',
    role: 'UX Designer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'User-focused designer with expertise in project design and development, user research, behavioral analysis, and market research. With a background in psychology, bringing deep understanding of user-centered design principles is one of my specialties, along with a commitment and passion for connecting users across various settings and backgrounds.',
    currentProject: 'Rootin - IoT Sensor-Based Notification Service',
    technologies: [
      'Figma',
      'Photoshop',
      'Illustrator',
      'HTML',
      'CSS',
      'Framer'
    ],
    socialLinks: {
      email: 'caseylee247@gmail.com',
      linkedin: 'https://www.jeongheelee.com',
      github: 'https://github.com/caseylee'
    },
    education: 'Kookmin University (Expected 2027), BA in English and Literature, BA in Psychology',
    interests: [
      'User Research',
      'Behavioral Analysis',
      'Market Research',
      'Project Design'
    ],
    story: {
      title: 'Creating User-Centric Experiences',
      content: `My journey in UX design focuses on creating intuitive and impactful solutions:

Rootin (Sep 2024 - Nov 2024):
- Developed and designed an IoT sensor-based notification service that relieves the guesswork in indoor plant watering.
- Enhanced product usability by conducting surveys of 84 participants and in-depth interviews. Designed UI allowing users to easily monitor the plant's status, resulting in a 1.37x improvement of plant care.

Book Buddy (Oct 2024 - Dec 2024):
- Designed an AI-powered educational service enabling children to explore book content through virtual conversations and visual materials.
- Led project planning and conducted user research, maximizing educational impact to 1.5x with child-focused UI and age-specific image prompting.

RealMo (Oct 2024 - Dec 2024):
- Collaborated on an AWS-powered content moderation simulation system for a fictional streaming platform.
- Led market research and company analysis. Designed a customizable dashboard, enhancing efficiency to 1.47x in content moderation.

Connect (Sep 2024):
- Conceptualized and designed a leading-edge career recommendation & management service that integrates psychological data with AI.
- Solely planned the business concept and UI/UX design, anticipating to support 68.5% of South Korean youth without a career path and especially the 19.5% of those who are uncertain about their strengths.`,
      publishDate: 'December 20, 2024'
    }
  },
  {
    id: '9',
    name: 'Hojun Lim',
    photo: '/images/students/hojun.jpg',
    role: 'Software Engineer',
    location: 'Irvine, CA',
    nationality: 'South Korea',
    bio: 'Software engineer with expertise in systems infrastructure.',
    currentProject: 'Rootin - Keep your plant perfectly hydrated',
    technologies: [
      'Python',
      'FastAPI',
      'Flask',
      'Java',
      'Kotlin',
      'Spring',
      'Pandas',
      'TensorFlow',
      'Linux',
      'HTML',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Serverless',
      'Docker',
      'C++',
      'LLVM',
      'Apache Druid',
      'Shell Script',
      'Android',
      'AWS Lambda',
      'AWS ECS',
      'AWS RDS',
      'DynamoDB',
      'SageMaker',
      'Github Actions'
    ],
    socialLinks: {
      email: 'mailto:hojunlim.dev@gmail.com',
      linkedin: 'https://linkedin.com/in/hojunlim',
      github: 'https://github.com/devkaspee'
    },
    education: 'Bachelor of Science, Computer Science, Kookmin University (Expected Feb 2025)',
    interests: [
      'Systems Infrastructure',
      'Backend Development',
      'Data Engineering',
      'Cloud Architecture'
    ],
    story: {
      title: 'Building Scalable Systems and Solutions',
      content: `My journey in software engineering focuses on building reliable infrastructure and optimizing systems:

Backend Developer at AB180 Inc. (Sep 2020 - Jun 2023):
- Integrated advertising performance reports from multiple platforms including Meta, Google, and TikTok
- 3 years of experience operating production servers using Serverless framework and Docker
- Reduced development time for integrations from 20 days to 2 days through system abstraction
- Established structured API design and processes with versioning system
- Reduced production testing and E2E processing time by 90% using asynchronous operations

Data Engineer at Metric Studio Inc. (Jun 2020 - Sep 2020):
- Developed purchase prediction model analyzing user purchasing behavior
- Preprocessed large-scale data (10M event per day) using Apache Spark on AWS EMR
- Built deep learning binary classification model using AWS SageMaker with MongoDB

Fullstack Developer at WikiWiki (Dec 2019 - Feb 2020):
- Developed and deployed Smart Kalimba Android application
- Achieved 1 million downloads

Recent Projects:
Scaling Program Analysis (Jul 2024 - Sep 2024):
- Improved LLVM static code analysis scalability by optimizing IFDS algorithm's memory usage
- Identified limits in conventional caching strategies and demonstrated effective alternatives

Rootin (Aug 2024 - Dec 2024):
- Designed scalable data pipelines using AWS Lambda for IoT sensor data
- Implemented real-time plant watering management system combining hardware sensors and mobile app`,
      publishDate: 'December 20, 2024'
    }
  },
]; 