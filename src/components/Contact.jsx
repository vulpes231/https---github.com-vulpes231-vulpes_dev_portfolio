import React, { useState } from "react";
import Input from "./Input";

const Contact = () => {
  const initState = {
    user: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(initState);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0d0d0d]  p-6 text-[#fff]"
    >
      <div className="lg:max-w-[1000px] mx-auto">
        <h3 className="text-2xl md:text-3xl text-[#fff] font-semibold mt-20 mb-10 capitalize inline-block border-b-4 border-b-[#F24B59]">
          Contact
        </h3>

        <form action="" className="flex flex-col gap-2 font-extralight">
          <div className="flex flex-col">
            <label htmlFor="">Name:</label>
            <Input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleInputChange}
              name="user"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email:</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Message:</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={form.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              className="w-full py-2 px-1 outline-none border border-[#F24B59] text-black"
            ></textarea>
          </div>
          <button className="w-full py-3 px-1 outline-none border-none bg-[#F24B59] text-[#fff] rounded-md font-semibold mt-5">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
