import React from "react";
import { IBlog } from "../../utils/TypeScript";
import { Link } from "react-router-dom";

interface IProps {
  blog: IBlog;
}

const CardBlog: React.FC<IProps> = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
      <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Link to={`/blog/${blog._id}`}>
          {typeof blog.thumbnail === "string" && (
            <img
              src={blog.thumbnail}
              className="object-cover w-full h-64"
              alt={blog.title}
            />
          )}
        </Link>
        <div className="p-6">
          <>
            <span className="text-xs px-2 font-medium bg-indigo-500 text-white rounded py-0.5">
              {blog.category.name}
            </span>
            <Link
              to={`/blog/${blog._id}`}
              className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
            >
              {blog.title.slice(0, 50) + "..."}
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {blog.description.slice(0, 100) + "..."}
            </p>
          </>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                {typeof blog.user !== "string" && (
                  <>
                    <img
                      className="object-cover h-10 rounded-full"
                      src={blog.user.avatar}
                      alt="Avatar"
                    />
                    <Link
                      to={`/profile/${blog.user._id}`}
                      className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    >
                      {blog.user.name}
                    </Link>
                  </>
                )}
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {new Date(blog.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
