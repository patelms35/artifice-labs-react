import mission from "../assets/mission.png";
import vision from "../assets/vision.png";

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-[#F6F9FE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To bridge the gap between people and technology by creating
              innovative solutions that simplify daily tasks, enhance user
              experiences, and improve quality of life.
            </p>
          </div>
          <div className="md:order-2">
            <img
              src={mission}
              alt="Mission Icon"
              className="w-full max-w-xs mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="md:order-1">
            <img
              src={vision}
              alt="Vision Icon"
              className="w-full max-w-xs mx-auto"
            />
          </div>
          <div className="md:order-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a global leader in technology solutions, empowering
              individuals and businesses through innovative, user-friendly, and
              impactful technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
