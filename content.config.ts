import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    guides: defineCollection({
      type: 'page',
      source: 'guides/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
        order: z.number().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        publishedAt: z.string().datetime().optional(),
        updatedAt: z.string().datetime().optional(),
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        publishedAt: z.string().datetime().optional(),
        updatedAt: z.string().datetime().optional(),
      })
    })
  }
})