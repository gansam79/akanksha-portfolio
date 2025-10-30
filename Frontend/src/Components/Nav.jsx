import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white text-black p-4 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img className="w-28 h-auto cursor-pointer" onClick={() => navigate('/')} src={logo} alt="Logo" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Me" },
            { path: "/skills", label: "Skills" },
            { path: "/projects", label: "Projects" },
            { path: "/experience", label: "Experience" },
            { path: "/certifications", label: "Certifications" },
            { path: "/contact", label: "Contact" }
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block py-2 px-3 hover:text-gray-500"
                onClick={() => {
                  setIsOpen(false); // Close menu on small devices
                  window.scrollTo(0, 0); // Ensure page loads from top
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
