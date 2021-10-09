import React, { useEffect, useState } from "react";
import { IUser, RootStore } from "../../utils/TypeScript";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../global/Spinner";
import { BriefcaseIcon, UserCircleIcon } from "@heroicons/react/solid";
import { getOtherInfo } from "../../redux/actions/userAction";

interface IProps {
  id: string;
}

const OtherInfo: React.FC<IProps> = ({ id }) => {
  const [other, setOther] = useState<IUser>();

  const { otherInfo } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    if (otherInfo.every((user) => user._id !== id)) {
      dispatch(getOtherInfo(id));
    } else {
      const newUser = otherInfo.find((user) => user._id === id);
      console.log(newUser);
      if (newUser) setOther(newUser);
    }
  }, [id, otherInfo, dispatch]);

  if (!other) return <Spinner />;
  return (
    <>
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-full"
          src={other.avatar}
          alt="avatar"
        />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <UserCircleIcon className="w-6 h-6 text-white" />
          <h1 className="mx-3 text-lg font-semibold text-white">
            {other.role}
          </h1>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {other.name}
          </h1>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <BriefcaseIcon className="w-6 h-6 fill-current" />
            <h1 className="px-2 text-sm">
              {new Date(other.createdAt).toLocaleString()}
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
              />
            </svg>
            <h1 className="px-2 text-sm">{other.account}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherInfo;
