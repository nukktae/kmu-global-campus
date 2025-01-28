<template>
  <div class="students-page">
    <div class="students-container" v-motion
         :initial="{ opacity: 0, scale: 0.8 }"
         :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
      <div class="intro-card">
        <h1 class="title">KMU Global Campus</h1>
        <h2 class="subtitle">Your Gateway to Silicon Valley Tech Careers</h2>
        
        <div class="content">
          <div class="text-section">
            <div class="glass-container">
              <div class="intro-text">
                <span class="highlight">Our students</span> come from diverse backgrounds, bringing unique perspectives and skills to the tech industry. Each one is paired with industry mentors from leading companies like Blizzard, AWS, and Walmart.
              </div>
              
              <div class="stats-cards">
                <div v-for="stat in stats" :key="stat.label" class="stat-card">
                  <i :class="stat.icon" class="stat-icon"></i>
                  <div class="stat-content">
                    <div class="stat-number">{{ stat.value }}</div>
                    <div class="stat-label">{{ stat.label }}</div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>

          <div class="students-grid">
            <StudentCard 
              v-for="student in sortedStudents" 
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
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { students } from '~/data/students';
import StudentGallery from '~/components/students/StudentGallery.vue';
import StudentCard from '~/components/students/StudentCard.vue';

const stats = [
  {
    icon: 'fas fa-users',
    value: '9',
    label: 'Active Students'
  },
  

];

const sortedStudents = computed(() => {
  return [...students].sort((a, b) => {
    if (a.isAvailable === b.isAvailable) return 0;
    return a.isAvailable ? -1 : 1;
  });
});
</script>

<style scoped>
.students-page {
  padding: 4rem 2rem;
  min-height: 100vh;
  background: transparent;
}

.students-container {
  max-width: 1400px;
  margin: 0 auto;
}

.intro-card {
  background: transparent;
  padding: 3rem;
  color: white;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #0984E3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
  max-width: 1400px;
  margin: 0 auto;
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

.location-badge {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: rgba(9, 132, 227, 0.15);
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  color: #fff;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.students-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.student-card {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1200px) {
  .content {
    grid-template-columns: 1fr;
  }
  
  .stats-cards {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .stat-card {
    flex: 1;
    min-width: 200px;
  }
}

@media (max-width: 768px) {
  .students-page {
    padding: 2rem 1rem;
  }
  
  .intro-card {
    padding: 2rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .stats-cards {
    flex-direction: column;
  }
}
</style> 