import React, { useState } from "react";
import LoginPass from "../components/auth/LoginPass";
import { Link } from "react-router-dom";
import LoginSMS from "../components/auth/LoginSMS";

const Login = () => {
  const [sms, setSms] = useState(false);
  return (
    <>
      <div className="min-h-screen rounded-lg flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/*<img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />*/}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="rounded-lg bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
            {sms ? <LoginSMS /> : <LoginPass />}
            <div className="flex my-3 items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
              <div>
                <p
                  onClick={() => setSms(!sms)}
                  className="text-sm cursor-pointer text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  {sms ? "Sign in with" + " password" : "Sign in with SMS"}
                </p>
              </div>
            </div>
            <div className="text-sm text-center">
              <p>
                Don't have an account?&nbsp;
                <Link
                  to={`/register`}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
