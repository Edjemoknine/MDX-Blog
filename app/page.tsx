import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { sortBlog } from "@/util/formate";
import Link from "next/link";
import { posts } from "#site/content";
import BlogItem from "@/components/BlogItem";

export default function Home() {
  const latestPost = sortBlog(posts).slice(0, 4);
  return (
    <>
      <section className="space-y-6 pt-6 md:mt-10 pb-8 md:pb-12 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
            Welcome to Next.js!
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Discover the latest blogs in my blog about react and Next.js
            features
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href={"/blog"}
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>

            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full sm:w-fit"
              )}
            >
              View my blog
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-4xl lg:py-10  py-6 flex flex-col space-y-6  mt-60">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-center lg:text-7xl font-black">
          Latest Blogs
        </h1>
        <ul className="flex flex-col ">
          {latestPost.map((item: any) => (
            <li key={item.slug} className="first:border-t first:border-border">
              <BlogItem item={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
