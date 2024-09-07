import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import LeftLogo from "../assets/arrow-left-solid.svg?react";
import RightLogo from "../assets/arrow-right-solid.svg?react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        margin: "auto",
      }}
      onClick={onClick}
    >
      <RightLogo className="arrow-icon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: 50,
      }}
      onClick={onClick}
    >
      <LeftLogo className="arrow-icon" />
    </div>
  );
}

const ServicesSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true, // Center the slides in view
          centerPadding: "20px", // Adjust padding to ensure full card visibility
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="w-full md:w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="flex flex-row text-center">
              <div className="shadow-black shadow-md h-[433px] w-[365px] text-black rounded-xl flex flex-col justify-center items-center">
                <div className="h-10 w-10 bg-slate-800 rounded-md mb-10"></div>
                <div>
                  <h1 className="text-2xl mb-12">{item.title}</h1>
                  <p>{item.content}</p>
                  <button className="learn-more mt-10">
                    <span className="circle">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">View More</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
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
];

export default ServicesSection;
