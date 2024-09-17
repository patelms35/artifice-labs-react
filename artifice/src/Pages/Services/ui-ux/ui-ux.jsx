import Navbar from "../../components/Navbar";

const ui = () => {

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-start bg-[url('/ui.jpeg')] bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-left text-white px-6 md:px-16 lg:px-56">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Web Development Services
          </h1>
          <p className="text-lg md:text-2xl mb-8 leading-relaxed">
            We design and build industry-leading web-based products that bring
            <br />
            value to your customers, delivered with compelling UX.
          </p>

          <button
            className="text-gray-50 bg-[#0B5EFF] p-3 rounded-md "
            type="submit"
          >
            Let&apos;s work together
          </button>
        </div>
      </section>
    </div>
  );
};
export default ui;
