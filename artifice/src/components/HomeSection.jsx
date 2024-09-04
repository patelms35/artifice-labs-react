import React from 'react';

const HomeSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center items-center bg-[url('/Background.png')] bg-cover bg-center"
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Inspired and passionate about innovation.</h1>
          <p className="text-lg md:text-2xl mb-8">Lorem, ipsum dolor sit amet</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/about.png" alt="About Us" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Artifice Labs</h3>
              <p className="text-gray-600 mb-6">Lorem, ipsum dolor sit amet consectetur adipiscing elit. Asperiores inventore voluptates fugiat vero voluptate quae cupiditate modi in pariatur. Tempore, maxime.</p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Know More</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Works Section */}

<section className="relative w-full py-16 flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100">
  {/* Section Title */}
  <h2 className="text-4xl font-bold text-center mb-8">Our Works</h2>

  {/* Works Cards */}

        <div className="flex flex-wrap justify-center items-center gap-8 px-6">
          {/* Single Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img src="/about.png" alt="Work 1" className="w-full h-64 md:h-80 object-cover rounded-lg" />
            <div className="p-4 h-40 md:h-48">
              <h3 className="text-lg font-semibold">Headline</h3>
              <p className="text-gray-600 mt-2">Please add your content here. Keep it short and simple. And smile :)</p>
            </div>
          </div>

          {/* Repeat for other cards */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img src="/about.png" alt="Work 2" className="w-full h-64 md:h-80 object-cover rounded-lg" />
            <div className="p-4 h-40 md:h-48">
              <h3 className="text-lg font-semibold">Headline</h3>
              <p className="text-gray-600 mt-2">Please add your content here. Keep it short and simple. And smile :)</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img src="/about.png" alt="Work 3" className="w-full h-64 md:h-80 object-cover rounded-lg" />
            <div className="p-4 h-40 md:h-48">
              <h3 className="text-lg font-semibold">Headline</h3>
              <p className="text-gray-600 mt-2">Please add your content here. Keep it short and simple. And smile :)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8">Services</h2>
        <p className="text-lg text-center text-gray-600 mb-12">Discover our wide range of services.</p>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl overflow-hidden flex justify-center items-center">
          {/* Carousel Inner */}
          <div className="flex justify-center items-center space-x-6 transition-transform duration-500 ease-in-out">
            {/* Single Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs h-80 flex flex-col justify-between border-2 border-blue-500">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4"></div> {/* Placeholder for icon */}
              <h3 className="text-xl font-semibold text-center mb-2">Web Development</h3>
              <p className="text-gray-600 text-center mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <div className="text-center">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow">Learn more</button>
              </div>
            </div>

            {/* Repeat for other cards */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs h-80 flex flex-col justify-between">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4"></div> {/* Placeholder for icon */}
              <h3 className="text-xl font-semibold text-center mb-2">Application Development</h3>
              <p className="text-gray-600 text-center mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <div className="text-center">
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow">Learn more</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs h-80 flex flex-col justify-between">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4"></div> {/* Placeholder for icon */}
              <h3 className="text-xl font-semibold text-center mb-2">AR/VR</h3>
              <p className="text-gray-600 text-center mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <div className="text-center">
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow">Learn more</button>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg">
            {/* Left Arrow */}
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg">
            {/* Right Arrow */}
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
