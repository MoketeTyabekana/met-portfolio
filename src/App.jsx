import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import mokete from "./assets/mokete.jpg";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Close menu after clicking
      }
    };

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => link.addEventListener("click", handleScroll));

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleScroll)
      );
    };
  }, []);

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-50 flex justify-between items-center px-16">
        <button className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-700">
          Download Resume
        </button>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={`md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-16 left-0 w-full md:w-auto md:top-0 bg-gray-900 md:bg-transparent p-4 md:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="text-left">
            <a href="#home" className="block py-2 px-4 hover:underline">
              Home
            </a>
          </li>
          <li className="text-left">
            <a href="#about" className="block py-2 px-4 hover:underline">
              About
            </a>
          </li>
          <li className="text-left">
            <a href="#projects" className="block py-2 px-4 hover:underline">
              Projects
            </a>
          </li>
          <li className="text-left">
            <a href="#contact" className="block py-2 px-4 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="h-screen flex items-center justify-between bg-black text-white px-16"
      >
        <div className="flex flex-col items-start w-1/2">
          <h1 className="text-6xl font-bold mb-4"><span className=" text-2xl text-gray-700">MR.</span> MOKETE TYABEKANA</h1>
          <p className="text-lg mb-8 max-w-2xl">
          Great front-end development isn’t just about writing code—it’s about crafting seamless, intuitive experiences that users love. Every pixel, every interaction, and every animation tells a story—make it a masterpiece.
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 ">
            Hire Me
          </button>
          <div className="flex space-x-6 mt-8">
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
        <div className="relative  w-1/2 flex justify-end">
          <img
            src={mokete}
            alt="Profile"
            className="w-96 h-96 rounded-full object-cover 
         
        shadow-[0_0_30px_rgba(255,255,255,0.6)] "
          />
        </div>
      </div>

      {/* Sections */}
      <div className="pt-16">
        <section
          id="about"
          className="h-screen flex items-center justify-center bg-green-200"
        >
          <h2 className="text-3xl font-semibold">About Me</h2>
        </section>

        <section
          id="projects"
          className="h-screen flex items-center justify-center bg-yellow-200"
        >
          <h2 className="text-3xl font-semibold">Projects</h2>
        </section>

        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-red-200"
        >
          <h2 className="text-3xl font-semibold">Contact</h2>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white flex justify-between px-4 py-10">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <p>Mokete Elias Tyabekana</p>
      </footer>
    </div>
  );
};

export default App;
