<template>
  <div class="home" data-scroll-container>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="text-content">
          <div class="title-wrapper" 
               v-motion
               :initial="{ opacity: 0, y: 100 }"
               :enter="{ opacity: 1, y: 0, transition: { duration: 1000, type: 'spring' } }">
            <div class="title-line">
              <span class="gradient-text">Global Tech</span>
              <div class="accent-dot"></div>
            </div>
            <div class="title-line">
              <span class="gradient-text">Real Experience</span>
              <div class="accent-dot"></div>
            </div>
            <div class="title-line">
              <span class="gradient-text">Your Future</span>
              <div class="accent-dot"></div>
            </div>
          </div>
          
          <p class="hero-subtitle" 
             v-motion
             :initial="{ opacity: 0 }"
             :enter="{ opacity: 1, transition: { delay: 700 } }">
            KMU Global Campus: Your Gateway to Silicon Valley Tech Careers
          </p>
          
          <div class="cta-buttons"
               v-motion
               :initial="{ opacity: 0, y: 50 }"
               :enter="{ opacity: 1, y: 0, transition: { delay: 1000 } }">
            <button class="cta-btn primary" @click="scrollToSection('students')">
              <span>Show Students</span>
              <i class="fas fa-arrow-right"></i>
            </button>
            <button class="cta-btn secondary" @click="scrollToSection('projects')">
              <span>Show Projects</span>
              <i class="fas fa-code"></i>
            </button>
            <NuxtLink to="/about" class="cta-btn accent">
              <span>About Us</span>
              <i class="fas fa-info-circle"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Animated Background Elements -->
      <div class="hero-background">
        <div class="gradient-blob"></div>
        <div class="grid-overlay"></div>
        <div class="floating-elements">
          <div class="tech-icon" v-for="(icon, i) in techIcons" :key="i"
               :style="{ animationDelay: `${i * 0.2}s` }">
            <i :class="icon"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Students Section -->
    <section id="students" class="section" ref="studentsSection">
      <div class="students-container" v-motion
           :initial="{ opacity: 0, scale: 0.8 }"
           :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
        <div class="intro-card">
          <h2 class="section-title" v-motion-slide-bottom>Our Students</h2>
          
          <div class="content">
            <div class="text-section">
              <div class="glass-container">
                <div class="intro-text">
                  <span class="highlight">Our students</span> come from diverse backgrounds, bringing unique perspectives and skills to the tech industry. Each one is paired with industry mentors from leading companies like Blizzard, AWS, and Walmart.
                </div>
                
                <div class="stats-cards">
                  <div class="stat-card">
                    <i class="fas fa-users stat-icon"></i>
                    <div class="stat-content">
                      <div class="stat-number">9</div>
                      <div class="stat-label">Active Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="students-grid">
              <StudentCard 
                v-for="student in students" 
                :key="student.id"
                :student-data="student"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section" ref="projectsSection">
      <div class="projects-container">
        <h1 class="title" v-motion-slide-bottom>Our Projects</h1>
        
        <div class="category-filters" v-motion-slide-bottom>
          <button 
            v-for="category in projectCategories"
            :key="category.name"
            class="category-btn glass-effect"
            :class="{ active: selectedCategory === category.name }"
            :style="{ '--accent-color': category.color }"
            @click="selectedCategory = category.name">
            <i :class="category.icon"></i>
            {{ category.name }}
            <span class="project-count">{{ projects.filter(p => p.category === category.name).length }}</span>
          </button>
        </div>

        <TransitionGroup 
          tag="div" 
          class="projects-grid"
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave">
          <div v-for="project in filteredProjects" 
               :key="project.id"
               class="project-card glass-effect"
               :data-category="project.category">
            <div class="card-content">
              <div class="project-header">
                <div class="project-status" :class="project.status">{{ project.status }}</div>
                <div class="project-links">
                  <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                  </a>
                  <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="tech-stack">
                <div v-for="tech in project.technologies" 
                     :key="tech"
                     class="tech-badge">
                  {{ tech }}
                </div>
              </div>

              <div class="project-media">
                <img 
                  :src="project.projectImage" 
                  :alt="project.title" 
                  class="project-thumbnail"
                >
                <div class="media-overlay">
                  <a v-if="project.demo" :href="project.demo" target="_blank" class="media-btn">
                    <i class="fab fa-youtube"></i>
                    Watch Demo
                  </a>
                  <NuxtLink :to="`/projects/${project.id}`" class="media-btn more-details">
                    <i class="fas fa-info-circle"></i>
                    More Details
                  </NuxtLink>
                  <a v-if="project.presentation" :href="project.presentation" target="_blank" class="media-btn">
                    <i class="fas fa-file-pdf"></i>
                    View Presentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- Hire Section -->
    <section id="hire" class="section" ref="hireSection">
      <HireSection />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useScroll } from '@vueuse/core'
