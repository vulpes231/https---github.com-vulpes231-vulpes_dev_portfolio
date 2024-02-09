import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
// import GoUp from "./GoUp";
const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-2 items-center p-6 bg-[#0f0f0f] text-slate-200 font-extralight ">
      <h3 className="">Adebayo Olayinka </h3>
      <p>2023 &copy; All Rights Reserved</p>
      <div className="flex flex-col items-center">
        <p>Social media</p>
        <div className="flex gap-2">
          <Link to="https://github.com/vulpes231" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://twitter.com/4ULP35" target="_blank">
            <FaTwitter />
          </Link>
          <Link to="https://www.linkedin.com/in/olayinka26/" target="_blank">
            <FaLinkedin />
          </Link>
        </div>
        {/* <GoUp /> */}
      </div>
    </footer>
  );
};

export default Footer;
