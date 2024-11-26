import PortfolioLoadingSpinner from '@/components/PortfolioLoadingSpinner.vue';

export default {
  title: 'components/PortfolioLoadingSpinner',
  component: PortfolioLoadingSpinner,
  decorators: [],
  tags: ['autodocs']
};

export const spinnerLightMode = {};
export const spinnerDarkMode = {
  parameters: { backgrounds: { default: 'Dark' } }
};
