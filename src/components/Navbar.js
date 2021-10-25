import React from 'react';
import { BiGlobe } from 'react-icons/bi';
import { RiUserFill, RiUserAddFill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div>
      <nav className="hidden md:flex gap-x-8 text-sm font-semibold">
        <a
          href="/"
          className="flex items-center gap-x-2 text-white text-opacity-80 hover:text-opacity-100 transition-all "
        >
          <BiGlobe size={16} />
          Türkçe
        </a>
        <a
          href="/"
          className="flex items-center gap-x-2 text-white text-opacity-80 hover:text-opacity-100 transition-all "
        >
          <RiUserFill size={16} />
          Giriş Yap
        </a>
        <a
          href="/"
          className="flex items-center gap-x-2 text-white text-opacity-80 hover:text-opacity-100 transition-all "
        >
          <RiUserAddFill size={16} />
          Kayıt Ol
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
