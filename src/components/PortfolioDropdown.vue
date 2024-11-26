<script setup>
import { computed, ref } from 'vue';

const { isDarkMode = false, position = 'bottom' } = defineProps({
  isDarkMode: Boolean,
  items: Array,
  position: String
});

const isOpen = ref(false);
const menuPosition = computed(() => `dropdown-${position}`);
const emit = defineEmits(['select']);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
const selectItem = (item) => {
  isOpen.value = false;
  emit('select', item);
};
</script>
<template>
  <div
    class="portfolio-dropdown-wrapper"
    :class="{ 'portfolio-dropdown-wrapper--dark-mode': isDarkMode }"
  >
    <!-- Dropdown Trigger -->
    <div class="portfolio-dropdown-trigger" @click="toggleDropdown">
      <slot name="trigger"></slot>
    </div>

    <!-- Dropdown Menu -->
    <transition name="dropdown-slide">
      <ul v-if="isOpen" class="portfolio-dropdown-menu" :class="menuPosition">
        <li
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(item)"
          class="portfolio-dropdown-item"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss">
@import '@/styles/PortfolioDropdown';
</style>
