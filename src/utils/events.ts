/**
 * Event Handling Utilities
 *
 * Modern TypeScript utilities for event management,
 * delegation, and custom event dispatching.
 */

/**
 * Event listener options type
 */
export interface EventListenerOptions {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
  signal?: AbortSignal;
}

/**
 * Event handler cleanup function
 */
export type EventCleanup = () => void;

/**
 * Add an event listener and return a cleanup function
 */
export function on<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  type: K,
  listener: (event: HTMLElementEventMap[K]) => void,
  options?: EventListenerOptions
): EventCleanup {
  element.addEventListener(type, listener as EventListener, options);
  return (): void => {
    element.removeEventListener(type, listener as EventListener, options);
  };
}

/**
 * Add an event listener that fires only once
 */
export function once<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  type: K,
  listener: (event: HTMLElementEventMap[K]) => void,
  options?: Omit<EventListenerOptions, 'once'>
): EventCleanup {
  return on(element, type, listener, { ...options, once: true });
}

/**
 * Delegate event handling to a parent element
 */
export function delegate<K extends keyof HTMLElementEventMap>(
  parent: HTMLElement,
  type: K,
  selector: string,
  listener: (event: HTMLElementEventMap[K], target: Element) => void,
  options?: EventListenerOptions
): EventCleanup {
  const handler = (event: HTMLElementEventMap[K]): void => {
    const target = (event.target as Element).closest(selector);
    if (target && parent.contains(target)) {
      listener(event, target);
    }
  };

  parent.addEventListener(type, handler as EventListener, options);
  return (): void => {
    parent.removeEventListener(type, handler as EventListener, options);
  };
}

/**
 * Fire a custom event from an element
 */
export function fireEvent(
  element: Element,
  type: string,
  detail?: unknown,
  options?: { bubbles?: boolean; cancelable?: boolean }
): boolean {
  const event = new CustomEvent(type, {
    detail,
    bubbles: options?.bubbles ?? true,
    cancelable: options?.cancelable ?? true,
  });
  return element.dispatchEvent(event);
}

/**
 * Fire a native HTML event
 */
export function fireNativeEvent(
  element: Element,
  type: keyof HTMLElementEventMap
): boolean {
  const event = new Event(type, { bubbles: true, cancelable: true });
  return element.dispatchEvent(event);
}

/**
 * Prevent default and stop propagation
 */
export function stopEvent(event: Event): void {
  event.preventDefault();
  event.stopPropagation();
}

/**
 * Wait for an event to occur
 */
export function waitForEvent<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  type: K,
  options?: { timeout?: number }
): Promise<HTMLElementEventMap[K]> {
  return new Promise((resolve, reject) => {
    const timeoutId = options?.timeout
      ? setTimeout(() => {
          cleanup();
          reject(new Error(`Timeout waiting for ${type} event`));
        }, options.timeout)
      : undefined;

    const cleanup = once(element, type, (event) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      resolve(event);
    });
  });
}

/**
 * Debounce event handler
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): T {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function debounced(this: unknown, ...args: unknown[]): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  } as T;
}

/**
 * Throttle event handler
 */
export function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  limit: number
): T {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function throttled(this: unknown, ...args: unknown[]): void {
    const now = Date.now();
    const remaining = limit - (now - lastCall);

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
      lastCall = now;
      fn.apply(this, args);
    } else {
      timeoutId ??= setTimeout(() => {
        lastCall = Date.now();
        timeoutId = undefined;
        fn.apply(this, args);
      }, remaining);
    }
  } as T;
}

/**
 * Create an event emitter for custom component events
 */
export interface EventEmitter<TEvents extends Record<string, unknown>> {
  on: <K extends keyof TEvents>(
    type: K,
    listener: (data: TEvents[K]) => void
  ) => EventCleanup;
  off: <K extends keyof TEvents>(
    type: K,
    listener: (data: TEvents[K]) => void
  ) => void;
  emit: <K extends keyof TEvents>(type: K, data: TEvents[K]) => void;
  once: <K extends keyof TEvents>(
    type: K,
    listener: (data: TEvents[K]) => void
  ) => EventCleanup;
}

export function createEventEmitter<
  TEvents extends Record<string, unknown>,
>(): EventEmitter<TEvents> {
  const listeners = new Map<keyof TEvents, Set<(data: unknown) => void>>();

  return {
    on<K extends keyof TEvents>(
      type: K,
      listener: (data: TEvents[K]) => void
    ): EventCleanup {
      let set = listeners.get(type);
      if (!set) {
        set = new Set();
        listeners.set(type, set);
      }
      set.add(listener as (data: unknown) => void);
      return (): void => {
        this.off(type, listener);
      };
    },

    off<K extends keyof TEvents>(
      type: K,
      listener: (data: TEvents[K]) => void
    ): void {
      listeners.get(type)?.delete(listener as (data: unknown) => void);
    },

    emit<K extends keyof TEvents>(type: K, data: TEvents[K]): void {
      listeners.get(type)?.forEach((listener) => {
        listener(data);
      });
    },

    once<K extends keyof TEvents>(
      type: K,
      listener: (data: TEvents[K]) => void
    ): EventCleanup {
      const wrapper = (data: TEvents[K]): void => {
        this.off(type, wrapper);
        listener(data);
      };
      return this.on(type, wrapper);
    },
  };
}

/**
 * Keyboard event helpers
 */
export const Keys = {
  Enter: 'Enter',
  Space: ' ',
  Escape: 'Escape',
  Tab: 'Tab',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  Home: 'Home',
  End: 'End',
  PageUp: 'PageUp',
  PageDown: 'PageDown',
} as const;

export type KeyboardKey = (typeof Keys)[keyof typeof Keys];

/**
 * Check if a keyboard event matches a specific key
 */
export function isKey(event: KeyboardEvent, key: KeyboardKey): boolean {
  return event.key === key;
}

/**
 * Check if a keyboard event matches any of the specified keys
 */
export function isAnyKey(event: KeyboardEvent, keys: KeyboardKey[]): boolean {
  return keys.includes(event.key as KeyboardKey);
}
