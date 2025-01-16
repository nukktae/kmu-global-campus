<template>
  <div class="project-detail-page" v-if="projectData">
    <!-- Hero Section -->
    <section class="hero-section glass-effect" 
             v-motion
             :initial="{ opacity: 0 }"
             :enter="{ opacity: 1 }">
      <div class="hero-content">
        <div class="project-status" :class="projectData.status">{{ projectData.status }}</div>
        <h1 class="project-title gradient-text">{{ projectData.title }}</h1>
        <div class="tech-pills">
          <div v-for="tech in projectData.technologies" 
               :key="tech"
               class="tech-pill"
               v-motion
               :initial="{ opacity: 0, scale: 0.8 }"
               :enter="{ opacity: 1, scale: 1 }">
            {{ tech }}
          </div>
        </div>
      </div>
    </section>

    <div class="content-wrapper">
      <!-- Main Content Grid -->
      <div class="content-grid">
        <!-- Left Column -->
        <div class="main-content">
          <div class="preview-card glass-effect" v-motion-slide-visible>
            <div class="project-media">
              <img :src="projectData.projectImage" :alt="projectData.title" class="project-image">
            </div>
            <div class="action-buttons">
              <a v-if="projectData.demo" :href="projectData.demo" target="_blank" class="action-btn demo">
                <i class="fab fa-youtube"></i>
                Watch Demo
              </a>
              <a v-if="projectData.github" :href="projectData.github" target="_blank" class="action-btn github">
                <i class="fab fa-github"></i>
                View Code
              </a>
              <a v-if="projectData.presentation" :href="projectData.presentation" target="_blank" class="action-btn presentation">
                <i class="fas fa-file-pdf"></i>
                View Deck
              </a>
            </div>
          </div>

          <div class="description-card glass-effect" v-motion-slide-visible>
            <h2>Project Overview</h2>
            <p>{{ projectData.description }}</p>
          </div>

          <div class="highlights-card glass-effect" v-motion-slide-visible>
            <h2>Key Highlights</h2>
            <div class="highlights-grid">
              <div v-for="highlight in projectData.highlights" 
                   :key="highlight"
                   class="highlight-item"
                   v-motion
                   :initial="{ opacity: 0, x: -20 }"
                   :enter="{ opacity: 1, x: 0 }">
                <div class="highlight-icon">
                  <i class="fas fa-check"></i>
                </div>
                <span>{{ highlight }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="sidebar">
          <div class="team-card glass-effect" v-motion-slide-visible>
            <h2>Team Members</h2>
            <div class="team-members">
              <div v-for="member in projectData.team" 
                   :key="member.id"
                   class="team-member">
                <div class="member-avatar">
                  <i class="fas fa-user"></i>
                </div>
                <div class="member-info">
                  <h3>{{ member.name }}</h3>
                  <span class="member-role">{{ member.role }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-card glass-effect" v-motion-slide-visible>
            <h2>Tech Stack</h2>
            <div class="tech-stack-grid">
              <div v-for="tech in projectData.technologies" 
                   :key="tech"
                   class="tech-item">
                <i class="fas fa-code"></i>
                <span>{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects';

const route = useRoute();
const projectId = parseInt(route.params.id as string);

const projectData = computed(() => 
  projects.find(project => project.id === projectId)
);
</script>

<style scoped>
.project-detail-page {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Copy relevant styles from the student detail page and modify as needed */
.hero-section {
  padding: 3rem;
  margin-bottom: 3rem;
  border-radius: 24px;
}

.project-status {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.project-status.completed {
  background: rgba(0, 245, 160, 0.2);
  color: #00F5A0;
}

.project-status.in-progress {
  background: rgba(255, 159, 0, 0.2);
  color: #FF9F00;
}

/* Add more styles following the pattern from student detail page */
</style> 