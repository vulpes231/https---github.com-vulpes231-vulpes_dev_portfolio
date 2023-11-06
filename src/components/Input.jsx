import React from "react";

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full py-2 px-1 outline-none border border-[#F24B59] text-black"
      />
    </div>
  );
};

export default Input;
