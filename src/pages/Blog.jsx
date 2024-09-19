import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [blogData, setBlogData] = useState({});
  useEffect(() => {
    async function fetchBlogData() {
      const res = await fetch(`http://localhost:3000/blogs/${param.id}`);
      const data = await res.json();
      setBlogData(data);
    }
    fetchBlogData();
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:3000/blogs/${param.id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/home");
    });
  };
  return (
    <div className="px-[10%] mt-5">
      <div
        className="text-lg font-extrabold text-gray-700 cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </div>
      <div className="mt-3 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-5">
          <div className="text-3xl font-semibold text-blue-600 text-center">
            {blogData.title}
          </div>
          <div className="text-lg pl-10">-{blogData.description}</div>
          <div className="text-lg text-gray-700 font-semibold">
            ~{blogData.authorName}
          </div>
        </div>
        <div className="flex gap-10 text-xl">
          <div
            className="font-bold cursor-pointer text-gray-500 hover:text-gray-800 border-gray-500 border-2 rounded-md px-4 py-2"
            onClick={() => {
              navigate(`/blog/edit/${param.id}`);
            }}
          >
            edit
          </div>
          <div
            className="font-bold cursor-pointer text-red-500 hover:text-red-800 border-red-500 border-2 rounded-md px-4 py-2"
            onClick={handleDelete}
          >
            delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
