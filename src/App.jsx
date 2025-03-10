import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
      navLinks.forEach((link) => link.removeEventListener("click", handleScroll));
    };
  }, []);

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-50 flex justify-between items-center px-6">
        <button className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-700">
          Download Resume
        </button>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className={`md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-16 left-0 w-full md:w-auto md:top-0 bg-gray-900 md:bg-transparent p-4 md:p-0 ${isOpen ? "block" : "hidden"}`}>
          <li className="text-left"><a href="#home" className="block py-2 px-4 hover:underline">Home</a></li>
          <li className="text-left"><a href="#about" className="block py-2 px-4 hover:underline">About</a></li>
          <li className="text-left"><a href="#projects" className="block py-2 px-4 hover:underline">Projects</a></li>
          <li className="text-left"><a href="#contact" className="block py-2 px-4 hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="home" className="h-screen flex items-center justify-between bg-black text-white px-8">
        <div className="flex flex-col items-start">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full mb-8 hover:bg-gray-700">
            Download Resume
          </button>
          <h1 className="text-6xl font-bold mb-4">MR. MOKETE TYABEKANA</h1>
          <p className="text-lg mb-8 max-w-2xl">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Pulvinar Eget Eros Vel Ultricies. Curabitur Aliquam Lacinia Enim, Quis Maximus Diam Malesuada Ac. Sed Maximus Orci Malesuada,
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700">
            Hire Me
          </button>
          <div className="flex space-x-4 mt-8">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="relative">
          <img src="path/to/your/image.jpg" alt="Profile" className="w-64 h-64 rounded-full object-cover shadow-lg" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 blur-lg"></div>
        </div>
      </div>

      {/* Sections */}
      <div className="pt-16">
        <section id="about" className="h-screen flex items-center justify-center bg-green-200">
          <h2 className="text-3xl font-semibold">About Me</h2>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center bg-yellow-200">
          <h2 className="text-3xl font-semibold">Projects</h2>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-red-200">
          <h2 className="text-3xl font-semibold">Contact</h2>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
