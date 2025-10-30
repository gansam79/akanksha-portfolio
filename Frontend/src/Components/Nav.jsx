import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { path: "", label: "Home" },
    { path: "about", label: "About Me" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
    { path: "experience", label: "Experience" },
    { path: "certifications", label: "Certifications" },
    { path: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white text-black p-4 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img className="w-28 h-auto cursor-pointer" onClick={() => navigate('/')} src={logo} alt="Logo" />

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link className="block py-2 px-3 hover:text-gray-500" to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="toggle menu"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  className="block py-2 px-3"
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close menu on item click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
