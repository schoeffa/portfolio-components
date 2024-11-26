import PortfolioTooltip from '../components/PortfolioTooltip.vue';

export default {
  title: 'components/PortfolioTooltip',
  component: PortfolioTooltip,
  decorators: [
    () => ({
      template:
        '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; font-family: Neuropol, sans-serif"><story /></div>'
    })
  ],
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'Light' },
    slots: {
      default: {
        description: 'Tooltip trigger',
        template: '<p>Mouseover to view tooltip</p>'
      },
      tooltip: {
        descriptions: 'Tooltip Content',
        template: '<p>Tooltip Content</p>'
      }
    }
  }
};

export const TooltipLightModeTop = {
  args: {
    position: 'top'
  }
};
export const TooltipLightModeRight = {
  args: {
    position: 'right'
  }
};
export const TooltipLightModeBottom = {
  args: {
    position: 'bottom'
  }
};
export const TooltipLightModeLeft = {
  args: {
    position: 'left'
  }
};
export const TooltipDarkModeTop = {
  args: {
    isDarkMode: true,
    position: 'top'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'
    })
  ],
  parameters: { backgrounds: { default: 'Dark' } }
};
export const TooltipDarkModeRight = {
  args: {
    isDarkMode: true,
    position: 'right'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'
    })
  ],
  parameters: { backgrounds: { default: 'Dark' } }
};
export const TooltipDarkModeBottom = {
  args: {
    isDarkMode: true,
    position: 'bottom'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'
    })
  ],
  parameters: { backgrounds: { default: 'Dark' } }
};
export const TooltipDarkModeLeft = {
  args: {
    isDarkMode: true,
    position: 'left'
  },
  decorators: [
    () => ({
      template:
        '<div style="min-height: 10rem; display: flex; align-items: center; justify-content: center; color: white"><story /></div>'
    })
  ],
  parameters: { backgrounds: { default: 'Dark' } }
};
