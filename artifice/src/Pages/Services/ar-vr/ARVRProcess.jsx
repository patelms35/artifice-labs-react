import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icons } from "../../../Orbit/icons";
import { OrbitingCirclesDemo } from "../../../Orbit/magic";

const ARVRProcess = () => {

  const innerIcons = [Icons.framer, Icons.figma];
  const outerIcons = [Icons.adobe, Icons.sketch, Icons.miro];
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
            Leverage our established AR/VR development process&nbsp; <br />
          </span>
          to ensure the success of your immersive project.
        </h2>
        {/* Description */}
        <p
          className="text-lg text-gray-700 w-3/4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          We recognize that the most complex AR/VR projects demand careful
          attention to every detail throughout the development process. Our
          expertise ensures a seamless and efficient experience in creating
          immersive, web-based solutions.
        </p>
      </div>
      <div>
        <OrbitingCirclesDemo innerIcons={innerIcons} outerIcons={outerIcons} />
      </div>
    </section>
  );
};

export default ARVRProcess;
