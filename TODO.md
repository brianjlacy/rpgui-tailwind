# RPGUI Tailwind - Project TODO

This document tracks all phases and tasks for converting RPGUI to a Tailwind CSS UI Kit.

---

## [✅] Phase 1: Project Foundation

### [✅] Task 1.1: Initialize Project Structure
- Remove old build system files (gulpfile.js, bower.json, old package.json)
- Create new pnpm-based project with package.json
- Set up project directory structure:
  - `/src` - Source code
  - `/src/components` - Component implementations
  - `/src/styles` - Tailwind styles and plugins
  - `/src/utils` - Utility functions
  - `/src/types` - TypeScript type definitions
  - `/assets` - Static assets (images, fonts)
  - `/dist` - Build output (gitignored)

### [✅] Task 1.2: Configure TypeScript
- Create tsconfig.json with strict mode enabled
- Configure path aliases for clean imports
- Set up declaration file generation
- Configure ES2020+ target

### [✅] Task 1.3: Configure Vite Build System
- Create vite.config.ts
- Configure library mode for component builds
- Set up multiple output formats (ESM, CJS, UMD)
- Configure asset handling for images
- Set up development server

### [✅] Task 1.4: Configure Tailwind CSS v4
- Install Tailwind CSS v4 and dependencies
- Create tailwind.config.ts
- Set up PostCSS configuration
- Create base CSS entry point

### [✅] Task 1.5: Configure ESLint and Prettier
- Install ESLint with TypeScript support
- Create .eslintrc.cjs with strict rules
- Create .prettierrc with formatting rules
- Add lint-staged configuration

### [✅] Task 1.6: Configure Testing Infrastructure
- Install and configure Vitest for unit tests
- Install and configure Playwright for E2E tests
- Create test setup files
- Configure coverage reporting

### [✅] Task 1.7: Configure Storybook
- Install Storybook with Vite builder
- Configure for TypeScript and Tailwind
- Create Storybook theme matching RPGUI aesthetic
- Set up story organization structure

### [✅] Task 1.8: Configure Git Hooks
- Install Husky
- Set up pre-commit hook for lint-staged
- Set up pre-push hook for tests
- Create .gitignore for new structure

### [✅] Task 1.9: Organize Asset Files
- Move image assets to /assets/images with organized subdirectories
- Preserve original pixel-art images
- Create asset manifest/index for easy importing
- Verify all 71 image assets are accounted for

---

## [ ] Phase 2: Tailwind Theme Configuration

### [✅] Task 2.1: Define Color Palette
- Create RPG-themed color tokens
- Define primary colors (borders, backgrounds)
- Define golden variant colors
- Define status colors (health, mana, stamina, experience)
- Define text colors with shadow support

### [✅] Task 2.2: Configure Typography
- Set up "Press Start 2P" font import
- Create fallback font stack
- Define font size scale appropriate for pixel font
- Configure line heights for pixel-perfect rendering

### [✅] Task 2.3: Create Text Shadow Utilities
- Create Tailwind plugin for text-shadow utilities
- Implement pixel-art text outline effect
- Support multiple shadow colors
- Add responsive variants

### [ ] Task 2.4: Create Border Image Utilities
- Create Tailwind plugin for border-image support
- Configure frame border images (default, golden, golden-2, grey)
- Support border-image-slice configurations
- Create utility classes for each frame variant

### [ ] Task 2.5: Create Custom Cursor Utilities
- Create Tailwind plugin for custom cursors
- Configure all 5 cursor types (default, point, select, grab-open, grab-close)
- Set up cursor image paths
- Create cursor utility classes

### [ ] Task 2.6: Create Pixelated Rendering Utility
- Create utility for image-rendering: pixelated
- Support for crisp-edges fallback
- Apply to all RPG assets by default

### [ ] Task 2.7: Configure Spacing and Sizing
- Define spacing scale for pixel-perfect layouts
- Configure component sizing defaults
- Set up container max-widths
- Define icon sizes

### [ ] Task 2.8: Create Scrollbar Styling
- Create Tailwind plugin for custom scrollbars
- Style scrollbar track with RPG theme
- Style scrollbar thumb with RPG theme
- Support webkit and Firefox scrollbar styling

---

## [ ] Phase 3: Core Component Infrastructure

