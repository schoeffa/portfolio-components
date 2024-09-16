import { themes } from '@storybook/theming'
/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    darkMode: {
      dark: { ...themes.dark, appBg: '#1a1a1a' },
      light: { ...themes.light, appBg: '#ffffff' }
    }
  }
}

export default preview
