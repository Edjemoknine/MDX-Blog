import { ArrowBigRight, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { dateFormate } from "@/util/formate";

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
    <div className="py-3 flex flex-col gap-2">
      <h2 className="text-xl capitalize font-medium mb-2">
        <Link href={`/${slug}`}>{title}</Link>
      </h2>
      <p className="text-muted-foreground max-w-none">{description}</p>
      <div className="flex items-center justify-between">
        <dl>
          <dd className="sr-only">Published On</dd>
          <dd className="text-sm sm:text-base font-medium flex gap-1 items-center">
            <Calendar className="w-4 h-4" />
            <time datetime={date}>{dateFormate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read More <ArrowRight className="w-8 pl-1 h-4" />
        </Link>
      </div>

      <hr className="mt-3" />
    </div>
  );
};
export default BlogItem;
