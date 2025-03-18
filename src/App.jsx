import { useEffect, useState } from "react";
import { Home, Menu, X } from "lucide-react";

import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact"

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
      <nav className="fixed top-0 left-0 w-full  text-white p-4 shadow-md z-50 flex justify-between items-center lg:px-16 lg:bg-gray-400 bg-gray-800 bg-clip-padding lg:backdrop-filter backdrop-blur-sm lg:bg-opacity-10">
      <button 
  className="bg-gray-900 text-white px-10 py-2 rounded-md font-semibold lg:hover:bg-gray-950 lg:shadow-[0_0_10px_rgba(100,130,246,0.7)] shadow-[0_0_5px_rgba(100,130,246,0.7)] animate-pulse"
  onClick={() => window.open("https://drive.google.com/file/d/1fMriqrijHa1ogmLBn-MqMmvsD2qnQar6/view", "_blank")}
>
  View Resume
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
            <a href="#home" className="block py-2 px-4 lg:hover:underline">
              Home
            </a>
          </li>
          <li className="text-left">
            <a href="#about" className="block py-2 px-4 lg:hover:underline">
              About
            </a>
          </li>
          <li className="text-left">
            <a href="#projects" className="block py-2 px-4 lg:hover:underline">
              Projects
            </a>
          </li>
          <li className="text-left">
            <a href="#contact" className="block py-2 px-4 lg:hover:underline  ">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Sections */}
      <div className="">
        {/* About me section */}
        <About />
        {/* My projects section */}
        <Projects />
        {/* Contact me section */}
        <Contact/>
      </div>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default App;
