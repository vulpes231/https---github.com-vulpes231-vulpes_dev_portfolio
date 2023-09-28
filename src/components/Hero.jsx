import React from "react";
import { myStyles } from "../styles";

const Hero = () => {
  return (
    <section id="hero" className={`${myStyles.screenSize}`}>
      <div className={` flex flex-col gap-6`}>
        <h1
          className={`${myStyles.bigFont} ${myStyles.altFgColor} text-space font-bold md:w-[80%] `}
        >
          Unlocking Possibilities Through Code.
        </h1>
        <h3
          className={`${myStyles.normalFont} md:${myStyles.smallFont} ${myStyles.altColor2} tracking-wider leading-relaxed md:w-[70%]`}
        >
          Turning innovative ideas into functional software solutions is my
          forte. With a passion for crafting digital experiences that not only
          meet but exceed expectations, I bring a unique blend of creativity and
          technical expertise to the table. My mission? To empower businesses
          through the transformative power of code.
        </h3>
        <button className="border border-[#66A1E8] p-3 rounded-lg capitalize md:w-[250px] tracking-wider font-semibold">
          View my projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
