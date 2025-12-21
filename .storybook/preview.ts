import "../app/globals.css"
import type { Preview } from '@storybook/nextjs-vite'
import { Outfit } from 'next/font/google'
import React from 'react'

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

const preview: Preview = {
  decorators: [
    (Story) => React.createElement('div', { className: outfit.className }, React.createElement(Story, null)),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;