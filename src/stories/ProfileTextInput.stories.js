import ProfileTextInput from '@/components/ProfileTextInput.vue';

export default {
  title: 'components/ProfileTextInput',
  component: ProfileTextInput,
  decorators: [],
  tags: ['autodocs'],
  args: {
    type: 'text',
    label: 'First name',
    placeholder: 'Enter your first name',
    size: 'medium',
    inputId: 'text-input'
  }
};

export const TextInputLightMode = {
  args: {}
};

export const TextInputDarkMode = {
  args: {
    isDarkMode: true
  },
  parameters: { backgrounds: { default: 'Dark' } }
};
