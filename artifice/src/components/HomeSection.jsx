import "../buttonStyles.css";
import ServicesSection from "./ServicesSection";

const HomeSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-[url('/Background.png')] bg-cover bg-center">
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Inspired and passionate about innovation.
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Lorem, ipsum dolor sit amet
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/about.png"
                alt="About Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                About Artifice Labs
              </h3>
              <p className="text-gray-600 mb-6">
                Lorem, ipsum dolor sit amet consectetur adipiscing elit.
                Asperiores inventore voluptates fugiat vero voluptate quae
                cupiditate modi in pariatur. Tempore, maxime.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works Section */}

      {/* Our Works Section */}
      <section className="relative w-full py-16 flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-20">Our Works</h2>

        {/* Works Cards */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-12 px-6">
          {/* Single Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-[20rem] lg:max-w-[22rem]">
            <img
              src="/about.png"
              alt="Work 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Headline</h3>
              <p className="text-gray-600 mt-2">
                Please add your content here. Keep it short and simple. And
                smile :)
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-[20rem] lg:max-w-[22rem]">
            <img
              src="/about.png"
              alt="Work 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Headline</h3>
              <p className="text-gray-600 mt-2">
                Please add your content here. Keep it short and simple. And
                smile :)
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-[20rem] lg:max-w-[22rem]">
            <img
              src="/about.png"
              alt="Work 3"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Headline</h3>
              <p className="text-gray-600 mt-2">
                Please add your content here. Keep it short and simple. And
                smile :)
              </p>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-end w-full mt-8 px-6 lg:px-12">
          <button className="learn-more mr-16">
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">View More</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
};

export default HomeSection;
