import React, { useState } from "react";
import { navLinks } from "../constants";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import { Link as MyLink } from "react-router-dom";
import { DiRedhat } from "react-icons/di";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Contact from "./Contact";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function handleModal() {
    setShowContactModal(true);
  }
  function closeContact() {
    setShowContactModal(false);
  }

  function closeMenu() {
    setToggle(false);
  }

  const links = navLinks.map((link, index) => {
    return (
      <li
        key={link.id}
        className={`cursor-pointer hover:text-green-300 font-medium text-xs uppercase font-[Ubuntu]`}
      >
        {index === 0 && (
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
        )}

        {index === 1 && (
          <MyLink to={link.path} target="_blank" onClick={closeMenu}>
            {link.title}
          </MyLink>
        )}
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
              <DiRedhat className="text-3xl text-green-300" />
            </span>
          </h1>
        </Link>

        <div className="flex items-center gap-3">
          <ul className={`hidden md:flex gap-3 text-sm `}>{links}</ul>
          <span className="flex gap-2">
            <MyLink
              to="https://wa.me/2347043978929"
              target="_blank"
              className="hover:text-green-500 cursor-pointer"
            >
              <FaWhatsapp />
            </MyLink>
            <MyLink
              to="https://twitter.com/vulpes26"
              target="_blank"
              className="hover:text-cyan-500 cursor-pointer"
            >
              <FaXTwitter />
            </MyLink>
            <MyLink
              to="https://www.linkedin.com/in/olayinka26/"
              target="_blank"
              className="hover:text-blue-500 cursor-pointer"
            >
              <FaLinkedin />
            </MyLink>
            <MyLink
              to="https://github.com/vulpes231"
              target="_blank"
              className="hover:text-white cursor-pointer"
            >
              <FaGithub />
            </MyLink>
            <button
              onClick={handleModal}
              className="hover:text-yellow-500 cursor-pointer"
            >
              <MdOutlineAlternateEmail />
            </button>
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
      {showContactModal && <Contact close={closeContact} />}
    </header>
  );
};

export default Header;
