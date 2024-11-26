<script setup>
import { computed, ref } from 'vue';

const { modelValue = '', size = 'medium' } = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  size: String,
  inputId: String
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
  'portfolio-input-wrapper',
  { 'is-focused': isFocused.value || modelValue }
]);
</script>

<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="inputId" class="portfolio-input-label">{{ label }}</label>
    <input
      :id="inputId"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      class="portfolio-input"
      :class="sizeClass"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/PortfolioTextInput';
</style>
