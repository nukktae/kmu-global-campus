<template>
  <div class="scroll-transition" ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import gsap from 'gsap';

const container = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

// Reference to current page from props
const props = defineProps<{
  currentPage?: number
}>();

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let geometry: THREE.BufferGeometry;
let material: THREE.ShaderMaterial;
let mesh: THREE.Points;
let clock: THREE.Clock;

const uniforms = {
  uTime: { value: 0 },
  uProgress: { value: 0 }
};

// Update the vertex shader to include page transition effect
const vertexShader = `
  uniform float uTime;
  uniform float uProgress;
  
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    
    vec3 pos = position;
    float wave = sin(pos.x * 2.0 + uTime) * 0.2;
    
    // Add transition effect based on progress
    float transitionWave = sin(pos.x * 3.0 + uTime * 2.0) * uProgress;
    pos.y += wave + transitionWave;
    pos.z += sin(uTime * 0.5) * 0.3;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 2.0;
  }
`;

// Watch for page changes and animate particles
watch(() => props.currentPage, (newPage, oldPage) => {
  if (newPage !== undefined && oldPage !== undefined) {
    gsap.to(uniforms.uProgress, {
      value: 1,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(uniforms.uProgress, {
          value: 0,
          duration: 1,
          ease: 'power2.inOut'
        });
      }
    });
  }
});

// Custom shader for particles
const fragmentShader = `
  uniform float uTime;
  
  void main() {
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 3.0);
    
    vec3 color = mix(
      vec3(0.035, 0.518, 0.890),
      vec3(0.0, 0.95, 0.96),
      sin(uTime * 0.5) * 0.5 + 0.5
    );
    
    gl_FragColor = vec4(color, strength);
  }
`;

const initThree = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value!,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Create particle geometry
  const particles = new Float32Array(10000 * 3);
  for(let i = 0; i < particles.length; i += 3) {
    particles[i] = (Math.random() - 0.5) * 10;
    particles[i + 1] = (Math.random() - 0.5) * 10;
    particles[i + 2] = (Math.random() - 0.5) * 10;
  }
  
  geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
  
  material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  
  mesh = new THREE.Points(geometry, material);
  scene.add(mesh);
  
  camera.position.z = 5;
  clock = new THREE.Clock();
};

const animate = () => {
  requestAnimationFrame(animate);
  
  uniforms.uTime.value = clock.getElapsedTime();
  mesh.rotation.y += 0.001;
  
  renderer.render(scene, camera);
};

const setupScrollListener = () => {
  window.addEventListener('scroll', () => {
    const scrollProgress = window.scrollY / window.innerHeight;
    uniforms.uProgress.value = Math.min(Math.max(scrollProgress, 0), 1);
  });
};

onMounted(() => {
  initThree();
  animate();
  setupScrollListener();
});

onBeforeUnmount(() => {
  geometry.dispose();
  material.dispose();
  renderer.dispose();
});
</script>

<style scoped>
.scroll-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style> 