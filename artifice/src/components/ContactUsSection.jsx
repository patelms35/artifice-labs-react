import { useForm } from "react-hook-form";
import contactUs from "../assets/Get-in-touch.png";
import MainHeading from "./MainHeading";

const ContactUsSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="py-16 bg-[#F6F9FE]">
      <MainHeading title="Contact Us" backgroundTitle="Contact Us" />
      <div className="container mt-20 mb-32 mx-auto px-4 md:gap-32  flex flex-col-reverse md:flex-row items-center justify-between">
        <div
          className="md:w-1/2 w-11/12 bg-white p-10 rounded-lg shadow-md"
          
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-[#106eea] ">
            Get in touch
            {/* <div className="h-1 w-16 bg-blue-500 mt-1 ml-80 "></div> */}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">
                Phone No.
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Message is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#106eea] text-white px-4 py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        
        >
          <img
            src={contactUs}
            alt="Contact Us"
            className="w-full h-auto max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;