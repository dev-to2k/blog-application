import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { Link, useHistory } from 'react-router-dom'

const Register = () => {
  const history = useHistory()

  return (
    <>
      <div className="min-h-screen rounded-lg flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/*<img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />*/}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to your account
            </h2>
          </div>
          <div className="rounded-lg bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
            <RegisterForm />
            <div className="text-sm text-center mt-3">
              <p>
                Have already an account?&nbsp;
                <Link
                  to={`/login${history.location.search}`}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