import { students } from '~/data/students'
import StudentCard from '~/components/students/StudentCard.vue'
import { projects, projectCategories } from '~/data/projects'
import { gsap } from 'gsap'
import HireSection from '~/components/hire/HireSection.vue'

const heroSection = ref(null)
const studentsSection = ref(null)
const storiesSection = ref(null)
const hireSection = ref(null)

const studentsWithStories = computed(() => {
  return students.filter(student => student.story)
})

const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}


const selectedCategory = ref('FullStack')

const filteredProjects = computed(() => {
  return projects.filter(project => project.category === selectedCategory.value)
})

const getCategoryColor = (category: string) => {
  return projectCategories.find(c => c.name === category)?.color || '#00F5A0'
}

const beforeEnter = (el: Element) => {
  gsap.set(el, {
    opacity: 0,
    scale: 0.8,
    y: 50
  })
}

const enter = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
    onComplete: done
  })
}

const leave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    scale: 0.8,
    y: -50,
    duration: 0.6,
    ease: 'power2.in',
    onComplete: done
  })
}

onMounted(() => {
  const { y } = useScroll(window)
  
  // Add scroll-based animations if needed
  watch(y, (newY) => {
    // Add scroll-based animations here
  })
})

const activeField = ref(null)
const form = ref({
  company: '',
  name: '',
  email: '',
  message: ''
})

const features = [
  {
    title: 'Silicon Valley Ready',
    description: 'Our developers have hands-on experience with US tech companies',
    icon: 'fas fa-rocket',
    gradient: 'linear-gradient(45deg, #00F5A0, #00D9F5)'
  },
  {
    title: 'Full Stack Expertise',
    description: 'Proficient in modern web, mobile, and cloud technologies',
    icon: 'fas fa-layer-group',
    gradient: 'linear-gradient(45deg, #00D9F5, #00F5A0)'
  }
]

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
.home {
  padding-top: 80px;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: radial-gradient(circle at top right, rgba(0, 245, 160, 0.1), transparent 50%),
              radial-gradient(circle at bottom left, rgba(0, 217, 245, 0.1), transparent 50%);
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.text-content {
  max-width: 800px;
}

.title-wrapper {
  margin-bottom: 2rem;
}

.title-line {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.gradient-text {
  font-size: 5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 30px rgba(0, 245, 160, 0.3));
  line-height: 1.1;
}

.accent-dot {
  width: 12px;
  height: 12px;
  background: #00F5A0;
  border-radius: 50%;
  margin-left: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 245, 160, 0.5);
}

.hero-subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 500;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
}

.cta-btn {
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
}

.cta-btn.primary {
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  color: #000;
  box-shadow: 0 8px 30px rgba(0, 245, 160, 0.3);
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-btn:hover {
  transform: translateY(-3px);
}

.cta-btn.primary:hover {
  box-shadow: 0 12px 40px rgba(0, 245, 160, 0.4);
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.gradient-blob {
  position: absolute;
  width: 1000px;
  height: 1000px;
  right: -400px;
  top: -400px;
  background: radial-gradient(circle, 
    rgba(0, 245, 160, 0.1) 0%,
    rgba(0, 217, 245, 0.1) 30%,
    transparent 70%);
  filter: blur(60px);
  animation: float 20s ease-in-out infinite;
  transform-origin: center;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-50px, 50px) rotate(2deg); }
  66% { transform: translate(50px, -30px) rotate(-2deg); }
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 3.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}

.section {
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
}

.section-content {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.story-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.story-card:hover {
  transform: translateY(-5px);
}

.story-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.story-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.story-meta h3 {
  margin: 0;
  font-size: 1.2rem;
  color: white;
}

.story-meta p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.story-content h4 {
  margin: 0 0 1rem;
  color: #00F5A0;
}

.story-content p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.apply-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.apply-button {
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  border: none;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  color: black;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-top: 2rem;
}

.apply-button:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .section {
    padding: 4rem 1rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .stories-grid {
    grid-template-columns: 1fr;
  }
}

.students-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
}

.glass-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
}

