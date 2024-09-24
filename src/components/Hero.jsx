import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { styles } from "../constants/styles";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`w-full ${styles.padding.large} hero min-h-screen flex items-center justify-center`}
    >
      <div className="w-full h-full bg-black absolute bg-opacity-40"></div>
      <div
        className={`flex flex-col ${styles.gap.large} w-full md:max-w-[900px] md:mx-auto z-[1]`}
      >
        <h3
          className={`text-2xl md:text-5xl leading-7 ${styles.fontFamily.primary} whitespace-nowrap font-bold text-[#fff] md:text-center`}
        >
          Adebayo <span className="text-green-600">Olayinka.</span>
        </h3>
        <p
          className={`${styles.colors.lightText} capitalize w-full md:w-[95%] md:mx-auto ${styles.fontFamily.primary} md:text-center`}
        >
          A passionate full-stack software developer with over 3 years of
          experience in crafting modern, user-friendly interfaces and robust
          backend solutions. I’ve successfully collaborated with diverse clients
          and businesses to deliver innovative and efficient software that meets
          their unique needs.
        </p>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          className={`bg-green-800 flex items-center ${styles.gap.small} ${styles.colors.lightText} rounded-3xl mt-5 justify-center font-bold ${styles.fontFamily.primary} text-sm md:text-lg capitalize md:w-[450px] md:mx-auto hover:border hover:bg-green-600 hover:bg-transparent cursor-pointer px-5 py-2.5 shadow-sm shadow-slate-500 border-none`}
        >
          <BsArrowLeftRight className="font-semibold" size={18} />
          recent projects
        </Link>
      </div>
    </section>
  );
};

export default Hero;
