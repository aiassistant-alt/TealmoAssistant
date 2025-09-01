# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TealmoAssistant is an interactive English Learning Platform built with Next.js 15, React 19, and TypeScript. It features a neomorphic UI design with a 3D Spline interface for an AI voice assistant.

## Commands

### Development
```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production (static export)
npm run start      # Start production server
npm run lint       # Run ESLint with Next.js configuration
```

### TypeScript
- TypeScript is configured with strict mode enabled
- Path alias `@/*` maps to the root directory

## Architecture

### Application Structure
The app uses Next.js 15 App Router with static export configuration:

- **app/layout.tsx**: Root layout with metadata configuration
- **app/page.tsx**: Main application featuring a three-panel layout:
  - Left Sidebar: Course modules with 6 progressive English lessons
  - Center: Spline 3D assistant interface loaded from splinecode URL
  - Right Sidebar: Search functionality and learning resources

### Key Configuration
- **Static Export**: Configured in `next.config.js` with `output: 'export'`
- **Trailing Slashes**: Enabled for Azure Static Web Apps compatibility
- **Unoptimized Images**: Required for static export

### Deployment
- Automatic deployment to Azure Static Web Apps on push to `main` branch
- GitHub Actions workflow configured in `.github/workflows/azure-static-web-apps-ambitious-moss-00cdb440f.yml`
- Build output directory: `out/`
- Live URL: https://ambitious-moss-00cdb440f.2.azurestaticapps.net/

### UI Design System
The application uses a neomorphic design system with:
- Soft shadows and gradients for depth perception
- 20%-60%-20% layout split for desktop view
- Responsive breakpoints for tablet (15%-70%-15%) and mobile (vertical stack)
- Interactive lesson cards with locked/unlocked states

### Dependencies
- **@splinetool/react-spline**: 3D interface integration using Next.js-specific import
- **React 19 RC**: Using release candidate version
- **Next.js 15 RC**: Using release candidate version