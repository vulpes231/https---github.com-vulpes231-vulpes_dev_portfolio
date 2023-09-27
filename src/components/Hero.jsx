import React from "react";
import { myStyles } from "../styles";

const Hero = () => {
  return (
    <section>
      <div className={myStyles.screenSize}>
        <h1 className={`${myStyles.bigFont}`}>
          Unlocking Possibilities Through Code
        </h1>
        <h3>
          Turning innovative ideas into functional software solutions is my
          forte. With a passion for crafting digital experiences that not only
          meet but exceed expectations, I bring a unique blend of creativity and
          technical expertise to the table. My mission? To empower businesses
          through the transformative power of code.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
