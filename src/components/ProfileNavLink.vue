<script setup>
const { isDarkMode = false } = defineProps({ isDarkMode: Boolean, text: String });

const classes = [
  'profile-nav-link',
  {
    'profile-nav-link--dark-mode': isDarkMode
  }
];
</script>

<template>
  <a href="#" :data-content="text" :class="classes">
    {{ text }}
  </a>
</template>
