# Rustrial OS Landing Page

<div align="center">

![Rustrial OS](https://img.shields.io/badge/Rustrial_OS-v0.1.0--alpha-ef4444?style=for-the-badge&logo=rust&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, high-performance landing page for Rustrial OS**

*A hobbyist x86-64 bare-metal operating system kernel written in Rust*

### Tech Stack

![Astro](https://img.shields.io/badge/Astro-5.17.1-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

[Live Demo](https://rustrial.vercel.app) • [Documentation](#) • [Report Bug](https://github.com/lazzerex/rustrial-os/issues)

</div>

---

## About

This is the official landing page for **Rustrial OS**, showcasing a cutting-edge operating system kernel built from scratch in Rust. The landing page features modern web technologies, smooth animations, and an interactive terminal demo to give visitors a taste of what Rustrial OS offers.

### Key Features

- **Modern Design** - Dark theme with red accents, professional typography
- **Fully Responsive** - Mobile-first design that works on all devices
- **Scroll Animations** - Elements animate as you scroll down the page
- **Interactive Terminal** - Live demo showing Rustrial OS boot sequence and commands
- **Performance Stats** - Real-time metrics showcase OS capabilities
- **SEO Optimized** - JSON-LD structured data, meta tags, Open Graph
- **Lightning Fast** - Built with Astro for optimal performance

## What is Rustrial OS?

Rustrial OS is a **hobbyist x86-64 bare-metal operating system kernel** that demonstrates:

- **100% Memory Safe** - Rust's ownership model prevents segfaults
- **High Performance** - Zero-cost abstractions, <1ms context switching
- **Full TCP/IP Stack** - Complete networking from ARP to TCP
- **Async/Await Runtime** - Native cooperative multitasking
- **Custom Bootloader** - Written in x86 assembly and Rust
- **SMP Support** - Multi-core CPU support
- **No Standard Library** - Pure bare-metal implementation

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/lazzerex/rustrial-os.git
cd rustrial-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the landing page.

## Project Structure

```text
rustrial-landing/
├── src/
│   ├── components/
│   │   ├── hero/              # Hero section component
│   │   ├── landing/           # Landing page sections
│   │   │   ├── TerminalDemo.tsx    # Interactive terminal (React)
│   │   │   ├── Stats.astro         # Performance metrics
│   │   │   ├── CodeShowcase.astro  # Code examples
│   │   │   ├── Features.astro      # Feature grid
│   │   │   ├── TechStack.astro     # Technology showcase
│   │   │   └── GettingStarted.astro # Installation guide
│   │   ├── layout/            # Header & Footer
│   │   ├── seo/               # SEO components
│   │   └── ui/                # Reusable UI components
│   ├── config/
│   │   ├── routes.ts          # Route definitions
│   │   └── site.config.ts     # Site configuration
│   ├── layouts/
│   │   ├── BaseLayout.astro   # HTML foundation
│   │   └── LandingLayout.astro # Main layout wrapper
│   ├── lib/
│   │   ├── cn.ts              # Class name utilities
│   │   ├── schema.ts          # JSON-LD helpers
│   │   └── scrollAnimation.ts # Scroll-triggered animations
│   ├── pages/
│   │   └── index.astro        # Landing page
│   └── styles/
│       └── global.css         # Design tokens & animations
├── rustrial-os/               # Rustrial OS source code
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Sections

### Hero Section
- Animated background with grid pattern
- Interactive terminal demo showing boot sequence
- Call-to-action buttons for getting started
- Responsive split layout (content + terminal)

### Stats Display
- Performance metrics (15K+ lines of Rust, <1ms context switch)
- Memory safety guarantees
- Multi-core support stats
- Additional info cards for networking, async, and bootloader

### Infinite Marquee
- Seamlessly scrolling banner of key features
- Bold monospace typography
- Highlights: Memory Safety, Bare Metal, Custom Bootloader, etc.

### Code Showcase
- Real Rust code examples from Rustrial OS
- Terminal-style code windows
- Memory allocator, async runtime, and network stack examples

### Features Grid
- 6 interactive cards highlighting core capabilities
- Hover animations and icon displays
- Memory safety, performance, networking, async, graphics

### Getting Started
- Step-by-step installation guide
- Download ISO, create bootable USB, boot & explore
- Build from source instructions
- Direct download and GitHub links

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run Astro diagnostics |

## Design System

### Colors
```css
/* Brand Colors */
--color-brand-500: #ef4444  /* Primary red accent */
--color-background: #000000 /* Pure black */
--color-foreground: #ffffff /* Pure white */

/* Semantic Colors */
--color-success: #4ade80
--color-warning: #fbbf24
--color-error: #ef4444
```

### Typography
- **Display/Headings**: Inter (700-900 weight)
- **Body Text**: Inter (400-500 weight)  
- **Code/Terminal**: JetBrains Mono (400-700 weight)

### Animations
- Fade In/Up - Section elements
- Slide In (Left/Right) - Cards and content
- Scale In - Interactive elements
- Float/Glow - Accent animations
- All animations are scroll-triggered via Intersection Observer

## Deployment

### Build for Production

```bash
npm run build
```

The static site will be generated in `./dist/` and can be deployed to:

- **Vercel** - Zero config deployment
- **Netlify** - Drag & drop or Git integration
- **GitHub Pages** - Free static hosting
- **Cloudflare Pages** - Fast global CDN
- Any static hosting service

### Environment Variables

Create a `.env` file for configuration:

```env
PUBLIC_SITE_URL=https://rustrialos.dev
PUBLIC_GITHUB_URL=https://github.com/lazzerex/rustrial-os
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the main [Rustrial OS repository](https://github.com/lazzerex/rustrial-os) for details.

## Links

- **Rustrial OS Repository**: [github.com/lazzerex/rustrial-os](https://github.com/lazzerex/rustrial-os)
- **Rustrial OS Releases**: [GitHub Releases](https://github.com/lazzerex/rustrial-os/releases)
- **Report Issues**: [GitHub Issues](https://github.com/lazzerex/rustrial-os/issues)
- **Discussions**: [GitHub Discussions](https://github.com/lazzerex/rustrial-os/discussions)

---

<div align="center">

**Built with Astro, React, and Tailwind CSS**

*Showcasing the power of Rust for systems programming*

</div>
