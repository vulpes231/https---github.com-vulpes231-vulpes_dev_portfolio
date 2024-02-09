import React from "react";

import { HiArrowCircleUp } from "react-icons/hi";

const GoUp = () => {
  return (
    <div className="absolute bottom-0 right-0 bg-white w-[20px] m-4 rounded-full flex items-center justify-center">
      <HiArrowCircleUp className="text-black" />
    </div>
  );
};

export default GoUp;
