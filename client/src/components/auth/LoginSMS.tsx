import React, { useState } from "react";
import { LoginIcon } from "@heroicons/react/outline";

const LoginSMS = () => {
  const [phone, setPhone] = useState("");
  return (
    <form className="space-y-4" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="grid gap-6">
          <div className="col-span-12">
            <label
              htmlFor="email_address"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <LoginIcon className="w-4 left-4 top-2.5 absolute" />
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginSMS;
