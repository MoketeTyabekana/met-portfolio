import React from "react";
import mokete from "../assets/mokete.jpg"
import { Home, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa";

const Hero =() =>{
    return(
        <div
        id="home"
        className="lg:h-full h-screen grid lg:grid-cols-2 gap-4 items-center justify-centers bg-gray-900 text-white lg:p-16 px-6 pt-40"
      >
        <div className="flex flex-col lg:justify-start lg:text-start text-center">
          <h1 className="lg:text-4xl text-2xl font-bold mb-4">
            <span className=" text-gray-700">MR.</span> MOKETE TYABEKANA
          </h1>
          <p className="text-sm lg:text-xl mb-8 max-w-3xl">
            Great front-end development isn’t just about writing code—it’s about
            crafting seamless, intuitive experiences that users love. Every
            pixel, every interaction, and every animation tells a story—make it
            a masterpiece.
          </p>
         
         
         
          <div className="flex space-x-10 mt-8 lg:w-fit w-full justify-center">
            <a href="https://web.facebook.com/kayno.Eli.mokete/" target="blank" className="text-white lg:hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="https://x.com/mokete__" target="blank" className="text-white lg:hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/eli.mokete/" target="blank" className="text-white lg:hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mokete-elias-tyabekana-88a22a143/" target="blank" className="text-white lg:hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://github.com/MoketeTyabekana/" target="blank" className="text-white lg:hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="https://wa.me/27671134716" target="blank" className="text-white lg:hover:text-gray-400">
    <FaWhatsapp size={24} />
  </a>
          </div>
        </div>
        <div className="relative  flex lg:justify-end justify-center  p-6 lg:py-20">
          <img
            src={mokete}
            alt="Profile"
            className="lg:w-[100%] w-[90%] h-auto rounded-full object-cover 
         
        shadow-[0_0_40px_rgba(59,130,246,0.7)]  "
          />
        </div>
      </div>

    )
}

export default Hero;