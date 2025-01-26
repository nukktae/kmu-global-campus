<template>
  <div class="app-container">
    <LoadingScreen v-if="isLoading" />
    <template v-else>
      <Background />
      <nav class="navigation">
        <div class="nav-content">
          <div class="logo">Global Campus</div>
          <div class="nav-links">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <NuxtLink to="/students" class="nav-link">Students</NuxtLink>
            <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
            <NuxtLink to="/hire" class="nav-link">Hire</NuxtLink>
          </div>
        </div>
      </nav>
      <NuxtPage />
    </template>
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>
<style>
body {
  margin: 0;
  overflow-x: hidden;
  color: white;
  font-family: 'Inter', sans-serif;
  background: #000;
}

.app-container {
  min-height: 100vh;
}

.navigation {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  z-index: 100;
}

.nav-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #0984E3, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #0984E3;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}
</style>

