import React, { useState } from "react";
import { PencilAltIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import NotFound from "../components/global/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { FormSubmit, RootStore } from "../utils/TypeScript";
import { createCategory } from "../redux/actions/categoryAction";

const Category = () => {
  const [name, setName] = useState("");

  const { authReducer, categories } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    if (!authReducer.access_token || !name) return;

    dispatch(createCategory(name, authReducer.access_token));

    setName("");
  };

  if (authReducer.user?.role !== "admin") return <NotFound />;
  return (
    <div className="min-h-screen rounded-lg flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg shadow-lg bg-white p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
        <div className="mb-6">
          <h1>Category</h1>
          <form className="flex mt-4" onSubmit={handleSubmit}>
            <input
              className="border focus:border-black focus:outline-none rounded w-full py-2 px-3 mr-4 text-black"
              placeholder="Add category"
              v-model="msg"
              name="category"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              className="p-0 w-12 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
            >
              <PlusIcon className="w-5 text-white font-bold mx-auto" />
            </button>
          </form>
        </div>
        <div>
          {categories.map((category) => (
            <div className="flex mb-6 items-center gap-3" key={category._id}>
              <p className="w-full">{category.name}</p>
              <button className="uppercase bg-yellow-500 p-3 flex items-center hover:bg-yellow-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 ">
                <PencilAltIcon className="w-5 font-bold mx-auto" />
              </button>
              <button className="uppercase bg-red-500 p-3 flex items-center hover:bg-red-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 ">
                <TrashIcon className="w-5 font-bold mx-auto" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
