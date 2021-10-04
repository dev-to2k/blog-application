import React from "react";
import { RootStore } from "../../utils/TypeScript";

import Loading from "./Loading";
import Toast from "./Toast";
import { useSelector } from "react-redux";
import {
  CheckCircleIcon,
  CheckIcon,
  XCircleIcon,
} from "@heroicons/react/solid";

export const Alert = () => {
  const { alertReducer } = useSelector((state: RootStore) => state);
  return (
    <div>
      {alertReducer.loading && <Loading />}

      {alertReducer.errors && (
        <Toast
          title="Error"
          body={alertReducer.errors}
          icon={<XCircleIcon className={`w-7 text-white`} />}
          textColor="text-red-500"
          bgColor="bg-red-500"
        />
      )}

      {alertReducer.success && (
        <Toast
          title="Success"
          body={alertReducer.success}
          icon={<CheckCircleIcon className={`w-7 text-white`} />}
          textColor="text-green-500"
          bgColor="bg-green-500"
        />
      )}
    </div>
  );
};

export const showErrMsg = (msg: string) => {
  return (
    <div
      className="shadow-md text-center mx-auto my-5 rounded-md"
      style={{ width: "350px" }}
    >
      <div className="p-5">
        <h5 className="text-xl font-semibold mb-2">
          <CheckCircleIcon className={`w-10 mx-auto text-green-600`} />
        </h5>
        <p className="mb-4">{msg}</p>
      </div>
    </div>
  );
};

export const showSuccessMsg = (msg: string) => {
  return (
    <div className="shadow-md m-auto rounded-md" style={{ width: "350px" }}>
      <div className="p-5">
        <h5 className="text-xl font-semibold mb-2">
          <XCircleIcon className={`w-10 text-red-600`} />
        </h5>
        <p className="mb-4">{msg}</p>
      </div>
    </div>
  );
};