### [ ] Task 3.1: Create Component Base Utilities
- Create base component creation utilities
- Implement element enhancement pattern
- Create event handling utilities
- Set up component lifecycle management

### [ ] Task 3.2: Create Type Definitions
- Define common component interfaces
- Create event type definitions
- Define option/config types for each component
- Export all types from central location

### [ ] Task 3.3: Implement Container Component
- Create Container component class/function
- Apply Tailwind base styles
- Support content wrapping
- Add unit tests
- Create Storybook story

### [ ] Task 3.4: Implement Frame Component
- Create Frame component with border-image styling
- Implement all 4 variants (default, golden, golden-2, grey)
- Support nested frames
- Add unit tests
- Create Storybook stories for all variants

### [ ] Task 3.5: Implement Button Component
- Create Button component with all states
- Implement default and golden variants
- Implement size variants (sm, md, lg)
- Handle disabled state with proper styling
- Add ARIA attributes for accessibility
- Add unit tests
- Create Storybook stories

### [ ] Task 3.6: Implement Input Component
- Create Input component for text fields
- Apply RPG styling (dark background, white text)
- Support placeholder styling
- Handle disabled and readonly states
- Add ARIA attributes
- Add unit tests
- Create Storybook story

### [ ] Task 3.7: Implement Textarea Component
- Create Textarea component
- Apply consistent styling with Input
- Support resize behavior configuration
- Handle disabled and readonly states
- Add unit tests
- Create Storybook story

---

## [ ] Phase 4: Form Components

### [ ] Task 4.1: Implement Checkbox Component
- Create Checkbox component with custom styling
- Implement default and golden variants
- Hide native checkbox, use label for visuals
- Handle checked/unchecked states
- Support disabled state
- Add keyboard accessibility
- Add unit tests
- Create Storybook stories

### [ ] Task 4.2: Implement Radio Component
- Create Radio component with custom styling
- Implement default and golden variants
- Handle radio group behavior
- Support disabled state
- Add keyboard accessibility
- Add unit tests
- Create Storybook stories

### [ ] Task 4.3: Implement Slider Component
- Create Slider component with custom track and thumb
- Implement default and golden variants
- Create visual elements (track, left edge, right edge, thumb)
- Handle mouse/touch interactions for value changes
- Support min, max, step attributes
- Handle disabled state
- Add ARIA slider attributes
- Add unit tests
- Create Storybook stories

### [ ] Task 4.4: Implement Progress Bar Component
- Create Progress Bar component
- Implement all color variants (default/purple, red, green, blue)
- Create visual elements (track, edges, fill)
- Support programmatic value setting (0-1 or 0-100)
- Add ARIA progressbar attributes
- Add unit tests
- Create Storybook stories

---

## [ ] Phase 5: Selection Components

### [ ] Task 5.1: Implement Dropdown Component
- Create Dropdown component from native select
- Create custom visual overlay (header, list)
- Handle open/close behavior
- Support option rendering
- Handle selection changes
- Support disabled state
- Add keyboard navigation
- Add ARIA combobox attributes
- Add unit tests
- Create Storybook story

### [ ] Task 5.2: Implement List Component
- Create List component for multi-item display
- Support scrollable list with custom scrollbars
- Handle item selection
- Support single and multi-select modes
- Handle disabled state
- Add keyboard navigation
- Add ARIA listbox attributes
- Add unit tests
- Create Storybook story

---

## [ ] Phase 6: Typography and Decorative Elements

### [ ] Task 6.1: Implement Heading Components
- Create styled H1-H4 components
- Apply pixel font styling
- Apply text shadow/outline effect
- Support size customization
- Add unit tests
- Create Storybook stories

### [ ] Task 6.2: Implement Paragraph and Text Components
- Create Paragraph component
- Create Label component
- Create Link component with yellow color and hover underline
- Apply consistent typography styling
- Add unit tests
- Create Storybook stories

### [ ] Task 6.3: Implement Divider Component
- Create Divider (horizontal rule) component
- Implement default and golden variants
- Use divider images for styling
- Support custom width
- Add unit tests
- Create Storybook stories

### [ ] Task 6.4: Implement Icon System
- Create Icon component
- Support all 15 RPG icons
- Implement size variants
- Create icon lookup/mapping utility
- Add unit tests
- Create Storybook story with all icons

---

## [ ] Phase 7: Advanced Features

