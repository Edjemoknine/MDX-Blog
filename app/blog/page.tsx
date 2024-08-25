import { posts } from "#site/content";
import BlogItem from "@/components/BlogItem";

const Blogs = () => {
  const displayBlogs = posts;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My rawblings on all things web dev.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayBlogs.length > 0 ? (
        displayBlogs.map((item) => {
          return (
            <div key={item.slug}>
              <BlogItem item={item} />
            </div>
          );
        })
      ) : (
        <p>Nothing to see here </p>
      )}
    </div>
  );
};

export default Blogs;
