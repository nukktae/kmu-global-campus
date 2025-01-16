<template>
  <div class="program-intro">
    <div class="content-container">
      <h2 class="title" 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        KMU Global Campus
      </h2>
      
      <p class="description" 
         v-motion
         :initial="{ opacity: 0 }"
         :enter="{ opacity: 1, transition: { delay: 300 } }">
        The KMU Global Campus is a transformative 12-month journey that combines intensive tech training in Irvine, California with real-world internship experiences. Our students work directly with industry leaders while developing cutting-edge technical and professional skills.
      </p>

      <div class="main-content">
        <!-- Photo Section -->
        <div class="photo-section"
             v-motion
             :initial="{ opacity: 0, scale: 0.9 }"
             :enter="{ opacity: 1, scale: 1, transition: { delay: 400 } }">
          <div class="photo-placeholder">
            <img src="/images/students/group.jpg" alt="KMU Global Campus Students" class="group-photo">
            <div class="photo-overlay"></div>
          </div>
          
          <!-- Stats under photo -->
          <div class="stats-grid">
            <div v-for="(stat, index) in stats" 
                 :key="index"
                 class="stat-card"
                 v-motion
                 :initial="{ opacity: 0, scale: 0.8 }"
                 :enter="{ opacity: 1, scale: 1, transition: { delay: index * 200 } }">
              <div class="stat-icon" :class="`gradient-${index + 1}`"></div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Feature Cards Section -->
        <div class="feature-cards">
          <div v-for="(feature, index) in features" 
               :key="index"
               class="feature-card"
               v-motion
               :initial="{ opacity: 0, x: 50 }"
               :enter="{ opacity: 1, x: 0, transition: { delay: index * 200 } }">
            <div class="feature-icon" :class="`gradient-${index + 1}`"></div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Full Scholarship',
    description: 'Tuition coverage plus ₩5M living expenses'
  },
  {
    title: 'Industry Mentorship',
    description: 'Direct guidance from Blizzard, Walmart, and AWS professionals'
  },
  {
    title: 'Hands-on Projects',
    description: '6 months of intensive training with real-world projects'
  },
  {
    title: 'Global Internships',
    description: '6 months of internship opportunities with tech giants'
  }
];

</script>

<style scoped>
.program-intro {
  padding: 4rem 0.25rem;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
}

.content-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #89CFF0, #4B79E4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  text-align: center;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.photo-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.photo-placeholder {
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.feature-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-card {
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
  }
  
  .photo-placeholder {
    height: 300px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .feature-cards {
    gap: 1rem;
  }
  
  .title {
    font-size: 2.5rem;
  }
}
</style> 