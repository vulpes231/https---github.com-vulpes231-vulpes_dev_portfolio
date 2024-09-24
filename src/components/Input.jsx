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
        className="w-full py-2 px-4 outline-none border-2 focus:outline-green-500 focus:border-none bg-transparent rounded-md text-black"
      />
    </div>
  );
};

export default Input;
