import React, { useState } from "react";
import { IBlog, RootStore } from "../utils/TypeScript";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../components/global/NotFound";
import CreateForm from "../components/cards/CreateForm";
import CardHorizontal from "../components/cards/CardHorizontal";
import ReactQuill from "../components/editor/ReactQuill";

const CreateBlog = () => {
  const initState = {
    user: "",
    title: "",
    content: "",
    description: "",
    thumbnail: "",
    category: "",
    createdAt: new Date().toISOString(),
  };

  const [blog, setBlog] = useState<IBlog>(initState);
  const [body, setBody] = useState("");

  const { authReducer, categories } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  if (!authReducer.access_token) return <NotFound />;
  return (
    <>
      <div className="my-4 flex gap-3">
        <div className="w-6/12 p-3">
          <h5 className="mb-3">Create</h5>
          <CreateForm blog={blog} setBlog={setBlog} />
        </div>
        <div className="w-6/12 p-3">
          <h5 className="mb-3">Preview</h5>
          <CardHorizontal blog={blog} />
        </div>
      </div>
      <ReactQuill setBody={setBody} />

      <p className="text-center mt-3">
        <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
          Create Post
        </button>
      </p>
    </>
  );
};

export default CreateBlog;
