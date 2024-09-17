<template>
  <transition name="cyberpunk-button" appear>
    <button type="button" :class="classes" @click="$emit('click')">
      <span>{{ text }}</span>
    </button>
  </transition>
</template>
<script setup>
import '../styles/ProfileButton.scss';
import { computed } from 'vue';

const {
  isDarkMode = false,
  isPrimary = true,
  isSmall = false,
  text = ''
} = defineProps({ isDarkMode: Boolean, isPrimary: Boolean, isSmall: Boolean, text: String });

const classes = computed(() => [
  'terminus-button',
  isPrimary ? 'terminus-button--primary' : 'terminus-button--secondary',
  isSmall ? 'terminus-button--small' : 'terminus-button--default',
  {
    'terminus-button--dark-mode': isDarkMode
  }
]);
</script>
