import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ data, setBlogs }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    fetch(`http://localhost:3000/blogs/${data.id}`, {
      method: "DELETE",
    }).then(() => {
      setBlogs((prev) =>
        prev.filter((blog) => {
          return blog.id != data.id;
        })
      );
    });
  };
  return (
    <div className="p-2 shadow-sm shadow-black z-200 flex justify-between items-center">
      <div>
        <div className="text-xl text-blue-500">{data.title}</div>
        <div className="text-md pl-3">-{data.description}</div>
        <div className="text-gray-600 mt-2">~{data.authorName}</div>
      </div>

      <div className="flex gap-5">
        <div
          className="font-bold cursor-pointer text-gray-500 hover:text-gray-800"
          onClick={() => {
            navigate(`/blog/edit/${data.id}`);
          }}
        >
          edit
        </div>
        <div
          className="font-bold cursor-pointer text-blue-500 hover:text-blue-800"
          onClick={() => {
            navigate(`/blog/${data.id}`);
          }}
        >
          show
        </div>
        <div
          className="font-bold cursor-pointer text-red-500 hover:text-red-800"
          onClick={handleDelete}
        >
          delete
        </div>
      </div>
    </div>
  );
};

export default Blog;
