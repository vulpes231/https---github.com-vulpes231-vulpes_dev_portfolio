import React from "react";

const Stacks = ({ pic, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={pic} alt="" className="w-[80px] bg-[#333] rounded-full" />
      <p className="whitespace-nowrap">{title}</p>
    </div>
  );
};

export default Stacks;
