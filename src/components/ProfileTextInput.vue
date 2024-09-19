<script setup>
import { computed, ref } from 'vue';

const {
  isDarkMode = false,
  modelValue = '',
  size = 'medium'
} = defineProps({
  modelValue: String,
  type: String,
  label: String,
  placeholder: String,
  size: String,
  inputId: String,
  isDarkMode: Boolean
});

const isFocused = ref(false);

const sizeClass = computed(() => `input-${size}`);
const handleFocus = () => {
  isFocused.value = true;
};
const handleBlur = () => {
  isFocused.value = false;
};

const wrapperClasses = computed(() => [
  'profile-input-wrapper',
  { 'is-focused': isFocused.value || modelValue }
]);
</script>

<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="inputId" class="profile-input-label">{{ label }}</label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="profile-input"
      :class="sizeClass"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/ProfileTextInput';
</style>
