<template>
  <div class="project-details" v-if="projectData">
    <Background />
    
    <!-- Hero Section -->
    <section class="hero-section glass-morphism">
      <div class="hero-content">
        <div class="project-meta">
          <div class="project-status" :class="projectData.status">
            {{ projectData.status }}
          </div>
          <div class="project-category">
            <i :class="getCategoryIcon(projectData.category)"></i>
            {{ projectData.category }}
          </div>
        </div>
        
        <h1 class="project-title">{{ projectData.title }}</h1>
        <p class="project-description">{{ projectData.description }}</p>
        
        <div class="action-buttons">
          <a v-if="projectData.demo" :href="projectData.demo" target="_blank" 
             class="action-btn demo">
            <i class="fas fa-play-circle"></i>
            Watch Demo
          </a>
          <a v-if="projectData.github" :href="projectData.github" target="_blank" 
             class="action-btn github">
            <i class="fab fa-github"></i>
            View Code
          </a>
          <a v-if="projectData.presentation" :href="projectData.presentation" target="_blank" 
             class="action-btn presentation">
            <i class="fas fa-file-pdf"></i>
            View Deck
          </a>
        </div>
      </div>
      
      <div class="project-preview">
        <img :src="projectData.projectImage" :alt="projectData.title" class="preview-image">
        <div class="preview-overlay"></div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="content-wrapper">
      <!-- Overview Section -->
      <section class="overview-section glass-card" v-motion-slide-visible>
        <h2>Project Overview</h2>
        <div class="overview-grid">
          <div class="overview-card">
            <h3>Core Features</h3>
            <ul class="feature-list">
              <li v-for="(feature, index) in projectData.features" :key="index">
                {{ feature.title }}
              </li>
            </ul>
          </div>
          <div class="overview-card">
            <h3>Target Audience</h3>
            <div class="audience-segments">
              <div v-for="age in projectData.targetAudience" :key="age.group" 
                   class="audience-segment">
                <h4>{{ age.group }}</h4>
                <p>{{ age.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="tech-stack glass-card" v-motion-slide-visible>
        <h2>Technologies Used</h2>
        <div class="tech-categories">
          <div v-for="(category, name) in groupedTechnologies" 
               :key="name" 
               class="tech-category">
            <h3>{{ name }}</h3>
            <div class="tech-grid">
              <div v-for="tech in category" 
                   :key="tech" 
                   class="tech-pill">
                {{ tech }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section glass-card" v-if="projectData.team?.length" v-motion-slide-visible>
        <h2>Team Members</h2>
        <div class="team-grid">
          <NuxtLink 
            v-for="member in projectData.team" 
            :key="member.id"
            :to="`/students/${getStudentId(member.name)}`" 
            class="team-card glass-effect"
          >
            <div class="card-content">
              <div class="member-avatar">
                <img 
                  v-if="getMemberPhoto(member.name)" 
                  :src="getMemberPhoto(member.name)" 
                  :alt="member.name"
                >
                <div v-else class="avatar-placeholder">
                  {{ member.name.charAt(0) }}
                </div>
              </div>
              <div class="member-info">
                <h3>{{ member.name }}</h3>
                <p class="role">{{ member.role }}</p>
                <p class="contribution">{{ getMemberContribution(member.name) }}</p>
              </div>
              <div class="card-footer">
                <span class="view-profile">View Profile →</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Highlights Section -->
      <section class="highlights-section glass-card" v-motion-slide-visible>
        <h2>Key Highlights & Outcomes</h2>
        <div class="highlights-grid">
          <div v-for="(highlight, index) in projectData.highlights" 
               :key="index"
               class="highlight-card glass-effect"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }">
            <div class="highlight-number">#{{ index + 1 }}</div>
            <p>{{ highlight }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from '#app'
import { projects, projectCategories } from '~/data/projects'
import { students } from '~/data/students'
import Background from '~/components/Background.vue'
import type { Project } from '~/types'

const route = useRoute()
const projectId = computed(() => Number(route.params.id))

const projectData = computed<Project>(() => 
  projects.find(project => project.id === projectId.value) ?? {
    id: 0,
    title: '',
    description: '',
    category: 'FullStack',
    status: 'completed',
    technologies: [],
    team: [],
    projectImage: '',
    highlights: [],
    features: [],
    targetAudience: [],
    ageGroupCustomization: {} as Record<string, string>
  }
)

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'FullStack':
      return 'fas fa-layer-group'
    case 'AWS':
      return 'fab fa-aws'
    case 'LLM':
      return 'fas fa-brain'
    default:
      return 'fas fa-code'
  }
}

const getTechCategory = (tech: string) => {
  const categories: Record<string, string[]> = {
    frontend: ['React', 'Vue', 'Angular', 'React Native', 'Next.js', 'Nuxt'],
    backend: ['Node.js', 'Express', 'FastAPI', 'Django', 'Flask'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'DynamoDB'],
    cloud: ['AWS', 'GCP', 'Azure', 'Lambda', 'S3', 'EC2'],
    ai: ['GPT-4', 'OpenAI', 'TensorFlow', 'PyTorch', 'Bedrock']
  }

  return Object.entries(categories).reduce((acc, [category, techs]) => {
    if (techs.some(t => tech.includes(t))) return category
    return acc
  }, 'other')
}

const groupedTechnologies = computed(() => {
  if (!projectData.value?.technologies) return {}
  
  return projectData.value.technologies.reduce((acc, tech) => {
    const category = getTechCategory(tech)
    if (!acc[category]) acc[category] = []
    acc[category].push(tech)
    return acc
  }, {})
})

const getMemberPhoto = (name: string) => {
  const student = students.find(s => s.name.includes(name))
  return student?.photo
}

const getMemberContribution = (name: string) => {
  const student = students.find(s => s.name.includes(name))
  if (!student?.story?.content) return ''
  
  const projectContent = student.story.content
    .split('\n\n')
    .find(section => section.includes(projectData.value?.title))
    
  return projectContent?.split('\n')[1]?.replace('- ', '') || ''
}

const formatDate = (dateString: string = '') => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString()
}

