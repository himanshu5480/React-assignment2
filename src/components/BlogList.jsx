import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("http://localhost:3000/blogs");
      const data = await res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);
  return (
    <div className="w-[80%] p-2 flex flex-col gap-4">
      {
        blogs.map((item)=>{
            return (
                <Blog key={item.id} data = {item} setBlogs={setBlogs}/>
            )
        })
      }
    </div>
  );
};

export default BlogList;
