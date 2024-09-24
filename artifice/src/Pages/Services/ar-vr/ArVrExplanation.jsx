const Explanation = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 text-left">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why choose <span className="text-[#0B5EFF]">Artifice Labs</span> to
          develop your AR / VR product?
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-700 mb-16">
          No matter if you&apos;re an entrepreneur, a start-up leader, or head
          of a large company, the success of your AR/VR project will depend on
          meeting key strategic goals. Your ideal AR/VR development partner
          should act as both a guide and advisor throughout this crucial
          journey. With us, you can be confident that the final immersive
          experience will align with both your vision and your customers&apos;
          expectations.
        </p>

        {/* Team Section */}
        <h3 className="text-2xl md:text-3xl font-bold mb-6">AR / VR Team</h3>
        <p className="text-lg text-gray-700 mb-16">
          The composition of our team is tailored to the specific needs of each
          AR/VR project. Each member is meticulously selected to provide
          substantial value to the development of your immersive experience. We
          have the expertise to manage every aspect of AR/VR development.
        </p>

        {/* Team Roles */}
        <ul className="space-y-4">
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              AR/VR designers focus on creating visually captivating immersive
              experiences that engage users in innovative ways.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              AR/VR designers create immersive experiences, ensuring visual and
              interactive elements are intuitive, practical, and effective in
              engaging users.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              AR/VR developers create immersive, responsive, and secure
              experiences by collaborating with design and backend teams for
              user-friendly applications.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              AR/VR engineers assist in both immersive application development
              and managing the underlying technology infrastructure.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              AR/VR developers focus on creating immersive experiences that are
              both fast and scalable, while also optimizing resource usage to
              manage costs effectively.
            </span>
          </li>
          <li className="flex items-start">
            <img
              src="/listSymbol.png"
              className="mt-1.5 mr-2"
              alt="Checkmark"
            />
            <span className="text-lg text-gray-700">
              The project manager oversees AR/VR development, ensures timely
              task completion, and aligns immersive experiences with business
              objectives for optimal impact.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Explanation;
