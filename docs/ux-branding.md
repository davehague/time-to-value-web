# UX & Branding Guidelines

This document establishes consistent design patterns across the Time To Value website.

---

## Typography

### Font Families

| Font | Tailwind Class | Usage |
|------|----------------|-------|
| **Inter** | `font-inter` | Headings, buttons, navigation, UI labels |
| **Open Sans** | `font-opensans` | Body text, paragraphs, descriptions |

### Font Size Scale

Use these standardized sizes throughout the site:

| Size | Tailwind | Pixels | Usage |
|------|----------|--------|-------|
| XS | `text-xs` | 12px | Tags on cards, fine print |
| SM | `text-sm` | 14px | Meta info, captions, form hints, timestamps |
| Base | `text-base` | 16px | Body text, default prose, card descriptions |
| LG | `text-lg` | 18px | Page subtitles, lead paragraphs, emphasized body |
| XL | `text-xl` | 20px | Card titles, secondary headings |
| 2XL | `text-2xl` | 24px | Card headings, subsection titles, H3 |
| 3XL | `text-3xl` | 30px | Section headers (mobile), page titles (mobile) |
| 4XL | `text-4xl` | 36px | Section headers (desktop), page titles (desktop) |
| 5XL | `text-5xl` | 48px | Hero headline (mobile) |
| 7XL | `text-7xl` | 72px | Hero headline (desktop) |

### Standardized Typography Patterns

#### Hero Section (Home Page Only)

The hero section intentionally uses larger typography to create visual impact:

```html
<h1 class="text-5xl md:text-7xl font-inter font-black text-white mb-6 leading-tight">
    Hero Headline
</h1>
<p class="text-xl md:text-2xl text-blue-100 font-opensans font-light leading-relaxed">
    Hero subtitle/value proposition
</p>
```

#### Page Headers (All Pages)
```html
<h1 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-4">
    Page Title
</h1>
<p class="text-lg text-gray-600 font-opensans leading-relaxed">
    Page description or subtitle
</p>
```

#### Section Headers
```html
<h2 class="text-3xl md:text-4xl font-inter font-bold text-brand-dark mb-6">
    Section Title
</h2>
<p class="text-lg text-gray-600 font-opensans leading-relaxed">
    Section description
</p>
```

#### Subsection Headers
```html
<h3 class="text-2xl font-inter font-bold text-brand-dark mb-4">
    Subsection Title
</h3>
```

#### Card Content
```html
<h3 class="text-xl font-inter font-bold text-brand-dark mb-3">
    Card Title
</h3>
<p class="text-gray-600 font-opensans leading-relaxed">
    Card description (uses default text-base)
</p>
```

#### Prose Content (Blog/Guides)
```html
<div class="prose prose-base max-w-none">
    <ContentRenderer :value="content" />
</div>
```

> **Note:** Use `prose-base`, not `prose-lg`. The larger prose variant creates oversized content.

---

## Color Palette

### Brand Colors

Defined in `tailwind.config.js`:

| Color | Hex | Class | Usage |
|-------|-----|-------|-------|
| **Brand Blue** | `#2d6cdf` | `brand-blue` | Primary actions, links, highlights, CTAs |
| **Brand Dark** | `#3d3d4e` | `brand-dark` | Headings, primary text, dark backgrounds |
| **Brand Coral** | `#ff6b5d` | `brand-coral` | Accent CTAs, alerts (use sparingly) |
| **Brand Cream** | `#f5e8d3` | `brand-cream` | Subtle warm backgrounds |
| **Brand Green** | `#a6e3c6` | `brand-green` | Legacy - minimize usage |

### Text Colors

| Purpose | Class | When to Use |
|---------|-------|-------------|
| Headings | `text-brand-dark` | All heading elements |
| Body text | `text-gray-600` | Paragraphs, descriptions |
| Secondary/meta | `text-gray-500` | Timestamps, captions, hints |
| Muted | `text-gray-400` | Subtle helper text |
| Links | `text-brand-blue hover:text-brand-dark` | Default links |
| On dark bg | `text-white` | Primary text on dark |
| On dark bg (soft) | `text-gray-300` | Secondary text on dark |
| On dark bg (muted) | `text-gray-400` | Meta text on dark |

### Background Colors

| Purpose | Class |
|---------|-------|
| Page background (light) | `bg-white` or `bg-gray-50` |
| Cards | `bg-white` |
| Dark sections | `bg-brand-dark` or `bg-gradient-to-br from-brand-dark via-gray-800 to-brand-dark` |
| Subtle highlight | `bg-brand-blue/10` or `bg-gray-100` |

---

## Components

### Buttons

#### Primary CTA (Coral Gradient)
```html
<button class="bg-gradient-to-r from-brand-coral to-red-500 hover:from-red-500 hover:to-brand-coral text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
    Primary Action
</button>
```

#### Primary CTA (Blue Gradient)
```html
<button class="bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-blue text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
    Primary Action
</button>
```

#### Secondary/Solid Button
```html
<button class="bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-full font-inter font-medium transition-all">
    Secondary Action
</button>
```

#### Outline Button
```html
<button class="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300">
    Outline Action
</button>
```

#### Outline Button (White - for dark backgrounds)
```html
<button class="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300">
    Outline Action
</button>
```

### Cards

#### Standard Card
```html
<article class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
    <!-- Content -->
</article>
```

