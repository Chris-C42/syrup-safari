# Syrup Safari

A Progressive Web App (PWA) for logging and rating simple syrup creations.

## Project Structure

```
├── index.html      # Main HTML (single-page app)
├── styles.css      # All CSS styles
├── app.js          # Core application logic (~1500 lines)
├── sw.js           # Service worker for offline support
├── manifest.json   # PWA manifest
├── icons/          # App icons (icon.svg + icon-*.png)
├── create-icons.js # Generate PNG icons from SVG using sharp
└── syrup_safari_icons/  # Source icon assets (SVG + PNGs)
```

## Key Concepts

### Data Storage
- Uses `localStorage` with key `syrupSafari_syrups`
- Each syrup has: name, ingredients, tags, rating, color, notes, dates

### Color System
- Extensive color database in `app.js` (~200 named colors)
- `softenToPastel()` - Converts colors to soft pastels
- `generatePalette()` - Creates color palettes from base color
- Colors are matched by name or hex value

### Generative Art Backgrounds
- `generateSyrupArt()` - Creates unique SVG backgrounds per syrup
- Uses seeded randomization for consistency
- Blob shapes with Bezier curves, stretch, and rotation
- Watercolor-style overlapping translucent shapes

### Service Worker Caching
- **IMPORTANT**: Bump `CACHE_NAME` version in `sw.js` after changes
- Current format: `syrup-safari-v12`
- Forces cache refresh on deploy

## Common Tasks

### Regenerate PNG Icons
```bash
node create-icons.js
```
Converts `icons/icon.svg` to all required PNG sizes.

### Serve Locally
```bash
npx serve -l 3000
```

### Deploy
Push to main branch - hosted via GitHub Pages.

## Style Guide

- Background color: `#f5ebe0` (warm cream)
- Accent colors: Sage greens, warm browns
- Fonts: Cormorant Garamond (headings), Nunito (body)
- Rounded corners, soft shadows, watercolor aesthetic
