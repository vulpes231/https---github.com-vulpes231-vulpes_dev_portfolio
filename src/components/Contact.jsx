import React, { useEffect, useState } from "react";
import Input from "./Input";
import { up } from "../assets";

import { styles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, reset } from "../features/sendMessageSlice";

const initState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
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

  // clean up
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
    <section
      id="contact"
      className={`${styles.colors.darkBg} ${styles.padding.large} min-h-screen `}
    >
      <div className="lg:max-w-[1000px] lg:mx-auto">
        <div className="gap-2">
          <h3 className="text-2xl md:text-3xl text-[#fff] font-semibold mt-20 mb-5 capitalize inline-block border-b-4 border-b-[#F24B59] ">
            Let's Connect
          </h3>
          <p className="my-2 lg:w-[60%]">
            I'm always open to new opportunities and collaborations. If you'd
            like to discuss a potential project or just chat about technology,
            feel free to reach out to me.
          </p>
        </div>

        <div className="lg:flex lg:flex-row-reverse w-full gap-10">
          <form
            action=""
            className="flex flex-col gap-2 font-extralight w-full"
          >
            <div className="flex flex-col">
              <label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={form.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
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
            {formError ? (
              <p className="text-red-500 font-bold">Invalid submission data</p>
            ) : error ? (
              <p className="text-red-500 font-bold">{error}</p>
            ) : null}
            {sent && (
              <p className="font-bold text-green-500">
                Message sent succesfully.
              </p>
            )}
            <button
              onClick={handleSubmit}
              className="w-full py-3 px-1 outline-none border-none bg-[#F24B59] text-[#fff] rounded-md font-semibold mt-5"
            >
              {loading ? "Sending Message..." : " Send Message"}
            </button>
          </form>
          <figure className="w-full flex items-center justify-center mt-5 lg:mt-0">
            <img src={up} alt="" className="w-full rounded-full" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Contact;
