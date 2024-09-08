import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ServicesSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className="w-full md:w-3/4 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-lg text-gray-600">
          Discover our wide range of services.
        </p>
      </div>

      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="flex text-center flex-col items-center">
            <div className="shadow-md h-[435px] w-[350px] text-black rounded-xl bg-white p-6 flex flex-col justify-between items-center m-5">
              <div className="h-16 w-16 bg-gray-300 rounded-full mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-center text-gray-600 mb-6">{item.content}</p>
              <button className="learn-more mt-4">
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
