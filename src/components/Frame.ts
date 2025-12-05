/**
 * Frame Component
 *
 * A styled container with decorative border-image frames.
 * Supports 4 variants: default (brown), golden, golden2, and grey.
 */

import { createElement, enhanceElement, addClass, removeClass } from '../utils';
import type { FrameOptions, ComponentVariant } from '../types';
import type { Component } from '../utils/component';

/**
 * Frame CSS classes for each variant
 */
const FRAME_CLASSES = {
  base: 'rpgui-frame',
  variants: {
    default: 'border-frame',
    golden: 'border-frame-golden',
    golden2: 'border-frame-golden2',
    grey: 'border-frame-grey',
  },
  backgrounds: {
    default: 'bg-frame',
    golden: 'bg-frame-golden',
    golden2: 'bg-frame-golden2',
    grey: 'bg-frame-grey',
  },
  noFill: {
    default: 'border-frame-no-fill',
    golden: 'border-frame-golden-no-fill',
    golden2: 'border-frame-golden2-no-fill',
    grey: 'border-frame-grey-no-fill',
  },
} as const;

/**
 * Default frame options
 */
const DEFAULT_OPTIONS: Required<FrameOptions> = {
  className: '',
  variant: 'default',
  disabled: false,
  data: {},
  ariaLabel: undefined as unknown as string,
  fill: true,
};

/**
 * Frame event types (Frame has no events)
 */
export type FrameEvents = Record<string, unknown>;

/**
 * Frame component type
 */
export type FrameComponent = Component<HTMLDivElement>;

/**
 * Create a new Frame component
 *
 * @param options - Frame configuration options
 * @returns Frame component instance
 *
 * @example
 * ```ts
 * // Create a default frame
 * const frame = createFrame();
 * frame.element.innerHTML = '<p>Content here</p>';
 * document.body.appendChild(frame.element);
 *
 * // Create a golden frame
 * const goldenFrame = createFrame({ variant: 'golden' });
 * ```
 */
export function createFrame(options: FrameOptions = {}): FrameComponent {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const element = createElement('div');

  return setupFrame(element, mergedOptions);
}

/**
 * Enhance an existing element as a Frame
 *
 * @param element - Element to enhance
 * @param options - Frame configuration options
 * @returns Frame component instance
 *
 * @example
 * ```ts
 * const div = document.getElementById('my-panel');
 * const frame = enhanceAsFrame(div, { variant: 'grey' });
 * ```
 */
export function enhanceAsFrame(
  element: HTMLDivElement,
  options: FrameOptions = {}
): FrameComponent {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  return setupFrame(element, mergedOptions);
}

/**
 * Setup frame component
 */
function setupFrame(
  element: HTMLDivElement,
  options: Required<FrameOptions>
): FrameComponent {
  return enhanceElement<HTMLDivElement, Required<FrameOptions>, FrameEvents>(
    element,
    ({ element: el, options: opts, lifecycle, addCleanup }) => {
      // Apply base frame class
      addClass(el, FRAME_CLASSES.base);

      // Apply variant border class
      const variant = normalizeVariant(opts.variant);
      addClass(el, FRAME_CLASSES.variants[variant]);

      // Apply background class
      addClass(el, FRAME_CLASSES.backgrounds[variant]);

      // Apply no-fill modifier if needed
      if (!opts.fill) {
        addClass(el, FRAME_CLASSES.noFill[variant]);
      }

      // Apply padding
      addClass(el, 'p-rpg-frame');

      // Apply box-sizing
      el.style.boxSizing = 'border-box';

      // Apply custom className if provided
      if (opts.className) {
        addClass(el, ...opts.className.split(' ').filter(Boolean));
      }

      // Apply aria-label if provided
      if (opts.ariaLabel) {
        el.setAttribute('aria-label', opts.ariaLabel);
      }

      // Set role for accessibility (generic container)
      if (!el.hasAttribute('role')) {
        el.setAttribute('role', 'group');
      }

      // Store variant in data attribute for reference
      el.dataset['variant'] = variant;

      // Lifecycle hooks
      lifecycle.onDestroy = (): void => {
        // Remove all applied classes on destroy
        removeClass(el, FRAME_CLASSES.base, 'p-rpg-frame');
        removeClass(
          el,
          ...Object.values(FRAME_CLASSES.variants),
          ...Object.values(FRAME_CLASSES.backgrounds),
          ...Object.values(FRAME_CLASSES.noFill)
        );
        delete el.dataset['variant'];
      };

      // Cleanup function
      addCleanup(() => {
        // No event listeners to cleanup for Frame
      });
    },
    options
  );
}

/**
 * Normalize variant name (handle 'golden-2' vs 'golden2')
 */
function normalizeVariant(
  variant: ComponentVariant | undefined
): 'default' | 'golden' | 'golden2' | 'grey' {
  if (!variant || variant === 'default') {
    return 'default';
  }
  // Handle both 'golden2' and 'golden-2'
  if (variant === 'golden2') {
    return 'golden2';
  }
  return variant;
}

/**
 * Check if an element is a Frame
 */
export function isFrame(element: Element): boolean {
  return element.classList.contains(FRAME_CLASSES.base);
}

/**
 * Get the variant of a frame element
 */
export function getFrameVariant(
  element: Element
): 'default' | 'golden' | 'golden2' | 'grey' | null {
  if (!isFrame(element)) {
    return null;
  }
  const variant = (element as HTMLElement).dataset['variant'];
  if (
    variant === 'default' ||
    variant === 'golden' ||
    variant === 'golden2' ||
    variant === 'grey'
  ) {
    return variant;
  }
  return 'default';
}

/**
 * Apply frame styles to an element without creating a component
 */
export function applyFrameStyles(
  element: HTMLElement,
  options: Pick<FrameOptions, 'variant' | 'fill'> = {}
): void {
  const { variant = 'default', fill = true } = options;
  const normalizedVariant = normalizeVariant(variant);

  addClass(
    element,
    FRAME_CLASSES.base,
    FRAME_CLASSES.variants[normalizedVariant],
    FRAME_CLASSES.backgrounds[normalizedVariant],
    'p-rpg-frame'
  );

  if (!fill) {
    addClass(element, FRAME_CLASSES.noFill[normalizedVariant]);
  }

  element.style.boxSizing = 'border-box';
  element.dataset['variant'] = normalizedVariant;
}

/**
 * Remove frame styles from an element
 */
export function removeFrameStyles(element: HTMLElement): void {
  removeClass(element, FRAME_CLASSES.base, 'p-rpg-frame');
  removeClass(
    element,
    ...Object.values(FRAME_CLASSES.variants),
    ...Object.values(FRAME_CLASSES.backgrounds),
    ...Object.values(FRAME_CLASSES.noFill)
  );
  delete element.dataset['variant'];
}

/**
 * Change the variant of an existing frame
 */
export function setFrameVariant(
  element: HTMLElement,
  newVariant: 'default' | 'golden' | 'golden2' | 'grey'
): void {
  if (!isFrame(element)) {
    return;
  }

  const currentVariant = getFrameVariant(element);
  if (currentVariant === newVariant) {
    return;
  }

  // Remove current variant classes
  if (currentVariant) {
    removeClass(
      element,
      FRAME_CLASSES.variants[currentVariant],
      FRAME_CLASSES.backgrounds[currentVariant],
      FRAME_CLASSES.noFill[currentVariant]
    );
  }

  // Add new variant classes
  addClass(
    element,
    FRAME_CLASSES.variants[newVariant],
    FRAME_CLASSES.backgrounds[newVariant]
  );

  element.dataset['variant'] = newVariant;
}
