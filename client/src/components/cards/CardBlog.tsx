import React from "react";
import { IBlog } from "../../utils/TypeScript";
import { Link } from "react-router-dom";

interface IProps {
  blog: IBlog;
}

const CardBlog: React.FC<IProps> = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
      <Link
        to={`/`}
        className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start flex-shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
      >
        {typeof blog.thumbnail === "string" && (
          <img
            src={blog.thumbnail}
            className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
            alt="..."
          />
        )}
      </Link>

      <div className="flex flex-col gap-2">
        <span className="text-gray-400 text-sm">
          {" "}
          {new Date(blog.createdAt).toLocaleString()}
        </span>

        <h2 className="text-gray-800 text-xl font-bold">
          <Link
            to={`/blog/${blog._id}`}
            className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            {blog.title.slice(0, 50) + "..."}
          </Link>
        </h2>

        <p className="text-gray-500">
          {blog.description.slice(0, 100) + "..."}
        </p>

        <div className="flex items-center justify-between">
          <Link
            to={`/blog/${blog._id}`}
            className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
