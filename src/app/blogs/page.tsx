import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types/inex";
import React from "react";

const AllBlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  return (
    <div className=" w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        Latest blog from <span className="text-accent">Bloggiz</span>
      </h1>
      <p className="text-gray-400 w-2/4 text-center mx-auto text-xl">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="my-5 grid grid-cols-3 gap-4">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
