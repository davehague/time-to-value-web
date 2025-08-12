# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 website for Time To Value, built with Vue 3, TypeScript, and Tailwind CSS. The application features a modern JAMstack architecture with server-side email functionality via Mailjet.

## Essential Commands

```bash
# Development
npm run dev              # Start development server on http://localhost:3000

# Build & Production
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run generate         # Generate static site

# Code Quality
npm run postinstall      # Generate Nuxt types
npm run typecheck        # Run TypeScript type checking
```

## Architecture & Key Patterns

### Component Structure
- **Pages**: Located in `/pages/`, using file-based routing
- **Components**: Modular sections in `/components/` (e.g., Hero.vue, Features.vue, Process.vue)
- **Layouts**: Default layout in `/layouts/default.vue`
- **Server API**: Email endpoints in `/server/api/` using Nitro server engine

### Email System Architecture
The contact form integrates with Mailjet through server API routes:
- `/server/api/send-email.post.ts` - Handles form submissions
- Sends two emails: admin notification and user auto-reply
- HTML templates are embedded in the API route
- Requires `MAILJET_API_KEY` and `MAILJET_API_SECRET` environment variables

### Styling System
- Tailwind CSS with custom brand configuration in `tailwind.config.js`
- Brand colors: primary (blue), secondary (green), dark (navy)
- Typography: Inter (headings) and Open Sans (body)
- Responsive utilities follow mobile-first approach

### Environment Configuration
Required environment variables for production:
```
MAILJET_API_KEY=your_api_key
MAILJET_API_SECRET=your_secret
```

## Key Implementation Details

### When modifying components:
- Follow existing Vue 3 Composition API patterns
- Maintain TypeScript types for props and emits
- Use Tailwind utility classes for styling
- Keep responsive design patterns (mobile-first)

### When working with the contact form:
- Email logic is in `/server/api/send-email.post.ts`
- HTML email templates are inline in the API route
- Both admin and user emails maintain brand styling
- Test with valid Mailjet credentials

### Brand Assets:
- Logo component: `/components/Logo.vue` (supports size and variant props)
- Favicon set: `/public/` directory
- Color palette defined in Tailwind config

## Development Workflow

1. Always run `npm run dev` to start the development server
2. The app runs on `http://localhost:3000` by default
3. Changes to components hot-reload automatically
4. Server API changes require manual refresh
5. Run `npm run typecheck` before committing to catch type errors

## Deployment Notes

The site can be deployed as:
- **Static Site**: Use `npm run generate` for JAMstack hosting
- **Node.js App**: Use `npm run build` for server deployment
- **Environment**: Ensure Mailjet credentials are configured in production