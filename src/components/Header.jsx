import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Navigation Bar */}
      <nav className="top-0 left-0 w-full text-white p-4 shadow-md z-50 flex justify-between items-center lg:px-16 bg-gray-800 bg-clip-padding">
        <button
          className="bg-gray-900 text-white px-10 py-2 rounded-md font-semibold lg:hover:bg-gray-950 lg:shadow-[0_0_10px_rgba(100,130,246,0.7)] shadow-[0_0_5px_rgba(100,130,246,0.7)] animate-pulse"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1z3rw5C0nE5At0MyUd5ooUCNRzYfKSVjO/view?usp=sharing/view",
              "_blank"
            )
          }
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
          className={`md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-16 left-0 w-full md:w-auto md:top-0 bg-gray-800 md:bg-transparent border-gray-400/10 border-2 md:border-none p-4 md:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="text-left">
            <Link
              to="/"
              className="block py-2 px-4 lg:hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="text-left">
            <Link
              to="/about-me"
              className="block py-2 px-4 lg:hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="text-left">
            <Link
              to="/projects"
              className="block py-2 px-4 lg:hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="text-left">
            <Link
              to="/contact"
              className="block py-2 px-4 lg:hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="text-left">
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
