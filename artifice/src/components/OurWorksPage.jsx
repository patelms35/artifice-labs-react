import Navbar from "./Navbar.jsx";

const OurWorks = () => {
  return (
    <section className="bg-white py-10 font-poppins">
      <Navbar />
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-6 mt-20">
        Project Done By Artifice Labs
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Card 1 */}
        <div className="max-w-sm bg-white rounded-lg overflow-hidden hover:shadow-2xl border-2  ">
          <img
            className="w-full"
            src="/web-dev-work.png"
            alt="Web Development"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-500">Amazon.in</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm bg-white rounded-lg overflow-hidden hover:shadow-2xl border-2  ">
          <img
            className="w-full"
            src="/app-dev-work.png"
            alt="Application Development"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Application Development
            </h3>
            <p className="text-gray-500">Amazon.in</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm bg-white rounded-lg overflow-hidden hover:shadow-2xl border-2  ">
          <img className="w-full" src="/ai-ml-work.png" alt="AI/ML" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">AI/ML</h3>
            <p className="text-gray-500">Amazon.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
