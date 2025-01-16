<template>
  <div class="loading-screen">
    <div class="loading-content">
      <div class="logo-container">
        <div class="logo">Global Campus</div>
        <div class="loading-bar">
          <div class="progress-bar"></div>
        </div>
      </div>
      <div class="loading-particles"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { onMounted, onBeforeUnmount } from 'vue';

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let particles: THREE.Points;
let animationFrameId: number;

const initParticles = () => {
  const container = document.querySelector('.loading-particles');
  if (!container) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const particlesGeometry = new THREE.BufferGeometry();
  const count = 1000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: '#0984E3',
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  camera.position.z = 5;
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  
  if (particles) {
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;
  }
  
  renderer.render(scene, camera);
};

onMounted(() => {
  initParticles();
  animate();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
  renderer?.dispose();
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loading-content {
  position: relative;
  z-index: 2;
}

.logo-container {
  text-align: center;
}

.logo {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #0984E3, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto;
}

.progress-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #0984E3, #00f2fe);
  transform-origin: left;
  animation: progress 2s ease infinite;
}

.loading-particles {
  position: fixed;
  inset: 0;
  z-index: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes progress {
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}
</style> 