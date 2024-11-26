<script setup>
import PortfolioTextInput from '@/components/PortfolioTextInput.vue';
import PortfolioDropdown from '@/components/PortfolioDropdown.vue';
import PortfolioButton from '@/components/PortfolioButton.vue';
import { ref } from 'vue';

const { isDarkMode = false, formFields = [] } = defineProps({
  isDarkMode: Boolean,
  formError: String,
  formFields: Array
});
const formData = ref(Object.fromEntries(formFields.map((formField) => [formField.model, ''])));
</script>

<template>
  <form
    @submit.prevent="$emit('submit', formData)"
    class="portfolio-form"
    :class="{ 'portfolio-form--dark-mode': isDarkMode }"
  >
    <slot name="form-header"></slot>

    <div class="form-body">
      <!-- Input fields -->
      <template v-for="(input, index) in formFields" :key="index">
        <component
          :is="input.component"
          v-bind="input.props"
          v-model="formData[input.model]"
          :input-id="`input-${input.model}`"
        />
      </template>

      <!-- Error messages -->
      <div v-if="formError" class="form-error">{{ formError }}</div>
    </div>

    <slot name="form-footer">
      <!-- Submit button -->
      <PortfolioButton type="submit" :isDarkMode="isDarkMode" :isPrimary="true" text="Submit" />
    </slot>
  </form>
</template>

<style scoped lang="scss">
@import '@/styles/variables';
.portfolio-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: rgba($white, 0.8);
  border-radius: 8px;
  box-shadow: 0 0 30px rgba($black, 0.5);

  &--dark-mode {
    background: rgba($black, 0.8);
    box-shadow: 0 0 30px rgba($primary-color, 0.5);
  }
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.form-error {
  color: $secondary-color;
  font-family: $font-family;
  margin-top: -10px;
  font-size: 14px;
  animation: pulse-error 0.3s ease;
}

@keyframes pulse-error {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
