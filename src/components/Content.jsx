import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";

const Content = () => {
  // const expRef = useRef(null);
  return (
    <div className="">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Content;
