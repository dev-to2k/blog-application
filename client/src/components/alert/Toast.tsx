import React from 'react';
import {useDispatch} from "react-redux";
import {ALERT} from "../../redux/types/alertTye";
import {XIcon} from "@heroicons/react/solid";

interface IProps {
  title: string
  body: string | string[]
  bgColor: string
  textColor: string
  icon?: React.ReactNode
}

const Toast = (props: IProps) => {
  const {title, body, bgColor, textColor, icon} = props

  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch({
      type: ALERT,
      payload: {}
    })
  }

  return (
    <div className="fixed z-10 right-2 top-2">
      <div className="flex w-full relative max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
        <div className={`flex items-center justify-center w-12 ${bgColor}`}>
          {icon}
        </div>
        <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
            <span className={`font-semibold ${textColor} dark:text-green-400`}>{title}</span>
            <p className="text-sm text-gray-600 dark:text-gray-200">{body}</p>
          </div>
        </div>
        <button className={`absolute right-1 top-1`} onClick={handleClose}><XIcon className={`w-4`}/></button>
      </div>
    </div>
  );
};

export default Toast;
