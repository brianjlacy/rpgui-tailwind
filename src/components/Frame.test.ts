/**
 * Frame Component Tests
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  createFrame,
  enhanceAsFrame,
  isFrame,
  getFrameVariant,
  applyFrameStyles,
  removeFrameStyles,
  setFrameVariant,
} from './Frame';

describe('Frame', () => {
  let testElement: HTMLDivElement;

  beforeEach(() => {
    testElement = document.createElement('div');
    document.body.appendChild(testElement);
  });

  afterEach(() => {
    testElement.remove();
  });

  describe('createFrame', () => {
    it('should create a frame element with default variant', () => {
      const frame = createFrame();
      expect(frame.element).toBeInstanceOf(HTMLDivElement);
      expect(frame.element.classList.contains('rpgui-frame')).toBe(true);
      expect(frame.element.classList.contains('border-frame')).toBe(true);
      expect(frame.element.classList.contains('bg-frame')).toBe(true);
      expect(frame.element.classList.contains('p-rpg-frame')).toBe(true);
    });

    it('should create a golden frame', () => {
      const frame = createFrame({ variant: 'golden' });
      expect(frame.element.classList.contains('border-frame-golden')).toBe(
        true
      );
      expect(frame.element.classList.contains('bg-frame-golden')).toBe(true);
      expect(frame.element.dataset['variant']).toBe('golden');
    });

    it('should create a golden2 frame', () => {
      const frame = createFrame({ variant: 'golden2' });
      expect(frame.element.classList.contains('border-frame-golden2')).toBe(
        true
      );
      expect(frame.element.classList.contains('bg-frame-golden2')).toBe(true);
      expect(frame.element.dataset['variant']).toBe('golden2');
    });

    it('should create a grey frame', () => {
      const frame = createFrame({ variant: 'grey' });
      expect(frame.element.classList.contains('border-frame-grey')).toBe(true);
      expect(frame.element.classList.contains('bg-frame-grey')).toBe(true);
      expect(frame.element.dataset['variant']).toBe('grey');
    });

    it('should create a frame without fill when specified', () => {
      const frame = createFrame({ fill: false });
      expect(frame.element.classList.contains('border-frame-no-fill')).toBe(
        true
      );
    });

    it('should apply custom className', () => {
      const frame = createFrame({ className: 'custom-class' });
      expect(frame.element.classList.contains('custom-class')).toBe(true);
    });

    it('should set aria-label when provided', () => {
      const frame = createFrame({ ariaLabel: 'Panel' });
      expect(frame.element.getAttribute('aria-label')).toBe('Panel');
    });

    it('should set role="group" by default', () => {
      const frame = createFrame();
      expect(frame.element.getAttribute('role')).toBe('group');
    });

    it('should have box-sizing border-box', () => {
      const frame = createFrame();
      expect(frame.element.style.boxSizing).toBe('border-box');
    });
  });

  describe('enhanceAsFrame', () => {
    it('should enhance an existing element as a frame', () => {
      const frame = enhanceAsFrame(testElement);
      expect(testElement.classList.contains('rpgui-frame')).toBe(true);
      expect(testElement.classList.contains('border-frame')).toBe(true);
      expect(frame.element).toBe(testElement);
    });

    it('should apply specified variant', () => {
      enhanceAsFrame(testElement, { variant: 'golden' });
      expect(testElement.classList.contains('border-frame-golden')).toBe(true);
    });

    it('should not override existing role attribute', () => {
      testElement.setAttribute('role', 'dialog');
      enhanceAsFrame(testElement);
      expect(testElement.getAttribute('role')).toBe('dialog');
    });
  });

  describe('isFrame', () => {
    it('should return true for frame elements', () => {
      const frame = createFrame();
      expect(isFrame(frame.element)).toBe(true);
    });

    it('should return false for non-frame elements', () => {
      expect(isFrame(testElement)).toBe(false);
    });
  });

  describe('getFrameVariant', () => {
    it('should return the variant of a frame', () => {
      const frame = createFrame({ variant: 'golden' });
      expect(getFrameVariant(frame.element)).toBe('golden');
    });

    it('should return default for frames without explicit variant', () => {
      const frame = createFrame();
      expect(getFrameVariant(frame.element)).toBe('default');
    });

    it('should return null for non-frame elements', () => {
      expect(getFrameVariant(testElement)).toBeNull();
    });
  });

  describe('applyFrameStyles', () => {
    it('should apply default frame styles', () => {
      applyFrameStyles(testElement);
      expect(testElement.classList.contains('rpgui-frame')).toBe(true);
      expect(testElement.classList.contains('border-frame')).toBe(true);
      expect(testElement.classList.contains('bg-frame')).toBe(true);
    });

    it('should apply variant styles', () => {
      applyFrameStyles(testElement, { variant: 'grey' });
      expect(testElement.classList.contains('border-frame-grey')).toBe(true);
      expect(testElement.classList.contains('bg-frame-grey')).toBe(true);
    });

    it('should apply no-fill modifier', () => {
      applyFrameStyles(testElement, { fill: false });
      expect(testElement.classList.contains('border-frame-no-fill')).toBe(true);
    });
  });

  describe('removeFrameStyles', () => {
    it('should remove all frame styles', () => {
      applyFrameStyles(testElement, { variant: 'golden' });
      removeFrameStyles(testElement);
      expect(testElement.classList.contains('rpgui-frame')).toBe(false);
      expect(testElement.classList.contains('border-frame-golden')).toBe(false);
      expect(testElement.classList.contains('bg-frame-golden')).toBe(false);
    });
  });

  describe('setFrameVariant', () => {
    it('should change frame variant', () => {
      const frame = createFrame({ variant: 'default' });
      setFrameVariant(frame.element, 'golden');
      expect(frame.element.classList.contains('border-frame-golden')).toBe(
        true
      );
      expect(frame.element.classList.contains('border-frame')).toBe(false);
    });

    it('should not change if same variant', () => {
      const frame = createFrame({ variant: 'golden' });
      setFrameVariant(frame.element, 'golden');
      expect(frame.element.classList.contains('border-frame-golden')).toBe(
        true
      );
    });

    it('should do nothing for non-frame elements', () => {
      setFrameVariant(testElement, 'golden');
      expect(testElement.classList.contains('border-frame-golden')).toBe(false);
    });
  });

  describe('Component lifecycle', () => {
    it('should clean up on destroy', () => {
      const frame = enhanceAsFrame(testElement, { variant: 'golden' });
      frame.destroy();
      expect(testElement.classList.contains('rpgui-frame')).toBe(false);
      expect(testElement.classList.contains('border-frame-golden')).toBe(false);
      expect(testElement.dataset['variant']).toBeUndefined();
    });
  });
});
