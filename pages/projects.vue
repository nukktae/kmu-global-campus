<template>
  <div class="projects-page">
    <div class="projects-container">
      <h1 class="title" v-motion-slide-bottom>Our Projects</h1>
      
      <!-- Category Filters -->
      <div class="category-filters" v-motion-slide-bottom>
        <button 
          v-for="category in projectCategories"
          :key="category.name"
          class="category-btn"
          :class="{ active: selectedCategory === category.name }"
          :style="{ '--accent-color': category.color }"
          @click="selectedCategory = category.name">
          <i :class="category.icon"></i>
          {{ category.name }}
          <span class="project-count">
            {{ projects.filter(p => p.category === category.name).length }}
          </span>
        </button>
      </div>

      <!-- Projects Grid -->
      <TransitionGroup 
        tag="div" 
        class="projects-grid"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <div v-for="project in filteredProjects" 
             :key="project.id"
             class="project-card"
             :data-category="project.category">
          <div class="card-content">
            <!-- Media Section -->
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

            <!-- Project Info -->
            <div class="project-info">
              <div class="project-header">
                <div class="project-status" :class="project.status">{{ project.status }}</div>
                <div class="project-links">
                  <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
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

              <div class="team-info">
                <h4>Team</h4>
                <div class="team-list">
                  <div v-for="member in project.team" :key="member.id" class="team-member">
                    <span class="member-name">{{ member.name }}</span>
                    <span class="member-role">{{ member.role }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { gsap } from 'gsap';
import { projects, projectCategories } from '~/data/projects';

const selectedCategory = ref('FullStack');

const filteredProjects = computed(() => {
  return projects.filter(project => project.category === selectedCategory.value);
});

const getCategoryColor = (category: string) => {
  return projectCategories.find(c => c.name === category)?.color || '#00F5A0';
};

// Animation handlers
const beforeEnter = (el: Element) => {
  gsap.set(el, {
    opacity: 0,
    scale: 0.8,
    y: 50
  });
};

const enter = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
    onComplete: done
  });
};

const leave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    scale: 0.8,
    y: -50,
    duration: 0.6,
    ease: 'power2.in',
    onComplete: done
  });
};
</script>

<style scoped>
.projects-page {
  padding: 6rem 2rem;
  min-height: 100vh;
  background: transparent;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.project-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 245, 160, 0.1), rgba(0, 217, 245, 0.1));
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.project-card:hover .card-background {
  transform: translateY(0);
}

.project-status {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.project-status.in-progress {
  background: rgba(0, 245, 160, 0.2);
  color: #00F5A0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.team-avatars {
  display: flex;
  align-items: center;
}

.team-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  margin-right: -8px;
}

.more-members {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: rgba(0, 245, 160, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-page {
    padding: 4rem 1rem;
  }
  
  .title {
    font-size: 2.5rem;
  }
  
  .projects-grid {
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
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-btn i {
  font-size: 1.2rem;
}

.category-btn.active {
  background: var(--accent-color);
  box-shadow: 0 0 20px rgba(var(--accent-color), 0.3);
}

.project-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.highlights {
  margin: 1.5rem 0;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.highlight-item i {
  color: var(--card-color);
}

.team-info {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.team-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.team-member {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.member-name {
  font-weight: 500;
}

.member-role {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
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

.media-btn.more-details {
  background: rgba(0, 245, 160, 0.2);
  color: #00F5A0;
}

.media-btn.more-details:hover {
  background: rgba(0, 245, 160, 0.3);
}
</style> 