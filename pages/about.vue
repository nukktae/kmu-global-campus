<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section" v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
      <h1 class="gradient-title">About Global Campus</h1>
      <p class="hero-subtitle">Bridging Education and Innovation</p>
    </section>

    <!-- Mission Section with Floating Cards -->
    <section class="mission-section">
      <div class="floating-cards-container">
        <div v-for="(card, index) in missionCards" 
             :key="index"
             class="floating-card glass-effect"
             v-motion
             :initial="{ opacity: 0, scale: 0.8 }"
             :enter="{ 
               opacity: 1, 
               scale: 1, 
               transition: { 
                 delay: index * 200,
                 duration: 800 
               } 
             }">
          <div class="card-icon" :style="{ background: card.gradient }">
            <i :class="card.icon"></i>
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </section>

    <!-- Stats Section with Animated Counter -->
    <section class="stats-section glass-container">
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" 
             :key="index"
             class="stat-card"
             v-motion
             :initial="{ opacity: 0, x: -50 }"
             :enter="{ 
               opacity: 1, 
               x: 0, 
               transition: { delay: index * 150 } 
             }">
          <div class="stat-icon" :style="{ background: stat.gradient }">
            <i :class="stat.icon"></i>
          </div>
          <div class="stat-content">
            <animated-number
              :number="stat.value"
              :duration="2000"
              class="stat-number" />
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <h2 class="section-title">Our Journey</h2>
      <div class="timeline">
        <div v-for="(event, index) in timeline" 
             :key="index"
             class="timeline-item glass-effect"
             v-motion
             :initial="{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }"
             :enter="{ 
               opacity: 1, 
               x: 0, 
               transition: { delay: index * 200 } 
             }">
          <div class="timeline-content">
            <span class="date">{{ event.date }}</span>
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const missionCards = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technology and creative solutions",
    icon: "fas fa-lightbulb",
    gradient: "linear-gradient(45deg, #FF6B6B, #FF8E53)"
  },
  {
    title: "Global Impact",
    description: "Creating solutions that make a difference across borders",
    icon: "fas fa-globe",
    gradient: "linear-gradient(45deg, #4E65FF, #92EFFD)"
  },
  {
    title: "Future Ready",
    description: "Preparing the next generation of tech leaders",
    icon: "fas fa-rocket",
    gradient: "linear-gradient(45deg, #00F5A0, #00D9F5)"
  }
];

const stats = [
  {
    value: 150,
    label: "Projects Completed",
    icon: "fas fa-project-diagram",
    gradient: "linear-gradient(45deg, #00F5A0, #00D9F5)"
  },
  {
    value: 50,
    label: "Active Students",
    icon: "fas fa-users",
    gradient: "linear-gradient(45deg, #FF6B6B, #FF8E53)"
  },
  {
    value: 30,
    label: "Industry Partners",
    icon: "fas fa-handshake",
    gradient: "linear-gradient(45deg, #4E65FF, #92EFFD)"
  }
];

const timeline = [
  {
    date: "2024",
    title: "Global Expansion",
    description: "Launched partnerships with leading tech companies worldwide"
  },
  {
    date: "2023",
    title: "Innovation Hub",
    description: "Established our first innovation hub for emerging technologies"
  },
  {
    date: "2022",
    title: "Program Launch",
    description: "Started with our first cohort of ambitious developers"
  }
];
</script>

<style scoped>
.about-page {
  padding: 6rem 2rem;
  min-height: 100vh;
}

.hero-section {
  text-align: center;
  margin-bottom: 6rem;
}

.gradient-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.floating-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.floating-card {
  padding: 2rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.floating-card:hover {
  transform: translateY(-10px);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
}

.stats-section {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-section {
  max-width: 1000px;
  margin: 6rem auto;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #00F5A0, #00D9F5);
}

.timeline-item {
  width: calc(50% - 30px);
  margin: 2rem 0;
  position: relative;
  padding: 1.5rem;
  border-radius: 20px;
}

.timeline-item:nth-child(odd) {
  margin-left: auto;
}

.date {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: rgba(0, 245, 160, 0.1);
  color: #00F5A0;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .gradient-title {
    font-size: 2.5rem;
  }

  .timeline::before {
    left: 0;
  }

  .timeline-item {
    width: calc(100% - 30px);
    margin: 1rem 0 1rem 30px;
  }
}
</style> 