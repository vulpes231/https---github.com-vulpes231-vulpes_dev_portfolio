import React from "react";
import { BsArrowBarUp } from "react-icons/bs";

const Hero = () => {
  return (
    <section id="hero" className="hero p-6 min-h-[calc(100vh - 70px)] ">
      <div className="flex flex-col gap-4 md:text-center">
        <h3 className=" text-3xl md:text-4xl leading-7">
          Unlocking Possibilities Through{" "}
          <span className="text-[#F24B59]">Code</span>.
        </h3>
        <p className="leading-4 font-thin text-sm text-slate-200 font-[Montserrat] md:text-md md:w-[80%] md:mx-auto">
          Turning innovative ideas into functional software solutions is my
          forte. With a passion for crafting digital experiences that not only
          meet but exceed expectations, I bring a unique blend of creativity and
          technical expertise to the table. My mission? To empower businesses
          through the transformative power of code.
        </p>
        <button className="border border-[#F24B59] p-3 rounded-lg capitalize md:w-[250px] mx-auto tracking-wider font-extralight flex items-center gap-2 justify-center text-sm font-[Montserrat] hover:bg-white hover:text-[#F24B59] hover:border-white">
          View my projects
          <BsArrowBarUp />
        </button>
      </div>
    </section>
  );
};

export default Hero;
