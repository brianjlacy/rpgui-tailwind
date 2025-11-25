# RPGUI Tailwind - Project Specification

## Overview

Transform RPGUI (a retro RPG-style UI framework) into a modern Tailwind CSS UI Kit while preserving its distinctive pixel-art aesthetic and gaming-inspired design language. The new implementation will leverage Tailwind CSS utilities, modern JavaScript/TypeScript practices, and contemporary build tooling.

## Project Goals

1. **Preserve the RPGUI Aesthetic**: Maintain the retro RPG visual style including pixel-art graphics, fantasy-themed frames, and gaming UI elements
2. **Tailwind-Native Implementation**: Convert all styling to use Tailwind CSS utilities and custom theme extensions
3. **Modern Architecture**: Implement using TypeScript, modern ES modules, and contemporary build tools
4. **Component-Based Design**: Create reusable, composable UI components
5. **Framework-Agnostic**: Provide vanilla JavaScript/TypeScript components usable in any framework
6. **Developer Experience**: Include comprehensive documentation, Storybook demos, and type definitions

---

## Technical Stack

### Build & Development
- **Package Manager**: pnpm
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS v4
- **Language**: TypeScript
- **Documentation/Demos**: Storybook
- **Testing**: Vitest (unit), Playwright (E2E)
- **Linting**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged

### Output Formats
- ES Modules (primary)
- CommonJS (compatibility)
- UMD bundle (browser script tag)
- CSS file with Tailwind utilities
- TypeScript type definitions

---

## Component Inventory

All original RPGUI components must be converted to the new Tailwind-based system:

### Container Components
1. **Container** - Basic content wrapper
2. **Frame** - Decorative bordered container with multiple variants:
   - Default (grey/orange border)
   - Golden (fancy gold border)
   - Golden-2 (brighter gold variant)
   - Grey (subtle nested frame)
3. **Draggable Window** - Movable container with title bar

### Form Controls
4. **Button** - Clickable button with variants:
   - Default style
   - Golden style
   - Size variants (sm, md, lg)
   - States (hover, active, disabled)
5. **Checkbox** - Toggle input with variants:
   - Default style
   - Golden style
6. **Radio** - Radio button with variants:
   - Default style
   - Golden style
7. **Input** - Text input field
8. **Textarea** - Multi-line text input
9. **Slider** - Range input with variants:
   - Default style
   - Golden style
10. **Progress Bar** - Visual progress indicator with color variants:
    - Default (purple)
    - Red
    - Green
    - Blue

### Selection Components
11. **Dropdown** - Single-select dropdown
12. **List** - Multi-item selection list

### Typography
13. **Heading** - H1-H4 styled headings
14. **Paragraph** - Body text styling
15. **Link** - Anchor tag styling
16. **Label** - Form label styling

### Decorative Elements
17. **Divider** - Horizontal rule with variants:
    - Default
    - Golden
18. **Icon** - RPG-themed icon set (15 icons):
    - sword, shield, exclamation
    - potion-red, potion-green, potion-blue
    - weapon-slot, shield-slot, armor-slot, helmet-slot
    - ring-slot, potion-slot, magic-slot, shoes-slot, empty-slot

### Utility Features
19. **Custom Cursors** - RPG-themed cursor set:
    - default, point, select, grab-open, grab-close
20. **Scrollbar Styling** - Custom themed scrollbars

---

## Tailwind Configuration

### Custom Theme Extensions

The Tailwind configuration must include custom theme extensions for:

1. **Colors**: RPG-themed color palette
   - Primary colors (button backgrounds, borders)
   - Secondary colors (golden variants)
   - Text colors (white with shadow support)
   - Background colors (dark greys, browns)
   - Status colors (health red, mana blue, stamina green, experience purple)

2. **Fonts**:
   - Primary: "Press Start 2P" (retro pixel font)
   - Fallback: system monospace stack

3. **Border Images**: Custom border-image utilities for frame components

4. **Shadows**: Text-shadow utilities for pixel-art text outlines

5. **Animations**: Subtle animations for interactive states

6. **Spacing**: Consistent spacing scale for pixel-perfect layouts

### Custom Utilities

Create Tailwind plugins for:
- Pixelated image rendering
- Text outline/shadow effects
- Custom cursor classes
- Border-image frame effects

---

## Component Architecture

### Design Principles

1. **Semantic HTML**: Use appropriate HTML elements (button, input, select, etc.)
2. **Progressive Enhancement**: Components work without JavaScript where possible
3. **Accessibility**: ARIA attributes, keyboard navigation, screen reader support
4. **Customization**: CSS custom properties for easy theming
5. **Composition**: Smaller pieces combine into larger components

### Component Structure

Each component should include:
- TypeScript class/function implementation
- Tailwind utility classes for styling
- Event handling for interactivity
- Accessibility attributes
- Type definitions
- Unit tests
- Storybook stories

### API Design

Components should support:
- Factory function creation (e.g., `createButton(options)`)
- Direct DOM element enhancement (e.g., `enhanceButton(element)`)
- Event callbacks
- Programmatic value get/set
- Enable/disable toggling
- Destroy/cleanup methods