const categories: Record<string, string[]> = {
  frontend: ['React', 'Vue', 'Angular'],
  backend: ['Node.js', 'Express', 'FastAPI'],
  cloud: ['AWS', 'GCP', 'Azure']
}

const getStudentId = (name: string) => {
  return students.find(s => s.name.includes(name))?.id || '1'
}
</script>

<style scoped>
.project-details {
  min-height: 100vh;
  color: white;
  padding: 2rem;
  position: relative;
}

.hero-section {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  padding: 4rem;
  margin-bottom: 3rem;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
}

.glass-morphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.project-status {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.project-status.completed {
  background: rgba(0, 245, 160, 0.15);
  color: #00F5A0;
}

.project-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #4B79E4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.action-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.action-btn.demo {
  background: rgba(0, 245, 160, 0.15);
  color: #00F5A0;
  border: 1px solid rgba(0, 245, 160, 0.3);
}

.action-btn.github {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.action-btn.presentation {
  background: rgba(75, 121, 228, 0.15);
  color: #4B79E4;
  border: 1px solid rgba(75, 121, 228, 0.3);
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.tech-pill {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: rgba(75, 121, 228, 0.15);
  border: 1px solid rgba(75, 121, 228, 0.3);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tech-pill:hover {
  transform: translateY(-2px);
  background: rgba(75, 121, 228, 0.25);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.highlight-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.08);
}

.highlight-number {
  position: absolute;
  top: -10px;
  left: -10px;
  background: #4B79E4;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-preview {
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.4), transparent);
}

.project-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.project-category {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
  overflow: hidden;
}

.team-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(75, 121, 228, 0.3);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(75, 121, 228, 0.3);
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(75, 121, 228, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
}

.member-info {
  flex: 1;
}

.member-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #fff, #4B79E4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.role {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

.contribution {
  font-size: 0.85rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.6);
}

.card-footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.view-profile {
  font-size: 0.9rem;
  color: #4B79E4;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.team-card:hover .view-profile {
  opacity: 1;
  transform: translateX(0);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
  }
  
  .project-preview {
    height: 300px;
  }
  
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-categories {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}

.gradient-text {
  background: linear-gradient(45deg, #fff, #4B79E4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style> 