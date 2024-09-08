const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 h-auto w-9/12 rounded-tl-3xl rounded-bl-3xl bg-white text-black transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
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
        <a
          href="#home"
          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
        >
          Home
        </a>
        <a
          href="#about"
          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
        >
          About Us
        </a>
        <a
          href="#works"
          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
        >
          Our Works
        </a>
        <a
          href="#services"
          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
        >
          Services
        </a>
        <a
          href="#mission"
          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
        >
          Mission & Vision
        </a>
        <a
          href="#contact"
          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
