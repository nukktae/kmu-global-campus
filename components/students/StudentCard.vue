<template>
  <div class="student-card" 
       @mouseenter="isHovered = true" 
       @mouseleave="isHovered = false"
       @click="navigateToDetail">
    <div class="card-inner" :class="{ 
      'is-flipped': isHovered, 
      'employed': studentData.employmentStatus?.status === 'employed',
      'unavailable': !studentData.isAvailable && !studentData.employmentStatus
    }">
      <!-- Front of card -->
      <div class="card-front">
        <div class="image-container">
          <div class="image-overlay"></div>
          <img :src="studentData.photo" :alt="studentData.name">
          <div class="role-badge" 
               :class="{ 
                 'employed': studentData.employmentStatus?.status === 'employed',
                 'unavailable': !studentData.isAvailable && !studentData.employmentStatus
               }">
            <span class="role-dot" 
                  :class="{ 
                    'employed': studentData.employmentStatus?.status === 'employed',
                    'unavailable': !studentData.isAvailable && !studentData.employmentStatus 
                  }">
            </span>
            <span v-if="studentData.employmentStatus?.status === 'employed'">
              Employed at {{ studentData.employmentStatus.company }}
            </span>
            <span v-else-if="!studentData.isAvailable && !studentData.employmentStatus">
              Not Available
            </span>
            <span v-else>
              {{ studentData.role }}
            </span>
          </div>
        </div>
        <div class="card-content">
          <div class="header">
            <h3>{{ studentData.name }}</h3>
            <span class="location">
              <i class="fas fa-map-marker-alt"></i>
              {{ studentData.location }}
            </span>
          </div>
          <div class="quick-tags">
            <span v-for="tech in studentData.technologies.slice(0, 3)" 
                  :key="tech" 
                  class="quick-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Back of card -->
      <div class="card-back">
        <div class="back-content">
          <div class="project-section">
            <span class="section-label">Current Project</span>
            <h4>{{ studentData.currentProject }}</h4>
          </div>
          
          <div class="tech-section">
            <span class="section-label">Technologies</span>
            <div class="tech-tags">
              <span v-for="tech in studentData.technologies.slice(0, 4)" 
                    :key="tech" 
                    class="tech-tag">
                <span class="tech-dot"></span>
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="view-profile-btn">
            <span>View Full Profile</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Student } from '~/data/students';
const router = useRouter();

const props = defineProps<{
  studentData: Student
}>();

const isHovered = ref(false);

const navigateToDetail = () => {
  router.push(`/students/${props.studentData.id}`);
};
</script>

<style scoped>
.student-card {
  width: 100%;
  max-width: 380px;
  height: 520px;
  position: relative;
  cursor: pointer;
  perspective: 2000px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 24px;
}

.is-flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 24px;
  background: rgba(22, 28, 36, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 24px;
  background: rgba(22, 28, 36, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transform: rotateY(0deg);
}

.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 24px;
  background: rgba(22, 28, 36, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transform: rotateY(180deg);
}

.back-content {
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: linear-gradient(
    165deg,
    rgba(75, 121, 228, 0.1) 0%,
    rgba(22, 28, 36, 0.95) 100%
  );
}

.section-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  margin-bottom: 0.3rem;
  display: block;
}

.project-section {
  margin-bottom: 0.5rem;
}

.project-section h4 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  line-height: 1.3;
  letter-spacing: -0.01em;
  background: linear-gradient(45deg, #fff, #4B79E4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-section {
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.3rem;
}

.tech-tag {
  background: rgba(75, 121, 228, 0.15);
  padding: 0.5rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  color: white;
  border: 1px solid rgba(75, 121, 228, 0.3);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(75, 121, 228, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(75, 121, 228, 0.2);
}

.tech-dot {
  width: 6px;
  height: 6px;
  background: #4B79E4;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 8px rgba(75, 121, 228, 0.5);
}

.view-profile-btn {
  background: linear-gradient(45deg, #4B79E4, #38B2AC);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 1rem;
}

.view-profile-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(75, 121, 228, 0.3);
  background: linear-gradient(45deg, #38B2AC, #4B79E4);
}

.view-profile-btn i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.view-profile-btn:hover i {
  transform: translateX(4px);
}

/* Front card styles */
.image-container {
  position: relative;
  height: 70%;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 1;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  filter: saturate(1.1);
}

.student-card:hover .image-container img {
  transform: scale(1.1);
}

.role-badge {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: rgba(75, 121, 228, 0.95);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  color: white;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}

.role-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 12px rgba(74, 222, 128, 0.5);
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(22, 28, 36, 0) 0%,
    rgba(22, 28, 36, 0.95) 30%,
    rgba(22, 28, 36, 1) 100%
  );
  transform: translateY(0);
  transition: transform 0.4s ease;
}

.header {
  margin-bottom: 1rem;
}

.header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.location {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 400;
}

.quick-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.quick-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.quick-tag:hover {
  background: rgba(75, 121, 228, 0.2);
  border-color: rgba(75, 121, 228, 0.3);
  transform: translateY(-2px);
}

/* Hover effects */
.student-card:hover {
  transform: translateY(-8px);
}

.student-card:hover .card-inner {
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 100px rgba(75, 121, 228, 0.1);
}

.student-card:hover .card-content {
  transform: translateY(-8px);
}

/* Add smooth shadow transition */
.card-front,
.card-back {
  transition: box-shadow 0.3s ease;
}

.student-card:hover .card-front,
.student-card:hover .card-back {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.student-card:hover .card-back {
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 100px rgba(75, 121, 228, 0.1);
}

.role-badge.unavailable {
  background: linear-gradient(135deg, rgba(255, 71, 87, 0.95), rgba(240, 50, 70, 0.95));
  border: 1px solid rgba(255, 71, 87, 0.3);
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.2);
  padding: 0.6rem 1.2rem;
  font-weight: 500;
}

.role-dot.unavailable {
  background: #ff4757;
  box-shadow: 0 0 12px rgba(255, 71, 87, 0.5);
  animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 71, 87, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 71, 87, 0);
  }
}

.card-inner.unavailable {
  border: 1px solid rgba(255, 71, 87, 0.2);
  box-shadow: 0 0 20px rgba(255, 71, 87, 0.1);
}

/* Add new styles for employed status */
.role-badge.employed {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(5, 150, 105, 0.95));
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
  padding: 0.6rem 1.2rem;
  font-weight: 500;
}

.role-dot.employed {
  background: #34d399;
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.5);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(52, 211, 153, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
  }
}

/* Update hover effects for employed cards */
.student-card:hover .role-badge.employed {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);
}

/* Add a subtle glow effect for employed cards */
.card-inner.employed {
  border: 1px solid rgba(16, 185, 129, 0.2);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.1);
}
</style> 