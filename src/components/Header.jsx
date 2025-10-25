import React, { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-gray-800">
      {/* container matches sections width: max-w-7xl + same side padding */}
      <div className="max-w-8xl mx-auto w-full px-4 lg:px-16">
        <nav className="flex items-center justify-between h-16 text-white">
          <button
            className="bg-gray-900 text-white px-4 py-2 rounded-md font-semibold"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1z3rw5C0nE5At0MyUd5ooUCNRzYfKSVjO/view?usp=sharing",
                "_blank"
              )
            }
          >
            View Resume
          </button>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <ul
            className={`md:flex md:items-center md:space-x-6 absolute md:static left-0 right-0 md:right-auto md:left-auto ${
              isOpen ? "top-16 bg-gray-800 border-t border-gray-700 p-4 z-50" : "hidden"
            } md:block`}
          >
            <li>
              <Link to="/" onClick={closeMenu} className="block py-2 px-4">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" onClick={closeMenu} className="block py-2 px-4">
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu} className="block py-2 px-4">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="block py-2 px-4">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
