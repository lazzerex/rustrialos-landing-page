# Rustrial OS Landing Page

A modern, landing page for Rustrial OS - a hobbyist x86-64 bare-metal operating system kernel written in Rust. Built with Astro and Tailwind CSS.

## Overview

This landing page showcases the Rustrial OS project with a sleek, professional design featuring:

- Hero section with animated background
- Infinite horizontal marquee banner
- Core features grid with interactive cards
- Interactive terminal demo for Rustrial Script
- System architecture visualization
- Responsive design optimized for all screen sizes

## Technologies

- **Astro** - Static site framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript for interactive components
- **Google Fonts** - Inter and JetBrains Mono typefaces

## Project Structure

```text
/
├── public/
│   ├── banner.jpg          # Hero background image
│   └── rustrial-logo.png   # Project logo
├── src/
│   ├── components/
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with global styles
│   └── pages/
│       └── index.astro     # Main landing page
├── rustrial-os/            # OS source code
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Features

**Hero Section**
- Full-viewport header with animated background overlay
- Responsive typography scaling from mobile to desktop
- Call-to-action buttons for ISO download and GitHub repository
- Key metrics display (100% Rust, 0% Runtime Overhead, MIT License)

**Marquee Banner**
- Seamless infinite scrolling animation
- Highlights key OS features and technologies
- Bold typography with custom separators

**Interactive Terminal**
- Functional terminal emulator demo
- Supports commands: help, version, about, clear, ls
- Click-to-focus interaction
- Auto-scrolling command history

**System Architecture Diagram**
- Visual representation of OS layers
- User Space, Kernel Space, and Hardware levels
- Interactive hover effects on components

## Customization

**Colors**
The design uses a dark theme with red accents. Primary colors:
- Background: Black (#000000)
- Accent: Red-600 (#dc2626)
- Text: White and Gray scale

**Typography**
- Headings: Inter (Black weight)
- Code/Mono: JetBrains Mono
- Body: Inter (Regular)

## Deployment

Build the site for production:

```bash
npm run build
```

The static files will be generated in the `./dist/` directory and can be deployed to any static hosting service.

## License

MIT License - See the main Rustrial OS repository for details.

## Links

- [Rustrial OS GitHub Repository](https://github.com/lazzerex/rustrial-os)
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
