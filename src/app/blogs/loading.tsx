import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/types/inex";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blogs.map((blog: Blog) => (
        <LoadingCard key={blog.id}></LoadingCard>
      ))}
    </div>
  );
};

export default BlogLoadingPage;
