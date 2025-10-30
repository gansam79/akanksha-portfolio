import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaCertificate, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import logo from "../assets/logo1.png";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navItems = [
    { path: "/", name: "Home", icon: <FaHome className="mr-2" /> },
    { path: "/about", name: "About", icon: <FaUser className="mr-2" /> },
    { path: "/skills", name: "Skills", icon: <FaCode className="mr-2" /> },
    { path: "/projects", name: "Projects", icon: <FaProjectDiagram className="mr-2" /> },
    { path: "/experience", name: "Experience", icon: <FaBriefcase className="mr-2" /> },
    { path: "/certifications", name: "Certifications", icon: <FaCertificate className="mr-2" /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope className="mr-2" /> }
  ];

  const socialLinks = [
    { url: "https://www.linkedin.com/in/akanksha-dhekane-b17a70315/", icon: <FaLinkedin size={20} />, name: "LinkedIn" },
    { url: "https://github.com/akankshaaa27", icon: <FaGithub size={20} />, name: "GitHub" },
    // { url: "https://www.instagram.com/dhiraj._.patil_/profilecard/?igsh=emdwaHU5a2p2bmds", icon: <FaInstagram size={20} />, name: "Instagram" },
    // { url: "https://www.facebook.com/share/1DL1unsKjW/", icon: <FaFacebook size={20} />, name: "Facebook" }
  ];

  return (
    
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
    {/* // <footer className="bg-gray-300 text-white py-12 px-4"> */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-20 h-auto cursor-pointer mb-4 hover:opacity-80 transition-opacity"
              onClick={() => {
                scrollToTop();
                navigate('/');
              }}
            />
            <p className="text-gray-900">Full-Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => {
                      scrollToTop();
                      navigate(item.path);
                    }}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    {item.icon}
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright and Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Akanksha Dhekane. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            Back to top <FiArrowUp className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
