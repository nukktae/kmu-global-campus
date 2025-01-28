<template>
  <div class="student-profile" v-if="studentData">
    <section class="hero-section">
      <div class="profile-container">
        <!-- Modern Glass Card Design -->
        <div class="profile-card">
          <div class="gradient-blob"></div>
          <div class="gradient-blob-2"></div>
          
          <div class="card-content">
            <div class="profile-header">
              <div class="profile-image-wrapper">
                <img :src="studentData.photo" :alt="studentData.name">
                <div class="status-ring">
                  <div class="hire-status">
                    <span class="status-dot"></span>
                    Available for Hire
                  </div>
                </div>
              </div>
              
              <div class="header-info">
                <h1 class="name">{{ studentData.name }}</h1>
                <div class="professional-links">
                  <a v-if="studentData.socialLinks?.linkedin" 
                     :href="studentData.socialLinks.linkedin"
                     class="prof-link linkedin"
                     target="_blank">
                    <i class="fab fa-linkedin"></i>
                    <span class="link-text">LinkedIn</span>
                  </a>
                  <a v-if="studentData.socialLinks?.github" 
                     :href="studentData.socialLinks.github"
                     class="prof-link github"
                     target="_blank">
                    <i class="fab fa-github"></i>
                    <span class="link-text">GitHub</span>
                  </a>
                  <a v-if="studentData.socialLinks?.portfolio" 
                     :href="studentData.socialLinks.portfolio"
                     class="prof-link portfolio"
                     target="_blank">
                    <i class="fas fa-globe"></i>
                    <span class="link-text">Portfolio</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="profile-details">
              <p class="bio">{{ studentData.bio }}</p>
              <div class="technologies-section">
                <h3 class="tech-title">Technologies</h3>
                <div class="tech-tags">
                  <div v-for="(tech, index) in studentData.technologies" 
                       :key="tech"
                       class="tech-tag"
                       :class="getRandomColorClass(index)"
                       v-motion
                       :initial="{ opacity: 0, y: 20 }"
                       :enter="{ 
                         opacity: 1, 
                         y: 0,
                         transition: { duration: 400, delay: Math.random() * 500 }
                       }">
                    {{ tech }}
                  </div>
                </div>
              </div>
              <div class="action-buttons">
                <button class="hire-button" @click="handleHireClick">
                  <span class="button-content">
                    <i class="fas fa-paper-plane"></i>
                    Hire {{ studentData.name.split(' ')[0] }}
                  </span>
                </button>
                <a v-if="studentData.socialLinks?.portfolio" 
                   :href="studentData.socialLinks.portfolio" 
                   target="_blank" 
                   class="portfolio-button">
                  <span class="button-content">
                    <i class="fas fa-globe"></i>
                    View Portfolio
                  </span>
                </a>
                <a v-if="studentData.resume" 
                   :href="studentData.resume" 
                   target="_blank" 
                   class="resume-button">
                  <span class="button-content">
                    <i class="fas fa-file-pdf"></i>
                    Download Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Original Experience Timeline -->
    <section class="experience-section">
      <h2 class="section-title">Journey</h2>
      <div class="timeline">
        <div v-for="(experience, index) in parseExperiences(studentData.story?.content || '')"
             :key="index"
             class="timeline-item"
             v-motion
             :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
             :enter="{ 
               opacity: 1, 
               x: 0,
               transition: { 
                 delay: index * 200,
                 duration: 800
               }
             }">
          <div class="timeline-content">
            <div class="experience-card">
              <div class="card-header">
                <h3>{{ experience.title }}</h3>
                <span class="date">{{ experience.date }}</span>
              </div>
              <ul class="achievements">
                <li v-for="(point, pointIndex) in experience.points"
                    :key="pointIndex"
                    v-motion
                    :initial="{ opacity: 0, y: 20 }"
                    :enter="{ 
                      opacity: 1,
                      y: 0,
                      transition: { delay: (index * 200) + (pointIndex * 100) }
                    }">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import type { Student } from '~/data/students';
import { students } from '~/data/students';

const route = useRoute();
const studentId = route.params.id as string;

