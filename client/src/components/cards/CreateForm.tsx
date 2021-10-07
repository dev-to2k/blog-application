import React from "react";
import { IBlog, InputChange, RootStore } from "../../utils/TypeScript";
import { useSelector } from "react-redux";

interface IProps {
  blog: IBlog;
  setBlog: (blog: IBlog) => void;
}

const CreateForm: React.FC<IProps> = ({ blog, setBlog }) => {
  const { categories } = useSelector((state: RootStore) => state);

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleChangeThumbnail = (e: InputChange) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      const file = files[0];
      setBlog({ ...blog, thumbnail: file });
    }
  };

  return (
    <form>
      <div className="mb-3 relative">
        <input
          type="text"
          className="px-2 py-1 placeholder-gray-400 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
          value={blog.title}
          name="title"
          onChange={handleChangeInput}
        />
        <small className="absolute opacity-30 bottom-2 right-2">
          {blog.title.length}/50
        </small>
      </div>
      <div className="mb-3">
        <input
          type="file"
          accept="image/*"
          className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 w-full outline-none focus:outline-none"
          onChange={handleChangeThumbnail}
        />
      </div>
      <div className="mb-3 relative">
        <textarea
          className="form-textarea resize-none rounded mt-1 block w-full border border-gray-400 outline-none focus:outline-none focus:ring"
          rows={4}
          name="description"
          value={blog.description}
          onChange={handleChangeInput}
          placeholder="Enter some long form content."
        />
        <small className="absolute bottom-2 right-2 opacity-30">
          {blog.description.length}/200
        </small>
      </div>
      <div className="mb-3">
        <select
          className="form-select rounded block w-full mt-1 border border-gray-400 outline-none focus:outline-none focus:ring"
          value={blog.category}
          name="category"
          onChange={handleChangeInput}
        >
          <option value="">Choose a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default CreateForm;
