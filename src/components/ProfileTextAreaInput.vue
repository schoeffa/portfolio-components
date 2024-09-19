<script setup>
import { ref } from 'vue';

defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  rows: Number,
  textareaId: String
});

const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
</script>

<template>
  <div class="profile-textarea-wrapper" :class="{ 'is-focused': isFocused || modelValue }">
    <label v-if="label" :for="textareaId" class="profile-textarea-label">{{ label }}</label>
    <textarea
      :id="textareaId"
      :rows="rows"
      :value="modelValue"
      :placeholder="placeholder"
      class="profile-textarea"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="handleFocus"
      @blur="handleBlur"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/variables';
.profile-textarea-wrapper {
  position: relative;
  margin-bottom: 20px;
  width: 100%;

  &.is-focused .profile-textarea-label {
    top: -16px;
    font-size: 12px;
    color: $primary-hover-color;
  }
}

.profile-textarea-label {
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: $font-family;
  color: rgba($white, 0.5);
  font-size: 16px;
  pointer-events: none;
  transition:
    top 0.3s ease,
    font-size 0.3s ease,
    color 0.3s ease;
}

.profile-textarea {
  font-family: $font-family;
  font-size: 16px;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid $primary-color;
  border-radius: 6px;
  background-color: rgba($black, 0.85);
  color: $text-color-light;
  width: 100%;
  outline: none;
  resize: vertical;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: $primary-hover-color;
    box-shadow:
      0 0 15px $primary-hover-color,
      0 0 30px $primary-hover-color;
  }

  &::placeholder {
    color: transparent;
  }
}

@media (max-width: 768px) {
  .profile-textarea {
    font-size: 14px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .profile-textarea {
    font-size: 12px;
    padding: 8px;
  }
}
</style>
