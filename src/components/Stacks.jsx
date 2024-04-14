import React from "react";

const Stacks = ({ pic, title }) => {
  return (
    <div className="flex flex-col items-center border-2 border-t-[#ED4958] w-[150px] h-[100px] border-r-blue-600 border-l-lime-600 py-2 rounded-lg justify-between cursor-pointer hover:border-r-gray-600 hover:border-l-purple-600 hover:border-b-[#ED4958] hover:border-t-teal-500">
      <img src={pic} alt="" className=" bg-[#333] rounded-full w-[50px]" />
      <p className="text-sm font-bold">{title}</p>
    </div>
  );
};

export default Stacks;
