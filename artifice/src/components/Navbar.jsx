import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollTop = scrollTop;
      AOS.init({ duration: 2000 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-10 left-1/2 transform -translate-x-1/2 w-[85%] lg:w-[70%] z-50 transition-transform duration-300 rounded-full shadow-lg border border-gray-500  ${
          isScrolled ? "-translate-y-60" : "translate-y-0"
        } bg-gray-800 bg-opacity-10 backdrop-blur-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 ">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-8 w-10" />
            </div>
            <div className="hidden md:flex">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-white hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </a>
                <a
                  href="#works"
                  className="text-white hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Our Works
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#mission"
                  className="text-white hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Mission & Vision
                </a>
              </div>
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:flex justify-between items-center h-16 mr-[74px]">
              <div className="bg-white absolute opacity-15  text-black rounded-full px-6 py-[18px] flex items-end justify-end space-x-2">
                <span className=" relative  text-black  font-bold ">
                  Contact Us
                </span>
                
              </div>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
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
        </div>
      </nav>

      <Sidebar isOpen={menuOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
