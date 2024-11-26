import PortfolioTextAreaInput from '@/components/PortfolioTextAreaInput.vue';

export default {
  title: 'components/PortfolioTextAreaInput',
  component: PortfolioTextAreaInput,
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
