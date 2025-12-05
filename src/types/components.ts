/**
 * RPGUI Component Type Definitions
 *
 * Common interfaces and types for all RPGUI components.
 */

// ============================================
// Base Component Types
// ============================================

/**
 * Available component variants
 */
export type ComponentVariant = 'default' | 'golden' | 'golden2' | 'grey';

/**
 * Common component size variants
 */
export type ComponentSize = 'sm' | 'md' | 'lg';

/**
 * Base options shared by all components
 */
export interface BaseComponentOptions {
  /** Additional CSS classes to apply */
  className?: string;
  /** Component visual variant */
  variant?: ComponentVariant;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Custom data attributes */
  data?: Record<string, string>;
  /** Accessibility label */
  ariaLabel?: string;
}

// ============================================
// Container & Frame Types
// ============================================

/**
 * Container component options
 */
export interface ContainerOptions extends BaseComponentOptions {
  /** Whether to apply RPGUI cursors */
  cursors?: boolean;
  /** Whether to apply custom scrollbars */
  scrollbars?: boolean;
}

/**
 * Frame component options
 */
export interface FrameOptions extends BaseComponentOptions {
  /** Frame variant style */
  variant?: ComponentVariant;
  /** Whether to include border fill (background from border image) */
  fill?: boolean;
}

// ============================================
// Button Types
// ============================================

/**
 * Button component options
 */
export interface ButtonOptions extends BaseComponentOptions {
  /** Button size variant */
  size?: ComponentSize;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Whether button is in loading state */
  loading?: boolean;
  /** Icon to display (if any) */
  icon?: string;
  /** Icon position relative to text */
  iconPosition?: 'left' | 'right';
}

/**
 * Button event data
 */
export interface ButtonEvents {
  click: { originalEvent: MouseEvent };
  focus: { originalEvent: FocusEvent };
  blur: { originalEvent: FocusEvent };
}

// ============================================
// Input Types
// ============================================

/**
 * Text input component options
 */
export interface InputOptions extends BaseComponentOptions {
  /** Input type */
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';
  /** Placeholder text */
  placeholder?: string;
  /** Whether input is readonly */
  readonly?: boolean;
  /** Maximum length */
  maxLength?: number;
  /** Minimum length */
  minLength?: number;
  /** Input pattern for validation */
  pattern?: string;
  /** Whether input is required */
  required?: boolean;
  /** Autocomplete attribute */
  autocomplete?: string;
}

/**
 * Input event data
 */
export interface InputEvents {
  change: { value: string; originalEvent: Event };
  input: { value: string; originalEvent: Event };
  focus: { originalEvent: FocusEvent };
  blur: { originalEvent: FocusEvent };
}

/**
 * Textarea component options
 */
