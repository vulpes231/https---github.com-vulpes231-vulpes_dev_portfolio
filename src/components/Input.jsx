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
        autoComplete="off"
        className="w-full py-2 px-4 outline-none border-2 border-[#F24B59] text-[#fff] bg-transparent rounded-md"
      />
    </div>
  );
};

export default Input;