### [ ] Task 7.1: Implement Draggable Window Component
- Create DraggableWindow component extending Frame
- Add title bar for drag handle
- Implement mouse drag behavior
- Handle z-index layering
- Support close button (optional)
- Add keyboard accessibility for focus
- Add unit tests
- Create Storybook story

### [ ] Task 7.2: Create Component Composition Utilities
- Document composition patterns
- Create compound component examples
- Support render prop patterns where useful
- Add integration tests for composed components

### [ ] Task 7.3: Implement Global Theming System
- Create CSS custom properties for theming
- Support runtime theme switching
- Document theming API
- Create theme customization examples
- Add Storybook story for theming

---

## [ ] Phase 8: Build and Distribution

### [ ] Task 8.1: Configure Production Build
- Optimize Vite build for production
- Configure tree-shaking
- Set up code splitting where appropriate
- Minify CSS and JS outputs
- Generate source maps

### [ ] Task 8.2: Generate Type Declarations
- Configure TypeScript declaration output
- Ensure all public APIs have types
- Create bundled .d.ts files
- Test type imports in consuming project

### [ ] Task 8.3: Create UMD Bundle
- Configure UMD output for browser script tag usage
- Create global RPGUI namespace
- Include all components in bundle
- Test in browser without bundler

### [ ] Task 8.4: Prepare npm Package
- Configure package.json exports map
- Set up peer dependencies
- Create .npmignore
- Add package metadata (keywords, repository, etc.)
- Test local npm pack

### [ ] Task 8.5: Create CDN-Ready Distribution
- Prepare standalone CSS file
- Prepare standalone JS bundle
- Ensure assets are CDN-accessible
- Document CDN usage

---

## [ ] Phase 9: Documentation and Examples

### [ ] Task 9.1: Update README.md
- Write project overview
- Add installation instructions (npm, pnpm, CDN)
- Add quick start guide
- Add basic usage examples
- Add links to full documentation

### [ ] Task 9.2: Complete Storybook Documentation
- Ensure all components have stories
- Add MDX documentation pages
- Include code examples
- Document accessibility features
- Add customization examples

### [ ] Task 9.3: Create API Reference Documentation
- Document all component APIs
- Document all utility functions
- Document TypeScript types
- Create searchable API reference

### [ ] Task 9.4: Create Migration Guide
- Document class name mappings from original RPGUI
- Document JavaScript API changes
- List breaking changes
- Provide migration code examples

### [ ] Task 9.5: Create Theming Guide
- Document CSS custom properties
- Provide theme customization examples
- Show how to create custom color schemes
- Document font customization

---

## [ ] Phase 10: Testing and Quality Assurance

### [ ] Task 10.1: Achieve Unit Test Coverage Targets
- Ensure >80% statement coverage
- Ensure >80% branch coverage
- Ensure >80% function coverage
- Review and improve test quality

### [ ] Task 10.2: Complete E2E Test Suite
- Test all interactive components with Playwright
- Test keyboard navigation
- Test drag interactions
- Test across multiple browsers

### [ ] Task 10.3: Perform Accessibility Audit
- Run automated accessibility testing
- Test with screen readers
- Verify keyboard navigation throughout
- Document accessibility features

### [ ] Task 10.4: Perform Visual Regression Testing
- Set up visual regression testing
- Capture baseline screenshots
- Test all component variants
- Test responsive behavior

### [ ] Task 10.5: Final Build Verification
- Verify zero lint errors
- Verify zero build warnings
- Verify all tests pass
- Verify package can be installed and used
- Test in sample projects

---

## [ ] Phase 11: Release Preparation

### [ ] Task 11.1: Version and Changelog
- Set initial version (1.0.0)
- Create CHANGELOG.md in /_docs
- Document all features
- Prepare release notes

### [ ] Task 11.2: CI/CD Configuration
- Create GitHub Actions workflow
- Configure automated testing
- Configure automated builds
- Set up npm publish workflow

### [ ] Task 11.3: Final Review and Polish
- Code review all components
- Review all documentation
- Test complete user journey
- Address any remaining issues

### [ ] Task 11.4: Publish Initial Release
- Tag release in git
- Publish to npm
- Deploy Storybook documentation
- Announce release

---

## Notes

- Tasks should be completed in order within each phase
- Each task must pass linting, build, and tests before completion
- All changes must be committed and pushed before marking complete
- Review INSTRUCTIONS.md after each task completion
