import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types/inex";

interface BlogId {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({ blogId: blog.id }));
};

const BlogDetailsPage = async ({ params }: BlogId) => {
  const blogId = params.blogId;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  //   console.log(blogId);
  return (
    <div className="my-5">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
