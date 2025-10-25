import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    // Use scrollIntoView for smooth scroll; sections have scroll-margin set in Home
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 font-sans bg-gray-800 text-white shadow-md"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:px-8">
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
          className={`md:flex md:items-center md:space-x-6 absolute md:static left-0 right-0 md:right-auto md:left-auto md:top-auto md:w-auto ${
            isOpen
              ? "top-16 bg-gray-800 border-t border-gray-700 p-4 z-50"
              : "hidden"
          } md:block`}
        >
          <li>
            <a href="#home" onClick={scrollToSection("home")} className="block py-2 px-4">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={scrollToSection("about")} className="block py-2 px-4">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={scrollToSection("projects")}
              className="block py-2 px-4"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToSection("contact")} className="block py-2 px-4">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
