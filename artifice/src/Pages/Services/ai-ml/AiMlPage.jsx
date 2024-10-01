import { useEffect, useRef } from "react";
import ContactUsSection from "../../../components/ContactUsSection";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import AiMlExplanation from "./AiMlExplanation";
import AiMlProcess from "./AiMlProcess";
import AiMlTechnologies from "./AiMlTechnologies";

const cards = [
  {
    title: "Understanding Your Business",
    image: "/aimlpage/aibusiness.png",
    alt: "understanding your business",
    content: [
      "Exploring business needs and challenges",
      "Collecting stakeholder requirements",
      "Defining the scope of work",
    ],
  },
  {
    title: "Data Acquisition & Analysis",
    image: "/aimlpage/aidataanalysis.png",
    alt: "Data Acquisition & Analysis",
    content: [
      "Selecting data source: on-premises or cloud",
      "Building data pipelines",
      "Choosing an environment for data acquisition",
      "Data wrangling and exploratory data analysis",
    ],
  },
  {
    title: "Creating a Machine-Learning Model",
    image: "/aimlpage/aimodeldeployment.png",
    alt: "Creating a Machine-Learning Model",
    content: [
      "Feature engineering: creating data features from the raw data",
      "Model training: choosing the most suitable model",
      "Model evaluation: assessing the machine learning model efficiency",
    ],
  },
  {
    title: "Model Deployment",
    image: "/aimlpage/aimodeldeployment.png",
    alt: "Model Deployment",
    content: [
      "Scoring: applying the trained model to a new dataset",
      "Performance: measuring the model performance",
      "Monitoring: tracking the performance of ML models in production",
      "Post-project support",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <section className="relative h-screen flex flex-col justify-center items-start bg-[url('/AI-ML.jpeg')] bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-left text-white px-6 md:px-16 lg:px-56">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            AI / ML Services
          </h1>
          <p className="text-lg md:text-2xl mb-8 leading-relaxed">
            We design and build industry-leading web-based products that bring
            <br />
            value to your customers, delivered with compelling UX.
          </p>

          <button
            className="text-gray-50 bg-[#0B5EFF] p-3 rounded-md "
            type="submit"
            onClick={handleScrollToContact}
          >
            Let&apos;s work together
          </button>
        </div>
      </section>

      {/* AI / ML Services */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 space-y-4 lg:space-y-0 mb-20">
            <h2
              className="text-3xl md:text-4xl font-bold lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Achieve your business goals{" "}
              <span className="text-[#0B5EFF]">with AI / ML solutions</span>
            </h2>
            <p
              className="text-lg text-gray-700 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Our battle-tested AI/ML experts specialize in a wide range of
              services. Here are some of the innovative solutions we can deliver
              for you.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center mb-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 max-w-lg bg-white flex flex-col items-start space-y-6"
                data-aos="fade-up"
              >
                <div className="flex justify-between items-center w-full mb-6">
                  <h1 className="text-xl mr-10 font-semibold text-gray-800">
                    {card.title}
                  </h1>
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <ul className="list-none text-gray-600 text-sm leading-relaxed space-y-4">
                  {card.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="h-2 w-2 mt-1 mr-3 rounded-full border border-blue-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-24 px-6 md:px-16 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="/ai-card.jpeg"
              alt="Laptops"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elevate your digital with a top-tier{" "}
              <span className="text-[#0B5EFF]">
                AI/ML solutions that set you apart, driving innovation and
                delivering exceptional results.
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              At <span className="text-[#0B5EFF]">Artifice Labs</span>, we
              provide a complete range of AI/ML services to help you create
              fully-featured, intelligent web-based products.
            </p>

            <ul className="text-lg text-gray-700 space-y-2 mb-10">
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Predictive Analytics - Deliver insights that forecast trends and
                drive data-driven decisions.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Natural Language Processing (NLP) - Enhance communication with
                AI-powered chatbots and language models.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Computer Vision - Enable real-time image and video recognition
                for automation and analysis.
              </li>
              <li className="flex flex-row items-start">
                <img
                  src="/listSymbol.png"
                  className="mt-1.5 mr-2"
                  alt="list symbol"
                />
                Recommendation Systems - Provide personalized content and
                product recommendations to boost user engagement.
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
                An AI/ML company&apos;s mission is to identify and implement
                intelligent solutions that align with a client&apos;s specific
                business objectives.
              </span>{" "}
              With the right AI/ML services, you can develop innovative products
              from the ground up or optimize the performance of existing ones
              using data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <AiMlTechnologies />

      {/* Web Development Process */}
      <AiMlProcess />

      {/* Explanation */}
      <AiMlExplanation />

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
