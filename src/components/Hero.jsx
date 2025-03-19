import React from "react";
import { motion } from "framer-motion";
import mokete from "../assets/mokete.jpg";
import FloatingSymbols from "../data/FloatingSymbols";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaPlay,
} from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      id="home"
      className="lg:h-full h-screen grid lg:grid-cols-2 gap-4 items-center  bg-gray-900 text-white lg:p-16 px-6 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FloatingSymbols />
      <motion.div
        className="flex flex-col lg:justify-start lg:text-start text-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="lg:text-4xl text-2xl font-bold mb-4">
          <span className="text-gray-700">MR.</span> MOKETE TYABEKANA
        </h1>
        <p className="text-sm lg:text-xl mb-8 ">
          Great front-end development isn’t just about writing code—it’s about
          crafting seamless, intuitive experiences that users love. Every pixel,
          every interaction, and every animation tells a story—make it a
          masterpiece.
        </p>

        <motion.div
          className="flex gap-x-6 mt-8 lg:w-fit w-full lg:justify-start justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="https://web.facebook.com/kayno.Eli.mokete/"
            target="blank"
            className="text-white lg:hover:text-gray-400"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://x.com/mokete__"
            target="blank"
            className="text-white lg:hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/eli.mokete/"
            target="blank"
            className="text-white lg:hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mokete-elias-tyabekana-88a22a143/"
            target="blank"
            className="text-white lg:hover:text-gray-400"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/MoketeTyabekana/"
            target="blank"
            className="text-white lg:hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://wa.me/27671134716"
            target="blank"
            className="text-white lg:hover:text-gray-400"
          >
            <FaWhatsapp size={24} />
          </a>
        </motion.div>

        <motion.div className=" flex items-center gap-x-2 mt-8 lg:w-fit w-full lg:justify-start justify-center hover:text-gray-400"
   initial={{ y: 20, opacity: 0 }}
   animate={{ y: 0, opacity: 1 }}
   transition={{ duration: 1, delay: 0.5 }}>
    <FaPlay
      size={16}
      className="  w-fit h-fit p-2 border-4 border-solid border-white rounded-full lg:text-start text-center"
    />
    <p className="text-sm lg:text-xl ">Video Intro</p>
  </motion.div>
      </motion.div>

      <motion.div
        className="relative flex lg:justify-end justify-center p-6 lg:py-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.img
          src={mokete}
          alt="Profile"
          className="lg:w-[80%] w-[85%] h-auto rounded-full object-cover shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
