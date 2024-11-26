import PortfolioLogo from '@/components/PortfolioLogo.vue';

export default {
  title: 'components/PortfolioLogo',
  component: PortfolioLogo,
  decorators: [],
  tags: ['autodocs']
};

export const PortfolioLogoLight = {
  args: {
    isDarkMode: false
  }
};
export const PortfolioLogoDark = {
  args: {
    isDarkMode: false
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
};
