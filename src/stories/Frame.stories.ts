import type { Meta, StoryObj } from '@storybook/html';
import { createFrame, setFrameVariant } from '../components/Frame';

interface FrameArgs {
  variant: 'default' | 'golden' | 'golden2' | 'grey';
  fill: boolean;
  content: string;
}

const meta: Meta<FrameArgs> = {
  title: 'Components/Frame',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Frame component provides decorative containers with pixel-art border images.
Four variants are available:

- **default** - Warm brown wooden frame
- **golden** - Ornate gold trim
- **golden2** - Thicker ornate gold
- **grey** - Stone/metal style

Each frame includes matching border images and background textures.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'golden', 'golden2', 'grey'],
      description: 'Frame style variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    fill: {
      control: 'boolean',
      description: 'Whether to fill background from border image',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    content: {
      control: 'text',
      description: 'Content to display inside the frame',
    },
  },
  args: {
    variant: 'default',
    fill: true,
    content: 'This is a framed panel with pixel-art borders.',
  },
};

export default meta;
type Story = StoryObj<FrameArgs>;

/**
 * Default brown wooden frame
 */
export const Default: Story = {
  render: (args) => {
    const frame = createFrame({
      variant: args.variant,
      fill: args.fill,
    });

    frame.element.innerHTML = `
      <div style="min-height: 100px;">
        <h3 class="text-outline" style="margin-bottom: 12px; color: white;">Default Frame</h3>
        <p style="color: #d4d4d4; line-height: 1.5;">${args.content}</p>
      </div>
    `;

    frame.element.style.maxWidth = '400px';

    return frame.element;
  },
};

/**
 * Golden ornate frame
 */
export const Golden: Story = {
  args: {
    variant: 'golden',
    content: 'A golden frame for important content or special UI elements.',
  },
  render: (args) => {
    const frame = createFrame({
      variant: args.variant,
      fill: args.fill,
    });

    frame.element.innerHTML = `
      <div style="min-height: 100px;">
        <h3 class="text-outline" style="margin-bottom: 12px; color: var(--color-rpg-golden);">Golden Frame</h3>
        <p style="color: #d4d4d4; line-height: 1.5;">${args.content}</p>
      </div>
    `;

    frame.element.style.maxWidth = '400px';

    return frame.element;
  },
};

/**
 * Golden2 - thicker ornate gold frame
 */
export const Golden2: Story = {
  args: {
    variant: 'golden2',
    content: 'A thicker golden frame with more elaborate borders.',
  },
  render: (args) => {
    const frame = createFrame({
      variant: args.variant,
      fill: args.fill,
    });

    frame.element.innerHTML = `
      <div style="min-height: 100px;">
        <h3 class="text-outline" style="margin-bottom: 12px; color: var(--color-rpg-golden);">Golden2 Frame</h3>
        <p style="color: #d4d4d4; line-height: 1.5;">${args.content}</p>
      </div>
    `;

    frame.element.style.maxWidth = '400px';

    return frame.element;
  },
};

/**
 * Grey stone/metal frame
 */
export const Grey: Story = {
  args: {
    variant: 'grey',
    content: 'A grey stone frame, perfect for secondary panels or subtle UI.',
  },
  render: (args) => {
    const frame = createFrame({
      variant: args.variant,
      fill: args.fill,
    });

    frame.element.innerHTML = `
      <div style="min-height: 100px;">
        <h3 class="text-outline" style="margin-bottom: 12px; color: #b0b0b0;">Grey Frame</h3>
        <p style="color: #d4d4d4; line-height: 1.5;">${args.content}</p>
      </div>
    `;

    frame.element.style.maxWidth = '400px';

    return frame.element;
  },
};

/**
 * All variants side by side
 */
export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    container.style.gap = '20px';
    container.style.maxWidth = '800px';

    const variants: ('default' | 'golden' | 'golden2' | 'grey')[] = [
      'default',
      'golden',
      'golden2',
      'grey',
    ];

    variants.forEach((variant) => {
      const frame = createFrame({ variant });
      frame.element.innerHTML = `
        <div style="min-height: 80px;">
          <h4 class="text-outline" style="margin-bottom: 8px; color: white; text-transform: capitalize;">${variant}</h4>
          <p style="color: #d4d4d4; font-size: 0.7rem;">Frame variant: ${variant}</p>
        </div>
      `;
      container.appendChild(frame.element);
    });

    return container;
  },
};

/**
 * Nested frames
 */
export const NestedFrames: Story = {
  render: () => {
    const outerFrame = createFrame({ variant: 'default' });
    const innerFrame = createFrame({ variant: 'golden' });

    innerFrame.element.innerHTML = `
      <p style="color: #d4d4d4;">Inner golden frame content</p>
    `;
    innerFrame.element.style.marginTop = '12px';

    outerFrame.element.innerHTML = `
      <h3 class="text-outline" style="margin-bottom: 12px; color: white;">Nested Frames</h3>
      <p style="color: #d4d4d4; margin-bottom: 12px;">Frames can be nested inside each other.</p>
    `;
    outerFrame.element.appendChild(innerFrame.element);
    outerFrame.element.style.maxWidth = '400px';

    return outerFrame.element;
  },
};

/**
 * Frame without fill (transparent background)
 */
export const NoFill: Story = {
  args: {
    variant: 'default',
    fill: false,
    content: 'This frame has no background fill, showing content behind it.',
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.background =
      'linear-gradient(45deg, #1a1a2e 25%, #16213e 25%, #16213e 50%, #1a1a2e 50%, #1a1a2e 75%, #16213e 75%)';
    wrapper.style.backgroundSize = '40px 40px';
    wrapper.style.padding = '20px';

    const frame = createFrame({
      variant: args.variant,
      fill: args.fill,
    });

    frame.element.innerHTML = `
      <div style="min-height: 100px;">
        <h3 class="text-outline" style="margin-bottom: 12px; color: white;">No Fill</h3>
        <p style="color: #d4d4d4; line-height: 1.5;">${args.content}</p>
      </div>
    `;

    frame.element.style.maxWidth = '350px';
    wrapper.appendChild(frame.element);

    return wrapper;
  },
};

/**
 * Dynamic variant switching
 */
export const DynamicVariant: Story = {
  render: () => {
    const container = document.createElement('div');

    const frame = createFrame({ variant: 'default' });
    frame.element.innerHTML = `
      <div style="min-height: 80px;">
        <h3 class="text-outline" style="margin-bottom: 12px; color: white;">Dynamic Frame</h3>
        <p style="color: #d4d4d4;">Click the buttons to change the variant.</p>
      </div>
    `;
    frame.element.style.maxWidth = '400px';
    frame.element.style.marginBottom = '16px';

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '8px';

    const variants: ('default' | 'golden' | 'golden2' | 'grey')[] = [
      'default',
      'golden',
      'golden2',
      'grey',
    ];

    variants.forEach((variant) => {
      const button = document.createElement('button');
      button.textContent = variant;
      button.style.padding = '8px 16px';
      button.style.cursor = 'pointer';
      button.style.fontFamily = 'inherit';
      button.addEventListener('click', () => {
        setFrameVariant(frame.element, variant);
      });
      buttonContainer.appendChild(button);
    });

    container.appendChild(frame.element);
    container.appendChild(buttonContainer);

    return container;
  },
};
