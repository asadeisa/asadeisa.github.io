<script setup lang="ts">
import { profile } from '~/content/profile'

const sending = ref(false)
const feedback = ref('')

async function sendMessage(event: SubmitEvent) {
  if (sending.value || !(event.currentTarget instanceof HTMLFormElement)) return

  const form = event.currentTarget
  sending.value = true
  feedback.value = ''
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    const result = await response.json()
    if (!response.ok || ![true, 'true'].includes(result.success)) throw new Error('Message not sent')
    form.reset()
    feedback.value = 'Thanks. Your message was sent.'
  } catch {
    feedback.value = 'Your message could not be sent. Please try again or email me directly.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <form class="contact-form" :action="`https://formsubmit.co/${profile.email}`" method="post" @submit.prevent="sendMessage">
    <div class="form-row">
      <label>Name<input name="name" autocomplete="name" required maxlength="120"></label>
      <label>Email<input name="email" type="email" autocomplete="email" required maxlength="254"></label>
    </div>
    <label>Message<textarea name="message" rows="3" required maxlength="4000"></textarea></label>
    <input name="_captcha" type="hidden" value="false">
    <button type="submit" class="button primary" :disabled="sending">{{ sending ? 'Sending…' : 'Send message' }}</button>
    <p v-if="feedback" role="status">{{ feedback }}</p>
  </form>
</template>