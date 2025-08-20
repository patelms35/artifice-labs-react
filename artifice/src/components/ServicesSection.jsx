import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import Learn from "./Buttons/learn-more/learn-more.jsx";
import MainHeading from "./MainHeading";

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slides, setSlides] = useState([]);

  const data = [
    {
      title: "Web Development",
      image: "/web.png",
      content:
        "We design and develop top-tier web products, providing value to your customers through innovative solutions and engaging user experiences.",
    },
    {
      title: "Application Development",
      image: "/app.png",
      content:
        "We design and build industry-leading web products, delivering innovation, seamless experiences, and tailored solutions that drive customer success.",
    },
    {
      title: "AR/VR",
      image: "vr.png",
      content:
        "We design and build cutting-edge AR/VR experiences that deliver immersive value to your customers, enhanced with compelling user experiences.",
    },
    {
      title: "AI/ML",
      image: "ai.png",
      content:
      "We develop cutting-edge AI/ML solutions that deliver substantial value to your customers, focusing on providing a compelling and intuitive user experience throughout their journey.",
    },
    {
      title: "UI/UX Design",
      image: "ui.png",
      content:
        "We create user-focused designs for web products, delivering intuitive interfaces and engaging UX that enhance customer value and satisfaction.",
    },
  ];

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1440) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  useEffect(() => {
    const newSlides = [];
    for (let i = 0; i < cardsToShow; i++) {
      newSlides.push(data[(currentSlide + i) % data.length]);
    }
    setSlides(newSlides);
  }, [currentSlide, cardsToShow]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div
      id="services"
      className="w-full md:w-3/4 mx-auto py-16 bg-[#F6F9FE] h-screen mt-[4rem] md:mb-[9rem]"
    >
      <div className="text-center mb-12">
        <MainHeading title="Services" backgroundTitle="Services" />
        <p
          className="text-left text-[32px] ml-10 font-syne font-bold text-black mt-12"
          data-aos="fade-right"
        >
          Discover our wide range of services.
        </p>
      </div>

      <div className="relative" data-aos="fade-up">
        {/* Cards container */}
        <div className="flex text-center justify-center items-center space-x-4">
          {slides.map((item, index) => (
            <div
              key={index}
              className={`shadow-lg hover:shadow-2xl h-[435px] w-[350px] text-black rounded-xl bg-white p-6 flex flex-col justify-between items-center border-2 border-[#E0E0E0] hover:border-[#106EEA] hover:border-opacity-40 hover:shadow-[#106EEA]/40  hover:transition-all transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105
              ${
                isAnimating ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
            >
              <img src={item.image} className="h-16 w-16 mb-6" />
              <h3 className="text-2xl font-syne font-semibold mb-4">{item.title}</h3>
              <p className="text-center text-gray-600 mb-6">{item.content}</p>

              {/* Learn More Button */}
              <Learn title={item.title} />
            </div>
          ))}
        </div>

        <div className="flex justify-around mt-6 lg:mt-0 lg:absolute lg:top-1/2 lg:left-0 lg:right-0 lg:flex lg:justify-between lg:px-10">
          <button
            className="shadow-xl hover:shadow-2xl hover:shadow-[#106EEA] rounded-full lg:absolute lg:left-[-70px] lg:top-1/2 transform lg:-translate-y-1/2 z-10"
            onClick={handlePrev}
          >
            <ArrowLeft className="text-black transition duration-300 hover:bg-[#0B5EFF] hover:text-white w-12 h-12 bg-white rounded-full p-2" />
          </button>
          <button
            className="shadow-xl hover:shadow-2xl hover:shadow-[#106EEA] rounded-full lg:absolute lg:right-[-70px] lg:top-1/2 transform lg:-translate-y-1/2 z-10"
            onClick={handleNext}
          >
            <ArrowRight className="text-black transition duration-300 hover:bg-[#0B5EFF] hover:text-white w-12 h-12 bg-white rounded-full p-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
