import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  total: number;
  callback: (num: number) => void;
}

const Pagination: React.FC<IProps> = ({ total, callback }) => {
  const [page, setPage] = useState(1);

  const newArr = [...Array(total)].map((_, i) => i + 1);
  const history = useHistory();

  const isActive = (index: number) => {
    if (index === page) return "bg-indigo-600 text-white";
    return "";
  };

  const handlePagination = (num: number) => {
    history.push(`?page=${num}`);
    callback(num);
  };

  useEffect(() => {
    const num = history.location.search.slice(6) || 1;
    setPage(Number(num));
  }, [history.location.search]);

  return (
    <div className="flex mt-10 justify-center">
      {page > 1 && (
        <span
          onClick={() => handlePagination(page - 1)}
          className="flex items-center cursor-pointer shadow-md px-4 py-2 mx-1 bg-white rounded-md hover:bg-indigo-600 transition-colors duration-200 transform hover:text-white dark:bg-gray-800 dark:text-gray-600"
        >
          previous
        </span>
      )}

      {newArr.map((num) => (
        <span
          key={num}
          onClick={() => handlePagination(num)}
          className={`${isActive(
            num
          )} flex items-center cursor-pointer shadow-md px-4 py-2 mx-1 hover:bg-indigo-600 transition-colors duration-200 transform hover:text-white bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-indigo-500 dark:hover:text-gray-200`}
        >
          {num}
        </span>
      ))}
      {page < total && (
        <span
          onClick={() => handlePagination(page + 1)}
          className="flex items-center cursor-pointer shadow-md px-4 py-2 mx-1 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
        >
          Next
        </span>
      )}
    </div>
  );
};

export default Pagination;
