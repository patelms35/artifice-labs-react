import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <div className="w-full bg-[#F6F9FE] font-inter">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-4"
            data-aos="zoom-in-up"
          >
            Driven by Innovation, Shaped by Expertise
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            Explore Our Solutions
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="800"
            className="font-inter flex justify-center gap-2 items-center mx-auto shadow-xl text-base sm:text-lg md:text-xl lg:text-lg text-gray-50 bg-[#106eea] backdrop-blur-md lg:font-semibold border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-syne font-bold text-black mb-4 z-20 relative"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                About <span className="text-[#106eea]">Artifice Labs</span>
              </h1>
              <h3
                className="text-lg sm:text-xl md:text-2xl lg:text-xl font-syne font-semibold mb-2 z-20 relative"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Empowering Businesses with Next-Gen Technology Solutions
              </h3>

              {/* Text Paragraph */}
              <div className="relative flex-1">
                <p
                  className="text-gray-600 mb-6 relative z-20 text-base sm:text-lg md:text-lg"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  At Artifice Labs, we craft innovative solutions using AI/ML,
                  AR/VR, web and mobile development UI/UX Design. Our user-centric approach
                  ensures seamless, intuitive experiences that drive business
                  growth. From immersive digital environments to responsive
                  apps, we empower businesses with cutting-edge technology to
                  stay ahead in a fast-evolving world. Let’s shape the future,
                  together.``
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
                style={{ opacity: 0.4 }}
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

        <div className="relative flex flex-wrap justify-center gap-8 px-4 md:px-6 lg:px-12">
          {/* Wrapper for alignment */}
          <div className="flex flex-wrap gap-8 justify-center relative">
            {/* Single Card - VR Simulators */}
            <div
              className="group relative bg-white rounded-2xl overflow-hidden max-w-sm w-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden h-56">
                <img
                  src="/oil-drill.png"
                  alt="VR Simulators"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    AR/VR
                  </span>
                </div>
                {/* View Project Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200 shadow-lg">
                    View Project →
                  </button>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 relative">
                {/* Decorative Element */}
                <div className="absolute top-0 left-6 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                
                <div className="mt-2">
                  <h3 className="text-xl font-syne font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    VR Simulators
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Immersive VR simulators providing students with realistic virtual exposure to on-field work environments and practical training scenarios.
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">Unity</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">VR</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">Education</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card - Billing System */}
            <div
              className="group relative bg-white rounded-2xl overflow-hidden max-w-sm w-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden h-56">
                <img
                  src="/web-front-2.png"
                  alt="Broadband Billing System"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    Web App
                  </span>
                </div>
                {/* View Project Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200 shadow-lg">
                    View Project →
                  </button>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 relative">
                {/* Decorative Element */}
                <div className="absolute top-0 left-6 w-8 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                
                <div className="mt-2">
                  <h3 className="text-xl font-syne font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    Broadband Billing System
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Comprehensive management system for cable TV and broadband billing with automated processes and efficient customer management.
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">React</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">Node.js</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card - Near Me App */}
            <div
              className="group relative bg-white rounded-2xl overflow-hidden max-w-sm w-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              data-aos="zoom-in-up"
              data-aos-delay="800"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden h-56">
                <img
                  src="/ui-card.png"
                  alt="Near Me Travel App"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    AI/Mobile
                  </span>
                </div>
                {/* View Project Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200 shadow-lg">
                    View Project →
                  </button>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 relative">
                {/* Decorative Element */}
                <div className="absolute top-0 left-6 w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                
                <div className="mt-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    Near Me
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    AI-powered travel companion app that discovers local attractions, experiences, and hidden gems tailored to user preferences and location.
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">Flutter</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">AI/ML</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">Maps API</span>
                  </div>
                </div>
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
