import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const param = useParams();
  useEffect(() => {
    async function fetchBlogData() {
      const res = await fetch(`http://localhost:3000/blogs/${param.id}`);
      const data = await res.json();
      setData(data);
    }
    fetchBlogData();
  }, []);
  const handleSave = ()=>{
     fetch(`http://localhost:3000/blogs/${param.id}`,{
      method:"PATCH",
      body: JSON.stringify(data)
    }).then(()=>{
      navigate("/home")
    })
    
  }
  return (
    <div className="h-screen w-[70%] ml-auto mr-auto mt-5">
      <div
        className="text-lg font-extrabold text-gray-700 text-start cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-5 text-black w-[50%]">
          <div className="w-full">
            <div className="font-bold ">Title:</div>
            <input
              className="rounded-md p-3 bg-slate-500 text-slate-50 w-full"
              type="text"
              value={data.title}
              onChange={(e)=>{
                setData({
                  ...data,
                  title:e.target.value
                })
              }}
            />
          </div>
          <div className="w-full">
            <div className="font-bold ">Description:</div>
            <input
              className="rounded-md p-3 bg-slate-500 text-slate-50 w-full"
              type="text"
              value={data.description}
              onChange={(e)=>{
                setData({
                  ...data,
                  description:e.target.value
                })
              }}
            />
          </div>
          <div className="w-full">
            <div className="font-bold ">Author Name:</div>
            <input
              className="rounded-md p-3 bg-slate-500 text-slate-50 w-full"
              type="text"
              value={data.authorName}
              onChange={(e)=>{
                setData({
                  ...data,
                  authorName:e.target.value
                })
              }}
            />
          </div>
        </div>
        <div className="text-3xl font-semibold text-green-800 border border-green-800 p-2 rounded-md mt-10 cursor-pointer" onClick={handleSave}>save</div>
      </div>
    </div>
  );
};

export default EditBlog;
