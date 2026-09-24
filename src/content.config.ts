import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const adventures = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/adventures",
  }),

  schema: z.object({
    id: z.string().optional(),

    title: z.string(),
    description: z.string(),
    author: z.string().default("AI Adventure"),

    aiaVersion: z.string(),
    adventureVersion: z.string(),

    challenge: z.enum(["Gentle", "Moderate", "Demanding"]),
    typicalJourney: z.enum([
      "Brief",
      "Standard",
      "Extended",
      "Open-ended",
    ]),

	beta: z.boolean().default(false),
    featured: z.boolean().default(false),
    genre: z.string(),
    published: z.boolean().default(true),
  }),
});

const examples = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/examples",
  }),

  schema: z.object({
    exampleType: z
      .enum(["playthrough", "historical", "comparison"])
      .optional(),

    title: z.string(),
    player: z.string(),

    ai: z.union([
      z.string(),
      z.array(z.string()),
    ]).optional(),

    model: z.string().optional(),

    adventure: z.string(),
    adventureId: z.string().optional(),
    adventureTitleStatus: z.string().optional(),

    aiaVersion: z.string().optional(),
    adventureVersion: z.string().optional(),

    datePlayed: z.string().optional(),
    date: z.string().optional(),

    playingStyle: z.string().optional(),
    journeyLength: z.string().optional(),
    randomness: z.string().optional(),
    mode: z.string().optional(),

    status: z.string().optional(),
  }),
});

export const collections = { adventures, examples };