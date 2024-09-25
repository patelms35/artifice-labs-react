import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppDevProcess = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 mb-10 bg-white text-left">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-14 mb-20" data-aos="fade-up" data-aos-delay="300" >
          <span className="text-[#0B5EFF]">
            Utilize our proven application development  &nbsp;
          </span>
          methodology to guarantee the success of your project.
        </h2>
        {/* Description */}
        <p className="text-lg text-gray-700 w-3/4" data-aos="fade-up" data-aos-delay="400" >
          We recognize that the most complex application projects demand careful
          attention to every aspect of the development process. Our team has the
          expertise to ensure a seamless and efficient development experience,
          enhancing both the quality and functionality of your application.
        </p>
      </div>
    </section>
  );
};

export default AppDevProcess;
