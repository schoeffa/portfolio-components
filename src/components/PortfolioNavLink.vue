<script setup>
const { isDarkMode = false } = defineProps({ isDarkMode: Boolean, text: String });

const classes = [
  'portfolio-nav-link',
  {
    'portfolio-nav-link--dark-mode': isDarkMode
  }
];
</script>

<template>
  <a href="#" :data-content="text" :class="classes">
    {{ text }}
  </a>
</template>

<style lang="scss">
@import '@/styles/PortfolioNavLink';
</style>
