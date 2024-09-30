import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUsSection from "../../../components/ContactUsSection";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import AppDevProcess from "./AppDevProcess";
import Explanation from "./Explanation";
import Technologies from "./Technologies";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-start bg-[url('/App-main.jpg')] bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-left text-white px-6 md:px-16 lg:px-56">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" data-aos="fade-up" data-aos-delay="300"  >
            Application Development Services
          </h1>
          <p className="text-lg md:text-2xl mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="500" >
            We design and build industry-leading web-based products that bring
            <br />
            value to your customers, delivered with compelling UX.{" "}
          </p>

          <button
            className="text-gray-50 bg-[#0B5EFF] p-3 rounded-md "
            type="submit"
            onClick={handleScrollToContact}
            data-aos="fade-up" data-aos-delay="700"
          >
            Let&apos;s work together
          </button>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 font-bold text-2xl md:text-3xl md:mr-10 mt-10" data-aos="fade-up" data-aos-delay="300">
              <span className="text-black">What are</span>
              <span className="text-[#0B5EFF]">
                Application Development services?
              </span>
            </div>

            <div className="md:w-1/2 text-lg md:text-xl leading-relaxed text-gray-700 mt-4 md:mb-10 md:mt-10" data-aos="fade-up" data-aos-delay="400" >
              Application development services focus on delivering user-centric
              solutions that ensure seamless functionality and engagement. This
              process includes crafting intuitive user interfaces, performing
              in-depth research to understand user needs, developing prototypes,
              conducting thorough usability testing, and optimizing interaction
              flows. The aim is to create applications that provide a smooth,
              satisfying user experience while driving value and engagement
              through innovative design and development approaches.
            </div>
          </div>
        </div>
      </section>

      {/* Section - Achieve your business goals */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start lg:items-center justify-between gap-5 space-y-4 lg:space-y-0 mb-24">
            <h2 className="text-3xl md:text-4xl font-bold lg:w-1/2 text-center" data-aos="fade-up" data-aos-delay="300" >
              Application Development Services We Provide
            </h2>
            <p className="text-lg text-center text-[#808080] lg:w-1/2" data-aos="fade-up" data-aos-delay="400" >
              Expert application development blends art, technology, and
              strategy. Our team ensures intuitive, user-focused designs for
              impactful digital experiences.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mb-16" data-aos="fade-up" data-aos-delay="400" >
            {/* Card 1 */}
            <div className="bg-white max-w-xl p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14 mx-auto" >
              <img
                src="/mobileappdesign.png"
                className="pb-6"
                alt="Web app design"
              />
              <h1 className="text-xl font-bold">
                Custom Mobile Application Development
              </h1>
              <p className="text-[#AFAFAF]">
                We develop solutions that are specifically created to satisfy
                your goals and specifications while offering a distinctive app
                experience. Our mobile app development services create highly
                effective and aesthetically pleasing apps for iOS and Android
                stores.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white max-w-xl p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14 mx-auto">
              <img
                src="/mobileappdesign.png"
                className="pb-6"
                alt="Mobile app design"
              />
              <h1 className="text-xl font-bold">
                Android Mobile App Development
              </h1>
              <p className="text-[#AFAFAF]">
                We curate web-based Android applications to cater to a large
                audience of Android users. Our mobile app development company is
                an expert at creating high-end native apps utilizing modern,
                platform- specific programming languages and tools that adhere
                to all performance metrics.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white max-w-xl p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14 mx-auto">
              <img
                src="/mobileappdesign.png"
                className="pb-6"
                alt="Mobile app design"
              />
              <h1 className="text-xl font-bold">
                Hybrid Mobile App Development Services
              </h1>
              <p className="text-[#AFAFAF]">
                By combining native and web app technologies in a novel way, you
                can acquire very useful cross-platform apps that excel in a
                variety of settings. You can create hybrid or cross-platform
                apps with our hybrid mobile development and consulting to cater
                a variety of platforms.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white max-w-xl p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14 mx-auto">
              <img
                src="/mobileappdesign.png"
                className="pb-6"
                alt="Mobile app design"
              />
              <h1 className="text-xl font-bold">
                iPhone Mobile App Development
              </h1>
              <p className="text-[#AFAFAF]">
                Our cross-platform mobile app development services design
                cutting-edge and future-ready applications that maximize
                engagement with iPhone users. When developing iOS apps, our
                skilled developers use advanced tools like Swift and Objective-C
                to meet each client&apos;s specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-24 px-6 md:px-16 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-right" >
            <img
              src="/app-card.jpeg"
              alt="Laptops"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
            <h2 className="text-3xl md:text-3xl font-bold mb-6" data-aos="fade-up" data-aos-delay="300" >
              Enhance your digital presence with a leading {""}
              <span className="text-[#0B5EFF]">
                application development company that sets the standard for
                outstanding user experiences and innovative features.
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-10" data-aos="fade-up" data-aos-delay="400" >
              At{" "}
              <span className="text-[#0B5EFF] font-semibold">
                Artifice Labs
              </span>
              , we provide a wide array of application development services to
              help you create an outstanding user experience, including...
            </p>
            <ul className="text-md text-gray-700 space-y-2 mb-10" data-aos="fade-up" data-aos-delay="500" >
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                User research to understand needs and improve application
                functionality.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Wireframing and prototyping for clear, interactive application
                visualization.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Visual design to create attractive and cohesive application
                interfaces.
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
                Dedicated Content Management System Development
              </li>
            </ul>
            <p className="text-lg text-gray-700 mt-6" data-aos="fade-up" data-aos-delay="600" >
              <span className="font-extrabold">
                Our mission in application development is to build solutions
                that align with your business goals.
              </span>{" "}
              By prioritizing user-centric design, we create engaging and
              intuitive applications from scratch or enhance the usability and
              appeal of existing ones, ensuring a seamless and compelling user
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <Technologies />

      {/* Web Development Process */}
      <AppDevProcess />

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
