import React from 'react';
import {Link} from 'react-router-dom';
import MenuButton from "./MenuButton";

const Menu = () => {
  const bfLoginLinks = [
    {label: 'Login', path: '/login'},
    {label: 'Register', path: '/register'}
  ]
  return (
    <>
      <nav
        className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {
          bfLoginLinks.map((link, index) => (
            <Link key={index} to={link.path}
                  className="mr-5 hover:text-gray-900">{link.label}</Link>
          ))
        }
        <MenuButton />
      </nav>
    </>
  );
};

export default Menu;
