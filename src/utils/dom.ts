/**
 * DOM Manipulation Utilities
 *
 * Modern TypeScript utilities for DOM manipulation,
 * element creation, and class management.
 */

/**
 * Create an HTML element with optional attributes and classes
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: {
    className?: string;
    attributes?: Record<string, string>;
    dataset?: Record<string, string>;
    children?: (Node | string)[];
  }
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  if (options?.className) {
    element.className = options.className;
  }

  if (options?.attributes) {
    for (const [key, value] of Object.entries(options.attributes)) {
      element.setAttribute(key, value);
    }
  }

  if (options?.dataset) {
    for (const [key, value] of Object.entries(options.dataset)) {
      element.dataset[key] = value;
    }
  }

  if (options?.children) {
    for (const child of options.children) {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    }
  }

  return element;
}

/**
 * Check if an element has a specific class
 */
export function hasClass(element: Element, className: string): boolean {
  return element.classList.contains(className);
}

/**
 * Add one or more classes to an element
 */
export function addClass(element: Element, ...classNames: string[]): void {
  element.classList.add(...classNames);
}

/**
 * Remove one or more classes from an element
 */
export function removeClass(element: Element, ...classNames: string[]): void {
  element.classList.remove(...classNames);
}

/**
 * Toggle a class on an element
 */
export function toggleClass(
  element: Element,
  className: string,
  force?: boolean
): boolean {
  return element.classList.toggle(className, force);
}

/**
 * Replace one class with another
 */
export function replaceClass(
  element: Element,
  oldClass: string,
  newClass: string
): void {
  element.classList.replace(oldClass, newClass);
}

/**
 * Find first child element with a specific class
 */
export function getChildWithClass(
  parent: Element,
  className: string
): Element | null {
  return parent.querySelector(`.${className}`);
}

/**
 * Find all child elements with a specific class
 */
export function getChildrenWithClass(
  parent: Element,
  className: string
): Element[] {
  return Array.from(parent.querySelectorAll(`.${className}`));
}

/**
 * Insert an element after a reference element
 */
export function insertAfter(newElement: Node, referenceElement: Node): void {
  referenceElement.parentNode?.insertBefore(
    newElement,
    referenceElement.nextSibling
  );
}

/**
 * Insert an element before a reference element
 */
export function insertBefore(newElement: Node, referenceElement: Node): void {
  referenceElement.parentNode?.insertBefore(newElement, referenceElement);
}

/**
 * Remove an element from the DOM
 */
export function removeElement(element: Element): void {
  element.remove();
}

/**
 * Replace an element with another
 */
export function replaceElement(oldElement: Element, newElement: Element): void {
  oldElement.replaceWith(newElement);
}

/**
 * Wrap an element with a wrapper element
 */
export function wrapElement(element: Element, wrapper: Element): void {
  element.parentNode?.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}

/**
 * Get or set data attribute
 */
export function data(
  element: HTMLElement,
  key: string,
  value?: string
): string | undefined {
  if (value !== undefined) {
    element.dataset[key] = value;
    return value;
  }
  return element.dataset[key];
}

/**
 * Copy CSS styles from one element to another
 */
export function copyStyles(from: HTMLElement, to: HTMLElement): void {
  to.style.cssText = from.style.cssText;
}

/**
 * Set multiple CSS styles at once
 */
export function setStyles(
  element: HTMLElement,
  styles: Partial<CSSStyleDeclaration>
): void {
  Object.assign(element.style, styles);
}

/**
 * Check if element matches a selector
 */
export function matches(element: Element, selector: string): boolean {
  return element.matches(selector);
}

/**
 * Find closest ancestor matching selector
 */
export function closest(element: Element, selector: string): Element | null {
  return element.closest(selector);
}

/**
 * Get element by ID
 */
export function getElementById(id: string): HTMLElement | null {
  return document.getElementById(id);
}

/**
 * Query selector
 */
export function querySelector(
  selector: string,
  parent: Element | Document = document
): Element | null {
  return parent.querySelector(selector);
}

/**
 * Query selector all
 */
export function querySelectorAll(
  selector: string,
  parent: Element | Document = document
): Element[] {
  return Array.from(parent.querySelectorAll(selector));
}
