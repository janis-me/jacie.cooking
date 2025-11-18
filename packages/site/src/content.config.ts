import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipeSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  layout: z.string().optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean().default(false),
  tags: z.array(z.string()),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/pages/recipes' }),
  schema: recipeSchema,
});

export const collections = { recipes };

export type RecipesProps = z.infer<typeof recipeSchema>;
