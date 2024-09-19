import ProfileTextAreaInput from '@/components/ProfileTextAreaInput.vue';

export default {
  title: 'components/ProfileTextAreaInput',
  component: ProfileTextAreaInput,
  decorators: [],
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'Light' } },
  args: {
    label: 'Message'
  }
};

export const TextAreaInputLightMode = {};
export const TextAreaInputDarkMode = {
  parameters: { backgrounds: { default: 'Dark' } }
};
