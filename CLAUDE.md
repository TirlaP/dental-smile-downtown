# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

### Testing and Quality
- Always run `npm run build` after making changes to ensure no TypeScript or build errors
- Run `npm run lint` to check for code quality issues
- The project uses Next.js 15 with TypeScript and React 18

## Architecture Overview

### Routing System
This is a **Next.js App Router** project with Romanian URLs:
- `/` → Home (Acasă)
- `/servicii` → Services (Servicii) 
- `/despre-noi` → About (Despre Noi)
- `/cazuri` → Projects/Cases (Cazuri)
- `/contact` → Contact

### Key Architecture Patterns

#### Business Information Management
- All business data centralized in `lib/business-info.ts`
- Never export business info from page components (causes Next.js build errors)
- Import business info: `import { demoBusinessInfo } from '../../lib/business-info'`

#### Layout Strategy
- `PageLayout` component (`components/components/PageLayout.tsx`) provides shared functionality:
  - Navigation with burger menu
  - Footer
  - Mobile drawer menu
  - Scroll detection for navbar styling
- Use PageLayout for all route pages except home page
- Home page uses custom layout due to hero section requirements

#### Component Structure
```
components/
├── components/          # Shared UI components
│   ├── PageLayout.tsx   # Main layout wrapper
│   ├── Navigation.tsx   # Desktop navigation
│   ├── ScrollingNavbar.tsx    # Navbar behavior
│   ├── ClientScrollingNavbar.tsx  # Client-side navbar
│   └── Footer.tsx
└── pages/              # Page-specific components
    ├── HomePage.tsx
    ├── ServicesPage.tsx
    ├── AboutPage.tsx
    ├── ProjectsPage.tsx
    └── ContactPage.tsx
```

### Styling System
- **Chakra UI** with TypeScript
- Responsive design using Chakra's breakpoint system: `base` (mobile), `md` (tablet), `lg` (desktop)
- Color mode support (light/dark themes)

#### React Hooks Rules
**CRITICAL**: Always call `useColorModeValue` at the top level of components, never inside callbacks or map functions:

```typescript
// ✅ Correct
const bgColor = useColorModeValue('white', 'gray.800')
const items = data.map(item => <Box bg={bgColor}>...</Box>)

// ❌ Wrong - causes build errors
const items = data.map(item => <Box bg={useColorModeValue('white', 'gray.800')}>...</Box>)
```

### Responsive Design Patterns
- Buttons stack vertically on mobile/tablet, horizontal on desktop: `direction={{ base: 'column', md: 'row' }}`
- Use `SimpleGrid` for responsive grids: `columns={{ base: 1, sm: 3 }}`
- Button sizing: `size={{ base: 'lg', md: 'xl' }}`, `h={{ base: '50px', md: '60px' }}`
- Navigation CTA shows only icon + phone number on mobile

### Navigation Behavior
- **Home page**: Transparent navbar at top, white when scrolled
- **Other pages**: Always white navbar background
- **Burger menu**: White on home (not scrolled), dark gray elsewhere
- All navigation handled through route mapping to Romanian URLs

## Business Context

### Clinica Stomatologică Smile Downtown
- Modern dental clinic in Alba Iulia, Romania
- Young professional team (Dr. Andrei Dîrzu, Dr. Amalia Slevaș)
- Focus: Preventive, minimally invasive, pain-free dentistry
- Location: Strada Trandafirilor numărul 13, Alba Iulia
- Phone: 0753 083 800

### Content Strategy
- All content in Romanian
- Emphasize: young team, pain-free treatments, central location
- Use real patient testimonials from Facebook reviews
- SEO optimized for Alba Iulia local searches

## Common Issues and Solutions

### Build Errors
- **"Page export field" error**: Never export business info from page components
- **React Hooks errors**: Move all hooks to component top level
- **TypeScript errors**: Ensure proper prop typing for Chakra UI components

### Mobile Responsiveness
- Always test button stacking on mobile
- Ensure burger menu visibility (color contrast)
- Verify full-width buttons on mobile: `w={{ base: 'full', md: 'auto' }}`

### Performance
- Use `dynamic` imports for heavy components
- Optimize images in `/public` directory
- Framer Motion animations should be performant with `whileInView`