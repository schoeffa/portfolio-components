/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Light', value: '#FFF' },
        { name: 'Dark', value: '#1A1A1A' }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
