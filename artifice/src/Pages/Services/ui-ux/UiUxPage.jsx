import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import ContactUsSection from "../../../components/ContactUsSection";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DesignProcess from "./DesignProcess";
import Explanation from "./Explanation";
import UiUxProcess from "./UiUxProcess";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 2000 });
  }, []);

  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-start bg-[url('/ui.jpeg')] bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-left text-white px-6 md:px-16 lg:px-56">
          <h1
            className="text-4xl md:text-5xl font-syne font-bold mb-8 leading-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            UI / UX Design Services
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            We craft user-centric designs and experiences for web products,
            ensuring
            <br />
            intuitive interfaces and compelling UX to maximize customer value.{" "}
          </p>

          <button
            className="text-gray-50 bg-[#0B5EFF] p-3 rounded-md "
            type="submit"
            data-aos="fade-up"
            data-aos-delay="800"
            onClick={handleScrollToContact}
          >
            Let&apos;s work together
          </button>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div
              className="md:w-1/2 font-syne font-bold text-2xl md:text-3xl md:mr-10 mt-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="text-black">What are</span>
              <span className="text-[#0B5EFF]">UI/UX Design services?</span>
            </div>

            <div
              className="md:w-1/2 text-lg md:text-xl leading-relaxed text-gray-700 mt-4 md:mb-10 md:mt-10"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              UI/UX design services focus on creating intuitive and engaging
              user experiences for websites and applications. This includes
              designing user interfaces, conducting user research, prototyping,
              testing for usability, and ensuring a seamless interaction flow.
              The goal is to enhance user satisfaction and drive engagement
              through effective design solutions.
            </div>
          </div>
        </div>
      </section>

      {/* Section - Achieve your business goals */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col items-start lg:items-center justify-between gap-5 space-y-4 lg:space-y-0 mb-24"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-3xl md:text-4xl font-syne font-bold lg:w-1/2 text-center">
              UI / UX design Service we provide
            </h2>
            <p
              className="text-lg text-center text-[#808080] lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Successful UI/UX design blends art, technology, and strategy. Our
              team offers expert services in user interface and experience
              design.
            </p>
          </div>

          {/* Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mb-16"
            data-aos="zoom-in"
          >
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14 max-w-lg mx-auto">
              <img src="/webappdesign.png" className="pb-6 " />
              <h1 className="text-xl font-syne font-bold">Web app design</h1>
              <p className="text-[#AFAFAF]">
                Creative and understandable website design significantly
                increases the chances of a visitor taking the target action we
                need. There must be no extra distractions that will influence
                the website navigation. The design&apos;s role is to create a
                likable atmosphere for the selected product or service and
                encourage users to make a choice.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14 max-w-lg mx-auto">
              <img src="/mobileappdesign.png" className="pb-6 " />
              <h1 className="text-xl font-syne font-bold">Mobile app design</h1>
              <p className="text-[#AFAFAF]">
                Mobile UX design defines the correct user flow of the app. How
                many actions will the user take to reach what they want? What
                additional features will they face on this path (read reviews,
                specifications, check photos, rate, watch ads)? How to combine
                all this and not confuse the user? Our team can answer these
                questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-24 px-6 md:px-16 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="/ui-card.jpeg"
              alt="Laptops"
              className="rounded-xl shadow-lg"
              data-aos="fade-right"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
            <h2
              className="text-3xl md:text-3xl font-syne font-bold mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Elevate your digital presence with a premier &nbsp;
              <span className="text-[#0B5EFF]">
                UI/UX design company that sets the standard for exceptional user
                experiences and innovative interfaces.
              </span>
            </h2>
            <p
              className="text-lg text-gray-700 mb-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              At{" "}
              <span className="text-[#0B5EFF] font-semibold">
                Artifice Labs
              </span>
              , we offer a comprehensive range of UI/UX design services to help
              you craft an exceptional user experience, including:
            </p>
            <ul
              className="text-md text-gray-700 space-y-2 mb-10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                User research to understand needs and enhance design
                effectiveness.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Wireframing and prototyping for clear, interactive design
                visualization.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Visual design to create appealing and cohesive user interfaces.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Usability testing to ensure intuitive and user-friendly
                experiences.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Interaction design for smooth, engaging user interactions and
                flows.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Accessibility design to ensure inclusivity for all user groups.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                User feedback integration for continuous improvement and refined
                solutions.
              </li>
            </ul>
            <p
              className="text-lg text-gray-700 mt-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span className="font-extrabold">
                A UI/UX design company&apos;s mission is to craft solutions that
                align with a client&apos;s specific business goals.
              </span>{" "}
              By focusing on user-centered design, we help create engaging and
              intuitive experiences from the ground up or enhance the usability
              and appeal of existing products.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <DesignProcess />

      {/* Web Development Process */}
      <UiUxProcess />

      {/* Explanation */}
      <Explanation />

      {/* Contact Us */}
      <div ref={contactRef}>
        <ContactUsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
