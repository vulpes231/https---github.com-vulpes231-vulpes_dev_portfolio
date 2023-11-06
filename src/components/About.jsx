import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0d0d0d] p-6">
      <div className="lg:max-w-[1000px] mx-auto">
        <h3 className="text-2xl md:text-3xl text-[#fff] font-semibold mt-20 mb-10 capitalize inline-block border-b-4 border-b-[#F24B59]">
          About
        </h3>
        <div>
          {/* bio */}
          <p className="text-[#fff]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa iure
            repellendus ducimus laborum omnis perspiciatis expedita voluptas,
            corrupti hic quaerat consectetur praesentium itaque veritatis fugit,
            libero sunt assumenda? Blanditiis aliquid ducimus vero tenetur
            expedita quisquam a repudiandae quasi accusamus tempore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
