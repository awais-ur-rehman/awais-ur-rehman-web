# Portfolio

A modern, production-ready portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Home Page** - Main landing page
- **Projects Page** - Portfolio projects listing
- **Project Detail Pages** - Dynamic routes for individual project details
- **Contact Page** - Contact form and information
- **Awards Page** - Showcase of awards and achievements

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint & Prettier

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  ├── (routes)/
  ├── projects/
  │   └── [slug]/
  ├── contact/
  ├── awards/
  ├── layout.tsx
  ├── page.tsx
  ├── globals.css
  ├── loading.tsx
  ├── error.tsx
  └── not-found.tsx
components/
lib/
hooks/
types/
public/
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

