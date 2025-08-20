import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import ContactUsSection from "../../../components/ContactUsSection";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ARVRProcess from "./ARVRProcess";
import ArVrExplanation from "./ArVrExplanation";

const cards = [
  {
    image: "arVrPage/arconsultancy.png",
    alt: "ar vr consultancy services",
    title: "AR & VR Consultation Services",
    content:
      "With our AR/VR app consultation services, we help you blur the line between the physical and virtual worlds and translate your app vision into reality. This way, you can understand the true potential of tapping into AR/VR technologies to make your business shine.",
  },
  {
    image: "arVrPage/ariot.png",
    alt: "AR/VR in education",
    title: "AR/VR in Education",
    content:
      "AR and VR in education revolutionize learning by creating immersive, interactive experiences. These technologies enhance engagement, simplify complex concepts, and foster deeper understanding through hands-on, visual learning in a virtual environment.",
  },
  {
    image: "arVrPage/argamedev.png",
    alt: "ar vr game development",
    title: "AR/VR Game Development",
    content:
      "We have a dedicated team of technology enthusiasts who create high-quality gaming solutions for various platforms such as Oculus Life, Samsung Gear, etc. On top of that, we'll redefine the entire gaming landscape using AR/VR solutions that make the players tick online and create enhanced gaming experiences that were not possible before.",
  },
  {
    image: "arVrPage/arlocation.png",
    alt: "Location-Based VR and AR Development Services",
    title: "Location-Based VR and AR Development Services",
    content:
      "As an AR/VR development company, we possess technical expertise in creating high-performing AR apps that use GPS, beacons, and location-based sensors to direct customers to your business. Thus, investing in location-based AR/VR services helps you to target audiences in a particular region.",
  },
  {
    image: "arVrPage/arrecognition.png",
    alt: "Visual Recognition Solutions",
    title: "Visual Recognition Solutions",
    content:
      "Transform the lives of your customers with our AR/VR visualization solutions enabling them to interact with digital objects. Such smart applications take visual content such as images and videos as input to drive immersive experiences that will win your customers' hearts.",
  },
  {
    image: "arVrPage/ar3ddesign.png",
    alt: "3D Design and Development",
    title: "3D Design and Development",
    content:
      "As an AR/VR app development agency, we combine 5+ years of knowledge in creating digital 3D models (animations, simulations) that provide next-level user interactions and immersive experiences. Whether you're a startup, a renowned brand, or an established enterprise, the 3D models we develop add a digital layer in the real world which increases your customer engagement.",
  },
  {
    image: "arVrPage/armixedreality.png",
    alt: "Mixed Reality Solutions",
    title: "Mixed Reality Solutions",
    content:
      "We provide AR/VR solutions at affordable prices, one of which is Mixed reality solutions. After working on 23+ AR/VR projects for different industries, we know how to double your business productivity by blending physical and virtual worlds, so your business is always on top of customers' minds.",
  },
  {
    image: "arVrPage/arsupport.png",
    alt: "AR & VR Support And Maintenance",
    title: "AR & VR Support And Maintenance",
    content:
      "To keep your AR/VR applications running all the time, we provide exceptional support and maintenance services that include keeping your app updated to the new version and fixing bugs and security patches.",
  },
  {
    image: "arVrPage/arconsultancy.png",
    alt: "ar vr in real estate",
    title: "AR & VR in Real Estate",
    content:
      "AR and VR in real estate revolutionize property experiences by offering immersive virtual tours, 3D visualizations, and interactive floor plans, enabling buyers to explore properties remotely and make informed decisions efficiently.",
  },
  {
    image: "arVrPage/ariot.png",
    alt: "AR/VR in Retail",
    title: "AR/VR in Retail",
    content:
      "AR and VR in retail revolutionize shopping experiences by enabling immersive product visualization, virtual try-ons, and interactive store environments, enhancing customer engagement, personalization, and driving higher sales conversions.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 2000 });
  }, []);

  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-start bg-[url('/ar-main.jpeg')] bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-left text-white px-6 md:px-16 lg:px-56">
          <h1
            className="text-4xl md:text-5xl font-syne font-bold mb-8 leading-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            AR / VR Services
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We design and build cutting-edge AR/VR experiences that deliver
            <br />
            immersive value to your customers, enhanced with compelling user
            <br />
            experiences.{" "}
          </p>

          <button
            className="text-gray-50 bg-[#0B5EFF] p-3 rounded-md "
            type="submit"
            onClick={handleScrollToContact}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Let&apos;s work together
          </button>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div
              className="md:w-1/2 font-syne font-bold text-2xl md:text-3xl md:mr-10 mt-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="text-black">What are </span>
              <span className="text-[#0B5EFF]">AR / VR services?</span>
            </div>

            <div
              className="md:w-1/2 text-lg md:text-xl leading-relaxed text-gray-700 mt-4 md:mb-10 md:mt-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              AR/VR development encompasses a wide range of services, including
              delivering immersive AR/VR applications, spatial computing
              solutions, 3D content design, intuitive UX/UI for virtual
              environments, eCommerce integration within AR/VR spaces, custom
              virtual architectures, QA testing for interactive experiences,
              continuous maintenance, consulting, and custom-built immersive
              platforms.
            </div>
          </div>
        </div>
      </section>

      {/* Section - Achieve your business goals */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 space-y-4 lg:space-y-0 mb-24">
            <h2
              className="text-3xl md:text-4xl font-bold lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Achieve your business goals{" "}
              <span className="text-[#0B5EFF]">with AR / VR solutions</span>
            </h2>
            <p
              className="text-lg text-gray-700 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Our experienced AR/VR developers specialize in delivering a
              diverse range of immersive solutions. Here are some of the
              cutting-edge AR/VR services we can create for you, bringing
              innovation and value to your projects.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mb-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 max-w-lg shadow-sm bg-white flex flex-col items-start transform mx-auto"
                data-aos="fade-up"
              >
                <div className="flex justify-between items-center w-full mb-4">
                  <h1 className="text-xl font-semibold text-gray-800">
                    {card.title}
                  </h1>
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-24 px-6 md:px-16 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <img
              src="/ar-card.jpg"
              alt="Laptops"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
            <h2
              className="text-3xl md:text-3xl font-syne font-bold mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Enhance your digital presence with a leading {""}
              <span className="text-[#0B5EFF]">
                AR/VR service provider, delivering innovative, immersive
                solutions with unmatched user-centric design.
              </span>
            </h2>
            <p
              className="text-lg text-gray-700 mb-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              At{" "}
              <span className="text-[#0B5EFF] font-semibold">
                Artifice Labs
              </span>
              , we provide a complete range of AR/VR development services to
              help you create fully-featured immersive experiences, tailored to
              your specific needs and goals.
            </p>
            <p
              className="text-lg text-gray-700 mt-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="font-extrabold">
                An AR/VR development company&apos;s mission is to identify and
                implement immersive solutions that align with a client&apos;s
                specific business objectives.
              </span>{" "}
              With the right services, you can create a successful virtual
              experience from the ground up or enhance the functionality of an
              existing one.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Process */}
      <ARVRProcess />

      {/* Explanation */}
      <ArVrExplanation />

      {/* Contact Us */}
      <div ref={contactRef}>
        <ContactUsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
