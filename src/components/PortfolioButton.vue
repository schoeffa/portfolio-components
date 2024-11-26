<template>
  <transition name="portfolio-button" appear>
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
  'portfolio-button',
  isPrimary ? 'portfolio-button--primary' : 'portfolio-button--secondary',
  isSmall ? 'portfolio-button--small' : 'portfolio-button--default',
  {
    'portfolio-button--dark-mode': isDarkMode
  }
]);
</script>

<style lang="scss">
@import '@/styles/PortfolioButton';
</style>
