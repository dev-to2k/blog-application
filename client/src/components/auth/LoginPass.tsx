import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {LoginIcon} from "@heroicons/react/outline";
import {InputChange} from "../../utils/TypeScript";

const LoginPass = () => {
  const [sms, setSms] = useState(false)
  const initialState = {account: '', password: ''}
  const [userLogin, setUserLogin] = useState(initialState)
  const {account, password} = userLogin

  const handleChangeInput = (e: InputChange) => {
    const {value, name} = e.target
    setUserLogin({...userLogin, [name]: value})
  }

  return (
    <div className="min-h-screen rounded-lg flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/*<img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />*/}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="rounded-lg bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
          <form className="space-y-4" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true"/>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="grid gap-6">
                <div className="col-span-12">
                  <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email
                    address</label>
                  <input type="text" name="account" id="email_address" autoComplete="email" value={account}
                         onChange={handleChangeInput}
                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                <div className="col-span-12">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" name="password" id="password" autoComplete="given-name" value={password}
                         onChange={handleChangeInput}
                         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
              <div>
                <p onClick={() => setSms(!sms)}
                   className="text-sm cursor-pointer text-indigo-600 hover:text-indigo-500 font-medium">
                  {sms ? 'Sign in with' + ' password' : 'Sign in with SMS'}</p>
              </div>
            </div>
            <div>
              <button type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <LoginIcon className="w-4 left-4 top-2.5 absolute"/>
                Sign in
              </button>
            </div>
            <div className="text-sm text-center">
              <p>Don't have an account?&nbsp;
                <Link to={`/register`} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Register now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPass;
