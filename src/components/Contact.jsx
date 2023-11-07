import React, { useState } from "react";
import Input from "./Input";
import { contact } from "../assets";
import { motion } from "framer-motion";

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
      <div className="lg:max-w-[1000px] mx-auto  gap-2">
        <h3 className="text-2xl md:text-3xl text-[#fff] font-semibold mt-20 mb-5 capitalize inline-block border-b-4 border-b-[#F24B59] ">
          Let's Connect
        </h3>
        <p className="my-2 lg:w-[60%]">
          I'm always open to new opportunities and collaborations. If you'd like
          to discuss a potential project or just chat about technology, feel
          free to reach out to me.
        </p>
      </div>

      <div className="lg:max-w-[1000px] mx-auto flex flex-col gap-2 lg:flex-row-reverse md:gap-6 lg:mt-10">
        <motion.form
          initial={{ translateX: 500 }}
          whileInView={{ translateX: 0 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 0.5 },
          }}
          action=""
          className="flex flex-col gap-2 font-extralight w-full"
        >
          <div className="flex flex-col">
            <label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleInputChange}
                name="user"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleInputChange}
                name="email"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                className="w-full py-2 px-1 outline-none border border-[#F24B59] text-black"
              ></textarea>
            </label>
          </div>
          <button className="w-full py-3 px-1 outline-none border-none bg-[#F24B59] text-[#fff] rounded-md font-semibold mt-5">
            Send Message
          </button>
        </motion.form>
        <motion.figure
          initial={{ translateX: -500 }}
          whileInView={{ translateX: 0 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 0.5 },
          }}
          className="hidden w-full lg:flex md:items-center md:justify-between md:opacity-10 "
          style={{ opacity: 0.5 }}
        >
          <img src={contact} alt="" className="w-full " />
        </motion.figure>
      </div>
    </section>
  );
};

export default Contact;
