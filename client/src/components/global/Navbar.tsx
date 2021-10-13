import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../utils/TypeScript'
import { ChevronDownIcon, LogoutIcon } from '@heroicons/react/outline'
import { logout } from '../../redux/actions/authAction'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const { authReducer } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const { pathname } = useLocation()

  const bfLoginLinks = [
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' },
  ]

  const afLoginLinks = [
    { label: 'Home', path: '/' },
    { label: 'Create Blog', path: '/create_blog' },
  ]

  const navLinks = authReducer.access_token ? afLoginLinks : bfLoginLinks

  const isActive = (pn: string) => {
    if (pn === pathname) return 'active'
  }

  return (
    <>
      <nav className="flex flex-wrap items-center gap-3 text-base justify-center">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`hover:text-gray-900 ${isActive(link.path)}`}
          >
            {link.label}
          </Link>
        ))}

        {authReducer.user?.role === 'admin' && (
          <Link
            to="/category"
            className={`hover:text-gray-900 ${isActive('/category')}`}
          >
            Category
          </Link>
        )}

        {authReducer.user && (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                {authReducer.user.name}
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={`/profile/${authReducer.user?._id}`}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        <div className="flex items-center">
                          <img
                            className="inline object-cover w-6 h-6 rounded-full mr-2"
                            src={authReducer.user?.avatar}
                            alt="Profile image"
                          />
                          <div className="text-xs">
                            {authReducer.user?.account}
                          </div>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                  <form method="GET">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          onClick={() => dispatch(logout())}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm flex items-center'
                          )}
                        >
                          <LogoutIcon
                            className={`w-5 h-5 text-gray-400 mr-2`}
                          />
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </nav>
    </>
  )
}

export default Navbar
