/**
 * RPGUI Tailwind - Components
 *
 * Export all component implementations.
 */

// Container
export {
  createContainer,
  enhanceAsContainer,
  isContainer,
  applyContainerStyles,
  removeContainerStyles,
} from './Container';
export type { ContainerComponent, ContainerEvents } from './Container';

// Frame
export {
  createFrame,
  enhanceAsFrame,
  isFrame,
  getFrameVariant,
  applyFrameStyles,
  removeFrameStyles,
  setFrameVariant,
} from './Frame';
export type { FrameComponent, FrameEvents } from './Frame';
