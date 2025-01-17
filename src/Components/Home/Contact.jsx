"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage("Message sent successfully!");
    reset(); // Reset the form
    setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 5 seconds
  };

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32 px-4 lg:py-[180px] mb-32 lg:mb-[180px] flex items-center justify-center"
      style={{ backgroundImage: `url('/Images/Contact/background.png')` }}
      id="contact"
    >
      <div className="rounded-lg max-w-[1420px] mx-auto flex justify-between items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-40 items-center justify-between">
          {/* Text */}
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-[32px] lg:text-[40px] leading-normal font-bold text-white font-georgia">
              Find your perfect fit Unlock doors to new beginnings.
            </h1>
            <div className="mt-12 flex flex-wrap gap-12 justify-center">
              <a
                href="#"
                className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 hover:shadow-md font-open-sans"
              >
                Explore Listing
              </a>
              <a
                href="#"
                className="sm:w-auto rounded-md lg:rounded-xl bg-white px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-medium md:font-semibold text-secondary shadow hover:bg-gray-100  focus:outline-none focus:ring active:bg-gray-100  hover:shadow-md font-open-sans"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Form */}
          <div className="text-white " data-aos="fade-left">
            <h2 className="text-[32px] lg:text-[40px] font-bold mb-4 font-georgia">
              Contact Us
            </h2>
            <p className="mb-4 text-lg font-normal font-montserrat">
              For any further questions or purchase
            </p>
            <br />
            <form
              className="space-y-8 text-lg font-normal font-montserrat"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="md:flex md:space-x-4  ">
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className="md:w-1/2 w-full p-2 bg-transparent border-b border-white text-white focus:outline-none placeholder-white"
                />{" "}
                <input
                  {...register("address", { required: "Address is required" })}
                  placeholder="Address"
                  className="md:w-1/2 w-full p-2 bg-transparent border-b border-white text-white focus:outline-none placeholder-white"
                />
              </div>
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
                placeholder="Your Email"
                type="email"
                className="w-full p-2 bg-transparent border-b border-white text-white focus:outline-none placeholder-white"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <textarea
                {...register("message", { required: "Message is required" })}
                rows="5"
                placeholder="Type Your Message ..."
                className="w-full p-2 bg-transparent border-b border-white text-white focus:outline-none placeholder-white"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}

              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}

              <input
                type="submit"
                value="Send"
                className="w-full text-secondary rounded-xl bg-[#F7EAD9] px-[33px] py-[14px] text-xl lg:text-2xl font-medium shadow cursor-pointer hover:shadow-md hover:bg-gray-100 focus:outline-none focus:ring active:bg-gray-100"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
