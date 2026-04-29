import React, { useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-gray-800 lg:bg-transparent lg:top-6"
    >
      {/* container matches sections width: max-w-7xl + same side padding */}
      <div className="max-w-8xl mx-auto w-full px-4 lg:px-4 lg:max-w-6xl lg:bg-gray-800 lg:rounded-full lg:shadow-xl lg:border lg:border-gray-700/50 lg:backdrop-blur-sm lg:flex lg:items-center">
        <nav className="flex items-center justify-between h-16 text-white w-full">
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1mOSzSMPSJ_KrxXjp4oZUnak3IBegTa4-/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              View Resume
            </button>
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1ePRk1V54VAmOz6Gexd-NNEWyC60-nTMy/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Graphic Portfolio
            </button>
          </div>

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
              <a
                href="#home"
                onClick={closeMenu}
                className="relative block py-2 px-4 pb-3 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="relative block py-2 px-4 pb-3 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="relative block py-2 px-4 pb-3 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="relative block py-2 px-4 pb-3 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
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
