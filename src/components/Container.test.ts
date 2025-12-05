/**
 * Container Component Tests
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  createContainer,
  enhanceAsContainer,
  isContainer,
  applyContainerStyles,
  removeContainerStyles,
} from './Container';

describe('Container', () => {
  let testElement: HTMLDivElement;

  beforeEach(() => {
    testElement = document.createElement('div');
    document.body.appendChild(testElement);
  });

  afterEach(() => {
    testElement.remove();
  });

  describe('createContainer', () => {
    it('should create a container element with default options', () => {
      const container = createContainer();
      expect(container.element).toBeInstanceOf(HTMLDivElement);
      expect(container.element.classList.contains('rpgui-content')).toBe(true);
      expect(container.element.classList.contains('rpgui-cursors')).toBe(true);
      expect(container.element.classList.contains('scrollbar-rpg')).toBe(true);
    });

    it('should create a container without cursors when disabled', () => {
      const container = createContainer({ cursors: false });
      expect(container.element.classList.contains('rpgui-content')).toBe(true);
      expect(container.element.classList.contains('rpgui-cursors')).toBe(false);
    });

    it('should create a container without scrollbars when disabled', () => {
      const container = createContainer({ scrollbars: false });
      expect(container.element.classList.contains('rpgui-content')).toBe(true);
      expect(container.element.classList.contains('scrollbar-rpg')).toBe(false);
    });

    it('should apply custom className', () => {
      const container = createContainer({
        className: 'my-class another-class',
      });
      expect(container.element.classList.contains('my-class')).toBe(true);
      expect(container.element.classList.contains('another-class')).toBe(true);
    });

    it('should set aria-label when provided', () => {
      const container = createContainer({ ariaLabel: 'Game UI' });
      expect(container.element.getAttribute('aria-label')).toBe('Game UI');
    });

    it('should set role attribute', () => {
      const container = createContainer();
      expect(container.element.getAttribute('role')).toBe('region');
    });

    it('should have correct initial state', () => {
      const container = createContainer();
      expect(container.state.initialized).toBe(true);
      expect(container.state.destroyed).toBe(false);
    });
  });

  describe('enhanceAsContainer', () => {
    it('should enhance an existing element with container classes', () => {
      const container = enhanceAsContainer(testElement);
      expect(testElement.classList.contains('rpgui-content')).toBe(true);
      expect(testElement.classList.contains('rpgui-cursors')).toBe(true);
      expect(testElement.classList.contains('scrollbar-rpg')).toBe(true);
      expect(container.element).toBe(testElement);
    });

    it('should not override existing role attribute', () => {
      testElement.setAttribute('role', 'main');
      enhanceAsContainer(testElement);
      expect(testElement.getAttribute('role')).toBe('main');
    });
  });

  describe('isContainer', () => {
    it('should return true for container elements', () => {
      const container = createContainer();
      expect(isContainer(container.element)).toBe(true);
    });

    it('should return false for non-container elements', () => {
      expect(isContainer(testElement)).toBe(false);
    });
  });

  describe('applyContainerStyles', () => {
    it('should apply container classes to an element', () => {
      applyContainerStyles(testElement);
      expect(testElement.classList.contains('rpgui-content')).toBe(true);
      expect(testElement.classList.contains('rpgui-cursors')).toBe(true);
      expect(testElement.classList.contains('scrollbar-rpg')).toBe(true);
    });

    it('should respect options', () => {
      applyContainerStyles(testElement, { cursors: false, scrollbars: false });
      expect(testElement.classList.contains('rpgui-content')).toBe(true);
      expect(testElement.classList.contains('rpgui-cursors')).toBe(false);
      expect(testElement.classList.contains('scrollbar-rpg')).toBe(false);
    });
  });

  describe('removeContainerStyles', () => {
    it('should remove all container classes', () => {
      applyContainerStyles(testElement);
      removeContainerStyles(testElement);
      expect(testElement.classList.contains('rpgui-content')).toBe(false);
      expect(testElement.classList.contains('rpgui-cursors')).toBe(false);
      expect(testElement.classList.contains('scrollbar-rpg')).toBe(false);
    });
  });

  describe('Component lifecycle', () => {
    it('should clean up on destroy', () => {
      const container = enhanceAsContainer(testElement);
      container.destroy();
      expect(testElement.classList.contains('rpgui-content')).toBe(false);
      expect(container.state.destroyed).toBe(true);
    });

    it('should update disabled state', () => {
      const container = createContainer();
      container.disable();
      expect(container.element.getAttribute('aria-disabled')).toBe('true');
      expect(container.element.classList.contains('disabled')).toBe(true);

      container.enable();
      expect(container.element.hasAttribute('aria-disabled')).toBe(false);
      expect(container.element.classList.contains('disabled')).toBe(false);
    });
  });
});
