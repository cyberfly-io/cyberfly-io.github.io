# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the **Cyberfly IO marketing website** — a static site hosted on GitHub Pages showcasing a Web3 IoT platform with IPFS storage, crypto wallet integration, and blockchain capabilities on Kadena.

The site is a **single-page application** built with vanilla HTML, Tailwind CSS, Alpine.js, and jQuery, focused on presenting the Cyberfly platform's features, tokenomics, and roadmap to potential users and developers.

## Repository Information

- **GitHub Repository**: `cyberfly-io/cyberfly-io.github.io`
- **Live Site**: https://cyberfly.io
- **Type**: Static marketing website (GitHub Pages)
- **Domain**: Custom CNAME configured for cyberfly.io

## Tech Stack

- **Frontend Framework**: None (vanilla JS with libraries)
- **CSS**: Tailwind CSS (CDN) + SCSS compiled to CSS
- **JavaScript Libraries**:
  - Alpine.js 3.x (reactive components, dark mode)
  - jQuery 3.6.1 (DOM manipulation, legacy plugins)
  - Chart.js (data visualizations)
  - Swiper.js (sliders)
  - WOW.js (scroll animations)
  - Particles.js (background effects)
- **Build Tools**: SCSS compilation (source in `_src/scss/`)
- **Deployment**: GitHub Pages (automatic on push to main)

## Key Files

