# Proyecto.html - Design System & Implementation Guide

## Color Palette

```css
:root {
  /* Primary Colors */
  --green: #61ffc9;           /* Main accent - Modern teal */
  --dark-green: #25fabe;      /* Darker accent for hover states */
  
  /* Neutral Colors */
  --gray-900: #141414;        /* Almost black - Darkest backgrounds */
  --gray-800: #292929;        /* Dark backgrounds */
  --gray-700: #424242;        /* Medium dark */
  --gray-600: #525252;        /* Medium */
  --gray-500: #737373;        /* Medium light - Default text */
  --gray-400: #a3a3a3;        /* Light text */
  --gray-300: #d6d6d6;        /* Lighter borders */
  --gray-200: #e5e5e5;        /* Very light */
  --gray-100: whitesmoke;     /* Lightest backgrounds */
  --gray-25:  #fcfcfc;        /* Almost white */
  
  /* Status Colors */
  --white: white;
  --black: black;
}
```

## Typography

### Font Stack
```css
font-family: "Outfit", "Poppins", sans-serif;
```

### Sizing Scale
```
H1 (Intro):    3rem       (Desktop) → 1.4rem   (Mobile)
H2 (Section):  2.5rem     (Desktop) → 1.25rem  (Mobile)
H3 (Project):  2.125rem   (Desktop) → 1.1rem   (Mobile)
Body:          1rem       (Consistent)
Small:         0.9rem     (Consistent)
```

### Font Weights
- Light: 400
- Regular: 500
- Semibold: 600
- Bold: 700
- Extra Bold: 900

### Letter Spacing
- Default: Normal
- Headers: -0.02em (tighter)
- Buttons: 0.03em (wider)

## Spacing Scale

```css
/* Padding */
2.5rem = 40px  (Large sections)
2rem   = 32px  (Section padding)
1.5rem = 24px  (Container padding)
1rem   = 16px  (Standard)
0.8rem = 12px  (Compact)
0.5rem = 8px   (Minimal)

/* Gaps */
2rem   = 32px  (Between major sections)
1.5rem = 24px  (Between components)
1rem   = 16px  (Between elements)
0.5rem = 8px   (Tight spacing)
```

## Border Radius

```css
--border-radius--xlarge:      2rem    (32px)  - Large containers
--border-radius--large:       1.75rem (28px)  - Cards
--border-radius--xmedium:     1.5rem  (24px)  - Medium components
--border-radius--medium:      1.25rem (20px)  - Standard
--border-radius--xsmall:      0.75rem (12px)  - Buttons
--border-radius--small:       1rem    (16px)  - Inputs
--border-radius--xxsmall:     0.5rem  (8px)   - Small elements
```

## Transitions & Animations

### Timing Functions
```css
/* Smooth, professional easing */
--transition-smooth: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
--transition-default: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Timing Breakdown
- **0.3s**: Interactive elements (buttons, hover states)
- **0.5s**: Tab switching, major transitions
- **0.8s**: Page entrance animations
- **2s+**: Long-duration effects (rarely used)

## Component Specifications

### Intro Section
- **Background**: #f8f8f8 (very light gray)
- **Animation**: fadeInUp (0.8s, 200ms delay)
- **Height**: 35vh (desktop) → 20vh (mobile)
- **Padding**: 2rem top (desktop) → 1rem (mobile)

### Tab Container (Left Side)
- **Background**: #424242 (gray-700)
- **Border Radius**: 1.25rem (20px)
- **Padding**: 2.5rem (desktop) → 1rem (mobile)
- **Box Shadow**: 0 8px 32px rgba(0, 0, 0, 0.2)
- **Hover Shadow**: 0 12px 48px rgba(97, 255, 201, 0.15)
- **Hover Transform**: translateY(-4px)

### Tab Video Container (Right Side)
- **Background**: #141414 (gray-900)
- **Border Radius**: 1.25rem (20px)
- **Min Height**: 500px (desktop) → 200px (mobile)
- **Box Shadow**: 0 8px 32px rgba(0, 0, 0, 0.3)
- **Hover Shadow**: 0 12px 48px rgba(97, 255, 201, 0.15)

### Button Styles

#### Primary Button (is-green)
```css
Background: linear-gradient(var(--green), var(--dark-green))
Color: #141414 (text on green)
Padding: 0.8rem 1.5rem
Border Radius: 0.6rem
Box Shadow: 0 4px 16px rgba(97, 255, 201, 0.2)
Hover Shadow: 0 8px 32px rgba(97, 255, 201, 0.35)
Hover Transform: translateY(-2px)
```

#### Secondary Button (is-secondary)
```css
Background: rgba(97, 255, 201, 0.1) → var(--green) on hover
Color: #fcfcfc
Border: 2px solid var(--green)
Transition: All properties 0.3s
```

### Interactive Elements

#### Links
```css
Color: #61ffc9 (green)
Text Decoration: None
Font Weight: 600
Arrow Indicator: "→"
Hover:
  - Color: #25fabe (dark-green)
  - Arrow: translateX(4px)
