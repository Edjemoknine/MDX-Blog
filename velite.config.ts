import { defineCollection, defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post", // collection type name
  pattern: "blog/**/*.mdx", // content files glob pattern
  schema: s
    .object({
      slug: s.path(), // auto generate slug from file path
      title: s.string().max(99), // Zod primitive type
      date: s.isodate(), // input Date-like string, output ISO Date string.
      description: s.string().max(999).optional(), // input image relative path, output image object with blurImage.
      published: s.boolean(), // input file relative path, output file public path.
      body: s.mdx(),
    })
    .transform(computedFields),
});

// =============================

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    posts,
  },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
