import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import NavbarOurWorks from "./NavbarOurWorks.jsx";
import "./ourworks.css";

const OurWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    imgSrc: "",
    description: "",
    link: "",
  });

  const [filter, setFilter] = useState("All");
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  const cardData = [
    {
      id: 1,
      title: "UI / UX Design",
      imgSrc: "/ui-card.png",
      paragraph: "Near Me",
    },
    {
      id: 2,
      title: "AR / VR",
      imgSrc: "/app-dev-work.png",
      paragraph: "Augmented Reality Merge Cube",
    },
    {
      id: 3,
      title: "AR / VR",
      imgSrc: "/ai-ml-work.png",
      paragraph: "VR Simulators",
    },
    {
      id: 4,
      title: "Web Development",
      imgSrc: "/web-front-2.png",
      paragraph: "Cable TV and Broadband Billing system",
    },
    {
      id: 5,
      title: "Web Development",
      imgSrc: "/web-front-1.png",
      paragraph: "Dynamic Role based access Panel",
    },
  ];

  const modalData = {
    1: {
      title: "UI / UX Design",
      imgSrc: "/Trip-Planner.png",
      description:
        "At Artifice Labs, we recently created the UI/UX design for an AI-powered travel app that aims to transform the travel experience. The design emphasizes user-friendly navigation and provides easy access to personalized travel recommendations, streamlined itinerary planning, and real-time updates. With a focus on intuitive interaction and visual appeal, the app's interface is crafted to make it simple for users to explore flights, accommodations, and local attractions, delivering a seamless and enjoyable experience. This design showcases our expertise in creating innovative and user-centric solutions.",
    },
    2: {
      title: "Augmented Reality Merge Cube",
      imgSrc: "/app-dev-work.png",
      description:
        "This is an advanced format for teaching the students differently and uniquely. This will help students to learn the concepts more deeply and accurately as they will be able to observe the objects in 3D as it's there in their hand. This will make the teaching phase of your school or institute one step ahead of everyone and will engage the students more deeply in learning the concepts and it will attract them.",
    },
    3: {
      title: "VR Simulators for training purpose and exposure",
      imgSrc: "/ai-ml-work.png",
      description:
        "VR simulators will help the students of universities and schools to get exposure of the on-field works with the help of VR headsets and its controller. One of the examples we have is of Oil-Drill Rig. This will give the exposure to the students of petroleum engineering by visiting the field virtually and doing all the work by themselves. This will make them know all about the field and the fieldwork.",
    },
    4: {
      title: "Cable TV and Broadband Billing management system",
      imgSrc: "/web-back-2.png",
      description:
        "The system supports both Gujarati and English languages, providing user-friendly access. It includes a role-based access control module for Superadmin, admin, and regular users. Bills are generated according to predefined packages, with automated reminders for payments and renewals. The platform also manages complaints for helpers and office-related issues, ensuring efficient resolution. Additionally, it tracks extra expenses and income for accessories or services, giving users a comprehensive financial overview. This ensures streamlined user management and efficient financial handling.",
    },
    5: {
      title: "Dynamic Role based access Panel",
      imgSrc: "/web-back-1.png",
      description:
        "Develop a dynamic role-based access control panel with multi-role creation and customizable permissions. Features include domain-based panel access, super admin control for comprehensive user management, and support for various login methods. Assign users to one or more branches with tailored access rights, ensuring flexible, secure, and scalable user and role management across different organizational branches.",
    },
  };

  const openModal = (id) => {
    setModalContent(modalData[id]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const filteredCardData =
    filter === "All"
      ? cardData
      : cardData.filter((card) => card.title === filter);

  const filterTags = ["All", ...new Set(cardData.map((card) => card.title))];

  const nextTag = () => {
    setCurrentTagIndex((prevIndex) =>
      prevIndex === filterTags.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTag = () => {
    setCurrentTagIndex((prevIndex) =>
      prevIndex === 0 ? filterTags.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-10 font-poppins">
      <div className="hidden md:flex items-baseline justify-start z-0 fixed top-0 left-[-100px]">
        <div className="w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 opacity-60"></div>
      </div>

      <NavbarOurWorks />
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-6 mt-20">
        Project Done By Artifice Labs
      </h2>

      {/* Filter Tags */}
      <div className="flex justify-center mb-6 px-4 sm:px-0">
        <div className="w-full max-w-screen-lg flex items-center space-x-2">
          <button
            className="md:hidden px-2 py-1 bg-blue-500 text-white rounded"
            onClick={previousTag}
          >
            &lt;
          </button>

          <div className="flex w-full justify-center items-center sm:hidden">
            <button
              onClick={() => setFilter(filterTags[currentTagIndex])}
              className={`flex-shrink-0 px-4 py-2 rounded ${
                filter === filterTags[currentTagIndex]
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {filterTags[currentTagIndex]}
            </button>
          </div>

          <div className="hidden sm:flex w-full justify-center space-x-4">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded ${
                  filter === tag
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <button
            className="md:hidden px-2 py-1 bg-blue-500 text-white rounded"
            onClick={nextTag}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex justify-center items-center px-4">
        <div
          className="max-w-screen-xl w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-y-16 gap-x-24 justify-items-center"
          data-aos="fade-up"
        >
          {filteredCardData.map((card) => (
            <div
              key={card.id}
              className="bg-white w-[350px] xl:w-[450px] rounded-lg overflow-hidden hover:shadow-2xl border hover:transition-all transition-all cursor-pointer"
              onClick={() => openModal(card.id)}
            >
              <div className="p-4">
                <img
                  className="w-full h-[150px] sm:h-[240px] object-cover rounded-lg"
                  src={card.imgSrc}
                  alt={card.title}
                />
              </div>
              <div className="px-4 pb-3">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className="fixed inset-0 flex items-center justify-center p-4 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
        contentLabel="Project Details"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto relative">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-6">{modalContent.title}</h2>

          <img
            src={modalContent.imgSrc}
            alt={modalContent.title}
            className="w-full mb-4 rounded"
          />

          <p className="text-gray-600">{modalContent.description}</p>
        </div>
      </Modal>

      <div className="hidden md:flex items-baseline justify-end z-0 bottom-0 right-[-100px] fixed">
        <div className="w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-pink-300 via-purple-400 to-purple-700 opacity-60"></div>
      </div>
    </section>
  );
};

export default OurWorks;

// <a
//   href={modalContent.link}
//   className="text-blue-500 underline mb-4 inline-block"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   View Project
// </a>