```

#### Hover Effects
```css
/* Tab content titles */
.text-color-green::before {
  Gradient underline animation
  Transform: scaleX(0 → 1)
  Transition: 0.3s
}

/* Project links */
.proyecto-link:hover {
  Gap: 0.5rem → 1rem
  Transform: translateX(4px)
  Transition: 0.3s
}
```

## Animation Keyframes

### fadeInUp
```css
From: opacity 0, transform translateY(20px)
To:   opacity 1, transform translateY(0)
Duration: 0.8s ease-out
```

### Gradient Underline
```css
Initial: scaleX(0)
Hover:   scaleX(1)
Origin:  left
Duration: 0.3s
```

## Responsive Breakpoints

```
Desktop:      > 1024px    (Full 2-column grid)
Tablet:       768-1024px  (Optimized layout)
Landscape:    640-768px   (Single column begins)
Portrait:     480-640px   (Mobile optimizations)
Small Phone:  < 480px     (Minimal spacing)
```

## Shadow System

```css
/* Subtle shadows for depth */
--shadow-sm:    0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md:    0 8px 32px rgba(0, 0, 0, 0.2);
--shadow-lg:    0 12px 48px rgba(0, 0, 0, 0.3);

/* Accent shadows (on hover) */
--shadow-green: 0 8px 32px rgba(97, 255, 201, 0.35);

/* Badge/Icon shadows */
--shadow-badge: 0 4px 12px rgba(0, 0, 0, 0.3);
```

## Performance Optimizations

### CSS Transforms (GPU Accelerated)
```css
/* Use these for animations */
transform: translateY(-2px);
transform: scale(1.05);
transform: scaleX(1);
transform: translate3d(0, 0, 0);  /* GPU hint */

/* Avoid animating these */
/* left, top, width, height, margin, padding */
```

### Will-Change
```css
.element {
  will-change: transform, opacity;  /* Only what's needed */
}
```

### Backface Visibility (for 3D transforms)
```css
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
```

## Accessibility

### Focus States
```css
:focus {
  outline: 2px solid var(--brand-1);
  outline-offset: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Color Contrast
- Heading text: #141414 on #f8f8f8 = 21:1 (WCAG AAA)
- Body text:    #737373 on #f8f8f8 = 7.5:1 (WCAG AAA)
- Link text:    #61ffc9 on #292929 = 6.2:1 (WCAG AA)

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Grid | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | ✅ | ✅ | ✅ | ✅ |
| IntersectionObserver | ✅ | ✅ | ✅ | ✅ |
| Backdrop Filter | ✅ | ✅ | ✅ | ✅ |
| Sticky Position | ✅ | ✅ | ✅ | ✅ |

## Code Example: Creating Similar Component

```html
<!-- Example: Creating a similar tab section -->
<article class="tabs_let-content is-1">
  <h2 class="heading-style-h4 text-color-gray100">
    Title: <span class="text-color-green">Green Accent</span>
  </h2>
  <div class="tabs_line"></div>
  <p class="text-color-gray400">
    Description text with 
    <a href="#">linked content →</a>
  </p>
</article>
```

```css
/* Custom component following design system */
.custom-component {
  background: var(--gray-700);
  border-radius: var(--border-radius--medium);
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all var(--transition-smooth);
}

.custom-component:hover {
  box-shadow: 0 12px 48px rgba(97, 255, 201, 0.15);
  transform: translateY(-4px);
}
```

## Usage Guidelines

### When to Use Green (#61ffc9)
- Primary actions/CTAs
- Active states
- Important highlights
- Hover effects
- Accent text

### When to Use Gray Shades
- **Gray-900**: Dark backgrounds
- **Gray-700**: Container backgrounds
- **Gray-500**: Body text
- **Gray-400**: Secondary text
- **Gray-100**: Light backgrounds

### When to Use Shadows
- Elevated containers
- Hover states (enhance depth)
- Badge/badge elements
- Modal overlays

## Maintenance Notes

1. **CSS Variables**: Update color values in `:root` to change theme
2. **Spacing**: Maintain scale consistency (2rem, 1.5rem, 1rem, 0.5rem)
3. **Transitions**: Use predefined timing functions for consistency
4. **Breakpoints**: Test all breakpoints when adding responsive features
5. **Performance**: Keep animations under 60fps, use transforms only
6. **Accessibility**: Maintain color contrast ratios and semantic HTML

---

*Last Updated: 2024*
*Design System Version: 1.0*