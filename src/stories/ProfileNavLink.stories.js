import ProfileNavLink from '../components/ProfileNavLink.vue';
import '../styles/ProfileNavLink.scss';

export default {
  title: 'components/ProfileNavLink',
  component: ProfileNavLink,
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
