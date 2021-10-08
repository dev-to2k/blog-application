import React from "react";
import { IBlog, RootStore } from "../../utils/TypeScript";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface IProps {
  blog: IBlog;
}

const CardPreview: React.FC<IProps> = ({ blog }) => {
  const { authReducer } = useSelector((state: RootStore) => state);
  return (
    <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      {blog.thumbnail && (
        <>
          {typeof blog.thumbnail === "string" ? (
            <Link to={`/blog/${blog._id}`}>
              <img
                src={blog.thumbnail}
                className="object-cover w-full h-64"
                alt="thumbnail"
              />
            </Link>
          ) : (
            <img
              src={URL.createObjectURL(blog.thumbnail)}
              className="object-cover w-full h-64"
              alt="thumbnail"
            />
          )}
        </>
      )}
      <div className="p-6">
        <div>
          <h5 className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600">
            {blog.title}
          </h5>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {blog.description}
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src={authReducer.user?.avatar}
                alt="Avatar"
              />
              <span className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                {authReducer.user?.name}
              </span>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              {new Date(blog.createdAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
