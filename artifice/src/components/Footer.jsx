/* eslint-disable react/no-unknown-property */
import instaLogo from "../assets/instagram.png";
import linkedInLogo from "../assets/linkedin.png";
import artLogo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B5EFF] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:mb-0" >
            <a href="#" className="flex flex-col items-center">
              <img
                src={artLogo}
                alt="Artifice Labs Logo"
                className="h-10 mr-3"
              />
              <span className="font-bold text-xl">Artifice Labs</span>
            </a>
            <div className="mt-4 mb-4 w-full">
              <hr className="border-blue-400 w-full" />
            </div>
          </div>

          <div className="text-center md:text-left">
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

          <div className="mt-6 md:mt-0">
            <h3 className="font-semibold mb-4 text-center md:text-left">
              Follow
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={instaLogo}
                  alt="Instagram"
                  className="h-6 text-white"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn" className="h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          © Copyright <strong>Artifice Labs</strong>. All Rights Reserved 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
