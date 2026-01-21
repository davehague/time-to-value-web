// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/sitemap"],
  css: ["~/assets/css/prose.css"],

  // Site configuration for SEO
  site: {
    url: 'https://www.time2value.com',
    name: 'Time To Value',
  },

  // Sitemap configuration (auto-discovers routes)

  content: {
    highlight: {
      theme: 'nord'
    }
  },
  app: {
    head: {
      title: "Time To Value - Helping David Beat Goliath by Leveraging AI",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "AI consulting and content creation to help you punch above your weight class. Get the signal in the noise with AI agents and proactive AI solutions." },
        { name: "msapplication-TileColor", content: "#2d6cdf" },
        { name: "theme-color", content: "#2d6cdf" },
        // Open Graph meta tags
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Time To Value" },
        { property: "og:title", content: "Time To Value - Helping David Beat Goliath by Leveraging AI" },
        { property: "og:description", content: "AI consulting and content creation to help you punch above your weight class. Get the signal in the noise with AI agents and proactive AI solutions." },
        { property: "og:image", content: "https://www.time2value.com/og-image.png" },
        { property: "og:url", content: "https://www.time2value.com" },
        { property: "og:locale", content: "en_US" },
        // Twitter Card meta tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Time To Value - Helping David Beat Goliath by Leveraging AI" },
        { name: "twitter:description", content: "AI consulting and content creation to help you punch above your weight class. Get the signal in the noise with AI agents and proactive AI solutions." },
        { name: "twitter:image", content: "https://www.time2value.com/og-image.png" },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
  },
})