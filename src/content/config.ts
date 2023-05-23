import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(["Luka Gurdulić"]),
    image: z.object({ src: z.string(), alt: z.string() }),
    description: z
      .string()
      .max(
        200,
        "For best SEO results, please keep the description under 200 characters."
      ),
    draft: z.boolean().default(false),
    category: z.enum(["AI", "React"]),
  }),
});

export const collections = {
  blog: blog,
};
