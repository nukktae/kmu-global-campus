<template>
  <span>{{ displayNumber }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  number: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  }
});

const displayNumber = ref(0);

const animateValue = () => {
  const start = 0;
  const end = props.number;
  const startTimestamp = performance.now();
  
  const step = (currentTimestamp: number) => {
    const progress = Math.min((currentTimestamp - startTimestamp) / props.duration, 1);
    displayNumber.value = Math.floor(progress * (end - start) + start);
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  
  window.requestAnimationFrame(step);
};

onMounted(() => {
  animateValue();
});

watch(() => props.number, () => {
  animateValue();
});
</script> 