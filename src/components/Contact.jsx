import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-auto flex flex-col gap-10 bg-gray-950 text-white  p-16"
    >
      <h2 className="text-3xl font-semibold">Contact</h2>
      <div className=" flex justify-between items-center">
        <div className="text-xl  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] px-10 py-2">
          <h1>emtyabekana@gmail.com</h1>
        </div>

        <div className="flex space-x-10 mt-8 ">
          <a
            href="#"
            className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="#"
            className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="#"
            className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="#"
            className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
