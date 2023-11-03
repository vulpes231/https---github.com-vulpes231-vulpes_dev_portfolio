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
        className={`cursor-pointer hover:border-b-2 hover:border-b-[#66A1E8] font-extralight`}
      >
        <Link
          to={link.id}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-xl cursor-pointer"
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <header className=" bg-[#051026] bg-opacity-80 w-full sticky top-0 z-10 shadow-sm text-[#fff] p-6">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-xl cursor-pointer font-bold"
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
              ? `bg-[#051026] bg-opacity-80 absolute top-[75px] w-full min-h-screen left-0 flex flex-col items-center gap-4 justify-center`
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
