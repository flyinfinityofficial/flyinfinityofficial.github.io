# Fly Infinity Website - Technical Documentation

## Overview
This document serves as a guide for developers maintaining or updating the Fly Infinity website. The site is a static single-page application optimized for speed and SEO.

## 1. Design System

### Colors
Defined in `tailwind.config.js`:
- **Primary**: `#6366f1` (Indigo 500)
- **Secondary**: `#8b5cf6` (Violet 500)
- **Background**: `#000000` (Black)
- **Neon Accents**: Various gradients using Tailwind utilities.

### Typography
- **Font Family**: "Space Grotesk" (Google Fonts).
- **Scale**: Uses Tailwind's default responsive scale (text-sm to text-9xl).

### Layout Patterns
- **Glassmorphism**: `.glass-nav` class applies backdrop-blur and translucency.
- **Bento Grid**: CSS Grid implementation for the Apps section. Handles 1 column on mobile, 2 on tablet, 3 on desktop.

## 2. Animation System (GSAP)

### Setup
GSAP and ScrollTrigger are loaded via CDN in `index.html`. 
`defer` attribute is used to ensure they don't block rendering.

### Key Animations (`script.js`)
1.  **Navbar Scroll**: Toggles `.scrolled` class on window scroll > 50px.
2.  **Hero Sequence**: `gsap.timeline()` staggers the badge, title, subtitle, and CTA.
3.  **ScrollTriggers**: Elements like `.bento-item` and About section cards animate in when they enter the viewport (`start: 'top 80%'`).
4.  **Micro-interactions**:
    - **Magnetic Buttons**: Custom logic calculates mouse position relative to button center to create a "pull" effect.
    - **Parallax Particles**: Mouse movement subtly shifts the background particles (`.particles`).

## 3. Asset Optimization

### Images
- **Format**: WebP (preferred over PNG/JPG).
- **Tooling**: `optimize_images.py` script provided in root.
- **Usage**: Run `python optimize_images.py` to auto-convert any new assets placed in the `assets/` folder.

### CSS
- **Purging**: Tailwind automatically removes unused styles in production builds based on `content` path in config.
- **Minification**: `npm run build:css` includes `--minify` flag.

## 4. Maintenance Guide

### Adding a New App
1.  Copy an existing `.bento-item` block in `index.html`.
2.  Update the **Image** (`src`, `alt`, `width`, `height`).
3.  Update the **Badge** (Color/Text).
4.  Update **Title** and **Description**.
5.  Update **Play Store Link**.

### Updating Styles
**NEVER edit `style.css` directly.**
1.  Open `src/input.css`.
2.  Add your custom CSS or modify existing layers.
3.  Run `npm run build:css`.

### Troubleshooting
- **Styles not applying?** Check if you ran the build command. Ensure your HTML classes match Tailwind utility names.
- **Images huge?** Run the python optimization script.
- **Animations jerky?** Ensure `will-change` is used sparingly and `ScrollTrigger` markers aren't overlapping too aggressively.

---
*Last Updated: January 2025*
