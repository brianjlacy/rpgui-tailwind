/**
 * RPGUI Asset Manifest
 *
 * This file provides type-safe references to all image assets.
 * Assets are served from the /assets directory.
 */

// Asset path prefix
const ASSET_BASE = '/images';

/**
 * Button assets
 */
export const buttonAssets = {
  default: `${ASSET_BASE}/buttons/button.png`,
  hover: `${ASSET_BASE}/buttons/button-hover.png`,
  down: `${ASSET_BASE}/buttons/button-down.png`,
  background: `${ASSET_BASE}/buttons/button-background.png`,
  golden: `${ASSET_BASE}/buttons/button-golden.png`,
  goldenHover: `${ASSET_BASE}/buttons/button-golden-hover.png`,
  goldenDown: `${ASSET_BASE}/buttons/button-golden-down.png`,
  goldenLeft: `${ASSET_BASE}/buttons/button-golden-left.png`,
  goldenRight: `${ASSET_BASE}/buttons/button-golden-right.png`,
} as const;

/**
 * Checkbox assets
 */
export const checkboxAssets = {
  off: `${ASSET_BASE}/checkboxes/checkbox-off.png`,
  on: `${ASSET_BASE}/checkboxes/checkbox-on.png`,
  goldenOff: `${ASSET_BASE}/checkboxes/checkbox-golden-off.png`,
  goldenOn: `${ASSET_BASE}/checkboxes/checkbox-golden-on.png`,
} as const;

/**
 * Radio button assets
 */
export const radioAssets = {
  off: `${ASSET_BASE}/radios/radio-off.png`,
  on: `${ASSET_BASE}/radios/radio-on.png`,
  goldenOff: `${ASSET_BASE}/radios/radio-golden-off.png`,
  goldenOn: `${ASSET_BASE}/radios/radio-golden-on.png`,
} as const;

/**
 * Frame/container assets
 */
export const frameAssets = {
  background: `${ASSET_BASE}/frames/background-image.png`,
  border: `${ASSET_BASE}/frames/border-image.png`,
  backgroundGolden: `${ASSET_BASE}/frames/background-image-golden.png`,
  borderGolden: `${ASSET_BASE}/frames/border-image-golden.png`,
  backgroundGolden2: `${ASSET_BASE}/frames/background-image-golden2.png`,
  borderGolden2: `${ASSET_BASE}/frames/border-image-golden2.png`,
  backgroundGrey: `${ASSET_BASE}/frames/background-image-grey.png`,
  borderGrey: `${ASSET_BASE}/frames/border-image-grey.png`,
} as const;

/**
 * Slider assets
 */
export const sliderAssets = {
  track: `${ASSET_BASE}/sliders/slider-track.png`,
  thumb: `${ASSET_BASE}/sliders/slider-thumb.png`,
  left: `${ASSET_BASE}/sliders/slider-left.png`,
  right: `${ASSET_BASE}/sliders/slider-right.png`,
  trackGolden: `${ASSET_BASE}/sliders/slider-track-golden.png`,
  thumbGolden: `${ASSET_BASE}/sliders/slider-thumb-golden.png`,
  leftGolden: `${ASSET_BASE}/sliders/slider-left-golden.png`,
  rightGolden: `${ASSET_BASE}/sliders/slider-right-golden.png`,
} as const;

/**
 * Progress bar assets
 */
export const progressAssets = {
  track: `${ASSET_BASE}/progress/progress-bar-track.png`,
  left: `${ASSET_BASE}/progress/progress-bar-left.png`,
  right: `${ASSET_BASE}/progress/progress-bar-right.png`,
  fill: `${ASSET_BASE}/progress/progress.png`,
  fillRed: `${ASSET_BASE}/progress/progress-red.png`,
  fillGreen: `${ASSET_BASE}/progress/progress-green.png`,
  fillBlue: `${ASSET_BASE}/progress/progress-blue.png`,
} as const;

/**
 * Dropdown/select assets
 */
export const dropdownAssets = {
  background: `${ASSET_BASE}/dropdowns/select-background-image.png`,
  border: `${ASSET_BASE}/dropdowns/select-border-image.png`,
} as const;

/**
 * Divider/hr assets
 */
export const dividerAssets = {
  default: `${ASSET_BASE}/dividers/hr.png`,
  golden: `${ASSET_BASE}/dividers/hr-golden.png`,
} as const;

/**
 * Scrollbar assets
 */
export const scrollbarAssets = {
  track: `${ASSET_BASE}/scrollbars/scrollbar-track.png`,
  thumb: `${ASSET_BASE}/scrollbars/scrollbar-thumb.png`,
  button: `${ASSET_BASE}/scrollbars/scrollbar-button.png`,
} as const;

/**
 * Cursor assets
 */
export const cursorAssets = {
  default: `${ASSET_BASE}/cursor/default.png`,
  point: `${ASSET_BASE}/cursor/point.png`,
  select: `${ASSET_BASE}/cursor/select.png`,
  grabOpen: `${ASSET_BASE}/cursor/grab-open.png`,
  grabClose: `${ASSET_BASE}/cursor/grab-close.png`,
  cursorFile: `${ASSET_BASE}/cursor/cursor.cur`,
} as const;

/**
 * Icon assets
 */
export const iconAssets = {
  sword: `${ASSET_BASE}/icons/sword.png`,
  shield: `${ASSET_BASE}/icons/shield.png`,
  exclamation: `${ASSET_BASE}/icons/exclamation.png`,
  potionRed: `${ASSET_BASE}/icons/potion-red.png`,
  potionGreen: `${ASSET_BASE}/icons/potion-green.png`,
  potionBlue: `${ASSET_BASE}/icons/potion-blue.png`,
  weaponSlot: `${ASSET_BASE}/icons/weapon-slot.png`,
  shieldSlot: `${ASSET_BASE}/icons/shield-slot.png`,
  armorSlot: `${ASSET_BASE}/icons/armor-slot.png`,
  helmetSlot: `${ASSET_BASE}/icons/helmet-slot.png`,
  ringSlot: `${ASSET_BASE}/icons/ring-slot.png`,
  potionSlot: `${ASSET_BASE}/icons/potion-slot.png`,
  magicSlot: `${ASSET_BASE}/icons/magic-slot.png`,
  shoesSlot: `${ASSET_BASE}/icons/shoes-slot.png`,
  emptySlot: `${ASSET_BASE}/icons/empty-slot.png`,
} as const;

/**
 * All assets combined
 */
export const assets = {
  buttons: buttonAssets,
  checkboxes: checkboxAssets,
  radios: radioAssets,
  frames: frameAssets,
  sliders: sliderAssets,
  progress: progressAssets,
  dropdowns: dropdownAssets,
  dividers: dividerAssets,
  scrollbars: scrollbarAssets,
  cursors: cursorAssets,
  icons: iconAssets,
} as const;

export default assets;