// Find the student data from our students array
const studentData = computed(() => 
  students.find(student => student.id === studentId) ?? {
    id: '',
    name: 'Student Not Found',
    photo: '/images/placeholder.jpg',
    role: '',
    location: '',
    nationality: '',
    bio: '',
    currentProject: '',
    email: '',
    mentor: {
      name: '',
      company: '',
      role: ''
    },
    technologies: [],
    socialLinks: {
      github: undefined,
      linkedin: undefined,
      portfolio: undefined
    },
    education: '',
    interests: [],
    resume: '',
    story: {
      content: ''
    }
  }
);

// Add this function to parse the story content into structured experiences
const parseExperiences = (content: string) => {
  const experiences: Array<{
    title: string;
    date: string;
    points: string[];
  }> = [];
  
  const sections = content.split('\n\n');
  
  let currentExperience: {
    title: string;
    date: string;
    points: string[];
  } | null = null;
  
  for (const section of sections) {
    if (section.includes(':')) {
      const [title, date] = section.split('(');
      currentExperience = {
        title: title.trim(),
        date: date ? date.replace(')', '').trim() : '',
        points: []
      };
      experiences.push(currentExperience);
    } else if (section.trim().startsWith('-') && currentExperience) {
      currentExperience.points.push(section.trim().substring(2));
    }
  }
  
  return experiences;
};

const getOrbitPosition = (index: number, total: number) => {
  const angle = (index * 360) / total
  const radius = 250
  const x = Math.cos(angle * Math.PI / 180) * radius
  const y = Math.sin(angle * Math.PI / 180) * radius
  return {
    transform: `translate(${x}px, ${y}px)`
  }
}

const handleHireClick = () => {
  const email = studentData.value.email || 'contact@example.com';
  window.location.href = `mailto:${email}?subject=Job Opportunity for ${studentData.value.name}`;
}

// Add this function for random color assignment
const getRandomColorClass = (index: number) => {
  const colors = [
    'blue', 'purple', 'green', 'orange', 'pink', 
    'teal', 'indigo', 'cyan', 'rose', 'amber'
  ];
  return colors[index % colors.length];
}
</script>

<style scoped>
.student-profile {
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hero-section {
  padding: 2rem 0;
  position: relative;
}

.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.profile-card {
  background: rgba(22, 28, 36, 0.95);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.gradient-blob {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(75, 121, 228, 0.15), transparent 70%);
  top: -150px;
  left: -150px;
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;
}

.gradient-blob-2 {
  position: absolute;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(56, 178, 172, 0.15), transparent 70%);
  bottom: -100px;
  right: -100px;
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 3rem;
}

.profile-header {
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-image-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
}

.profile-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid rgba(255, 255, 255, 0.1);
}

.status-ring {
  position: absolute;
  top: -10px;
  right: -10px;
}

.hire-status {
  background: rgba(75, 121, 228, 0.15);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(75, 121, 228, 0.3);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header-info {
  flex: 1;
}

.name {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #4B79E4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.professional-links {
  display: flex;
  gap: 1rem;
}

.prof-link {
  width: auto;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 12px;
  background: rgba(75, 121, 228, 0.15);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(75, 121, 228, 0.3);
  text-decoration: none;
}

.link-text {
  font-size: 0.9rem;
}

.linkedin:hover {
  background: rgba(0, 119, 181, 0.2);
  border-color: #0077b5;
  color: #0077b5;
}

.github:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
  color: #fff;
}

.portfolio:hover {
  background: rgba(0, 245, 160, 0.1);
  border-color: #00F5A0;
  color: #00F5A0;
}

