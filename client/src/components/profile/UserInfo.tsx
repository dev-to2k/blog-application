import React, { useState } from "react";
import authReducer from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { InputChange, IUserProfile, RootStore } from "../../utils/TypeScript";
import NotFound from "../global/NotFound";
import { CameraIcon } from "@heroicons/react/outline";

const UserInfo = () => {
  const initState = {
    name: "",
    account: "",
    avatar: "",
    password: "",
    cf_password: "",
  };
  const { authReducer } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  const [user, setUser] = useState<IUserProfile>(initState);

  const handleChangeInput = (e: InputChange) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleChangeFile = (e: InputChange) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files) {
      const file = files[0];
      setUser({ ...user, avatar: file });
    }
  };

  const { name, account, avatar, password, cf_password } = user;

  if (!authReducer.user) return <NotFound />;

  return (
    <div className="flex items-center">
      <div className="container mx-auto max-w-md transition duration-300">
        <form className="py-12 p-10 bg-white rounded-lg shadow-lg">
          <div className="mb-6 text-center">
            <img
              src={
                avatar ? URL.createObjectURL(avatar) : authReducer.user.avatar
              }
              alt="avatar"
              className={`inline object-cover w-16 h-16 mb-3 rounded-full`}
            />
            <label className="flex items-center py-2 justify-center bg-indigo-600 rounded-lg tracking-wide cursor-pointer hover:bg-indigo-700 text-white">
              <CameraIcon className="w-5" />
              <span className="ml-2 text-base leading-normal">
                Select a file
              </span>
              <input
                type="file"
                accept="image/*"
                name="file"
                id="file_up"
                className="hidden"
                onChange={handleChangeFile}
              />
            </label>
          </div>
          <div className={`mb-6`}>
            <label
              className="mr-4 text-gray-700 font-bold inline-block mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border py-2 w-full px-4 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              defaultValue={authReducer.user?.name}
              onChange={handleChangeInput}
            />
          </div>
          <div className={`mb-6`}>
            <label
              className="mr-4 text-gray-700 font-bold inline-block mb-2"
              htmlFor="account"
            >
              Account
            </label>
            <input
              type="text"
              className="border text-gray-600 bg-gray-100 py-2 px-4 w-full outline-none cursor-not-allowed focus:ring-2 focus:ring-indigo-400 rounded"
              name="account"
              id="account"
              defaultValue={authReducer.user?.account}
              disabled={true}
              onChange={handleChangeInput}
            />
          </div>
          <div className={`mb-6`}>
            <label
              className="mr-4 text-gray-700 font-bold inline-block mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className="border py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              name="password"
              id="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className={`mb-3`}>
            <label
              className="mr-4 text-gray-700 font-bold inline-block mb-2"
              htmlFor="cd_password"
            >
              Confirm password
            </label>
            <input
              type="password"
              className="border py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              name="cf_password"
              id="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
