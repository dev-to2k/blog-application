import React, { useEffect, useRef, useState } from "react";
import { IBlog, RootStore } from "../utils/TypeScript";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../components/global/NotFound";
import CreateForm from "../components/cards/CreateForm";
import CardHorizontal from "../components/cards/CardHorizontal";
import ReactQuill from "../components/editor/ReactQuill";
import { validCreateBlog } from "../utils/Valid";
import { ALERT } from "../redux/types/alertTye";
import { createBlog } from "../redux/actions/blogAction";

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

  const divRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");

  const { authReducer, categories } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const text = div?.innerText as string;
    setText(text);
  }, [body]);

  const handleSubmit = async () => {
    if (!authReducer.access_token) return;

    const check = validCreateBlog({ ...blog, content: text });
    if (check.errLength !== 0) {
      return dispatch({ type: ALERT, payload: { errors: check.errMsg } });
    }

    let newData = { ...blog, content: body };

    dispatch(createBlog(newData, authReducer.access_token));
  };

  if (!authReducer.access_token) return <NotFound />;
  return (
    <>
      <div className="my-4 flex flex-col lg:flex-row gap-3">
        <div className="w-full lg:w-6/12 p-3">
          <h5 className="mb-3">Create</h5>
          <CreateForm blog={blog} setBlog={setBlog} />
        </div>
        <div className="w-full lg:w-6/12 p-3">
          <h5 className="mb-3">Preview</h5>
          <CardHorizontal blog={blog} />
        </div>
      </div>
      <ReactQuill setBody={setBody} />

      <div
        ref={divRef}
        dangerouslySetInnerHTML={{
          __html: body,
        }}
        className="hidden"
      />

      <small>{text.length}</small>

      <p className="text-center mt-3">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
        >
          Create Post
        </button>
      </p>
    </>
  );
};

export default CreateBlog;
