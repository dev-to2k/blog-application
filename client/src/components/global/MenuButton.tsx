/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon, LogoutIcon} from "@heroicons/react/outline";
import {logout} from "../../redux/actions/authAction";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IProps {
  auth: any;
  dispatch: any;
}

export default function MenuButton(props: IProps) {
  const {auth, dispatch} = props;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {auth.user.name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
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
        <Menu.Items
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({active}) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex items-center">
                    <img
                      className="inline object-cover w-6 h-6 rounded-full mr-2"
                      src={auth.user.avatar}
                      alt="Profile image"
                    />
                    <div className="text-xs">{auth.user.account}</div>
                  </div>
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({active}) => (
                  <button
                    type="submit"
                    onClick={() => dispatch(logout())}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm flex items-center"
                    )}
                  >
                    <LogoutIcon className={`w-5 h-5 text-gray-400 mr-2`}/>
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
