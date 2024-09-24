import React from "react";

const Stacks = ({ pic, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={pic} alt="" className="rounded-full w-[50px]" />
      <p className="text-sm font-bold">{title}</p>
    </div>
  );
};

export default Stacks;
