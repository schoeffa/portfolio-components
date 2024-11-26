<script setup>
import { computed } from 'vue';
import PortfolioNavLink from '@/components/PortfolioNavLink.vue';

const { isDarkMode = false, isVertical = false } = defineProps({
  isDarkMode: Boolean,
  isVertical: Boolean,
  links: Array
});

const classes = computed(() => [
  'portfolio-nav',
  {
    'portfolio-nav--dark-mode': isDarkMode,
    'portfolio-nav--vertical': isVertical
  }
]);
</script>

<template>
  <transition name="fade-slide" appear>
    <nav :class="classes">
      <PortfolioNavLink
        v-for="link in links"
        :key="link.text"
        :href="link.href"
        :isDarkMode="isDarkMode"
        :text="link.text"
      />
    </nav>
  </transition>
</template>

<style lang="scss">
@import '@/styles/PortfolioNav';
</style>
