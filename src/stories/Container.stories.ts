import type { Meta, StoryObj } from '@storybook/html';
import { createContainer, applyContainerStyles } from '../components/Container';

interface ContainerArgs {
  cursors: boolean;
  scrollbars: boolean;
  content: string;
}

const meta: Meta<ContainerArgs> = {
  title: 'Components/Container',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Container component is the root wrapper for RPGUI content. It applies:
- **Pixel font** - Press Start 2P font family
- **Custom cursors** - RPG-themed cursor images
- **Scrollbars** - Styled scrollbars matching the RPG theme
- **Pixelated rendering** - Crisp pixel-art image scaling

Use the Container to wrap your game UI content to ensure consistent styling.
        `,
      },
    },
  },
  argTypes: {
    cursors: {
      control: 'boolean',
      description: 'Whether to apply custom RPG cursors',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    scrollbars: {
      control: 'boolean',
      description: 'Whether to apply custom scrollbar styling',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    content: {
      control: 'text',
      description: 'Content to display inside the container',
    },
  },
  args: {
    cursors: true,
    scrollbars: true,
    content: 'Hello, Adventurer! Welcome to RPGUI.',
  },
};

export default meta;
type Story = StoryObj<ContainerArgs>;

/**
 * Default Container with all features enabled
 */
export const Default: Story = {
  render: (args) => {
    const container = createContainer({
      cursors: args.cursors,
      scrollbars: args.scrollbars,
    });

    // Add some content
    container.element.innerHTML = `
      <div style="padding: 20px;">
        <h2 class="text-outline" style="margin-bottom: 16px;">${args.content}</h2>
        <p style="color: #d4d4d4; line-height: 1.6;">
          Move your cursor around to see the custom RPG cursor.
          The container applies the Press Start 2P pixel font and
          enables pixelated rendering for images.
        </p>
      </div>
    `;

    // Set a visible background for the story
    container.element.style.background = 'var(--color-rpg-bg-dark)';
    container.element.style.minHeight = '200px';
    container.element.style.position = 'relative';

    return container.element;
  },
};

/**
 * Container without custom cursors
 */
export const WithoutCursors: Story = {
  args: {
    cursors: false,
    scrollbars: true,
    content: 'Container without custom cursors',
  },
  render: (args) => {
    const container = createContainer({
      cursors: args.cursors,
      scrollbars: args.scrollbars,
    });

    container.element.innerHTML = `
      <div style="padding: 20px;">
        <h2 class="text-outline" style="margin-bottom: 16px;">${args.content}</h2>
        <p style="color: #d4d4d4;">
          This container uses the default system cursor instead of
          the custom RPG cursor.
        </p>
      </div>
    `;

    container.element.style.background = 'var(--color-rpg-bg-dark)';
    container.element.style.minHeight = '200px';

    return container.element;
  },
};

/**
 * Container with scrollable content to demonstrate custom scrollbars
 */
export const WithScrollableContent: Story = {
  args: {
    cursors: true,
    scrollbars: true,
    content: 'Scrollable Container',
  },
  render: (args) => {
    const container = createContainer({
      cursors: args.cursors,
      scrollbars: args.scrollbars,
    });

    container.element.innerHTML = `
      <div style="padding: 20px; height: 300px; overflow-y: auto;">
        <h2 class="text-outline" style="margin-bottom: 16px;">${args.content}</h2>
        ${Array.from(
          { length: 20 },
          (_, i) => `
          <p style="color: #d4d4d4; margin-bottom: 12px;">
            Scroll line ${String(i + 1)}: The quick brown fox jumps over the lazy dog.
          </p>
        `
        ).join('')}
      </div>
    `;

    container.element.style.background = 'var(--color-rpg-bg-dark)';
    container.element.style.height = '300px';
    container.element.style.overflow = 'hidden';

    return container.element;
  },
};

/**
 * Using applyContainerStyles directly on an existing element
 */
export const EnhancedElement: Story = {
  render: () => {
    const div = document.createElement('div');
    applyContainerStyles(div);

    div.innerHTML = `
      <div style="padding: 20px;">
        <h2 class="text-outline" style="margin-bottom: 16px;">Enhanced Element</h2>
        <p style="color: #d4d4d4;">
          This example shows how to apply container styles to an existing
          DOM element using the <code>applyContainerStyles</code> utility.
        </p>
      </div>
    `;

    div.style.background = 'var(--color-rpg-bg-dark)';
    div.style.minHeight = '200px';

    return div;
  },
};

/**
 * Minimal container without custom scrollbars or cursors
 */
export const Minimal: Story = {
  args: {
    cursors: false,
    scrollbars: false,
    content: 'Minimal Container',
  },
  render: (args) => {
    const container = createContainer({
      cursors: args.cursors,
      scrollbars: args.scrollbars,
    });

    container.element.innerHTML = `
      <div style="padding: 20px;">
        <h2 class="text-outline" style="margin-bottom: 16px;">${args.content}</h2>
        <p style="color: #d4d4d4;">
          This container only applies the base RPGUI styles:
          pixel font and pixelated image rendering.
          No custom cursors or scrollbars are enabled.
        </p>
      </div>
    `;

    container.element.style.background = 'var(--color-rpg-bg-dark)';
    container.element.style.minHeight = '200px';

    return container.element;
  },
};
