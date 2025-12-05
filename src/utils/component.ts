/**
 * Component Base Utilities
 *
 * Base class and utilities for creating RPGUI components
 * with lifecycle management and element enhancement.
 */

import { addClass, removeClass, createElement, setStyles } from './dom';
import type { EventCleanup } from './events';
import { createEventEmitter, type EventEmitter } from './events';

/**
 * Base component options interface
 */
export interface ComponentOptions {
  /** Additional CSS classes to add */
  className?: string;
  /** Component variant (e.g., 'golden', 'grey') */
  variant?: string;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Custom data attributes */
  data?: Record<string, string>;
}

/**
 * Component lifecycle hooks
 */
export interface ComponentLifecycle {
  /** Called when component is initialized */
  onInit?: () => void;
  /** Called when component is mounted to DOM */
  onMount?: () => void;
  /** Called when component is destroyed */
  onDestroy?: () => void;
  /** Called when component options change */
  onUpdate?: (options: ComponentOptions) => void;
}

/**
 * Component state
 */
export interface ComponentState {
  initialized: boolean;
  mounted: boolean;
  destroyed: boolean;
}

/**
 * Base component interface
 */
export interface Component<TElement extends HTMLElement = HTMLElement> {
  /** The root element of the component */
  readonly element: TElement;
  /** Component state */
  readonly state: Readonly<ComponentState>;
  /** Update component options */
  update: (options: Partial<ComponentOptions>) => void;
  /** Enable the component */
  enable: () => void;
  /** Disable the component */
  disable: () => void;
  /** Destroy the component and cleanup */
  destroy: () => void;
}

/**
 * Create a component from an existing element
 */
export function enhanceElement<
  TElement extends HTMLElement,
  TOptions extends ComponentOptions,
  TEvents extends Record<string, unknown>,
>(
  element: TElement,
  setup: (context: {
    element: TElement;
    options: TOptions;
    events: EventEmitter<TEvents>;
    addCleanup: (cleanup: EventCleanup) => void;
    lifecycle: ComponentLifecycle;
  }) => void,
  initialOptions: TOptions
): Component<TElement> & EventEmitter<TEvents> {
  const cleanupFunctions: EventCleanup[] = [];
  const events = createEventEmitter<TEvents>();
  const lifecycle: ComponentLifecycle = {};

  const state: ComponentState = {
    initialized: false,
    mounted: false,
    destroyed: false,
  };

  const addCleanup = (cleanup: EventCleanup): void => {
    cleanupFunctions.push(cleanup);
  };

  // Apply initial options
  if (initialOptions.className) {
    addClass(element, ...initialOptions.className.split(' '));
  }

  if (initialOptions.data) {
    for (const [key, value] of Object.entries(initialOptions.data)) {
      element.dataset[key] = value;
    }
  }

  if (initialOptions.disabled) {
    element.setAttribute('aria-disabled', 'true');
    addClass(element, 'disabled');
  }

  // Run setup
  setup({
    element,
    options: initialOptions,
    events,
    addCleanup,
    lifecycle,
  });

  // Mark as initialized
  state.initialized = true;
  lifecycle.onInit?.();

  // Check if already in DOM
  if (element.isConnected) {
    state.mounted = true;
    lifecycle.onMount?.();
  }

  const component: Component<TElement> = {
    element,
    state,

    update(options: Partial<ComponentOptions>): void {
      if (state.destroyed) {
        return;
      }

      if (options.className) {
        addClass(element, ...options.className.split(' '));
      }

      if (options.disabled !== undefined) {
        if (options.disabled) {
          element.setAttribute('aria-disabled', 'true');
          addClass(element, 'disabled');
        } else {
          element.removeAttribute('aria-disabled');
          removeClass(element, 'disabled');
        }
      }

      lifecycle.onUpdate?.(options as ComponentOptions);
    },

    enable(): void {
      this.update({ disabled: false });
    },

    disable(): void {
      this.update({ disabled: true });
    },

    destroy(): void {
      if (state.destroyed) {
        return;
      }

      // Run all cleanup functions
      for (const cleanup of cleanupFunctions) {
        cleanup();
      }
      cleanupFunctions.length = 0;

      // Call destroy lifecycle hook
      lifecycle.onDestroy?.();

      // Update state
      state.destroyed = true;
      state.mounted = false;
    },
  };

  return Object.assign(component, events);
}

/**
 * Create a new component with a generated element
 */
export function createComponent<
  TTag extends keyof HTMLElementTagNameMap,
  TOptions extends ComponentOptions,
  TEvents extends Record<string, unknown>,
>(
  tag: TTag,
  setup: (context: {
    element: HTMLElementTagNameMap[TTag];
    options: TOptions;
    events: EventEmitter<TEvents>;
    addCleanup: (cleanup: EventCleanup) => void;
    lifecycle: ComponentLifecycle;
  }) => void,
  options: TOptions
): Component<HTMLElementTagNameMap[TTag]> & EventEmitter<TEvents> {
  const element = createElement(tag);
  return enhanceElement(element, setup, options);
}

/**
 * Composable component parts registry
 */
const componentRegistry = new WeakMap<HTMLElement, Component>();

/**
 * Register a component instance for an element
 */
export function registerComponent<T extends Component>(
  element: HTMLElement,
  component: T
): T {
  componentRegistry.set(element, component);
  return component;
}

/**
 * Get a registered component for an element
 */
export function getComponent(element: HTMLElement): Component | undefined {
  return componentRegistry.get(element);
}

/**
 * Check if an element has a registered component
 */
export function hasComponent(element: HTMLElement): boolean {
  return componentRegistry.has(element);
}

/**
 * Unregister a component for an element
 */
export function unregisterComponent(element: HTMLElement): void {
  componentRegistry.delete(element);
}

/**
 * Utility to generate unique IDs for components
 */
let idCounter = 0;
export function generateId(prefix = 'rpgui'): string {
  idCounter += 1;
  return `${prefix}-${String(idCounter)}`;
}

/**
 * Utility to clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Utility to normalize a value to a 0-1 range
 */
export function normalize(value: number, min: number, max: number): number {
  if (max === min) {
    return 0;
  }
  return clamp((value - min) / (max - min), 0, 1);
}

/**
 * Utility to denormalize a value from 0-1 range
 */
export function denormalize(
  normalized: number,
  min: number,
  max: number
): number {
  return min + clamp(normalized, 0, 1) * (max - min);
}

/**
 * Apply RPGUI content wrapper styles to an element
 */
export function applyContentStyles(element: HTMLElement): void {
  addClass(element, 'rpgui-content', 'rpgui-cursors', 'scrollbar-rpg');
}

/**
 * Create a visually hidden element for accessibility
 */
export function createVisuallyHidden(content: string): HTMLSpanElement {
  const span = createElement('span', {
    className: 'sr-only',
    children: [content],
  });
  setStyles(span, {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  });
  return span;
}
