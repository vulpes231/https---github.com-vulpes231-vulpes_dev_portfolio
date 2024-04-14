import React, { useState } from "react";
import { navLinks } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { logo } from "../assets";
import { styles } from "../constants/styles";

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
        className={`cursor-pointer hover:text-[#F24B59] font-normal text-slate-700`}
      >
        <Link
          to={link.id}
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          className="text-lg cursor-pointer"
          onClick={closeMenu}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <header
      className={`${styles.padding.large} ${styles.colors.lightBg} w-full  sticky top-0 z-50`}
    >
      <nav className={`flex justify-between items-center`}>
        {/* logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          className="text-xl cursor-pointer font-bold flex gap-2"
        >
          <img
            src={logo}
            alt="my-logo-image"
            loading="lazy"
            className="w-[28px]"
          />
          <h1 className="text-xl md:text-2xl">
            Vulpes<span className="text-[#F24B59]">Code</span>
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
