import "../buttonStyles.css";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";
import MainHeading from "./Heading";
import MissionVisionSection from "./MissionVisionSection";
import Navbar from "./Navbar";
import ServicesSection from "./ServicesSection";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-[url('/Background.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Home */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-right" >
            Inspired and passionate about innovation.
          </h1>
          <p className="text-lg md:text-2xl mb-8" data-aos="fade-right" >
            Lorem, ipsum dolor sit amet
          </p>
          <button data-aos="fade-up"
            className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0B5EFF] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            type="submit"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-[#0B5EFF] group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border-2 border-white-700 group-hover:border-gray-700 p-2 rotate-45"
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
      <section className="py-16 bg-[#F6F9FE] h-screen">
        <div className="container mx-auto px-4">
          <MainHeading />
          <div className="flex flex-col md:flex-row items-center mt-20">
            <div className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
              {" "}
              <img
                src="/about.png"
                alt="About Us"
                className="w-full rounded-lg shadow-lg" data-aos="fade-right"
              />
            </div>
            <div className="md:w-1/2 lg:w-3/5 md:pl-12">
              {" "}
              <h1 className="text-2xl font-bold text-black mb-4" data-aos="fade-left" >
                About <span className="text-blue-600">Artifice Labs</span>
              </h1>
              <h3 className="text-xl font-semibold mb-2" data-aos="fade-left" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores inventore
              </h3>
              <p className="text-gray-600 mb-6" data-aos="fade-left" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores inventore expedita magnam veritatis facere vero velit
                quasi quibusdam modi id pariatur ab saepe at sint ad eius nemo
                voluptates, voluptas in temporibus dicta commodi atque molestiae
                aut. Tempore, maxime. Quo odit, aspernatur omnis asperiores
                neque nostrum nihil dolores nemo amet. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Asperiores inventore expedita
                magnam veritatis facere vero velit quasi quibusdam modi id
                pariatur ab saepe at sint ad eius nemo voluptates, voluptas in
                temporibus dicta commodi atque molestiae aut. Tempore, maxime.
                Quo odit, aspernatur omnis asperiores neque nostrum nihil
                dolores nemo amet.
              </p>
              <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" data-aos="fade-up">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="relative w-full py-16 flex flex-col justify-center items-center bg-gradient-to-b  bg-[#F6F9FE]">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-20">Our Works</h2>

        {/* Works Cards */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-12 px-6">
          {/* Single Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-[20rem] lg:max-w-[22rem]" data-aos="fade-right" >
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
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-[20rem] lg:max-w-[22rem]" data-aos="zoom-in">
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
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-[20rem] lg:max-w-[22rem]" data-aos="fade-left" >
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
        <div className="flex justify-end w-full mt-8 px-6 lg:px-12" data-aos="fade-left" >
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
