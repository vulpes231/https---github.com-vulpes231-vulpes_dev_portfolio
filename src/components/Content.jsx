import React from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const Content = () => {
  // const expRef = useRef(null);
  return (
    <div className="">
      <Hero />
      {/* <Experience /> */}
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Content;
