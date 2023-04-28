import React, { useEffect, useState } from "react";
import AllBlogs from "../AllBlogs/AllBlogs";
import "./Blogs.css";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogsAll = useLoaderData();

  return (
    <div className="flex">
      {blogsAll &&
        blogsAll.map((blog) => (
          <AllBlogs key={blog._id} blog={blog}></AllBlogs>
        ))}
    </div>
  );
};

export default Blogs;
