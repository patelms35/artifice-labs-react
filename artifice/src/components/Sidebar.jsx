import ContactSvgOurWorks from "./ContactSvgOurWorks";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 h-auto w-9/12 rounded-tl-3xl rounded-bl-3xl bg-white text-black ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 flex flex-col justify-between`}
    >
      {/* Top Section with Close Button and Links */}
      <div>
        <div className="flex justify-between items-center p-4">
          <button onClick={toggleSidebar} className="text-slate-900">
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 py-2 space-y-4">
          <div className=" flex items-center gap-4 row-auto">
            <div>
              <img src="./home.png" alt="Home Icon" className="h-8 w-8" />
            </div>
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-lg text-[#5D7285] font-bold"
            >
              Home
            </a>
          </div>

          <div className=" flex items-center gap-4 row-auto">
            <div>
              <img
                src="./about-us.png"
                alt="About Us Icon"
                className="h-7 w-8"
              />
            </div>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-lg text-[#5D7285] font-bold"
            >
              About Us
            </a>
          </div>

          <div className=" flex items-center gap-4 row-auto">
            <div>
              <img src="./works.png" alt="Our Works Icon" className="h-8 w-8" />
            </div>
            <a
              href="#works"
              className="block px-3 py-2 rounded-md text-lg text-[#5D7285] font-bold"
            >
              Our Works
            </a>
          </div>

          <div className=" flex items-center gap-4 row-auto">
            <div>
              <img src="./Service.png" alt="Service Icon" className="h-8 w-8" />
            </div>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-lg text-[#5D7285] font-bold"
            >
              Services
            </a>
          </div>

          <div className=" flex items-center gap-4 row-auto">
            <div>
              <img
                src="./mv.png"
                alt="Mission & Vision Icon"
                className="h-7 w-8"
              />
            </div>
            <a
              href="#mission"
              className="block px-3 py-2 rounded-md text-lg text-[#5D7285] font-bold"
            >
              Mission & Vision
            </a>
          </div>
        </div>
      </div>

      {/* Contact Us Button at the Bottom */}
      <div className="flex justify-center mb-8">
        <a href="#contact" className="flex items-center gap-2">
          <div className="p-2">
            <ContactSvgOurWorks className="h-4 w-4 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
