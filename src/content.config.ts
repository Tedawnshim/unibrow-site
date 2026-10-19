// Projects and journal posts are Markdown files in src/content/.
// Add a new one by copying an existing file and changing the details at the top.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      line: z.enum(['films', 'social', 'design', 'web', 'originals']),
      format: z.string(),
      year: z.string().optional(),
      summary: z.string(),
      description: z.string().optional(), // for search results; falls back to summary
      cover: image(), // the card image
      hero: image().optional(), // the big image on the project page; falls back to cover
      heroAlt: z.string().default(''),
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      results: z
        .array(z.object({ value: z.string(), label: z.string(), source: z.string() }))
        .default([]),
      credits: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
      quote: z.object({ text: z.string(), by: z.string() }).optional(),
      note: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100), // lower comes first
      draft: z.boolean().default(false),
    }),
});

const journal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/journal' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.string(),
      summary: z.string(),
      description: z.string().optional(),
      cover: image(),
      coverAlt: z.string().default(''),
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, journal };
