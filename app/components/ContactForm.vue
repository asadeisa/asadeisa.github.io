<script setup lang="ts">
import { email as myEmail } from '~/composables/useInfo'

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref('')
const loading = ref(false)
const statusType = ref<'success' | 'error' | null>(null)
const flashStatus = (msg: string, type: 'success' | 'error') => {
  statusType.value = type
  status.value = msg

  setTimeout(() => {
    status.value = ''
    statusType.value = null

  }, 5000)
}
const handleSubmit = async () => {
  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('message', message.value)
  formData.append('_captcha', 'false')

  try {
    loading.value = true
    const res = await fetch('https://formsubmit.co/'+myEmail, {
      method: 'POST',
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    })
    loading.value = false

    if (res.ok) {
      flashStatus('Message sent successfully!', 'success')
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      flashStatus('Failed to send message.', 'error')
    }
  } catch (err) {
    flashStatus('Something went wrong.', 'error')
  }
}
const closeMessage = () => {
  statusType.value = null;
  status.value = ''
}
</script>


<template>

  <div class="console-panel lg:w-full mx-4 p-4 lg:p-6 xl:p-8 rounded-lg">
    <div class="max-w-[90vw] lg:max-w-[700px] m-auto">
      <input type="hidden" name="_captcha" value="false">
      <div class="flex flex-col gap-1 lg:gap-1.5 xl:gap-2 mb-3 lg:mb-4 xl:mb-5">
        <label for="name" class="console-label">
          <span class="console-prompt-prefix" aria-hidden="true">&gt;</span> name
        </label>
        <LazyUiInput :hydrate-on-idle="5000" id="name" v-model="name" placeholder="your name">

        </LazyUiInput>
      </div>
      <div class="flex flex-col gap-1 lg:gap-1.5 xl:gap-2 mb-3 lg:mb-4 xl:mb-5">
        <label for="email" class="console-label">
          <span class="console-prompt-prefix" aria-hidden="true">&gt;</span> email
        </label>
        <LazyUiInput :hydrate-on-idle="5000" id="email" v-model="email" placeholder="your@email.com">

        </LazyUiInput>
      </div>
      <div class="flex flex-col gap-1 lg:gap-1.5 xl:gap-2 mb-3 lg:mb-4 xl:mb-5">
        <label class="console-label" for="textarea-message">
          <span class="console-prompt-prefix" aria-hidden="true">&gt;</span> message
        </label>
        <LazyUiInput :hydrate-on-idle="5000" type="textarea" id="textarea-message" v-model="message" placeholder="write your message...">

        </LazyUiInput>
      </div>
      <div class="flex justify-center mt-5 xl:mt-8">
        <LazyUiButtonsPrimary :hydrate-on-idle="5000" class="console-submit text-sm md:text-base rounded-lg w-full items-center flex gap-2 justify-center  lg:text-lg xl:text-xl "
          :class="loading ? 'opacity-30 pointer-events-none' : ''" @click="handleSubmit">
          <SVG name="send"></SVG>
          <span class="font-w-300 first-letter:uppercase lowercase">
            send message

          </span>
        </LazyUiButtonsPrimary>
      </div>
      <Transition name="fade-slide">

        <LazyUiMessageError :hydrate-on-idle="5000" class="mt-2 xl:mt-3" v-if="statusType == 'error'" :key="status + Date.now()"
          @close="closeMessage">
          {{ status }}
        </LazyUiMessageError>
      </Transition>
      <Transition name="fade-slide">
        <LazyUiMessageSuccess :hydrate-on-idle="5000" class="mt-2 xl:mt-3" v-if="statusType === 'success'" @close="closeMessage"
          :key="status + Date.now()">
          {{ status }}
        </LazyUiMessageSuccess>
      </Transition>

    </div>

  </div>
</template>
<style scoped>
/* ── Dark console panel ── */
.console-panel {
  background: var(--console-bg);
  color: var(--console-text);
  border: 1px solid var(--console-border);
  box-shadow: var(--console-shadow);
  font-family: 'JetBrains Mono', monospace;
}

/* ── Field labels ── */
.console-label {
  display: flex;
  align-items: center;
  gap: 0.35em;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--console-dim);
  letter-spacing: 0.04em;
  text-transform: lowercase;
  user-select: none;
}

.console-prompt-prefix {
  color: var(--console-prompt);
}

/* ── Input / textarea ── */
.console-panel :deep(input),
.console-panel :deep(textarea) {
  background: var(--console-elev) !important;
  border: 1px solid var(--console-border) !important;
  color: var(--console-text) !important;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  caret-color: var(--console-prompt);
  border-radius: 4px;
  width: 100%;
  outline: none !important;
}

.console-panel :deep(input::placeholder),
.console-panel :deep(textarea::placeholder) {
  color: var(--console-dim);
  opacity: 0.65;
}

.console-panel :deep(input:focus),
.console-panel :deep(textarea:focus) {
  border-color: var(--console-accent) !important;
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--console-accent) 18%, transparent) !important;
}

/* ── Submit button ── */
.console-panel :deep(button.console-submit) {
  background: transparent !important;
  background-image: none !important;
  border: 1px solid var(--console-accent) !important;
  color: var(--console-accent) !important;
  box-shadow: none !important;
  font-family: 'JetBrains Mono', monospace;
  transition: background 0.2s ease, box-shadow 0.2s ease;
}

.console-panel :deep(button.console-submit:hover) {
  background: color-mix(in srgb, var(--console-accent) 14%, transparent) !important;
  box-shadow: 0 0 14px color-mix(in srgb, var(--console-accent) 28%, transparent) !important;
}

/* ── Status messages adapted for dark panel ── */
.console-panel :deep(.bg-green-100) {
  background: color-mix(in srgb, var(--console-accent) 12%, transparent) !important;
  border-color: color-mix(in srgb, var(--console-accent) 45%, transparent) !important;
  color: var(--console-accent) !important;
}

.console-panel :deep(.bg-green-100 .text-green-800),
.console-panel :deep(.bg-green-100 .text-green-600),
.console-panel :deep(.bg-green-100 span),
.console-panel :deep(.bg-green-100 button) {
  color: var(--console-accent) !important;
}

.console-panel :deep(.bg-red-100) {
  background: rgba(239, 68, 68, 0.1) !important;
  border-color: rgba(239, 68, 68, 0.45) !important;
  color: #fca5a5 !important;
}

.console-panel :deep(.bg-red-100 .text-red-800),
.console-panel :deep(.bg-red-100 .text-red-600),
.console-panel :deep(.bg-red-100 span),
.console-panel :deep(.bg-red-100 button) {
  color: #fca5a5 !important;
}

/* ── Transition ── */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

@media (prefers-reduced-motion: reduce) {
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: none;
  }
  .console-panel :deep(button.console-submit) {
    transition: none;
  }
}
</style>
