import type { Preview } from '@storybook/html';
import '../src/styles/main.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'rpg-dark',
      values: [
        {
          name: 'rpg-dark',
          value: '#1a1a2e',
        },
        {
          name: 'rpg-brown',
          value: '#2d2a1e',
        },
        {
          name: 'light',
          value: '#f8f8f8',
        },
      ],
    },
    layout: 'centered',
  },
};

export default preview;