.highlight {
  background: linear-gradient(120deg, #0984E3, #6c5ce7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.stats-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stat-card {
  background: rgba(31, 41, 55, 0.4);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, background 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  background: rgba(31, 41, 55, 0.6);
}

.stat-icon {
  font-size: 1.5rem;
  color: #0984E3;
  background: rgba(9, 132, 227, 0.1);
  padding: 1rem;
  border-radius: 12px;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #0984E3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.3rem;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
}

.students-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.category-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.category-stat {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-stat i {
  font-size: 1.5rem;
  color: var(--accent-color);
}

.featured-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.view-all-projects {
  text-align: center;
  margin-top: 3rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background: rgba(0, 245, 160, 0.2);
  transform: translateY(-2px);
}

.view-all-btn i {
  transition: transform 0.3s ease;
}

.view-all-btn:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .category-stats {
    grid-template-columns: 1fr;
  }
  
  .featured-projects {
    grid-template-columns: 1fr;
  }
}

.projects-overview {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.category-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.category-stat {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.category-stat:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.08);
}

.category-stat i {
  font-size: 1.5rem;
  color: var(--accent-color);
}

.featured-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.view-all {
  text-align: center;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background: rgba(0, 245, 160, 0.2);
  transform: translateY(-2px);
}

.view-all-btn i {
  transition: transform 0.3s ease;
}

.view-all-btn:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .category-stats {
    grid-template-columns: 1fr;
  }
  
  .featured-projects {
    grid-template-columns: 1fr;
  }
}

.category-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.category-btn {
  padding: 1rem 2rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.category-btn i {
  color: var(--accent-color);
}

.category-btn.active {
  background: var(--accent-color);
  color: #000;
  font-weight: 600;
  box-shadow: 0 0 20px rgba(var(--accent-color), 0.3);
}

.category-btn.active i {
  color: #000;
}

.project-count {
  background: rgba(0, 0, 0, 0.2);
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.category-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.project-card {
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 2rem;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 1.8rem;
  margin: 1rem 0;
  background: linear-gradient(45deg, #fff, var(--accent-color, #00F5A0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1.5rem 0;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .category-filters {
    flex-direction: column;
    align-items: stretch;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* Common heading style for all sections */
.section-title,
.title,
h1, h2 {
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  background: linear-gradient(
    45deg,
    #00F5A0 0%,
    #00D9F5 50%,
    #00F5A0 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 8s linear infinite;
  filter: drop-shadow(0 0 20px rgba(0, 245, 160, 0.2));
}

.section-title::after,
.title::after,
h1::after,
h2::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #00F5A0, #00D9F5);
  border-radius: 2px;
}

@keyframes shine {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title,
  .title,
  h1, h2 {
    font-size: 2.5rem;
  }
  
  .section-title::after,
  .title::after,
  h1::after,
  h2::after {
    width: 60px;
    height: 3px;
  }
}

.project-media {
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.project-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-media:hover .project-thumbnail {
  transform: scale(1.05);
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-media:hover .media-overlay {
  opacity: 1;
}

.media-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.media-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.hire-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hire-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.stat-card {
  background: rgba(31, 41, 55, 0.4);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, background 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  background: rgba(31, 41, 55, 0.6);
}

.stat-icon {
  font-size: 1.5rem;
  color: #00F5A0;
  background: rgba(0, 245, 160, 0.1);
  padding: 1rem;
  border-radius: 12px;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #00F5A0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.3rem;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hire-stats {
    flex-direction: column;
    gap: 1rem;
  }
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

input, select, textarea {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  transition: all 0.3s ease;
}

textarea {
  height: 120px;
  resize: vertical;
}

.focused {
  border-color: #00F5A0;
  box-shadow: 0 0 0 2px rgba(0, 245, 160, 0.2);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  border: none;
  border-radius: 12px;
  color: black;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 245, 160, 0.3);
}

.cta-btn.accent {
  background: rgba(0, 245, 160, 0.1);
  border: 1px solid rgba(0, 245, 160, 0.3);
  color: #00F5A0;
  padding: 1rem 2rem;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-btn.accent:hover {
  background: rgba(0, 245, 160, 0.2);
  transform: translateY(-3px);
}

.cta-btn.accent i {
  font-size: 1.1rem;
}

.media-btn.more-details {
  background: rgba(0, 245, 160, 0.2);
}

.media-btn.more-details:hover {
  background: rgba(0, 245, 160, 0.3);
  transform: translateY(-2px);
}
</style> 