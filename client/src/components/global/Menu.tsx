import React from "react";
import {Link, useLocation} from "react-router-dom";
import MenuButton from "./MenuButton";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../utils/TypeScript";

const Menu = () => {
  const {authReducer} = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const {pathname} = useLocation()

  const bfLoginLinks = [
    {label: "Login", path: "/login"},
    {label: "Register", path: "/register"},
  ];

  const afLoginLinks = [
    {label: 'Home', path: '/'},
    {label: 'CreateBlog', path: '/create_blog'}
  ]

  const navLinks = authReducer.access_token ? afLoginLinks : bfLoginLinks

  const isActive = (pn: string) => {
    if (pn === pathname) return 'active';
  }

  return (
    <>
      <nav className="flex flex-wrap items-center text-base justify-center">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path} className={`mr-5 hover:text-gray-900 ${isActive(link.path)}`}>
            {link.label}
          </Link>
        ))}

        {
          authReducer.user && <MenuButton auth={authReducer} dispatch={dispatch}/>
        }
      </nav>
    </>
  );
};

export default Menu;
