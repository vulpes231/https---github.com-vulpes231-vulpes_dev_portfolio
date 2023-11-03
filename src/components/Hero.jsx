import React from "react";
import { BsArrowBarUp } from "react-icons/bs";

const Hero = () => {
  return (
    <section id="hero" className="hero p-6">
      <div className="flex flex-col gap-4  ">
        <h1 className="font-bold text-2xl leading-6">
          Unlocking Possibilities Through Code.
        </h1>
        <h3 className="leading-4 font-extralight text-sm text-slate-3 00">
          Turning innovative ideas into functional software solutions is my
          forte. With a passion for crafting digital experiences that not only
          meet but exceed expectations, I bring a unique blend of creativity and
          technical expertise to the table. My mission? To empower businesses
          through the transformative power of code.
        </h3>
        <button className="border border-[#fff] p-3 rounded-lg capitalize md:w-[250px] tracking-wider font-extralight flex items-center gap-2 justify-center text-sm">
          View my projects
          <BsArrowBarUp />
        </button>
      </div>
    </section>
  );
};

export default Hero;
