import React from 'react';
import {RootStore} from "../../utils/TypeScript";

import Loading from './Loading'
import Toast from './Toast'
import {useSelector} from "react-redux";
import {CheckCircleIcon, XCircleIcon} from '@heroicons/react/solid'

const Alert = () => {
  const {alertReducer} = useSelector((state: RootStore) => state)
  return (
    <div>
      {
        alertReducer.loading && <Loading/>
      }

      {
        alertReducer.errors &&
        <Toast title="Error" body={alertReducer.errors} icon={<XCircleIcon className={`w-7 text-white`}/>} textColor="text-red-500"
               bgColor="bg-red-500"/>
      }

      {
        alertReducer.success &&
        <Toast title="Success" body={alertReducer.success} icon={<CheckCircleIcon className={`w-7 text-white`}/>} textColor="text-green-500"
               bgColor="bg-green-500"/>
      }
    </div>
  );
};

export default Alert;
