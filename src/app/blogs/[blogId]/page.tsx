import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
  params: {
    blogId: string;
  };
}

const page = async ({ params }: BlogId) => {
  const blogId = params.blogId;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  //   console.log(blogId);
  return (
    <div className="my-5">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default page;
