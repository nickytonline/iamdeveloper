import { z, defineCollection } from 'astro:content';
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(), // TODO: add date validation https://github.com/colinhacks/zod/issues/46#issuecomment-623728592
    tags: z.array(z.string()),
    cover_image: z.union([z.string(), z.null()]).optional(),
    canonicalUrl: z.string().optional(),
    reading_time_minutes: z.number().optional(),
    template: z.literal('post'),
  }),
});

const newsletter = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(), // TODO: add date validation https://github.com/colinhacks/zod/issues/46#issuecomment-623728592
    tags: z.array(z.literal('newsletter')),
    template: z.literal('newsletter'),
  }),
});

const vscodetips = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(), // TODO: add date validation https://github.com/colinhacks/zod/issues/46#issuecomment-623728592
    tags: z.array(z.string()),
    cover_image: z.union([z.string(), z.null()]).optional(),
    canonicalUrl: z.string().optional(),
    reading_time_minutes: z.number().optional(),
    template: z.literal('post'),
  }),
});

export const collections = {
  blog,
  newsletter,
  vscodetips,
};
