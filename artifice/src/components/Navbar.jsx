import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/AR.png"; // adjust your logo path as needed
import ContactSvg from "./ContactSvg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[85%] lg:w-[70%] z-50 transition-transform duration-300 rounded-full shadow-lg border border-gray-500 bg-gray-800 bg-opacity-10 backdrop-blur-lg 2xl:w-[90%]">
        <div className="flex justify-between items-center w-full h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 ml-5">
            <img src={logo} alt="Logo" className="h-14 w-12" />
          </div>

          {/* Centered Links */}
          <div className="flex-grow hidden xl:block">
            <div className="flex justify-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-[#106eea] transition-all px-3 py-2 rounded-md font-medium md:text-sm lg:text-base"
                onClick={navigateHome}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#106eea] transition-all px-3 py-2 rounded-md font-medium md:text-sm lg:text-base"
              >
                About Us
              </a>
              <a
                href="#works"
                className="text-white hover:text-[#106eea] transition-all px-3 py-2 rounded-md font-medium md:text-sm lg:text-base"
              >
                Our Works
              </a>
              <a
                href="#services"
                className="text-white hover:text-[#106eea] transition-all px-3 py-2 rounded-md font-medium md:text-sm lg:text-base"
              >
                Services
              </a>
              <a
                href="#mission"
                className="text-white hover:text-[#106eea] transition-all px-3 py-2 rounded-md font-medium md:text-sm lg:text-base"
              >
                Mission & Vision
              </a>
            </div>
          </div>

          {/* Contact Us Button on the right */}
          <div className="flex-shrink-0 hidden xl:block">
            <a href="#contact" className="inline-block">
              <ContactSvg />
            </a>
          </div>

          {/* Sidebar Toggle for mobile view */}
          <div className="block xl:hidden">
            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={menuOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
