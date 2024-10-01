import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Icons } from "../../../Orbit/icons";
import { OrbitingCirclesDemo } from "../../../Orbit/magic";

const ARVRProcess = () => {
  const innerIcons = [Icons.framer, Icons.figma];
  const outerIcons = [Icons.adobe, Icons.sketch, Icons.miro];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 mb-10 bg-white lg:flex text-left">
      <div className="max-w-7xl xl:ml-60">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mt-14 mb-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="text-[#0B5EFF]">
            Leverage our established web development <br /> process&nbsp;
          </span>
          to ensure the success of your project.
        </h2>
        {/* Description */}
        <p
          className="text-lg text-gray-700 w-3/4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          We understand that the most intricate projects require meticulous
          attention to every detail throughout the web development process. With
          over 1000 projects successfully delivered at Artifice labs , we have
          the expertise needed to ensure a smooth and efficient web-based
          software development experience.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10 md:mt-0">
        <OrbitingCirclesDemo innerIcons={innerIcons} outerIcons={outerIcons} />
      </div>
    </section>
  );
};

export default ARVRProcess;
