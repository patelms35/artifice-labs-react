import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../buttonStyles.css";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";
import MainHeading from "./MainHeading";
import MissionVisionSection from "./MissionVisionSection";
import Navbar from "./Navbar";
import ServicesSection from "./ServicesSection";

const HomeSection = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const handleOurWorks = () => {
    navigate("/our-works");
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleGetStarted = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  };

  const handleKnowMore = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#F6F9FE] font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center bg-[url('/Background.jpeg')] bg-cover bg-center relative"
        id="home"
      >
        <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0"></div>
        <div className="text-center text-white px-6 relative z-10">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            data-aos="zoom-in-up"
          >
            Inspired and passionate about innovation.
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            Lorem, ipsum dolor sit amet
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="800"
            className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-base sm:text-lg md:text-xl lg:text-lg text-gray-50 bg-[#106eea] backdrop-blur-md lg:font-semibold border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            type="submit"
            onClick={handleGetStarted}
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 md:h-8 justify-end bg-[#106eea] group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border-2 border-white-700 group-hover:border-gray-700 p-2 rotate-45"
            >
              <path
                className="fill-white group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-16 bg-[#F6F9FE] mb-14" id="about">
        {/* circle */}
        <div className="flex items-baseline justify-start z-0 fixed top-0 left-[-100px]">
          <div className="w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 opacity-60 "></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <MainHeading title="About us" backgroundTitle="About us" />
          <div className="relative flex flex-col md:flex-row items-center mt-10 md:mt-20">
            {/* Left Image */}
            <div
              className="z-30 w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 relative"
              data-aos="fade-right"
            >
              <img
                src="/about.png"
                alt="About Us"
                className="w-11/12 h-11/12 rounded-lg shadow-lg relative z-20"
              />
            </div>

            {/* Right Text Content */}
            <div className="md:w-1/2 lg:w-3/5 md:pl-12 relative flex flex-col justify-between">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black mb-4 z-20 relative"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                About <span className="text-[#106eea]">Artifice Labs</span>
              </h1>
              <h3
                className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold mb-2 z-20 relative"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores inventore amet
              </h3>

              {/* Text Paragraph */}
              <div className="relative flex-1">
                <p
                  className="text-gray-600 mb-6 relative z-20 text-base sm:text-lg md:text-xl"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores inventore expedita magnam veritatis facere vero
                  velit quasi quibusdam modi id pariatur ab saepe at sint ad
                  eius nemo voluptates, voluptas in temporibus dicta commodi
                  atque molestiae aut.
                </p>

                {/* Know More Button */}
                <button
                  className="z-20 cursor-pointer transition-all bg-[#106eea] text-white px-4 py-2 rounded-md w-36 text-center border-blue-600 border-b-[2px] sm:border-b-[4px] hover:brightness-110 hover:-translate-y-1 hover:border-b-[4px] active:border-b-[2px] active:brightness-90 active:translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={handleKnowMore}
                >
                  Know More
                </button>
              </div>

              {/* Background Vector Positioned to the Right */}
              <img
                src="/about-vector.png"
                alt="Background"
                style={{ opacity: 0.7 }}
                className="absolute -bottom-28 md:-bottom-10 lg:-bottom-52 right-10 w-[200px] md:w-[300px] lg:w-[500px] object-contain z-10"
                data-aos="zoom-in-up"
                data-aos-delay="800"
              />
            </div>
          </div>
        </div>
        <div className="flex items-baseline justify-end z-0 bottom-0 right-[-100px] fixed">
          <div className="w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-pink-300 via-purple-400 to-purple-700 opacity-60"></div>
        </div>
      </section>

      {/* Our Works */}
      <section
        id="works"
        className="w-full py-32 flex flex-col justify-center items-center bg-[#F6F9FE]"
      >
        <div className="mb-10 md:mb-20">
          <MainHeading title="Our Works" backgroundTitle="Our Works" />
        </div>

        <div className="relative flex flex-wrap justify-center gap-6 md:gap-20 px-4 md:px-6 lg:px-12">
          {/* Wrapper for alignment */}
          <div className="flex flex-wrap gap-6 md:gap-20 justify-center relative">
            {/* Single Card */}
            <div
              className="bg-white rounded-xl p-4 max-w-80 border-2 transition-all border-[#E0E0E0] drop-shadow-xl hover:drop-shadow-2xl h-[23rem]"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              <img
                src="/about.png"
                alt="Work 1"
                className="w-full h-3/5 object-cover rounded-lg"
              />
              <div className="p-4 h-2/5 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold">Headline</h3>
                <p className="text-[#666666] mb-4 text-sm sm:text-base">
                  Please add your content here. Keep it short and simple. And
                  smile :)
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div
              className="bg-white rounded-xl p-4 max-w-80 border-2 transition-all border-[#E0E0E0] drop-shadow-xl hover:drop-shadow-2xl h-[23rem]"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              <img
                src="/about.png"
                alt="Work 2"
                className="w-full h-3/5 object-cover rounded-lg"
              />
              <div className="p-4 h-2/5 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold">Headline</h3>
                <p className="text-[#666666] mb-4 text-sm sm:text-base">
                  Please add your content here. Keep it short and simple. And
                  smile :)
                </p>
              </div>
            </div>

            {/* Third Card */}
            <div
              className="bg-white rounded-xl p-4 max-w-80 border-2 transition-all border-[#E0E0E0] drop-shadow-xl hover:drop-shadow-2xl h-[23rem]"
              data-aos="zoom-in-up"
              data-aos-delay="800"
            >
              <img
                src="/about.png"
                alt="Work 3"
                className="w-full h-3/5 object-cover rounded-lg"
              />
              <div className="p-4 h-2/5 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold">Headline</h3>
                <p className="text-[#666666] mb-4 text-sm sm:text-base">
                  Please add your content here. Keep it short and simple. And
                  smile :)
                </p>
              </div>
            </div>
          </div>

          {/* Button Container */}
          <div
            className="absolute right-0 top-full flex justify-end pr-4 mt-4 lg:mt-8 max-w-full w-full"
            data-aos="fade-right"
          >
            <button className="learn-more" onClick={handleOurWorks}>
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">View More</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services">
        <ServicesSection />
      </section>

      {/* Mission and Vision Section */}
      <MissionVisionSection />

      {/* Contact Us Section */}
      <ContactUsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeSection;
