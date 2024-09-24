import React, { useState } from "react";
import { navLinks } from "../constants";
import {
  FaBars,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import { logo } from "../assets";
import { styles } from "../constants/styles";
import { DiRedhat } from "react-icons/di";
import { MdOutlineAlternateEmail } from "react-icons/md";

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
        className={`cursor-pointer hover:text-[#F24B59] font-medium text-xs uppercase font-[Ubuntu]`}
      >
        <Link
          to={link.id}
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={closeMenu}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <header className={`w-full p-3 fixed top-0 bg-black text-white z-10`}>
      <nav
        className={`flex justify-between items-center md:w-[1000px] md:mx-auto`}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          className="text-xl cursor-pointer font-bold flex gap-1 items-center"
        >
          <h1 className="text-xl md:text-2xl flex gap-0.5">
            A
            <span>
              <DiRedhat className="text-3xl text-red-500" />
            </span>
          </h1>
        </Link>

        <div className="flex items-center gap-3">
          <ul className={`hidden md:flex gap-3 text-sm `}>{links}</ul>
          <span className="flex gap-2">
            <FaWhatsapp className="hover:text-green-500" />
            <FaXTwitter className="hover:text-white" />
            <FaLinkedin className="hover:text-blue-500" />
            <MdOutlineAlternateEmail className="hover:text-yellow-500" />
          </span>
        </div>

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
              ? `bg-[#fff] text-[#0D0D0D] bg-opacity-80 absolute top-[55px] w-full min-h-screen left-0 flex flex-col items-center gap-4 justify-center`
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
