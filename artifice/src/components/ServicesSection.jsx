import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import Learn from "./Buttons/learn-more/learn-more.jsx"; // Import the Learn component
import MainHeading from "./MainHeading";

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false); // Control animation state
  const [slides, setSlides] = useState([]); // Store visible slides
  const navigate = useNavigate();

  const data = [
    {
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
    },
    {
      title: "Application Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
    },
    {
      title: "AR/VR",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
    },
    {
      title: "AI/ML",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
    },
    {
      title: "UI/UX Design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
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
    // Initially set the visible slides based on currentSlide and cardsToShow
    const newSlides = [];
    for (let i = 0; i < cardsToShow; i++) {
      newSlides.push(data[(currentSlide + i) % data.length]);
    }
    setSlides(newSlides);
  }, [currentSlide, cardsToShow]);

  const handleNext = () => {
    setIsAnimating(true); // Start fade-out
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length); // Update slide after fade-out
      setIsAnimating(false); // Start fade-in
    }, 300); // Adjust the delay to match the CSS fade duration
  };

  const handlePrev = () => {
    setIsAnimating(true); // Start fade-out
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + data.length) % data.length); // Update slide after fade-out
      setIsAnimating(false); // Start fade-in
    }, 300); // Adjust the delay to match the CSS fade duration
  };

  return (
    <div
      id="services"
      className="w-full md:w-3/4 mx-auto py-16 bg-[#F6F9FE] mt-[4rem]"
    >
      <div className="text-center mb-12">
        <MainHeading title="Services" backgroundTitle="Services" />
        <p
          className="text-left text-[32px] ml-10 font-bold text-black mt-12"
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
              className={`shadow-lg hover:shadow-2xl h-[435px] w-[350px] text-black rounded-xl bg-white p-6 flex flex-col justify-between items-center border-2 border-[#E0E0E0] hover:border-[#106EEA] hover:border-opacity-40 hover:shadow-[#106EEA]/40 transition-all duration-300 ease-in-out
              ${
                isAnimating ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
            >
              <div className="h-16 w-16 bg-gray-300 rounded-full mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
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