- **index.html** — Main landing page with hero, features, capabilities, tokenomics, roadmap
- **balance.html** — Token balance checker page
- **js/main.js** — Core site interactions (menu, scrolling, animations, sliders)
- **js/custom.js** — Cyberfly-specific logic (Medium blog integration, Kadena API calls for token supply)
- **_src/scss/** — SCSS source files (compile to `css/main-LTR.css` and `css/main-RTL.css`)
- **manifest.json** — Progressive Web App configuration

## Architecture

### Page Structure

The site uses a **single-page layout** with sections navigated via anchor links:
- Hero section (`#home`)
- Features section (`#features`)
- Capabilities/Solutions section (`#capabilities`)
- Tokenomics section (`#token`)
- Roadmap section (`#roadmap`)

Navigation is handled by Alpine.js for mobile menu state and jQuery for smooth scrolling.

### Styling Approach

- **Tailwind CSS** provides utility classes via CDN
- **Custom SCSS** in `_src/scss/` for theme-specific styles (dark mode, animations, glassmorphism effects)
- **Compiled CSS** output to `css/main-LTR.css` and `css/main-RTL.css`
- **Inline styles** in `index.html` for page-specific animations and Tailwind config

### State Management

- **Dark Mode**: Managed by Alpine.js with localStorage persistence
- **Mobile Menu**: Alpine.js reactive state (`mobileMenuOpen`)
- **Forms**: jQuery validation and AJAX submission
- **API Data**: Fetched client-side and rendered dynamically

### External Integrations

1. **Medium Blog Feed** (`js/custom.js`):
   - Fetches latest 3 posts via RSS2JSON API
   - Renders blog cards in `#blogs` section

2. **Kadena Blockchain** (`js/custom.js`):
   - Queries Chainweb API for CFLY token supply on chains 1 and 2
   - Calculates circulating supply and burned tokens
   - Updates `#csupply` and `#burned` elements

3. **IPFS Integration**:
   - Wallet hosted on Cyberfly IPFS node
   - Links to `https://node.cyberfly.io/files?cid=...`

## Common Development Tasks

### Viewing the Site Locally

Since this is a static site, use any local server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit `http://localhost:8000`

### Compiling SCSS

The SCSS source is in `_src/scss/`. To compile changes:

```bash
# Install Sass if not already installed
npm install -g sass

# Compile LTR styles
sass _src/scss/main-LTR.scss css/main-LTR.css

# Compile RTL styles  
sass _src/scss/main-RTL.scss css/main-RTL.css

# Watch for changes (LTR)
sass --watch _src/scss/main-LTR.scss:css/main-LTR.css

# Watch for changes (RTL)
sass --watch _src/scss/main-RTL.scss:css/main-RTL.css
```

### Updating Content

**Hero Section**: Edit the hero markup in `index.html` around line 1289-1443

**Features**: Modify the cards in the `#features` section (lines ~1445-1561)

**Tokenomics**: Update the `#token` section with token metrics and distribution

**Roadmap**: Edit roadmap items in the `#roadmap` section

**Blog Integration**: The blog section auto-populates from Medium. To change the source, update the RSS URL in `js/custom.js` (line 2)

### Adding New Sections

1. Add section markup to `index.html` with a unique `id`
2. Add navigation link to the header menu (lines ~1220-1242)
3. Add mobile menu link (lines ~1270-1282)
4. Update smooth scroll logic in `js/main.js` if needed

### Modifying API Integrations

**Kadena Token Supply**:
- Edit `js/custom.js` lines 44-95
- Update chain IDs, contract calls, or calculation logic

**Medium Blog Feed**:
- Edit `js/custom.js` lines 1-41
- Change RSS URL, post count, or rendering template

## Design System

### Colors

- **Brand Primary**: `#6366f1` (Indigo)
- **Brand Accent**: `#06b6d4` (Cyan)
- **Dark Background**: `#0f172a` (Slate 900)
- **Light Background**: `#fefefe`

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold (700-800), tight line-height, gradient text effects
- **Body**: Light (300-400), relaxed line-height

### Effects

- **Glassmorphism**: `backdrop-filter: blur()` with semi-transparent backgrounds
- **Gradients**: Multi-color animated gradients for text and backgrounds
- **Shadows**: Layered box-shadows with brand color tints
- **Animations**: WOW.js scroll-triggered animations, CSS keyframe effects

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Tailwind CSS classes may require autoprefixing for older browsers
- Alpine.js requires ES6+ support

## Deployment

The site automatically deploys via **GitHub Pages** when changes are pushed to the main branch:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Changes typically appear within 1-2 minutes at https://cyberfly.io

## Important Notes

- **No build step required** — HTML, CSS, and JS are served directly
- **SCSS must be manually compiled** — CSS files are committed to the repo
- **CDN dependencies** — Tailwind, Alpine, jQuery loaded from CDNs (no package.json)
- **GitHub Pages configuration** — CNAME file in root maps to cyberfly.io domain
- **API rate limits** — Medium RSS2JSON and Kadena API calls are client-side (consider caching if traffic increases)

## File Organization

```
/
├── index.html              # Main landing page
├── balance.html            # Token balance checker
├── CNAME                   # GitHub Pages domain config
├── manifest.json           # PWA configuration
├── robots.txt              # SEO crawler rules
├── sitemap.xml             # SEO sitemap
├── browserconfig.xml       # Windows tile config
│
├── css/
│   ├── main-LTR.css        # Compiled LTR styles
│   ├── main-RTL.css        # Compiled RTL styles
│   ├── custom.css          # Additional custom styles
│   └── vendors/            # Third-party CSS
│
├── js/
│   ├── main.js             # Core site interactions
│   ├── custom.js           # Cyberfly-specific logic
│   └── vendors/            # Third-party JS libraries
│
├── _src/
│   └── scss/               # SCSS source files
│       ├── main-LTR.scss   # LTR entry point
│       ├── main-RTL.scss   # RTL entry point
│       ├── _main.scss      # Main styles import
│       └── 1-helpers/      # Variables, mixins, globals
│
└── assets/
    └── images/             # Logo, graphics, icons
```

## SEO & Performance

- **Structured Data**: JSON-LD schema for Organization, Website, and SoftwareApplication
- **Meta Tags**: Comprehensive Open Graph, Twitter Card, and standard meta tags
- **Performance**: Preconnect hints, lazy loading, optimized images
- **PWA**: manifest.json enables "Add to Home Screen" on mobile

## Content Management

All content is **hardcoded in HTML**. There is no CMS or content management system. To update text, images, or links, edit the HTML files directly.

Dynamic content sources:
- **Blog posts**: Fetched from Medium via RSS
- **Token metrics**: Fetched from Kadena blockchain API
