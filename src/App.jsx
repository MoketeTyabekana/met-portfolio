import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Learn from "./pages/Learn";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.currentTarget.pathname === "/" && e.currentTarget.hash) {
        e.preventDefault();
        const targetId = e.currentTarget.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      }
    };

    const navLinks = document.querySelectorAll("nav a[href^='#']");
    navLinks.forEach((link) => link.addEventListener("click", handleScroll));

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleScroll)
      );
    };
  }, []);

  return (
    <Router>
      <ScrollToSection />
      <div className="font-sans bg-gray-100 text-gray-800">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full  text-white p-4 shadow-md z-50 flex justify-between items-center lg:px-16 bg-gray-800 bg-clip-padding">
          <button
            className="bg-gray-900 text-white px-10 py-2 rounded-md font-semibold lg:hover:bg-gray-950 lg:shadow-[0_0_10px_rgba(100,130,246,0.7)] shadow-[0_0_5px_rgba(100,130,246,0.7)] animate-pulse"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1cxy5c3JlNk4jH0rYlSCEGky2gEQoDqP-/view",
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
                to="/"
                state={{ scrollTo: "about" }}
                className="block py-2 px-4 lg:hover:underline"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="text-left">
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                className="block py-2 px-4 lg:hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="text-left">
              <Link
                to="/"
                state={{ scrollTo: "contact" }}
                className="block py-2 px-4 lg:hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <Hero />
                {/* Sections */}
                <div>
                  <About />
                  <Projects />
                  <Contact />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
