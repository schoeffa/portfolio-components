import ProfileDropdown from '../components/ProfileDropdown.vue';

export default {
  title: 'components/ProfileDropdown',
  component: ProfileDropdown,
  decorators: [
    () => ({
      template:
        "<div style='min-height: 15rem; display: flex; align-items: start; justify-content: center'><story /></div>"
    })
  ],
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'Light' },
    slots: {
      trigger: {
        description: 'Dropdown Button',
        template: '<span>PICK</span>'
      }
    }
  },
  args: {
    isDarkMode: false,
    items: ['Option A', 'Option B', 'Option C'],
    position: 'bottom'
  }
};

export const DropdownBottomLightMode = {
  args: {
    isDarkMode: false
  }
};
export const DropdownLeftLightMode = {
  args: {
    isDarkMode: false,
    position: 'left'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 15rem; display: flex; align-items: center; justify-content: center"><story /></div>'
    })
  ]
};
export const DropdownTopLightMode = {
  args: {
    isDarkMode: false,
    position: 'top'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 15rem; display: flex; align-items: flex-end; justify-content: center"><story /></div>'
    })
  ]
};

export const DropdownRightLightMode = {
  args: {
    isDarkMode: false,
    position: 'right'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 15rem; display: flex; align-items: center; justify-content: center"><story /></div>'
    })
  ]
};
export const DropdownBottomDarkMode = {
  args: {
    isDarkMode: true
  },
  parameters: { backgrounds: { default: 'Dark' } }
};
export const DropdownLeftDarkMode = {
  args: {
    isDarkMode: true,
    position: 'left'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 15rem; display: flex; align-items: center; justify-content: center"><story /></div>'
    })
  ],
  parameters: { backgrounds: { default: 'Dark' } }
};
export const DropdownTopDarkMode = {
  args: {
    isDarkMode: true,
    position: 'top'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 15rem; display: flex; align-items: flex-end; justify-content: center"><story /></div>'
    })
  ],
  parameters: { backgrounds: { default: 'Dark' } }
};

export const DropdownRightDarkMode = {
  args: {
    isDarkMode: true,
    position: 'right'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 15rem; display: flex; align-items: center; justify-content: center"><story /></div>'
    })
  ],
  parameters: { backgrounds: { default: 'Dark' } }
};
