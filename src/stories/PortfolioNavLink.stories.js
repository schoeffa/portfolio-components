import PortfolioNavLink from '../components/PortfolioNavLink.vue';
import '../styles/_PortfolioNavLink.scss';

export default {
  title: 'components/PortfolioNavLink',
  component: PortfolioNavLink,
  decorators: [],
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'Light' } },
  args: { text: 'Nav Link' }
};

export const NavLinkLightMode = {
  args: {
    text: 'Nav Link Light Mode'
  }
};
export const NavLinkDarkMode = {
  args: {
    isDarkMode: true,
    text: 'Nav Link Light Mode'
  },
  parameters: { backgrounds: { default: 'Dark' } }
};
