import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipeSchema = z.object({
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string(),
  description: z.string(),
  coverImage: z.string(),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: recipeSchema,
});

export const collections = { recipes };

export type RecipesProps = z.infer<typeof recipeSchema>;
