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
    difficulty: z.enum(["Easy", "Moderate", "Challenging"]),
    playTime: z.string(),
    style: z.string(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  adventures,
};