---

## Asset Management

### Images

All original image assets must be:
1. Preserved in their original pixel-art format
2. Organized in a logical directory structure
3. Referenced via Tailwind configuration or CSS custom properties
4. Optimized for web delivery

### Directory Structure

```
/assets
  /images
    /buttons
    /checkboxes
    /radios
    /frames
    /sliders
    /progress
    /dropdowns
    /dividers
    /scrollbars
    /cursors
    /icons
```

### Icon System

Implement icons using:
- CSS background images (original approach)
- Optional: SVG sprite sheet alternative
- Tailwind utility classes for sizing and positioning

---

## Build Output Structure

```
/dist
  /esm           # ES Module build
  /cjs           # CommonJS build
  /umd           # UMD browser bundle
  /types         # TypeScript declarations
  /css           # Compiled CSS
  /assets        # Static assets (images, fonts)
  index.js       # Main entry point
  index.css      # Complete stylesheet
```

---

## Documentation Requirements

### README.md
- Project overview and features
- Quick start guide
- Installation instructions (npm, CDN)
- Basic usage examples
- Link to full documentation

### Storybook
- Interactive component demos
- All variants and states
- Code examples
- Accessibility notes
- Customization options

### API Documentation
- Full API reference for each component
- TypeScript types documentation
- Event reference
- Theming guide

---

## Testing Requirements

### Unit Tests (Vitest)
- Component creation and initialization
- Property get/set operations
- Event handling
- State management
- Accessibility attributes

### E2E Tests (Playwright)
- User interactions (click, type, drag)
- Keyboard navigation
- Visual regression
- Cross-browser compatibility

### Coverage Targets
- Statements: 80%+
- Branches: 80%+
- Functions: 80%+
- Lines: 80%+

---

## Accessibility Requirements

All components must meet WCAG 2.1 AA standards:

1. **Keyboard Navigation**: Full keyboard operability
2. **Focus Management**: Visible focus indicators
3. **ARIA Labels**: Appropriate labeling for screen readers
4. **Color Contrast**: Sufficient contrast ratios (where retro aesthetic allows)
5. **Motion**: Respect reduced-motion preferences
6. **Semantic HTML**: Proper element usage

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

Note: Some pixel-art effects may degrade gracefully in older browsers.

---

## Package Distribution

### npm Package
- Package name: `rpgui-tailwind`
- Main entry: ES Module
- Exports map for different module formats
- Peer dependency on Tailwind CSS

### CDN
- UMD bundle for script tag inclusion
- Pre-built CSS file
- Asset files accessible via CDN

---

## Migration Considerations

### From Original RPGUI

Provide migration guide covering:
- Class name mappings (old to new)
- JavaScript API changes
- Breaking changes and alternatives
- Coexistence strategy (if applicable)

---

## Quality Standards

1. **No Build Warnings**: Zero warnings in production builds
2. **No Lint Errors**: Clean ESLint and TypeScript checks
3. **Type Safety**: Strict TypeScript configuration
4. **Documentation**: All public APIs documented
5. **Changelog**: Semantic versioning with detailed changelog

---

## Development Phases

### Phase 1: Project Foundation
- Initialize project with Vite, TypeScript, Tailwind
- Configure build pipeline
- Set up testing infrastructure
- Set up Storybook
- Configure linting and formatting

### Phase 2: Tailwind Theme
- Create custom color palette
- Configure typography (Press Start 2P font)
- Set up border-image utilities
- Create text-shadow utilities
- Configure custom cursors

### Phase 3: Core Components
- Container and Frame components
- Button component
- Input and Textarea components
- Typography components

### Phase 4: Form Components
- Checkbox component
- Radio component
- Slider component
- Progress Bar component

### Phase 5: Selection Components
- Dropdown component
- List component

### Phase 6: Decorative Elements
- Divider component
- Icon system
- Custom cursors
- Scrollbar styling

### Phase 7: Advanced Features
- Draggable Window component
- Component composition patterns
- Global state/theming

### Phase 8: Documentation & Polish
- Complete Storybook stories
- API documentation
- Migration guide
- Performance optimization
- Final testing and QA

---

## Success Criteria

The project is complete when:

1. All 20 component types are implemented and tested
2. Tailwind theme fully configured with RPGUI aesthetics
3. Storybook demonstrates all components and variants
4. Unit test coverage exceeds 80%
5. E2E tests pass for all interactive components
6. Documentation is complete and accurate
7. Build produces all required output formats
8. Package is publishable to npm
9. Zero lint errors or build warnings
10. Accessibility audit passes

---

## Constraints

1. **Preserve Original Aesthetics**: The visual style must remain faithful to the original RPGUI design
2. **No Framework Lock-in**: Must work with vanilla JavaScript; framework adapters are optional extras
3. **Tailwind Required**: Styling must use Tailwind utilities; no separate CSS files for component styles
4. **TypeScript Required**: All source code must be TypeScript
5. **Modern Standards**: ES2020+ JavaScript features, modern CSS features
