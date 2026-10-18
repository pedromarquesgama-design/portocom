---
name: Nocturne Executive
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39393e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303035'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#fabc4d'
  on-secondary: '#432c00'
  secondary-container: '#bd8718'
  on-secondary-container: '#3a2600'
  tertiary: '#ffc08e'
  on-tertiary: '#4d2600'
  tertiary-container: '#ff9837'
  on-tertiary-container: '#6a3700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#ffdead'
  secondary-fixed-dim: '#fabc4d'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  headline-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system channels the quiet confidence of a high-floor executive suite overlooking a luminous city skyline at night. Rooted in warm dark-mode aesthetics, it translates the tactile intimacy of polished walnut desks, low-temperature Edison filament lighting, and ambient architectural glass into a pristine, high-performing digital environment.

### Design Movement & Mood
- **Style Paradigm:** Warm Dark Executive Glassmorphism mixed with Modern Architectural Precision.
- **Emotional Profile:** Serene, bespoke, authoritative, focused, and deeply comfortable over extended focus sessions.
- **Visual Tenets:** Deep obsidian and rich charcoal canvases illuminated not by clinical blue light, but by warm tungsten and champagne amber gradients. Surfaces feel thick, smoky, and frosted, with razor-thin specular rims that catch light like beveled crystal.

## Colors

The palette discards pure, fatiguing blacks (#000000) in favor of deep, warm midnight and espresso undertones that mirror natural nighttime light falloff.

### Core Swatches
- **Primary Accent (`#F59E0B` / `#E5A93C`):** Luminous amber gold used for prime conversions, active focal indicators, micro-badges, and focal typography.
- **Tertiary Ochre (`#D97706`):** Deeper amber used for hover states, active tab underscores, and gradient stops.
- **Surface Foundations:**
  - Base Canvas (`#0A0A0E`): Deep obsidian base with a 2% warm red-yellow shift.
  - Layer 1 Container (`#121217`): Soft graphite-espresso for primary container backdrops.
  - Layer 2 Raised (`#1A1A24`): Elevated card and drawer fill.
  - Border Glass Rim (`rgba(245, 158, 11, 0.12)` to `rgba(255, 255, 255, 0.08)`): Hairline structural demarcation.
- **Text & Content Hierarchy:**
  - On Dark High: `#FDFDFC` (95% milk white)
  - On Dark Medium: `#B8B8C2` (subdued cool ash)
  - On Dark Muted: `#727282` (quiet metadata and disabled states)

## Typography

Typography balances sharp, contemporary geometric authority with crystalline micro-legibility.

- **Headlines (Outfit):** Modern, geometric, and crisp. Headlines employ tight negative tracking (`-0.02em` to `-0.03em`) to deliver an executive, brand-forward punch reminiscent of high-end architectural monographs.
- **Body Text (Plus Jakarta Sans):** Selected for its humanist warmth, generous x-height, and open counters, ensuring fatigue-free readability against dark backgrounds.
- **Technical Badges & Overlines (JetBrains Mono):** Monospaced labels provide technical rigor, executive SaaS precision, and high readability for data metrics, statuses, and navigation tags.

## Layout & Spacing

The layout is structured around an intentional, spacious fluid grid system engineered to create an uncluttered, distraction-free environment.

### Grid & Canvas Structure
- **Desktop (1200px+):** 12-column grid with `1.5rem` (24px) gutters and a max canvas container of `1280px` with dynamic centering margins.
- **Tablet (768px – 1199px):** 8-column grid with `1rem` (16px) gutters and `1.5rem` margins.
- **Mobile (below 768px):** 4-column grid with `0.75rem` gutters and `1.25rem` outer margins.

### Spacing Principles
Spacing adheres to a strict 4px/8px incremental cadence. Vertical rhythm in executive dashboards relies on generous `space-xl` (40px) block separation to let data breathes against the dark backdrop.

## Elevation & Depth

Visual hierarchy abandons traditional opaque dropshadows in favor of luminous backdrops, frosted smoky layering, and diffused warm optical highlights.

### Elevation Hierarchy
1. **Base Surface (Level 0):** Flat obsidian ground (`#0A0A0E`).
2. **Flat Card / Plate (Level 1):** Solid `#121217` with a 1px border `rgba(255, 255, 255, 0.05)`.
3. **Glass Layer (Level 2 - Frosted Glass):** 
   - Background: `rgba(24, 24, 31, 0.65)` with `backdrop-filter: blur(20px) saturate(180%)`.
   - Perimeter Border: 1px linear stroke gradient transitioning from top-left `rgba(245, 158, 11, 0.25)` to bottom-right `rgba(255, 255, 255, 0.03)`.
   - Shadow: `0 16px 32px -8px rgba(0, 0, 0, 0.6)`.
4. **Active & Floating Overlays (Level 3):**
   - Popovers, elevated modals, and context menus leverage an inner glow `inset 0 1px 1px 0 rgba(245, 158, 11, 0.15)` coupled with a deep ambient shadow `0 24px 48px -12px rgba(0, 0, 0, 0.85)`.

## Shapes

The system embraces a refined structural radius (`0.5rem` base, `1rem` on cards) that balances architectural sharpness with the warm tactile feel of modern executive electronics.

- **Base Radius (0.5rem / 8px):** Applied to inputs, buttons, chips, and small panels.
- **Large Radius (1rem / 16px):** Applied to dashboard content cards, modal containers, and glass surfaces.
- **Max Radius (9999px / Pill):** Reserved exclusively for status indicators, micro-tags, and floating search controls.

## Components

### Buttons
- **Primary CTA:** Solid golden amber background (`#F59E0B`) with `#0A0A0E` bold typography. Features a soft amber halo shadow (`0 4px 16px rgba(245, 158, 11, 0.35)`) that expands on hover (`0 6px 24px rgba(245, 158, 11, 0.5)`).
- **Secondary (Glass):** Frosted glass surface (`rgba(255, 255, 255, 0.04)`) with a subtle border (`rgba(255, 255, 255, 0.1)`) and bright ivory text. On hover, the border takes on a warm golden tint (`rgba(245, 158, 11, 0.4)`).
- **Ghost / Tertiary:** Transparent background, muted text (`#B8B8C2`), transitioning to amber text with a subtle background wash (`rgba(245, 158, 11, 0.06)`).

### Input Fields
- Dark smoky fill (`rgba(18, 18, 23, 0.7)`), 1px stroke (`rgba(255, 255, 255, 0.08)`), height 44px, `rounded-md` (8px).
- **Focus State:** 1px perimeter border transitions to primary amber (`#F59E0B`) with an outer ring glow (`0 0 0 3px rgba(245, 158, 11, 0.18)`). Text placeholder sits in low-contrast warm gray (`#727282`).

### Cards & Panels
- Dual-layer styling: cards feature an ultra-delicate top highlight line (`border-t: 1px solid rgba(245, 158, 11, 0.2)`) fading to `rgba(255, 255, 255, 0.04)` on the sides, simulating a physical warm downlight reflection from desk lamps.

### Chips & Badges
- Pill-shaped (`rounded-full`), monospace font (`JetBrains Mono`, 11px), uppercase letter-spacing.
- Amber variant: `rgba(245, 158, 11, 0.12)` background, `rgba(245, 158, 11, 0.3)` border, `#F59E0B` text.

### Selection Controls (Checkboxes & Radios)
- Unchecked: `#1A1A24` container with `rgba(255, 255, 255, 0.15)` border.
- Checked: `#F59E0B` fill with `#0A0A0E` checkmark icon and 4px amber ambient glow.
