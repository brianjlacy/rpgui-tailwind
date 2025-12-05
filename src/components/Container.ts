/**
 * Container Component
 *
 * The root container for RPGUI content. Applies base styles including
 * pixel font, custom cursors, scrollbars, and pixelated image rendering.
 */

import { createElement, enhanceElement, addClass, removeClass } from '../utils';
import type { ContainerOptions } from '../types';
import type { Component } from '../utils/component';

/**
 * Container CSS classes
 */
const CONTAINER_CLASSES = {
  base: 'rpgui-content',
  cursors: 'rpgui-cursors',
  scrollbars: 'scrollbar-rpg',
} as const;

/**
 * Default container options
 */
const DEFAULT_OPTIONS: Required<ContainerOptions> = {
  className: '',
  variant: 'default',
  disabled: false,
  data: {},
  ariaLabel: undefined as unknown as string,
  cursors: true,
  scrollbars: true,
};

/**
 * Container event types (Container has no events)
 */
export type ContainerEvents = Record<string, unknown>;

/**
 * Container component type
 */
export type ContainerComponent = Component<HTMLDivElement>;

/**
 * Create a new Container component
 *
 * @param options - Container configuration options
 * @returns Container component instance
 *
 * @example
 * ```ts
 * // Create a container with default options
 * const container = createContainer();
 * document.body.appendChild(container.element);
 *
 * // Create a container without custom scrollbars
 * const container = createContainer({ scrollbars: false });
 * ```
 */
export function createContainer(
  options: ContainerOptions = {}
): ContainerComponent {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const element = createElement('div');

  return setupContainer(element, mergedOptions);
}

/**
 * Enhance an existing element as a Container
 *
 * @param element - Element to enhance
 * @param options - Container configuration options
 * @returns Container component instance
 *
 * @example
 * ```ts
 * // Enhance an existing div as a container
 * const div = document.getElementById('game-ui');
 * const container = enhanceAsContainer(div, { cursors: true });
 * ```
 */
export function enhanceAsContainer(
  element: HTMLDivElement,
  options: ContainerOptions = {}
): ContainerComponent {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  return setupContainer(element, mergedOptions);
}

/**
 * Setup container component
 */
function setupContainer(
  element: HTMLDivElement,
  options: Required<ContainerOptions>
): ContainerComponent {
  return enhanceElement<
    HTMLDivElement,
    Required<ContainerOptions>,
    ContainerEvents
  >(
    element,
    ({ element: el, options: opts, lifecycle, addCleanup }) => {
      // Apply base container class
      addClass(el, CONTAINER_CLASSES.base);

      // Apply optional cursor styling
      if (opts.cursors) {
        addClass(el, CONTAINER_CLASSES.cursors);
      }

      // Apply optional scrollbar styling
      if (opts.scrollbars) {
        addClass(el, CONTAINER_CLASSES.scrollbars);
      }

      // Apply custom className if provided
      if (opts.className) {
        addClass(el, ...opts.className.split(' ').filter(Boolean));
      }

      // Apply aria-label if provided
      if (opts.ariaLabel) {
        el.setAttribute('aria-label', opts.ariaLabel);
      }

      // Set role for accessibility
      if (!el.hasAttribute('role')) {
        el.setAttribute('role', 'region');
      }

      // Lifecycle hooks
      lifecycle.onDestroy = (): void => {
        // Remove applied classes on destroy
        removeClass(
          el,
          CONTAINER_CLASSES.base,
          CONTAINER_CLASSES.cursors,
          CONTAINER_CLASSES.scrollbars
        );
      };

      // Cleanup function for any event listeners (none for Container)
      addCleanup(() => {
        // No event listeners to cleanup for Container
      });
    },
    options
  );
}

/**
 * Check if an element is a Container
 */
export function isContainer(element: Element): boolean {
  return element.classList.contains(CONTAINER_CLASSES.base);
}

/**
 * Apply container styles to an element without creating a component
 * Useful for simple use cases where lifecycle management isn't needed
 */
export function applyContainerStyles(
  element: HTMLElement,
  options: Pick<ContainerOptions, 'cursors' | 'scrollbars'> = {}
): void {
  const { cursors = true, scrollbars = true } = options;

  addClass(element, CONTAINER_CLASSES.base);

  if (cursors) {
    addClass(element, CONTAINER_CLASSES.cursors);
  }

  if (scrollbars) {
    addClass(element, CONTAINER_CLASSES.scrollbars);
  }
}

/**
 * Remove container styles from an element
 */
export function removeContainerStyles(element: HTMLElement): void {
  removeClass(
    element,
    CONTAINER_CLASSES.base,
    CONTAINER_CLASSES.cursors,
    CONTAINER_CLASSES.scrollbars
  );
}
