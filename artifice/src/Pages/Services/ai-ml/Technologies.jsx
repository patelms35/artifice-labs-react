const Technologies = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold lg:w-1/2">
            What technologies will deliver the{" "}
            <span className="text-[#0B5EFF]">
              greatest value to your business?
            </span>
          </h2>
          <p className="text-lg text-gray-700 lg:w-1/2">
            Address customer challenges by selecting advanced technologies for
            your tech stack. Elevate your business with customized solutions
            designed to meet your specific needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-start transform lg:translate-y-0">
            <div className="flex items-center mb-4">
              <img src="/frontend-dev.png" alt="Frontend Development Icon" />
            </div>
            <p className="text-gray-700">
              <span className="text-xl font-bold text-[#0B5EFF]">
                Frontend Development.&nbsp;
              </span>
              We utilize leading frontend frameworks such as React.js, Vue.js,
              and Angular, which allow us to develop the visual interface of
              your product.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-80 bg-white p-6 rounded-lg shadow-lg flex flex-col items-start transform lg:translate-y-14 lg:mt-0">
            <div className="flex items-center mb-4">
              <img src="/backend-dev.png" alt="Backend Development Icon" />
            </div>
            <p className="text-gray-700">
              <span className="text-xl font-bold text-[#0B5EFF]">
                Backend Development.&nbsp;
              </span>
              We use server-side technologies like Python, and Node.js for
              prototyping and development, producing fast and scalable web apps.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-80 bg-white p-6 rounded-lg shadow-lg flex flex-col items-start transform lg:translate-y-56">
            <div className="flex items-center mb-4">
              <img src="/cloud-dev.png" alt="Cloud Development Icon" />
            </div>
            <p className="text-gray-700">
              <span className="text-xl font-bold text-[#0B5EFF]">
                Cloud Development.&nbsp;
              </span>
              Additionally, we leverage cloud platforms such as Google Cloud,
              Amazon Web Services, and Microsoft Azure to ensure rapid and
              secure deployment of your applications.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-80 bg-white p-6 rounded-lg shadow-lg flex flex-col items-start transform lg:translate-y-5">
            <div className="flex items-center mb-4">
              <img src="/full-stack.png" alt="Full Stack Development Icon" />
            </div>
            <p className="text-gray-700">
              <span className="text-xl font-bold text-[#0B5EFF]">
                Full Stack Development.&nbsp;
              </span>
              We provide comprehensive web development services, integrating
              both frontend and backend solutions, along with the necessary
              technologies to ensure your product&apos;s success.
            </p>
          </div>

          {/* Card 5 */}
          <div className="w-80 bg-white p-6 rounded-lg shadow-lg flex flex-col items-start transform lg:translate-y-20">
            <div className="flex items-center mb-4">
              <img src="/low-code.png" alt="Low-Code Development Icon" />
            </div>
            <p className="text-gray-700">
              <span className="text-xl font-bold text-[#0B5EFF]">
                Low-Code Development.&nbsp;
              </span>
              We also excel in crafting no-code and low-code web solutions,
              helping clients save both time and money. We leverage platforms
              like Webflow and Mendix for these projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
