<template>
  <div class="gallery-container">
    <canvas ref="canvas" class="gallery-canvas" />
    <div class="gallery-overlay">
      <div class="cards-container">
        <div v-for="student in students" 
             :key="student.id"
             class="student-card-wrapper"
             @mouseenter="onCardHover(student)"
             @mouseleave="onCardLeave">
          <div class="student-card" 
               :class="{ 'is-hovered': hoveredStudent?.id === student.id }"
               :style="getCardStyle(student)">
            <img :src="student.photo" :alt="student.name">
            <div class="card-content">
              <h3>{{ student.name }}</h3>
              <p>{{ student.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import type { Student } from '~/data/students';

const props = defineProps<{
  students: Student[]
}>();

const hoveredStudent = ref<Student | null>(null);

function onCardHover(student: Student) {
  hoveredStudent.value = student;
}

function onCardLeave() {
  hoveredStudent.value = null;
}

function getCardStyle(student: Student) {
  const index = props.students.indexOf(student);
  const angle = (index * 360) / props.students.length;
  const radius = 600; // Adjust this value to change the circle size
  
  return {
    transform: `
      translate3d(${Math.cos(angle * Math.PI / 180) * radius}px,
                  ${Math.sin(angle * Math.PI / 180) * radius}px,
                  0)
      rotateY(${angle}deg)
    `
  };
}

onMounted(() => {
  // Initial animation
  gsap.from('.student-card', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.out'
  });
});
</script>

<style scoped>
.gallery-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
  perspective: 1000px;
}

.cards-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
}

.student-card-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.student-card {
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  transform-origin: center center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
}

.student-card.is-hovered {
  transform: scale(1.1) translateZ(50px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.student-card img {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7) 50%, transparent);
  color: white;
}

.card-content h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.card-content p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
</style> 