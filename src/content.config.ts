import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const adventures = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/adventures",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default("AI Adventure"),
    version: z.string(),
    challenge: z.enum(["Gentle", "Moderate", "Demanding"]),
    typicalJourney: z.enum(["Brief", "Standard", "Extended", "Open-ended"]),
    genre: z.string(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = { adventures };