export interface TextareaOptions extends BaseComponentOptions {
  /** Placeholder text */
  placeholder?: string;
  /** Whether textarea is readonly */
  readonly?: boolean;
  /** Number of visible rows */
  rows?: number;
  /** Number of visible columns */
  cols?: number;
  /** Maximum length */
  maxLength?: number;
  /** Whether textarea is required */
  required?: boolean;
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

// ============================================
// Checkbox & Radio Types
// ============================================

/**
 * Checkbox component options
 */
export interface CheckboxOptions extends BaseComponentOptions {
  /** Whether checkbox is checked */
  checked?: boolean;
  /** Checkbox name attribute */
  name?: string;
  /** Checkbox value */
  value?: string;
  /** Whether checkbox is in indeterminate state */
  indeterminate?: boolean;
}

/**
 * Checkbox event data
 */
export interface CheckboxEvents {
  change: { checked: boolean; originalEvent: Event };
}

/**
 * Radio component options
 */
export interface RadioOptions extends BaseComponentOptions {
  /** Whether radio is checked */
  checked?: boolean;
  /** Radio name attribute (groups radios) */
  name: string;
  /** Radio value */
  value: string;
}

/**
 * Radio event data
 */
export interface RadioEvents {
  change: { checked: boolean; value: string; originalEvent: Event };
}

// ============================================
// Slider Types
// ============================================

/**
 * Slider component options
 */
export interface SliderOptions extends BaseComponentOptions {
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Current value */
  value?: number;
  /** Step increment */
  step?: number;
  /** Slider name attribute */
  name?: string;
}

/**
 * Slider event data
 */
export interface SliderEvents {
  change: { value: number; normalized: number; originalEvent: Event };
  input: { value: number; normalized: number; originalEvent: Event };
}

// ============================================
// Progress Bar Types
// ============================================

/**
 * Progress bar color variants
 */
export type ProgressBarColor = 'purple' | 'red' | 'green' | 'blue';

/**
 * Progress bar component options
 */
export interface ProgressBarOptions extends BaseComponentOptions {
  /** Current progress value (0-100 or 0-1 based on normalized) */
  value?: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Progress bar color variant */
  color?: ProgressBarColor;
  /** Whether to show percentage label */
  showLabel?: boolean;
  /** Custom label format function */
  formatLabel?: (value: number, max: number) => string;
}

/**
 * Progress bar event data
 */
export interface ProgressBarEvents {
  change: { value: number; percentage: number };
}

// ============================================
// Dropdown & List Types
// ============================================

/**
 * Dropdown option item
 */
export interface DropdownOption {
  /** Display label */
  label: string;
  /** Option value */
  value: string;
  /** Whether option is disabled */
  disabled?: boolean;
  /** Optional group label */
  group?: string;
}

/**
 * Dropdown component options
 */
export interface DropdownOptions extends BaseComponentOptions {
  /** Available options */
  options?: DropdownOption[];
  /** Currently selected value */
  value?: string;
  /** Placeholder text when no selection */
  placeholder?: string;
  /** Dropdown name attribute */
  name?: string;
  /** Whether dropdown is required */
  required?: boolean;
}

/**
 * Dropdown event data
 */
export interface DropdownEvents {
  change: {
    value: string;
    label: string;
    option: DropdownOption;
    originalEvent: Event;
  };
  open: Record<string, never>;
  close: Record<string, never>;
}

/**
 * List item
 */
export interface ListItem {
  /** Display content */
  label: string;
  /** Item value/id */
  value: string;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Optional icon */
  icon?: string;
  /** Custom data */
  data?: Record<string, unknown>;
}

/**
 * List selection mode
 */
export type ListSelectionMode = 'single' | 'multiple' | 'none';

/**
 * List component options
 */
export interface ListOptions extends BaseComponentOptions {
  /** List items */
  items?: ListItem[];
  /** Selection mode */
  selectionMode?: ListSelectionMode;
  /** Currently selected value(s) */
  value?: string | string[];
  /** Maximum visible items before scrolling */
  maxVisibleItems?: number;
}

/**
 * List event data
 */
export interface ListEvents {
  select: {
    value: string | string[];
    items: ListItem[];
    originalEvent: Event;
  };
  itemClick: { item: ListItem; originalEvent: MouseEvent };
}

// ============================================
// Typography Types
// ============================================

/**
 * Heading level
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Heading component options
 */
export interface HeadingOptions extends BaseComponentOptions {
  /** Heading level (h1-h6) */
  level?: HeadingLevel;
  /** Whether to apply text outline */
  outline?: boolean;
}

/**
 * Text component options
 */
export interface TextOptions extends BaseComponentOptions {
  /** Whether to apply text outline */
  outline?: boolean;
  /** Text color variant */
  color?: 'default' | 'muted' | 'link';
}

/**
 * Link component options
 */
export interface LinkOptions extends BaseComponentOptions {
  /** Link URL */
  href: string;
  /** Link target */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /** Link rel attribute */
  rel?: string;
}

// ============================================
// Divider Types
// ============================================

/**
 * Divider component options
 */
export interface DividerOptions extends BaseComponentOptions {
  /** Divider variant */
  variant?: 'default' | 'golden';
  /** Custom width */
  width?: string;
}

// ============================================
// Icon Types
// ============================================

/**
 * Available RPGUI icons
 */
export type IconName =
  | 'sword'
  | 'shield'
  | 'exclamation'
  | 'potion-red'
  | 'potion-green'
  | 'potion-blue'
  | 'weapon-slot'
  | 'shield-slot'
  | 'armor-slot'
  | 'helmet-slot'
  | 'ring-slot'
  | 'potion-slot'
  | 'magic-slot'
  | 'shoes-slot'
  | 'empty-slot';

/**
 * Icon component options
 */
export interface IconOptions extends BaseComponentOptions {
  /** Icon name */
  name: IconName;
  /** Icon size */
  size?: ComponentSize | 'xs' | 'xl';
  /** Accessibility label */
  ariaLabel?: string;
}

// ============================================
// Cursor Types
// ============================================

/**
 * Available RPGUI cursor types
 */
export type CursorType = 'default' | 'point' | 'select' | 'grab' | 'grabbing';

// ============================================
// Window Types
// ============================================

/**
 * Draggable window component options
 */
export interface WindowOptions extends FrameOptions {
  /** Window title */
  title?: string;
  /** Whether window is draggable */
  draggable?: boolean;
  /** Whether to show close button */
  closable?: boolean;
  /** Initial position */
  position?: { x: number; y: number };
  /** Initial z-index */
  zIndex?: number;
}

/**
 * Window event data
 */
export interface WindowEvents {
  dragStart: { position: { x: number; y: number } };
  drag: { position: { x: number; y: number }; delta: { x: number; y: number } };
  dragEnd: { position: { x: number; y: number } };
  close: Record<string, never>;
  focus: Record<string, never>;
}

// ============================================
// Theme Types
// ============================================

/**
 * RPGUI theme configuration
 */
export interface ThemeConfig {
  /** Primary color */
  primaryColor?: string;
  /** Golden accent color */
  goldenColor?: string;
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  textColor?: string;
  /** Custom font family */
  fontFamily?: string;
  /** Custom font size */
  fontSize?: string;
}

// ============================================
// Utility Types
// ============================================

/**
 * Make all properties of T optional and allow undefined
 */
export type PartialWithUndefined<T> = {
  [P in keyof T]?: T[P] | undefined;
};

/**
 * Extract the element type from a component
 */
export type ComponentElement<T> = T extends { element: infer E } ? E : never;

/**
 * Extract events type from a component
 */
export type ComponentEvents<T> = T extends {
  on: (type: infer K, listener: (data: infer D) => void) => unknown;
}
  ? Record<string & K, D>
  : never;
