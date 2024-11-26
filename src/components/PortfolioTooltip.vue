<script setup>
import { ref } from 'vue';

const { isDarkMode = false, position = 'top' } = defineProps({
  isDarkMode: Boolean,
  position: String
});

const isVisible = ref(false);
const wrapperClasses = [
  'portfolio-tooltip-wrapper',
  { 'portfolio-tooltip-wrapper--dark-mode': isDarkMode }
];
const arrowClasses = ['tooltip-arrow', `tooltip-${position}`];
const tooltipClasses = ['portfolio-tooltip', `tooltip-${position}`];

const showTooltip = () => {
  isVisible.value = true;
};
const hideTooltip = () => {
  isVisible.value = false;
};
</script>

<template>
  <div :class="wrapperClasses" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot></slot>
    <transition name="fade">
      <div v-if="isVisible" :class="tooltipClasses">
        <slot name="tooltip"></slot>
        <div :class="arrowClasses"></div>
        <!-- Arrow pointing to the element -->
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
@import '@/styles/PortfolioTooltip';
</style>
