<script setup lang="ts">
const { name } = defineProps<{ name: string }>();
</script>
<template>
  <div>
    <span v-if="name === 'download'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-download w-5 h-5 mr-2" data-filename="components/portfolio/HeroSection"
        data-linenumber="78" data-visual-selector-id="components/portfolio/HeroSection78"
        data-source-location="components/portfolio/HeroSection:78:14" data-dynamic-content="false">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" x2="12" y1="15" y2="3"></line>
      </svg>
    </span>
    <span v-if="name === 'mail'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" w-5 h-5 "
        data-filename="components/portfolio/HeroSection" data-linenumber="90"
        data-visual-selector-id="components/portfolio/HeroSection90"
        data-source-location="components/portfolio/HeroSection:90:14" data-dynamic-content="false">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    </span>
    <span v-if="name == 'phone'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" w-4 h-4"
        data-filename="components/portfolio/HeroSection" data-linenumber="102"
        data-visual-selector-id="components/portfolio/HeroSection102"
        data-source-location="components/portfolio/HeroSection:102:14" data-dynamic-content="false">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
        </path>
      </svg>
    </span>
    <span v-if="name == 'location'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" w-4 h-4"
        data-filename="components/portfolio/HeroSection" data-linenumber="110"
        data-visual-selector-id="components/portfolio/HeroSection110"
        data-source-location="components/portfolio/HeroSection:110:14" data-dynamic-content="false">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
        </path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </span>
    <span v-if="name === 'github'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-github w-5 h-5" data-filename="components/portfolio/HeroSection" data-linenumber="128"
        data-visual-selector-id="components/portfolio/HeroSection128"
        data-source-location="components/portfolio/HeroSection:128:14" data-dynamic-content="false">
        <path
          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
        </path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
    </span>
    <span v-if="name === 'linkedin'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="l w-5 h-5"
        data-filename="components/portfolio/HeroSection" data-linenumber="137"
        data-visual-selector-id="components/portfolio/HeroSection137"
        data-source-location="components/portfolio/HeroSection:137:14" data-dynamic-content="false">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>

    </span>
    <span v-if="name === 'code'">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal" aria-hidden="true"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
    </span>
    <span v-if="name == 'star'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-sparkles w-6 h-6 text-blue-500" data-filename="components/portfolio/ProjectsSection"
        data-linenumber="53" data-visual-selector-id="components/portfolio/ProjectsSection53"
        data-source-location="components/portfolio/ProjectsSection:53:12" data-dynamic-content="false">
        <path
          d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
        </path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
        <path d="M4 17v2"></path>
        <path d="M5 18H3"></path>
      </svg>
    </span>
    <span v-if="name == 'external-link'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-external-link w-4 h-4 mr-1" data-filename="components/portfolio/ProjectsSection"
        data-linenumber="134" data-visual-selector-id="components/portfolio/ProjectsSection134"
        data-source-location="components/portfolio/ProjectsSection:134:24" data-dynamic-content="false">
        <path d="M15 3h6v6"></path>
        <path d="M10 14 21 3"></path>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      </svg>
    </span>
    <span v-if="name === 'send'">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""
        data-filename="components/portfolio/ContactSection" data-linenumber="227"
        data-visual-selector-id="components/portfolio/ContactSection227"
        data-source-location="components/portfolio/ContactSection:227:22" data-dynamic-content="false">
        <path
          d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
        </path>
        <path d="m21.854 2.147-10.94 10.939"></path>
      </svg>
    </span>
  </div>
</template>