.profile-details {
  margin-top: 2rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.hire-button {
  background: linear-gradient(45deg, #4B79E4, #38B2AC);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.button-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 600;
}

.hire-button:hover {
  background: linear-gradient(45deg, #38B2AC, #4B79E4);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(75, 121, 228, 0.3);
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .professional-links {
    justify-content: center;
  }

  .profile-image-wrapper {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }

  .name {
    font-size: 2rem;
  }
}

/* Original Experience Timeline Styles */
.experience-section {
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #fff, #4B79E4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline {
  position: relative;
  padding: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #4B79E4, transparent);
  transform: translateX(-50%);
}

.timeline-item {
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.timeline-content {
  width: 45%;
  margin-left: auto;
  margin-right: auto;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 55%;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: 55%;
}

.experience-card {
  background: rgba(22, 28, 36, 0.95);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.card-header {
  margin-bottom: 1rem;
}

.card-header h3 {
  font-size: 1.5rem;
  color: #4B79E4;
  margin-bottom: 0.5rem;
}

.date {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.achievements {
  list-style: none;
  padding: 0;
}

.achievements li {
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.achievements li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #4B79E4;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 0;
  }
  
  .timeline-content {
    width: 90%;
    margin-left: 2rem !important;
  }
  
  .timeline-item:nth-child(even) .timeline-content,
  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: 2rem;
    margin-right: auto;
  }
}

.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.portfolio-button {
  background: rgba(75, 121, 228, 0.15);
  border: 1px solid rgba(75, 121, 228, 0.3);
  padding: 1rem 2rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
}

.portfolio-button .button-content {
  color: white;
}

.portfolio-button:hover {
  background: rgba(75, 121, 228, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(75, 121, 228, 0.2);
}

@media (max-width: 768px) {
  .action-buttons {
    justify-content: center;
  }
}

.technologies-section {
  margin: 2rem 0;
  background: rgba(22, 28, 36, 0.6);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #4B79E4;
  font-weight: 600;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  cursor: default;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Color variations for tech tags */
.tech-tag.blue {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}
.tech-tag.blue:hover {
  background: rgba(59, 130, 246, 0.25);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.tech-tag.purple {
  background: rgba(168, 85, 247, 0.15);
  border-color: rgba(168, 85, 247, 0.3);
}
.tech-tag.purple:hover {
  background: rgba(168, 85, 247, 0.25);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2);
}

.tech-tag.green {
  background: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.3);
}
.tech-tag.green:hover {
  background: rgba(16, 185, 129, 0.25);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.tech-tag.orange {
  background: rgba(249, 115, 22, 0.15);
  border-color: rgba(249, 115, 22, 0.3);
}
.tech-tag.orange:hover {
  background: rgba(249, 115, 22, 0.25);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
}

.tech-tag.pink {
  background: rgba(236, 72, 153, 0.15);
  border-color: rgba(236, 72, 153, 0.3);
}
.tech-tag.pink:hover {
  background: rgba(236, 72, 153, 0.25);
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.2);
}

.tech-tag.teal {
  background: rgba(20, 184, 166, 0.15);
  border-color: rgba(20, 184, 166, 0.3);
}
.tech-tag.teal:hover {
  background: rgba(20, 184, 166, 0.25);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.2);
}

.tech-tag.indigo {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
}
.tech-tag.indigo:hover {
  background: rgba(99, 102, 241, 0.25);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.tech-tag.cyan {
  background: rgba(6, 182, 212, 0.15);
  border-color: rgba(6, 182, 212, 0.3);
}
.tech-tag.cyan:hover {
  background: rgba(6, 182, 212, 0.25);
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.2);
}

.tech-tag.rose {
  background: rgba(244, 63, 94, 0.15);
  border-color: rgba(244, 63, 94, 0.3);
}
.tech-tag.rose:hover {
  background: rgba(244, 63, 94, 0.25);
  box-shadow: 0 4px 12px rgba(244, 63, 94, 0.2);
}

.tech-tag.amber {
  background: rgba(245, 158, 11, 0.15);
  border-color: rgba(245, 158, 11, 0.3);
}
.tech-tag.amber:hover {
  background: rgba(245, 158, 11, 0.25);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
}

@media (max-width: 768px) {
  .tech-tags {
    gap: 0.6rem;
  }
  
  .tech-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}

.resume-button {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 71, 87, 0.15);
  border: 1px solid rgba(255, 71, 87, 0.3);
  border-radius: 50px;
  color: #FF4757;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.resume-button:hover {
  background: rgba(255, 71, 87, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.2);
}

.resume-button .button-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style> 