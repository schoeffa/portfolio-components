<template>
  <transition name="cyberpunk-button" appear>
    <button :type="type" :class="classes" @click="$emit('click')">
      <span>{{ text }}</span>
    </button>
  </transition>
</template>
<script setup>
import { computed } from 'vue';

const {
  isDarkMode = false,
  isPrimary = true,
  isSmall = false,
  text = '',
  type = 'button'
} = defineProps({
  isDarkMode: Boolean,
  isPrimary: Boolean,
  isSmall: Boolean,
  text: String,
  type: String
});

const classes = computed(() => [
  'profile-button',
  isPrimary ? 'profile-button--primary' : 'profile-button--secondary',
  isSmall ? 'profile-button--small' : 'profile-button--default',
  {
    'profile-button--dark-mode': isDarkMode
  }
]);
</script>

<style lang="scss">
@import '@/styles/ProfileButton';
</style>
