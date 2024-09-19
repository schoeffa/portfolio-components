import ProfileNav from '@/components/ProfileNav.vue';

import '../styles/_ProfileNav.scss';
import '../styles/_ProfileNavLink.scss';

export default {
  title: 'Components/ProfileNav',
  component: ProfileNav,
  decorators: [],
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'Light' } },
  args: {
    links: [{ text: 'Nav Link 1' }, { text: 'Nav Link 2' }, { text: 'Nav Link 3' }]
  }
};

export const HorizontalLightMode = {
  args: {
    isDarkMode: false,
    isVertical: false
  }
};
export const HorizontalDarkMode = {
  args: {
    isDarkMode: true,
    isVertical: false
  },
  parameters: { backgrounds: { default: 'Dark' } }
};
export const VerticalLightMode = {
  args: {
    isDarkMode: false,
    isVertical: true
  }
};
export const VerticalDarkMode = {
  args: {
    isDarkMode: true,
    isVertical: true
  },
  parameters: { backgrounds: { default: 'Dark' } }
};
