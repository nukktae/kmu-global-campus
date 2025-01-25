<template>
  <div class="hire-page">
    <div class="hero-section" v-motion
         :initial="{ opacity: 0 }"
         :enter="{ opacity: 1, transition: { duration: 1000 } }">
      <h1 class="gradient-title">Hire Our Talent</h1>
      <p class="hero-subtitle">Connect with our Silicon Valley-trained developers</p>
    </div>

    <div class="content-grid">
      <!-- Why Hire Section -->
      <div class="why-hire-section" v-motion-slide-visible>
        <div class="glass-card feature-grid">
          <div v-for="(feature, index) in features" 
               :key="index"
               class="feature-card"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :enter="{ opacity: 1, x: 0, transition: { delay: index * 200 } }">
            <div class="feature-icon" :style="{ background: feature.gradient }">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="contact-section" v-motion-slide-visible>
        <div class="glass-card contact-form">
          <h2>Get in Touch</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-grid">
              <div class="input-group">
                <label>Company Name</label>
                <input 
                  v-model="form.company" 
                  type="text" 
                  required
                  :class="{ 'focused': activeField === 'company' }"
                  @focus="activeField = 'company'"
                  @blur="activeField = null"
                >
              </div>

              <div class="input-group">
                <label>Your Name</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  required
                  :class="{ 'focused': activeField === 'name' }"
                  @focus="activeField = 'name'"
                  @blur="activeField = null"
                >
              </div>

              <div class="input-group full-width">
                <label>Email</label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  required
                  :class="{ 'focused': activeField === 'email' }"
                  @focus="activeField = 'email'"
                  @blur="activeField = null"
                >
              </div>

              <div class="input-group">
                <label>Position Type</label>
                <select 
                  v-model="form.positionType"
                  required
                  :class="{ 'focused': activeField === 'positionType' }"
                  @focus="activeField = 'positionType'"
                  @blur="activeField = null"
                >
                  <option value="">Select Type</option>
                  <option value="fulltime">Full-time</option>
                  <option value="internship">Internship</option>
                  <option value="contract">Contract</option>
                </select>
              </div>

              <div class="input-group">
                <label>Location</label>
                <select 
                  v-model="form.location"
                  required
                  :class="{ 'focused': activeField === 'location' }"
                  @focus="activeField = 'location'"
                  @blur="activeField = null"
                >
                  <option value="">Select Location</option>
                  <option value="onsite">On-site</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div class="input-group full-width">
                <label>Message</label>
                <textarea 
                  v-model="form.message" 
                  required
                  :class="{ 'focused': activeField === 'message' }"
                  @focus="activeField = 'message'"
                  @blur="activeField = null"
                ></textarea>
              </div>
            </div>

            <button type="submit" class="submit-btn">
              <span>Send Message</span>
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeField = ref<string | null>(null);

const features = [
  {
    icon: 'fas fa-code',
    title: 'Technical Excellence',
    description: 'Our graduates are trained in modern tech stacks with real Silicon Valley projects',
    gradient: 'linear-gradient(120deg, #00F5A0, #00D9F5)'
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Perspective',
    description: 'Diverse team members bringing international experience and cultural awareness',
    gradient: 'linear-gradient(120deg, #6C5CE7, #a855f7)'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Innovation Focus',
    description: 'Experienced in cutting-edge technologies including AI/ML and cloud architecture',
    gradient: 'linear-gradient(120deg, #FF0080, #7928CA)'
  },
  {
    icon: 'fas fa-users',
    title: 'Team Players',
    description: 'Trained in Agile methodologies with experience in cross-functional teams',
    gradient: 'linear-gradient(120deg, #0984E3, #00F5A0)'
  }
];

const form = ref({
  company: '',
  name: '',
  email: '',
  positionType: '',
  location: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  // Add form submission logic here
};
</script>

<style scoped>
.hire-page {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  position: relative;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.gradient-title {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: white;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

input, select, textarea {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  transition: all 0.3s ease;
}

textarea {
  height: 120px;
  resize: vertical;
}

.focused {
  border-color: #00F5A0;
  box-shadow: 0 0 0 2px rgba(0, 245, 160, 0.2);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  background: linear-gradient(45deg, #00F5A0, #00D9F5);
  border: none;
  border-radius: 12px;
  color: black;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 245, 160, 0.3);
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hire-page {
    padding: 6rem 1rem 2rem;
  }
  
  .gradient-title {
    font-size: 2.5rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style> 