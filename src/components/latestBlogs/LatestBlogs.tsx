import { Blog } from "@/types/inex";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";
import Link from "next/link";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
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
      <div className="">
        <div className="grid grid-cols-2 gap-4 my-5">
          {blogs.slice(0, 2).map((blog) => (
            <LatestBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 my-5">
          {blogs.slice(2, 5).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="my-10 text-center">
          <Link href={"/blogs"}>
            <button className="btn btn-accent text-white">All blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
