import { ArrowLeft, ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainHeading from "./MainHeading";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute lg:left-[-30px] lg:top-1/2 lg:transform lg:-translate-y-1/2 bottom-[-40px] left-1/2 transform -translate-x-full translate-y-0 lg:translate-x-0 z-10"
      onClick={onClick}
    >
      <ArrowLeft className="text-black w-6 h-6" />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute lg:right-[50px] lg:top-1/2 lg:transform lg:-translate-y-1/2 bottom-[-40px] right-1/2 transform translate-x-full translate-y-0 lg:translate-x-0 z-10"
      onClick={onClick}
    >
      <ArrowRight className="text-black w-6 h-6" />
    </button>
  );
};

const ServicesSection = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  const handleClick = (title) => {
    if (title === "Web Development") {
      navigate("/web-dev");
    }
  };

  return (
    <section className="w-full md:w-3/4 mx-auto py-16 bg-[#F6F9FE]  ">
      <div className="text-center mb-12">
        <MainHeading title="Services" backgroundTitle="Services" />

        <p
          className="text-left text-[32px] font-bold text-black mt-12"
          
        >
          Discover our wide range of services.
        </p>
      </div>

      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex text-center flex-col items-center "
           
          >
            <div className="shadow-lg hover:drop-shadow-2xl h-[435px] w-[350px] text-black rounded-xl bg-white p-6 flex flex-col justify-between items-center m-10  border-2 border-[#E0E0E0] mb-36 hover:border-[#106EEA] hover:border-opacity-40 hover:shadow-[#106EEA]/40 ">
              <div className="h-16 w-16 bg-gray-300 rounded-full mb-6 "></div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-center text-gray-600 mb-6">{item.content}</p>
              <button
                className="learn-more mt-4"
                onClick={() => handleClick(item.title)}
              >
                <span className="circle">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn more</span>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const data = [
  {
    title: "Web Development",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
  },
  {
    title: "Application Development",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
  },
  {
    title: "AR/VR",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
  },
  {
    title: "AI/ML",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
  },
  {
    title: "UI/UX Design",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore expedita magnam veritatis facere vero velit quasi quibusdam modi",
  },
];

export default ServicesSection;
