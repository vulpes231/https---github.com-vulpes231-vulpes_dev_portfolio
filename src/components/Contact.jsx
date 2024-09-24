import React, { useEffect, useState } from "react";
import Input from "./Input";
import { up } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, reset } from "../features/sendMessageSlice";
import { MdClose } from "react-icons/md";

const initState = {
  name: "",
  email: "",
  message: "",
};

const Contact = ({ close }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initState);
  const [formError, setFormError] = useState(false);

  const { loading, sent, error } = useSelector((state) => state.sendmessage);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.email && form.name && form.message) {
      dispatch(sendMessage(form));
    } else {
      setFormError(true);
    }
  }

  function resetForm() {
    setForm(initState);
  }

  // Clean up
  useEffect(() => {
    let timeout;
    if (formError) {
      timeout = setTimeout(() => {
        setFormError(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [formError]);

  useEffect(() => {
    let timeout;
    if (sent) {
      resetForm();
      timeout = setTimeout(() => {
        dispatch(reset());
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [dispatch, sent]);

  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 p-3`}
      onClick={close}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-3xl text-black font-semibold mb-5 capitalize">
            Leave a message.
          </h3>
          <MdClose
            className="text-xl cursor-pointer text-black"
            onClick={close}
          />
        </div>

        <form className="flex flex-col gap-4 font-extralight w-full">
          <Input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleInputChange}
            name="name"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleInputChange}
            name="email"
          />
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="5"
            value={form.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="w-full py-2 px-4 outline-none border-2 focus:outline-green-500 focus:border-none rounded-md text-black"
          ></textarea>
          {formError ? (
            <p className="text-red-500 font-bold">Invalid submission data</p>
          ) : error ? (
            <p className="text-red-500 font-bold">{error}</p>
          ) : null}
          {sent && (
            <p className="font-bold text-green-500">
              Message sent successfully.
            </p>
          )}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-green-800 text-[#fff] rounded-md font-semibold hover:bg-transparent hover:border-2 hover:border-green-500 transition"
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
