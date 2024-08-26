import { posts } from "#site/content";
import BlogItem from "@/components/BlogItem";
import PaginationLogic from "@/components/PaginationLogic";
import { sortBlog } from "@/util/formate";
import { Metadata } from "next";
const Blog_Per_Page = 3;
export const metadata: Metadata = {
  title: "Blogs",
  description: "Tech blog About Next.js and React.js",
};
interface BlogProps {
  searchParams: { page?: string };
  className: string;
}
const Blogs = ({ searchParams }: BlogProps) => {
  const currentPage = Number(searchParams.page) || 1;
  const totalPages = Math.ceil(posts.length / Blog_Per_Page);

  const publishedBlog = sortBlog(posts.filter((post) => post.published));
  const displayBlogs = publishedBlog.slice(
    Blog_Per_Page * (currentPage - 1),
    Blog_Per_Page * currentPage
  );

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
        displayBlogs.map((item: any) => {
          return (
            <div key={item.slug}>
              <BlogItem item={item} />
            </div>
          );
        })
      ) : (
        <p>Nothing to see here </p>
      )}
      <PaginationLogic totalPages={totalPages} />
    </div>
  );
};

export default Blogs;
