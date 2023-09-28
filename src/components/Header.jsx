import React, { useState } from "react";
import { navLinks } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { myStyles } from "../styles";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function closeMenu() {
    setToggle(false);
  }

  const links = navLinks.map((link) => {
    return (
      <li
        onClick={closeMenu}
        key={link.id}
        className={`cursor-pointer hover:border-b-2 hover:border-b-[#66A1E8] font-bold`}
      >
        <Link
          to={link.id}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-bold text-2xl cursor-pointer"
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <header
      className={`${myStyles.pryBgColor} w-full py-4 px-4 lg:px-28 sticky top-0 z-10 shadow-sm`}
    >
      <nav className="flex justify-between items-center">
        {/* logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-bold text-2xl cursor-pointer"
        >
          AO
        </Link>
        {/* links */}
        <ul className={`hidden md:flex gap-6 text-sm `}>{links}</ul>
        {/* hamburger button */}
        <div
          onClick={handleToggle}
          className="font-bold text-xl sm:hidden cursor-pointer"
        >
          {!toggle ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul
          className={
            toggle
              ? `${myStyles.pryBgColor} absolute top-[80px] w-full left-0 flex flex-col items-center gap-4 pb-10`
              : "hidden"
          }
        >
          {links}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
