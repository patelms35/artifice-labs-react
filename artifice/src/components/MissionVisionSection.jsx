import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import MainHeading from "./MainHeading";

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-[#F6F9FE]">
      <div className="container mx-auto px-4">
        <MainHeading
          title="Mission & Vision"
          backgroundTitle="Mission & Vision"
        />

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission Text */}
          <div className="order-1 md:order-1" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
              <div className="h-1 w-10 bg-blue-500 ml-[6rem]"></div>
            </h3>
            <p className="text-gray-600 text-2xl font-semibold ">
              To bridge the gap between people and technology by creating
              innovative solutions that simplify daily tasks, enhance user
              experiences, and improve quality of life.
            </p>
          </div>

          {/* Mission Image */}
          <div
            className="md:mt-28 order-2 md:order-2 mt-8"
            data-aos="fade-left"
          >
            <img
              src={mission}
              alt="Mission Icon"
              className="w-full max-w-xs mx-auto"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Vision Text */}
          <div className="order-3 md:order-2" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
              <div className="h-1 w-10 bg-blue-500 ml-[4.8rem]"></div>
            </h3>
            <p className="text-gray-600 text-2xl font-semibold">
              To be a global leader in technology solutions, empowering
              individuals and businesses through innovative, user-friendly, and
              impactful technological advancements.
            </p>
          </div>

          {/* Vision Image */}
          <div className="order-4 md:order-1" data-aos="fade-right">
            <img src={vision} alt="Vision Icon" width={450} height={450} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
