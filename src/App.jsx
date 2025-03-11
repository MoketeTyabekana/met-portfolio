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
      <nav className="fixed top-0 left-0 w-full  text-white p-4 shadow-md z-50 flex justify-between items-center px-16 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <button className="bg-black text-white px-10 py-2 rounded-md font-semibold hover:bg-gray-700 ">
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
          <h1 className="text-4xl font-bold mb-4">
            <span className=" text-gray-700">MR.</span> MOKETE
            TYABEKANA
          </h1>
          <p className="text-lg mb-8 max-w-2xl">
            Great front-end development isn’t just about writing code—it’s about
            crafting seamless, intuitive experiences that users love. Every
            pixel, every interaction, and every animation tells a story—make it
            a masterpiece.
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:shadow-[0_0_5px_rgba(59,130,246,0.7)] animate-pulse">
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
         
        shadow-[0_0_40px_rgba(59,130,246,0.7)] animate-pulse "
          />
        </div>
      </div>

      {/* Sections */}
      <div className="">
        <section id="about" className="h-screen  bg-black py-8 px-16">
          <div
            className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20
 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]"
          >
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p>
              I’m Mokete Elias Tyabekana, a passionate Frontend Developer &
              UI/UX Designer with expertise in React, JavaScript, and Tailwind
              CSS, dedicated to building responsive and user-friendly
              applications. With a Diploma in Information Technology from
              Central University of Technology, Free State, I have experience in
              web development, UI/UX design, and IT support, having worked as an
              IT Officer at Softstart BTI (Botshabelo Digital Hub), where I
              mentored interns and assisted startups. I enjoy transforming ideas
              into digital experiences, whether through intuitive UI designs in
              Figma or developing scalable web applications. Currently, I’m
              expanding my knowledge in React Native and working on projects
              that merge creativity with functionality to solve real-world
              problems.
            </p>
          </div>

          <div className=" flex flex-row gap-10 w-full mt-10">
            <div className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-1/2">
              <h2 className="text-xl font-semibold">Education</h2>
              <ul>
                <li>
                  Diploma in Information Technology: Central University Of
                  Technology
                </li>
                <li>
                  National Senior Certificate [Grade 12/Matric] : Kagisho
                  Comprehensive Secondary Scchool
                </li>
              </ul>
            </div>

            <div
              className="px-4 py-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 text-white  flex flex-col 
gap-4 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] w-1/2"
            >
              <h2 className="text-xl font-semibold">Certifications / Short Courses</h2>
              <ul>
                <li>Front-End Web Development Program [ALX Africa]</li>
                <li>National Senior Certificate [freeCodeCamp]</li>
                <li>Web Programming Foundations [LinkedIn]</li>
                <li>HTML Essential Training [LinkedIn]</li>
                <li>JavaScript Essentials [Cisco]</li>
                <li>Professional  Foundations [ALX Africa]</li>
              </ul>
            </div>
          </div>
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
