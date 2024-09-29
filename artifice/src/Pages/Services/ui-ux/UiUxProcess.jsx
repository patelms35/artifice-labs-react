import { Icons } from "../../../Orbit/icons";
import { OrbitingCirclesDemo } from "../../../Orbit/magic";

const UiUxProcess = () => {
  const innerIcons = [Icons.framer, Icons.figma];
  const outerIcons = [Icons.adobe, Icons.sketch, Icons.miro];
  return (
    <section className="py-16 px-6 md:px-16 mb-10 bg-white text-left md:flex">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mt-14 mb-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="text-[#0B5EFF]">
            Leverage our established UI/UX design process
            <br />
          </span>
          to ensure the success of your project.
        </h2>
        {/* Description */}
        <p
          className="text-lg text-gray-700 w-3/4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          We understand that the most intricate projects require meticulous
          attention to every detail throughout the UI/UX design process. We have
          the expertise needed to ensure a smooth and efficient user experience
          and interface design that elevates the quality and functionality of
          your product.
        </p>
      </div>
      <div>
        <OrbitingCirclesDemo innerIcons={innerIcons} outerIcons={outerIcons} />
      </div>
    </section>
  );
};

export default UiUxProcess;
