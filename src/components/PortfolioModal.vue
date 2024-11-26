<script setup>
const { isDarkMode = false } = defineProps({ isDarkMode: Boolean, isVisible: Boolean });

const classes = ['portfolio-modal-overlay', { 'portfolio-modal-overlay--dark-mode': isDarkMode }];
</script>

<template>
  <transition name="modal-fade">
    <div v-if="isVisible" :class="classes" @click="$emit('close')">
      <div class="portfolio-modal" @click.stop>
        <button class="portfolio-modal-close" @click="$emit('close')">✖</button>
        <div class="portfolio-modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import '@/styles/PortfolioModal';
</style>
