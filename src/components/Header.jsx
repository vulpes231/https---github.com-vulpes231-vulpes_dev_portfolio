import React, { useState } from "react";
import { navLinks } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { logo } from "../assets";

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
        key={link.id}
        className={`cursor-pointer hover:border-b-2 hover:border-b-[#66A1E8] font-extralight`}
      >
        <Link
          to={link.id}
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          className="text-xl cursor-pointer"
          onClick={closeMenu}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <header className=" bg-[#fff] bg-opacity-80  w-full sticky top-0 z-10 shadow-sm text-[#0D0D0D] p-6 h-[70px]">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          className="text-xl cursor-pointer font-bold flex gap-1"
        >
          <img
            src={logo}
            alt="my-logo-image"
            loading="lazy"
            className="w-[25px]"
          />
          <h1 className="">
            Vulpes<span className="text-[#F24B59] text-xl">Code</span>
          </h1>
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
              ? `bg-[#fff] text-[#0D0D0D] bg-opacity-80 absolute top-[70px] w-full min-h-screen left-0 flex flex-col items-center gap-4 justify-center`
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
