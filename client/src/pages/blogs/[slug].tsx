import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBlog, IParams, RootStore } from "../../utils/TypeScript";
import { useParams } from "react-router-dom";
import NotFound from "../../components/global/NotFound";
import { getBlogsByCategoryId } from "../../redux/actions/blogAction";
import CardBlog from "../../components/cards/CardBlog";

const BlogsByCategory = () => {
  const { categories, blogsCategory } = useSelector(
    (state: RootStore) => state
  );
  const dispatch = useDispatch();
  const { slug } = useParams<IParams>();

  const [categoryId, setCategoryId] = useState("");
  const [blogs, setBlogs] = useState<IBlog[]>();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const category = categories.find((item) => item.name === slug);
    if (category) setCategoryId(category._id);
  }, [slug, categories]);

  useEffect(() => {
    if (!categoryId) return;

    if (blogsCategory.every((item) => item.id !== categoryId)) {
      dispatch(getBlogsByCategoryId(categoryId));
    } else {
      const data = blogsCategory.find((item) => item.id === categoryId);
      if (!data) return;
      setBlogs(data.blogs);
      setTotal(data.total);
    }
  }, [categoryId, blogsCategory, dispatch]);

  if (!blogs) return <NotFound />;

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Category
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            <span className="text-xs px-2 font-medium bg-indigo-500 text-white rounded py-0.5">
              Badge
            </span>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
          {blogs.map((blog) => (
            <CardBlog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsByCategory;
