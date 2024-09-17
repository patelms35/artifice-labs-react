const Explanation = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 text-left">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why choose <span className="text-[#0B5EFF]">Artifice Labs</span> to
          develop your web-based product?
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-700 mb-16">
          No matter if you&apos;re an entrepreneur, a start-up leader, or head
          of a large company, your digital product&apos;s success will hinge on
          achieving key strategic goals. Your ideal web development partner
          should serve as both a guide and advisor throughout this critical
          journey. With us, you can be confident that the final product will
          align with both your and your customers&apos; expectations.
        </p>

        {/* Team Section */}
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Web development team
        </h3>
        <p className="text-lg text-gray-700 mb-16">
          The composition of our team is tailored to the specific needs of each
          project. Each member is meticulously chosen to contribute significant
          value to your product&apos;s development. We possess the expertise to
          handle every facet of web development.
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
              engaged.
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
              The project manager oversees the project&apos;s progress, ensures
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
