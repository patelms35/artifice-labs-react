import { useState } from "react";
import Modal from "react-modal";
import Navbar from "./Navbar.jsx";

const OurWorks = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    imgSrc: "",
    description: "",
    link: "", // New property to hold the link
  });

  const cardData = [
    {
      id: 1,
      title: "Web Development",
      imgSrc: "/web-dev-work.png",
      paragraph: "Amazon.in",
    },
    {
      id: 2,
      title: "Application Development",
      imgSrc: "/app-dev-work.png",
      paragraph: "Amazon.in",
    },
    {
      id: 3,
      title: "AI/ML",
      imgSrc: "/ai-ml-work.png",
      paragraph: "Amazon.in",
    },
  ];

  const modalData = {
    1: {
      title: "Web Development",
      imgSrc: "/web-dev-work.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis inventore, esse nesciunt itaque quia iure harum eligendi omnis, officiis officia facere possimus enim. Itaque numquam consequatur unde voluptates exercitationem repudiandae distinctio, tempora eum officiis quidem.",
      link: "#", // Link for the project
    },
    2: {
      title: "Application Development",
      imgSrc: "/app-dev-work.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis inventore, esse nesciunt itaque quia iure harum eligendi omnis, officiis officia facere possimus enim. Itaque numquam consequatur unde voluptates exercitationem repudiandae distinctio, tempora eum officiis quidem.",
      link: "#", // Link for the project
    },
    3: {
      title: "AI/ML",
      imgSrc: "/ai-ml-work.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis inventore, esse nesciunt itaque quia iure harum eligendi omnis, officiis officia facere possimus enim. Itaque numquam consequatur unde voluptates exercitationem repudiandae distinctio, tempora eum officiis quidem.",
      link: "#", // Link for the project
    },
  };

  const openModal = (id) => {
    setModalContent(modalData[id]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="bg-white py-10 font-poppins">    
        <div className="flex items-baseline justify-end absolute w-64 h-64 rounded-full blur-3xl opacity-60 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-700"></div>
      
      <Navbar />
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-6 mt-20">
        Project Done By Artifice Labs
      </h2>
      <div className="flex flex-col md:flex-row justify-center relative z-20 items-center gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="max-w-sm bg-white rounded-lg overflow-hidden hover:shadow-2xl border-2 cursor-pointer"
            onClick={() => openModal(card.id)}
          >
            <img className="w-full" src={card.imgSrc} alt={card.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  shouldCloseOnOverlayClick={true}
  className="fixed inset-0 flex items-center justify-center p-4 z-50" // Add z-50 to give the modal a high z-index
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40" // Add z-40 to the overlay for proper layering
  contentLabel="Project Details"
>
  <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
    <button
      onClick={closeModal}
      className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
    >
      &times;
    </button>
    <h2 className="text-2xl font-bold mb-2">{modalContent.title}</h2>

    <a
      href={modalContent.link}
      className="text-blue-500 underline mb-4 inline-block"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>

    {/* Render the image */}
    <img
      src={modalContent.imgSrc}
      alt={modalContent.title}
      className="w-full mb-4 rounded"
    />

    {/* Render the description */}
    <p className="text-gray-600">{modalContent.description}</p>
  </div>
</Modal>
      <div className="flex items-baseline justify-end z-30 mt-48">
        <div className="w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-pink-300 via-purple-400 to-purple-700 opacity-60"></div>
      </div>
    </section>
  );
};

export default OurWorks;