#### Feature Card (with decorative corner)
```html
<div class="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/30 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-bl-3xl"></div>
    <div class="relative z-10">
        <!-- Content -->
    </div>
</div>
```

#### Dark Card
```html
<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
    <!-- Content (use text-white, text-gray-300, text-gray-400) -->
</div>
```

### Tags & Badges

#### Primary Tag
```html
<span class="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm rounded-full">
    Tag
</span>
```

#### Neutral Tag
```html
<span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
    Tag
</span>
```

#### Status Badge
```html
<div class="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium">
    <span class="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
    Label
</div>
```

### Form Elements

#### Text Input
```html
<input
    type="text"
    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none font-opensans transition-colors"
    placeholder="Placeholder text"
/>
```

#### Input with Error State
```html
<input
    type="text"
    class="w-full px-4 py-3 rounded-xl border border-red-300 focus:border-brand-blue focus:outline-none font-opensans transition-colors"
/>
<p class="text-red-500 text-sm mt-1">Error message</p>
```

#### Select
```html
<select class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none font-opensans transition-colors">
    <option value="">Choose one...</option>
    <option value="option1">Option 1</option>
</select>
```

#### Textarea
```html
<textarea
    rows="4"
    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:outline-none font-opensans transition-colors resize-none"
    placeholder="Your message..."
></textarea>
```

#### Form Label
```html
<label class="block text-brand-dark font-inter font-medium mb-2">
    Label Text *
</label>
```

### Links

#### Standard Link
```html
<a href="#" class="text-brand-blue hover:text-brand-dark transition-colors">
    Link text
</a>
```

#### Link with Arrow
```html
<a href="#" class="text-brand-blue font-inter font-semibold hover:text-blue-700 transition-colors">
    Link text →
</a>
```

#### Back Link with Icon
```html
<NuxtLink to="/page" class="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors">
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    Back to Page
</NuxtLink>
```

### Navigation

#### Nav Link
```html
<NuxtLink to="/page" class="text-brand-dark hover:text-brand-blue transition-colors font-medium">
    Nav Item
</NuxtLink>
```

#### Nav CTA Button
```html
<NuxtLink to="/page" class="bg-brand-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all">
    Get Started
</NuxtLink>
```

---

## Layout & Spacing

### Page Structure
```html
<div class="min-h-screen bg-gray-50">
    <NavHeader />
    <main class="container mx-auto px-6 py-20 pt-28 max-w-4xl">
        <!-- Content -->
    </main>
    <FooterSection />
</div>
```

> **Note:** `pt-28` accounts for the fixed header height.

### Container Widths

| Width | Class | Usage |
|-------|-------|-------|
| Standard | `container mx-auto px-6` | Default container |
| Narrow (articles) | `max-w-4xl` | Blog posts, guides, forms |
| Wide (grids) | `max-w-6xl` | Card grids, feature sections |

### Section Spacing

| Element | Classes |
|---------|---------|
| Section padding | `py-20` |
| Header to content | `mb-12` or `mb-16` |
| Between cards/items | `gap-8` |
| Small spacing | `mb-4` |
| Medium spacing | `mb-6` or `mb-8` |

### Grid Patterns

#### 3-Column Grid (responsive)
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Items -->
</div>
```

#### 2-Column Grid (responsive)
```html
<div class="grid lg:grid-cols-2 gap-16 items-center">
    <!-- Items -->
</div>
```

---

## Responsive Design

Follow Tailwind's mobile-first approach:

| Prefix | Breakpoint | Device |
|--------|------------|--------|
| (none) | 0px | Mobile (default) |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |

### Common Responsive Patterns

```html
<!-- Typography scaling -->
<h1 class="text-3xl md:text-4xl">Heading</h1>

<!-- Grid columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<!-- Flex direction -->
<div class="flex flex-col sm:flex-row gap-4">

<!-- Padding adjustments -->
<div class="p-6 md:p-8 lg:p-12">

<!-- Show/hide elements -->
<div class="hidden md:block">Desktop only</div>
<div class="md:hidden">Mobile only</div>
```

---

## Animations & Transitions

### Standard Transitions
```html
<!-- Color transition -->
class="transition-colors"

<!-- All properties -->
class="transition-all duration-300"

<!-- Shadow on hover -->
class="shadow-lg hover:shadow-xl transition-shadow duration-300"

<!-- Scale on hover -->
class="transform hover:scale-105 transition-transform duration-300"
```

### Common Hover Effects

```html
<!-- Card hover -->
class="hover:shadow-2xl hover:border-brand-blue/30 transition-all duration-300"

<!-- Icon scale -->
class="group-hover:scale-110 transition-transform duration-300"

<!-- Link slide -->
class="group-hover:translate-x-1 transition-transform"
```

---

## Icons

Use Heroicons (outline style) via inline SVG:

```html
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..." />
</svg>
```

### Common Icon Sizes

| Size | Class | Usage |
|------|-------|-------|
| Small | `w-4 h-4` | Inline with text, meta info |
| Medium | `w-5 h-5` | Buttons, links |
| Large | `w-6 h-6` | Contact methods, features |
| XL | `w-8 h-8` | Feature icons in cards |

---

## Accessibility Notes

- Always include `aria-label` on icon-only buttons
- Use semantic HTML (`<article>`, `<section>`, `<nav>`)
- Ensure sufficient color contrast
- Form fields should have associated `<label>` elements
- Interactive elements should have visible focus states (`:focus-visible`)
