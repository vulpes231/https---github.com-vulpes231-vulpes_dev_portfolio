import React, { useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const links = navLinks.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });

  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <header className="w-full p-6">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <Link className="font-bold text-2xl cursor-pointer">AO</Link>
        {/* links */}
        <ul className="hidden md:flex gap-4 text-sm ">{links}</ul>
        <div
          onClick={handleToggle}
          className="font-bold text-xl sm:hidden cursor-pointer"
        >
          {!toggle ? <FaBars /> : <FaTimes />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
