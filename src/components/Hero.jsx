import React from "react";
import mokete from "../assets/mokete.jpg"
import { Home, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Hero =() =>{
    return(
        <div
        id="home"
        className="h-screen flex md:flex-col   items-center md:justify-around justify-between bg-gray-900 text-white px-16 md:px-4"
      >
        <div className="flex flex-col  items-start w-1/2 md:w-full ">
          <h1 className="text-4xl font-bold mb-4">
            <span className=" text-gray-700">MR.</span> MOKETE TYABEKANA
          </h1>
          <p className="text-lg mb-8 max-w-3xl">
            Great front-end development isn’t just about writing code—it’s about
            crafting seamless, intuitive experiences that users love. Every
            pixel, every interaction, and every animation tells a story—make it
            a masterpiece.
          </p>
          <button className="bg-gray-950 text-white px-6 py-2 rounded hover:shadow-[0_0_5px_rgba(59,130,246,0.7)] animate-pulse">
            Hire Me
          </button>
          <div className="flex space-x-10 mt-8">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="relative md:w-full md:justify-center  w-1/2 flex justify-end">
          <img
            src={mokete}
            alt="Profile"
            className="w-[500px] h-[500px]  rounded-full object-cover 
         
        shadow-[0_0_40px_rgba(59,130,246,0.7)] animate-pulse "
          />
        </div>
      </div>

    )
}

export default Hero;