import Link from "next/link";

type Props = {
  slug: string;
  date: string;
  title: string;
  description: string;
  published: boolean;
  body: string;
};
const BlogItem = ({ item }: { item: Props }) => {
  const { slug, date, title, description, published } = item;
  return (
    <div className="py-3">
      <h2 className="text-xl capitalize font-medium mb-2">
        <Link href={`/${slug}`}>{title}</Link>
      </h2>
      <p>{date}</p>
      <p>{published ? "Published" : "Draft"}</p>
      <p>{description}</p>
      <hr className="mt-3" />
    </div>
  );
};
export default BlogItem;
