import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const rpguiTheme = create({
  base: 'dark',
  brandTitle: 'RPGUI Tailwind',
  brandUrl: 'https://github.com/brianjlacy/rpgui-tailwind',
  brandTarget: '_self',

  // UI Colors
  colorPrimary: '#d4a537',
  colorSecondary: '#8b6914',

  // UI
  appBg: '#1a1a2e',
  appContentBg: '#16213e',
  appPreviewBg: '#1a1a2e',
  appBorderColor: '#3d3d5c',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Press Start 2P", monospace',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#1a1a2e',

  // Toolbar colors
  barTextColor: '#d4d4d4',
  barSelectedColor: '#d4a537',
  barHoverColor: '#d4a537',
  barBg: '#16213e',

  // Form colors
  inputBg: '#1a1a2e',
  inputBorder: '#3d3d5c',
  inputTextColor: '#ffffff',
  inputBorderRadius: 2,
});

addons.setConfig({
  theme: rpguiTheme,
});
