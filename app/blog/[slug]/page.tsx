import { posts } from "#site/content";
import MDXContent from "@/components/MDXComponent";
import { notFound } from "next/navigation";
import React from "react";
interface PostProps {
  params: { slug: string[] };
}

const getPostFromParams = async (params: PostProps["params"]) => {
  const slug = params?.slug;
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
};

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return posts.map((post) => {
    {
      slug: post.slugAsParams.split("/");
    }
  });
}

const BlogDetails = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params);

  if (!post) return notFound();
  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? (
        <p className="text-xl text-muted-foreground mt-0">{post.description}</p>
      ) : null}
      <hr className="my-4 " />
      <MDXContent code={post.body} />
    </article>
  );
};

export default BlogDetails;
