import artLogo from "../assets/Footer.png";
import Media from "./Buttons/media-icon/media.jsx";

const Footer = () => {
  return (
    <footer className="bg-[#106eea] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:mb-0" data-aos="fade-up" data-aos-delay="50">
            <a href="#" className="flex flex-col items-center">
              <img
                src={artLogo}
                alt="Artifice Labs Logo"
                className="h-16 flex items-center justify-center mr-3"
              />
              <span className="font-bold text-xl">Artifice Labs</span>
            </a>
            <div className="mt-4 mb-4 w-full">
              <hr className="border-blue-400 w-full" />
            </div>
          </div>

          <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="250">
            <h3 className="font-semibold text-center mb-4">More</h3>
            <ul className="flex flex-col md:flex-row gap-6">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mission & Vision
                </a>
              </li>
            </ul>
            <div className="mt-4 mb-4 w-full">
              <hr className="border-blue-400 w-full" />
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-2 md:mt-0 text-center" data-aos="fade-up" data-aos-delay="500">
            <h3 className="font-semibold mb-2">Follow</h3>
            <div className="flex justify-center gap-6">
              <Media />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            © Copyright <span className="font-bold">Artifice Labs</span>.
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
