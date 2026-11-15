<script setup lang="ts">
import { profile } from '~/content/profile'
import { social } from '~/content/social'
import { featuredProjects, shopCheckout, shopProject } from '~/content/projects'
import { experience } from '~/content/experience'
import { skillGroups } from '~/content/skills'
import type { WorkKind } from '~/types/global'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'developer-tools', label: 'Developer tools' },
  { key: 'experimental', label: 'Experiments' },
] as const

const categories: Partial<Record<WorkKind, string>> = {
  frontend: 'Web', mobile: 'Android app', 'developer-tools': 'Developer tool',
}
const activeFilter = ref<(typeof filters)[number]['key']>('all')
const projects = computed(() => featuredProjects.filter(
  project => activeFilter.value === 'all' || project.kind === activeFilter.value,
))

const [roleLineOne, ...roleRest] = profile.title.split(' ')
const isLight = ref(false)

onMounted(() => {
  isLight.value = document.documentElement.dataset.theme === 'light'
})

function toggleTheme() {
  isLight.value = !isLight.value
  const theme = isLight.value ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // The theme still works for this visit when storage is unavailable.
  }
}
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <header class="site-header">
    <div class="shell header-inner">
      <a href="#top" class="wordmark"><span aria-hidden="true" class="wordmark-mark">ae.</span><span>{{ profile.name }}</span></a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="theme-control" type="button" aria-label="Light mode" :aria-pressed="isLight" @click="toggleTheme">
        <span aria-hidden="true" class="theme-icon">{{ isLight ? '☾' : '☀' }}</span>
        <span class="theme-label">{{ isLight ? 'Dark' : 'Light' }}</span>
      </button>
    </div>
  </header>

  <main id="main" class="shell">
    <section id="top" class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span>{{ profile.availability }} <span class="hero-location">/ {{ profile.location }}</span></p>
        <p class="hero-name">{{ profile.name }}</p>
        <h1 id="hero-title">{{ roleLineOne }}<br><span>{{ roleRest.join(' ') }}</span></h1>
        <p class="hero-description">{{ profile.tagline }} I use AI coding agents to plan and implement changes, then verify the work through review and testing.</p>
        <div class="actions">
          <a class="button primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
          <a class="button secondary" :href="profile.cvPath" download>Download CV <span aria-hidden="true">↘</span></a>
        </div>
      </div>
      <figure class="portrait">
        <img :src="profile.portraitPath" :alt="profile.name" width="480" height="480" fetchpriority="high">
        <figcaption><a :href="social.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a></figcaption>
      </figure>
    </section>

    <section id="projects" class="section" aria-labelledby="work-title">
      <div class="section-heading">
        <h2 id="work-title">Selected work</h2>
        <div class="filters" role="group" aria-label="Filter projects">
          <button v-for="filter in filters" :key="filter.key" type="button" :aria-pressed="activeFilter === filter.key" aria-controls="project-list" @click="activeFilter = filter.key">
            {{ filter.label }}
          </button>
        </div>
      </div>
      <p class="sr-only" role="status">{{ projects.length }} {{ projects.length === 1 ? 'project' : 'projects' }} shown</p>
      <div id="project-list" class="project-grid">
        <article v-for="project in projects" :key="project.id" class="project" :class="{ featured: project.id === shopProject.id }">
          <div class="project-copy">
            <p class="eyebrow">{{ project.label || (project.kind && categories[project.kind]) }}</p>
            <h3>{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div v-if="project.id === shopProject.id" class="shop-checkout">
              <h4>Offline checkout</h4>
              <p>{{ shopCheckout.description }}</p>
            </div>
            <p v-if="project.metric" class="metric">{{ project.metric }}</p>
            <ul class="tags" aria-label="Project technologies">
              <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
            </ul>
            <div v-if="project.url || project.gitUrl" class="project-links">
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="text-link" :aria-label="`${project.urlLabel || 'Visit site'}: ${project.title}`">
                {{ project.urlLabel || 'Visit site' }} <span aria-hidden="true">↗</span>
              </a>
              <a v-if="project.gitUrl" :href="project.gitUrl" target="_blank" rel="noopener noreferrer" class="text-link" :aria-label="`View ${project.title} on GitHub`">View on GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div v-if="project.id === shopProject.id" class="shop-visual">
            <figure v-for="screen in shopCheckout.screens" :key="screen.src">
              <img :src="screen.src" :alt="screen.alt" width="520" height="1127" loading="lazy" decoding="async">
              <figcaption>{{ screen.caption }}</figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>

    <div class="career-grid">
      <section id="experience" class="section experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <ol class="timeline">
          <li v-for="job in experience" :key="job.org">
            <p class="eyebrow">{{ job.period }}</p>
            <h3>{{ job.org }}</h3>
            <p class="job-role">{{ job.role }}</p>
            <ul>
              <li v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
            <div v-if="job.links?.length" class="experience-links">
              <a v-for="link in job.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="text-link">
                {{ link.label }} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>
        </ol>
      </section>

      <section id="stack" class="section stack" aria-labelledby="stack-title">
        <h2 id="stack-title">Technical stack</h2>
        <div v-for="group in skillGroups" :key="group.name" class="stack-group">
          <h3>{{ group.name }}</h3>
          <ul class="tags">
            <li v-for="skill in group.items" :key="skill">{{ skill }}</li>
          </ul>
        </div>
        <div class="stack-group background">
          <h3>Background</h3>
          <p>{{ profile.education }}</p>
          <p>{{ profile.languages }}</p>
        </div>
      </section>
    </div>

    <section id="contact" class="section contact" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">Get in touch</h2>
        <a :href="'mailto:' + profile.email" class="text-link">{{ profile.email }}</a>
        <div class="actions">
          <a :href="social.github" target="_blank" rel="noopener noreferrer" class="button secondary">GitHub ↗</a>
          <a :href="profile.cvPath" download class="button secondary">Download CV ↘</a>
        </div>
      </div>
      <ContactForm />
    </section>
  </main>

  <footer class="shell site-footer"><span>© {{ profile.name }}</span><a href="#top">Back to top ↑</a></footer>
</template>
