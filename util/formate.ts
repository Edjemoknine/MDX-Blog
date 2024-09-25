export const dateFormate = (input: string) => {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const sortBlog = (blogs: { date: string }[]) => {
  return blogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};
