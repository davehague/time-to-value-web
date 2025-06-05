# Time To Value - Website

**Helping David Beat Goliath by Leveraging AI**

A modern, responsive website built with Nuxt 3, Vue 3, and Tailwind CSS that embodies the Time To Value brand and mission.

## ✨ Features

- **Modern Design**: Clean, approachable design that builds trust and empowerment
- **Brand Consistency**: Uses your defined color palette and typography (Inter + Open Sans)
- **Responsive**: Optimized for all devices from mobile to desktop
- **Performance**: Fast loading with Nuxt 3's optimizations
- **SEO Ready**: Proper meta tags and structured content
- **Interactive Elements**: Smooth animations and hover effects

## 🎨 Brand Elements

- **Colors**: 
  - Primary Blue: `#2d6cdf`
  - Accent Green: `#a6e3c6`
  - Coral: `#ff6b5d`
  - Dark: `#3d3d4e`
  - Cream: `#f5e8d3`

- **Typography**:
  - Headlines: Inter (Google Fonts)
  - Body: Open Sans (Google Fonts)

- **Logo**: Custom TimeToValue logo component with clock/timer design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── components/
│   ├── HeroSection.vue           # Hero with animated background
│   ├── ValuePropositionSection.vue # Three key value props
│   ├── AboutSection.vue          # Personal approach & story
│   ├── ServicesSection.vue       # Consulting services
│   ├── ContentSection.vue        # Educational content
│   ├── ContactSection.vue        # Contact form & info
│   ├── FooterSection.vue         # Footer with newsletter
│   └── TimeToValueLogo.vue       # Brand logo component
├── pages/
│   └── index.vue                 # Main landing page
├── public/
│   └── favicon/                  # Favicon files
├── tailwind.config.js            # Tailwind with brand colors
└── nuxt.config.ts               # Nuxt configuration
```

## 🎯 Brand Voice & Messaging

The website embodies your core message of helping small players compete with giants through AI:

- **Approachable**: "Speaking to a friend over coffee"
- **Empowering**: "Punch above your weight class"
- **Signal vs Noise**: "20% that gets 80% results"
- **Future-Focused**: "Skate to where the puck is going"

## 📝 Content Sections

1. **Hero**: Bold introduction with animated background
2. **Value Proposition**: Three pillars (Signal/Noise, Agents, Trends)
3. **About**: Personal story and approach
4. **Services**: AI Strategy, Agent Development, Workflow Automation
5. **Content**: Educational materials and newsletter signup
6. **Contact**: Friendly contact form with personal touch
7. **Footer**: Newsletter, links, and brand reinforcement

## 🎨 Customization

### Colors
Update brand colors in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    blue: '#2d6cdf',
    green: '#a6e3c6', 
    coral: '#ff6b5d',
    dark: '#3d3d4e',
    cream: '#f5e8d3',
  }
}
```

### Logo
The `TimeToValueLogo.vue` component accepts props for sizing and variants:
- Size: `sm | md | lg | xl`
- Variant: `default | white | dark`

### Content
Update content directly in the Vue components or consider moving to a CMS for easier management.

## 🔧 Development

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter + Open Sans)
- **Icons**: SVG icons inline
- **Animations**: CSS transitions and transforms

## 📞 Support

For questions about the website implementation, contact the development team or refer to the Nuxt 3 documentation.

---

**Time To Value** - Helping David Beat Goliath by Leveraging AI
