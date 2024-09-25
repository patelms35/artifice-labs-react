import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Technologies = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-up" data-aos-delay="300" >
            What technologies will deliver the{" "}
            <span className="text-[#0B5EFF]">
              greatest value to your business?
            </span>
          </h2>
          <p className="text-lg text-gray-700 mt-4" data-aos="fade-up" data-aos-delay="400" >
            Address customer challenges by selecting advanced technologies for
            your tech stack. Elevate your business with customized solutions
            designed to meet your specific needs.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2" data-aos="fade-up" data-aos-delay="500" >
          {/* Card 1 - Construction */}
          <div className="bg-white p-6 max-w-lg shadow-md flex items-center">
            <img
              src="/construction-icon.png"
              alt="Construction Icon"
              className="w-16 h-16 mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Construction
              </h3>
              <p className="text-gray-700">
                Cutting-edge mobile app solutions transforming the construction
                industry for the digital age.
              </p>
            </div>
          </div>

          {/* Card 2 - Travel & Hospitality */}
          <div className="bg-white max-w-lg p-6 shadow-md flex items-center">
            <img
              src="/travel-icon.png"
              alt="Travel & Hospitality Icon"
              className="w-16 h-16 mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Travel & Hospitality
              </h3>
              <p className="text-gray-700">
                Upgrade your resort stay with easy-to-use mobile apps that offer
                seamless and convenient solutions.
              </p>
            </div>
          </div>

          {/* Card 3 - mHealth */}
          <div className="bg-white max-w-lg p-6 shadow-md flex items-center">
            <img
              src="/mhealth-icon.png"
              alt="mHealth Icon"
              className="w-16 h-16 mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">mHealth</h3>
              <p className="text-gray-700">
                A mobile app built with ease of use, aimed at empowering
                healthcare professionals to streamline their tasks efficiently
                and effectively.
              </p>
            </div>
          </div>

          {/* Card 4 - FinTech */}
          <div className="bg-white max-w-lg p-6 shadow-md flex items-center">
            <img
              src="/fintech-icon.png"
              alt="FinTech Icon"
              className="w-16 h-16 mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">FinTech</h3>
              <p className="text-gray-700">
                Deliver scalable financial technology that meets modern
                customers&apos; expectations for speed and security.
              </p>
            </div>
          </div>

          {/* Card 5 - Retail & eCommerce */}
          <div className="bg-white max-w-lg p-6 shadow-md flex items-center">
            <img
              src="/retail-icon.png"
              alt="Retail & eCommerce Icon"
              className="w-16 h-16 mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Retail & eCommerce
              </h3>
              <p className="text-gray-700">
                Custom mobile software solutions designed to meet the modern
                needs of the retail industry, driving innovation and efficiency.
              </p>
            </div>
          </div>

          {/* Card 6 - Insurance */}
          <div className="bg-white max-w-lg p-6 shadow-md flex items-center">
            <img
              src="/insurance-icon.png"
              alt="Insurance Icon"
              className="w-16 h-16 mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Insurance
              </h3>
              <p className="text-gray-700">
                Enhance the efficiency and security of your business operations
                with cutting-edge mobile app solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
