const Explanation = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 text-left">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10" data-aos="fade-up"  data-aos-delay="300">
          Why choose <span className="text-[#0B5EFF]">Artifice Labs</span> to
          design your user experience?
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-700 mb-16" data-aos="fade-up"  data-aos-delay="400" >
          No matter if you&apos;re an entrepreneur, a start-up leader, or head
          of a large company, your digital product&apos;s success will hinge on
          achieving key strategic design goals. Your ideal UI/UX design partner
          should serve as both a guide and advisor throughout this critical
          journey. With us, you can be confident that the final product will
          offer a seamless and intuitive experience that aligns with both your
          and your customers&apos; expectations.
        </p>

        {/* Team Section */}
        <h3 className="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up"  data-aos-delay="500">
          UI/UX Design Team
        </h3>
        <p className="text-lg text-gray-700 mb-16" data-aos="fade-up"  data-aos-delay="600" >
          The composition of our team is tailored to the specific needs of each
          project. Each member is meticulously chosen to contribute significant
          value to your product&apos;s design. We possess the expertise to
          handle every facet of UI/UX design.
        </p>

        {/* Team Roles */}
        <ul className="space-y-4" data-aos="fade-up"  data-aos-delay="700" >
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              UI/UX designers focus on creating engaging and intuitive user
              experiences.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              UI/UX designers ensure that all visual and interactive elements of
              an app are intuitive, engaging, and enhance user experience.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              UI/UX designers create intuitive, engaging, and accessible
              interfaces, collaborating with frontend and backend teams to
              enhance user experience.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              UI/UX designers enhance user experience and interface, shaping the
              visual and functional aspects of apps.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Explanation;
