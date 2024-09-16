import { fn } from '@storybook/test'

import Button from '@/components/Button.vue'
import '../styles/button.scss'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/Button',
  component: Button,
  decorators: [],
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryLightMode = {
  args: {
    isPrimary: true,
    text: 'Primary Button'
  }
}

export const SecondaryLightMode = {
  args: {
    isPrimary: false,
    text: 'Secondary Button'
  }
}
export const PrimaryDarkMode = {
  args: {
    isDarkMode: true,
    isPrimary: true,
    text: 'Primary Button'
  }
}

export const SecondaryDarkMode = {
  args: {
    isDarkMode: true,
    isPrimary: false,
    text: 'Secondary Button'
  }
}
