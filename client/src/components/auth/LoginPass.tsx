import React, {useState} from 'react';
import {LoginIcon} from "@heroicons/react/outline";
import {FormSubmit, InputChange} from "../../utils/TypeScript";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/authAction";

const LoginPass = () => {
  const initialState = {account: '', password: ''}
  const [userLogin, setUserLogin] = useState(initialState)
  const {account, password} = userLogin

  const dispatch = useDispatch()

  const handleChangeInput = (e: InputChange) => {
    const {value, name} = e.target
    setUserLogin({...userLogin, [name]: value})
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(login(userLogin))
  }

  return (
    <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
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
      <div>
        <button type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <LoginIcon className="w-4 left-4 top-2.5 absolute"/>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginPass;
