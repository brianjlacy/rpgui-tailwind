/**
 * RPGUI Tailwind - Utility Functions
 *
 * Export all utility functions for component development.
 */

// DOM utilities
export {
  createElement,
  hasClass,
  addClass,
  removeClass,
  toggleClass,
  replaceClass,
  getChildWithClass,
  getChildrenWithClass,
  insertAfter,
  insertBefore,
  removeElement,
  replaceElement,
  wrapElement,
  data,
  copyStyles,
  setStyles,
  matches,
  closest,
  getElementById,
  querySelector,
  querySelectorAll,
} from './dom';

// Event utilities
export {
  on,
  once,
  delegate,
  fireEvent,
  fireNativeEvent,
  stopEvent,
  waitForEvent,
  debounce,
  throttle,
  createEventEmitter,
  Keys,
  isKey,
  isAnyKey,
} from './events';
export type {
  EventListenerOptions,
  EventCleanup,
  EventEmitter,
  KeyboardKey,
} from './events';

// Component utilities
export {
  enhanceElement,
  createComponent,
  registerComponent,
  getComponent,
  hasComponent,
  unregisterComponent,
  generateId,
  clamp,
  normalize,
  denormalize,
  applyContentStyles,
  createVisuallyHidden,
} from './component';
export type {
  ComponentOptions,
  ComponentLifecycle,
  ComponentState,
  Component,
} from './component';
