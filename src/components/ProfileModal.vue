<script setup>
const { isDarkMode = false } = defineProps({ isDarkMode: Boolean, isVisible: Boolean });

const classes = ['profile-modal-overlay', { 'profile-modal-overlay--dark-mode': isDarkMode }];
</script>

<template>
  <transition name="modal-fade">
    <div v-if="isVisible" :class="classes" @click="$emit('close')">
      <div class="profile-modal" @click.stop>
        <button class="profile-modal-close" @click="$emit('close')">✖</button>
        <div class="profile-modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
