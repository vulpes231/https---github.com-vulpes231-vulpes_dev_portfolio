import React from "react";

const Stacks = ({ pic, title }) => {
  return (
    <div className="flex flex-col items-center w-[80px]">
      <img src={pic} alt="" className=" bg-[#333] rounded-full w-full" />
      <p className="whitespace-nowrap">{title}</p>
    </div>
  );
};

export default Stacks;
