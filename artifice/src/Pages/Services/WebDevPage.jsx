import { useEffect } from "react";
import ContactUsSection from "../../components/ContactUsSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Explanation from "./Explanation";
import Technologies from "./Technologies";
import WebDevelopmentProcess from "./WebDevelopmentProcess";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-start bg-[url('/Designer.jpeg')] bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-left text-white px-6 md:px-16 lg:px-56">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Web Development Services
          </h1>
          <p className="text-lg md:text-2xl mb-8 leading-relaxed">
            We design and build industry-leading web-based products that bring
            <br />
            value to your customers, delivered with compelling UX.
          </p>

          <button
            className="text-gray-50 bg-[#0B5EFF] p-3 rounded-md "
            type="submit"
          >
            Let&apos;s work together
          </button>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 font-bold text-2xl md:text-3xl md:mr-10 mt-10">
              <span className="text-black">What are </span>
              <span className="text-[#0B5EFF]">web development services?</span>
            </div>

            <div className="md:w-1/2 text-lg md:text-xl leading-relaxed text-gray-700 mt-4 md:mb-10 md:mt-10">
              Web development encompasses a wide range of services, which
              include delivering websites or web apps, cybersecurity solutions,
              UX/UI design, eCommerce solutions, website architectures, QA
              testing, maintenance, consulting, and even a custom CMS.
            </div>
          </div>
        </div>
      </section>

      {/* Section - Achieve your business goals */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 space-y-4 lg:space-y-0 mb-24">
            <h2 className="text-3xl md:text-4xl font-bold lg:w-1/2">
              Achieve your business goals{" "}
              <span className="text-[#0B5EFF]">
                with web development solutions
              </span>
            </h2>
            <p className="text-lg text-gray-700 lg:w-1/2">
              Our battle-tested developers specialize in a wide range of web
              development services. Here are some of the solutions that we can
              deliver for you.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14">
              <img src="/globe.png" className="pb-6" />
              <p className="text-gray-700">
                <span className="text-xl font-bold mb-2 text-[#0B5EFF]">
                  Websites.&nbsp;
                </span>
                A well-designed website is a powerful marketing and
                communication tool that helps build trust and generate leads.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14 lg:mt-0">
              <img src="/ecommerce.png" className="pb-6" />
              <p className="text-gray-700">
                <span className="text-xl font-bold mb-2 text-[#0B5EFF]">
                  Ecommerce.&nbsp;
                </span>
                With eCommerce solutions, businesses can operate 24/7 and reach
                customers in any time zone.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-start transform pb-14">
              <img src="/webapp.png" className="pb-6" />
              <p className="text-gray-700">
                <span className="text-xl font-bold mb-2 text-[#0B5EFF]">
                  Web Applications.&nbsp;
                </span>
                Web applications can reach a global audience. They are
                interactive and engaging, holding users&apos; attention.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-start transform lg:mt-0 pb-14">
              <img src="/cms.png" className="pb-6" />
              <p className="text-gray-700">
                <span className="text-xl font-bold mb-2 text-[#0B5EFF]">
                  Content Management System.&nbsp;
                </span>
                A dedicated CMS designed to meet your business&apos;s needs by
                optimizing internal workflows.
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
              src="/laptops.png"
              alt="Laptops"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elevate your digital presence with a top-tier <br />
              <span className="text-[#0B5EFF]">
                web development company that stands out from the rest.
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              At <span className="text-[#0B5EFF]">Artifice Labs</span>, we
              provide a complete range of web development services to help you
              create a fully-featured web-based product, including:
            </p>

            <ul className="text-lg text-gray-700 space-y-2 mb-10">
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Website Development
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Web Application Development
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                eCommerce Solutions Development
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                No-code & Low-code Development
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Project Management - UI/UX Design, Coding, QA Testing
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

            <p className="text-lg text-gray-700 mt-6">
              <span className="font-extrabold">
                A web development company&apos;s mission is to identify and
                implement solutions that align with a client&apos;s specific
                business objectives.
              </span>{" "}
              With the right services, you can create a successful product from
              the ground up or enhance the performance of an existing one.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <Technologies />

      {/* Web Development Process */}
      <WebDevelopmentProcess />

      {/* Explanation */}
      <Explanation />

      {/* Contact Us */}
      <ContactUsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
