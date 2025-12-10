import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" max-w-8xl h-auto flex flex-col lg:gap-10 gap-4 bg-gray-950 text-white p-4 lg:p-16"
    >
      <h2 className=" text-xl lg:text-3xl font-semibold">Contact</h2>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <a
          href="mailto:emtyabekana@gmail.com"
          className="lg:text-xl text-lg bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white flex flex-col text-center lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] px-10 py-2 mb-4 lg:mb-0"
        >
          emtyabekana@gmail.com
        </a>

        <div className="flex justify-around space-x-4 lg:space-x-10">
          <a
            href="https://www.linkedin.com/in/mokete-elias-tyabekana-88a22a143/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white flex flex-col lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/MoketeTyabekana/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://web.facebook.com/kayno.Eli.mokete/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://x.com/mokete__"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/eli.mokete/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800/20 text-white lg:hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] p-2"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      
    </section>
    
  );
};

export default Contact;
