<script setup lang="ts">
import { email } from '~/composables/useInfo'
import { useNamedIntersectionObservers } from '~/composables/useNamedIntersectionObserver'
const contactSection = ref<HTMLElement | null>(null)
const isContactSectionElVisible = ref(false)
const contactFormSection = ref<HTMLElement | null>(null)
const isContactFormSectionElVisible = ref(false)
useNamedIntersectionObservers([
  { el: contactSection, visible: isContactSectionElVisible, threshold: 0.4 },
  { el: contactFormSection, visible: isContactFormSectionElVisible, threshold: 0.5 },

])
</script>
<template>
  <div>
    <section ref="contactSection" :class="isContactSectionElVisible ? 'element-in' : 'element-out'">

      <p class="term-prompt fade-in text-sm text-center mb-2" style="--i:0; color: var(--term-prompt);" aria-hidden="true">&gt; contact</p>
      <h2 style="--i:1"
        class="fade-in font-w-300 flex w-full justify-center items-center gap-2 text-3xl md:text-4xl xl:text-5xl text-center mb-5 xl:mb-7">
        Let's Work Together

      </h2>
      <p style="--i:2"
        class="fade-in text-sm md:text-base xl:text-lg text-center max-w-[700px] m-auto text-gray-700 dark:text-gray-200">
        Ready to bring your project to life? Get in touch and let's discuss how we can create something amazing
        together.
      </p>
    </section>
    <div ref="contactFormSection" class="flex  justify-between my-10 flex-col xs:px-10 sm:px-15 lg:flex-row gap-10" :class="isContactFormSectionElVisible ? 'element-in' : 'element-out'">
      <section class="flex-1 left-section">
        <h3 class="text-sm md:text-base mb-3 lg:mb-5 xl:mb-7 lg:text-lg xl:text-2xl font-medium first-letter:uppercase lowercase ">
          Get In Touch
        </h3>
        <div class="flex flex-col gap-5 xl:gap-7">
          <div class="flex items-center gap-2 md:gap-3 connect-footer-icon ">
            <a :href="'mailto:'+email" target="_blank" aria-label="Send me an email">
              <span
                class="grid items-center place-items-center rounded-full  to-teal-600 from-blue-600 bg-gradient-to-r p-3.5 lg:p-4 xl:p-5 ">
                <SVG class="text-white " name="mail"></SVG>
              </span>

            </a>
            <div>
              <p class="text-sm lg:text-base capitalize term-prompt">email</p>
              <p class="text-gray-600 text-sm dark:text-gray-300">{{ email }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 md:gap-3 connect-footer-icon ">
            <span
              class="grid items-center place-items-center rounded-full  to-teal-600 from-blue-600 bg-gradient-to-r p-3.5 lg:p-4 xl:p-5 ">
              <SVG class="text-white " name="location"></SVG>
            </span>
            <div>
              <p class="text-sm lg:text-base capitalize term-prompt">location</p>
              <p class="text-gray-600 text-sm dark:text-gray-300">Tartus, Syria</p>
            </div>
          </div>
        </div>
        <div class="px-2 mt-6 xl:mt-10">
          <LazyUiButtonsPrimary button-type="link" hydrate-on-visible 
            class="flex items-center w-full rounded-4xl gap-2 lg:gap-3 xl:gap-4 justify-center  text-sm md:text-base lg:text-lg"
            href="/assets/files/asad-eisa.pdf" download="asad-eisa.pdf" aria-label="Download the asad eisa cv as a PDF">
            <SVG name="download"></SVG>
            <span class="first-letter:uppercase lowercase">Download My CV</span>
          </LazyUiButtonsPrimary>
        </div>
      </section>
      <section class="flex-1 right-section">
        <ContactForm />
      </section>
    </div>
  </div>
</template>