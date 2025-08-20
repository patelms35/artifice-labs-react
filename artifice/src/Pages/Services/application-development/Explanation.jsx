import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Explanation = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 text-left">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-syne font-bold mb-10" data-aos="fade-up" data-aos-delay="500" >
          Why choose <span className="text-[#0B5EFF]">Artifice Labs </span>for{" "}
          your application development needs?
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-700 mb-16" data-aos="fade-up" data-aos-delay="600">
          Whether you&apos;re an entrepreneur, start-up founder, or leader of a
          large organization, the success of your application will depend on
          meeting essential strategic objectives. Your ideal application
          development partner should act as both a mentor and advisor during
          this crucial process. With our expertise, you can trust that the end
          product will not only meet your goals but also exceed your
          customers&apos; expectations.
        </p>

        {/* Team Section */}
        <h3 className="text-2xl md:text-3xl font-syne font-bold mb-6" data-aos="fade-up" data-aos-delay="700" >
          Application development team
        </h3>
        <p className="text-lg text-gray-700 mb-16" data-aos="fade-up" data-aos-delay="800" >
          Our team composition is customized to meet the unique demands of each
          project, with every member selected for their ability to add
          substantial value to your app&apos;s development. We have the
          expertise to manage every aspect of application development, ensuring
          a seamless and effective process.
        </p>

        {/* Team Roles */}
        <ul className="space-y-4" data-aos="fade-up" data-aos-delay="900" >
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              UI designers focus on crafting visually appealing user interfaces.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              UX designers ensure that all visual and interactive elements of an
              app are intuitive, practical, and effective at keeping users
              engaged. engaged.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              Frontend developers build responsive, adaptable, fast, secure, and
              user-friendly applications in collaboration with design and
              backend teams.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              DevOps engineers assist in both app development and managing the
              IT infrastructure.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              Backend developers concentrate on making apps fast and scalable,
              while also optimizing infrastructure costs.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              The project manager oversees the project’s progress, ensures
              timely task completion, and aligns the product with business
              goals.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              QA specialists guarantee that the app’s code is of the highest
              standard and that users experience exceptional performance.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Explanation;
