import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import GoUp from "./GoUp";
const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-2 items-center p-6 bg-black text-slate-300 font-medium border-t border-slate-800 text-xs font-[Ubuntu]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-6 text-slate-600">
          <Link
            to="https://wa.me/2347043978929"
            target="_blank"
            className="flex items-center gap-1 hover:text-green-500"
          >
            <FaWhatsapp className="text-xl" />
            <span>Whatsapp</span>
          </Link>
          <Link
            to="https://github.com/vulpes231"
            target="_blank"
            className="flex items-center gap-1 hover:text-white "
          >
            <FaGithub className="text-xl" />
            <span>Github</span>
          </Link>
          <Link
            to="https://twitter.com/4ULP35"
            target="_blank"
            className="flex items-center gap-1 hover:text-cyan-500"
          >
            <FaXTwitter className="text-xl" />
            <span>Twitter</span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/olayinka26/"
            target="_blank"
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </Link>
        </div>
        <p className="text-xs font-normal text-slate-600">
          {" "}
          &copy;Copyright 2024 by Adebayo Olayinka
        </p>
      </div>
    </footer>
  );
};

export default Footer;
