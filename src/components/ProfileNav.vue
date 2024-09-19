<script setup>
import { computed } from 'vue';
import ProfileNavLink from '@/components/ProfileNavLink.vue';

const { isDarkMode = false, isVertical = false } = defineProps({
  isDarkMode: Boolean,
  isVertical: Boolean,
  links: Array
});

const classes = computed(() => [
  'profile-nav',
  {
    'profile-nav--dark-mode': isDarkMode,
    'profile-nav--vertical': isVertical
  }
]);
</script>

<template>
  <transition name="fade-slide" appear>
    <nav :class="classes">
      <ProfileNavLink
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
@import '@/styles/ProfileNav';
</style>
