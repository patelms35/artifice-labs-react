const AiMlTechnologies = () => {
  // Data array for the technologies
  const technologies = [
    {
      id: 1,
      title: "Generative AI",
      items: [
        "Chatbots",
        "Email Automation",
        "Code Generation",
        "Digital Assistants",
        "Content Curation",
      ],
    },
    {
      id: 2,
      title: "Natural Language Processing",
      items: [
        "Document Processing",
        "Data Extraction",
        "Sentiment Analysis",
        "Chatbots and Virtual Assistants",
        "Natural Language Generation",
      ],
    },
    {
      id: 3,
      title: "Computer Vision",
      items: [
        "Real-Time Object Detection",
        "Equipment Monitoring",
        "Infrastructure Damage Detection",
        "Security Solutions",
        "Store Environment Monitoring",
      ],
    },
    {
      id: 4,
      title: "Predictive and Recommendation Models",
      items: [
        "Demand Forecasting",
        "Customer Churn Prediction",
        "Fraud Detection",
        "Supply Chain Optimization",
        "Predictive Maintenance",
        "Recommendation Engine",
      ],
    },
    {
      id: 5,
      title: "AI-Accelerated Engineering",
      items: [
        "Developing Productivity Acceleration (optimization, boost, assistance)",
        "Automated Code Generation",
        "AI-Driven Testing",
        "Code Review Assistance",
        "AI-Powered Vulnerability Scanning and Threat Detection",
        "Continuous Integration with AI",
        "Adaptive Product Development",
      ],
    },
    {
      id: 6,
      title: "IoT and Robotic Automation",
      items: [
        "Smart Manufacturing",
        "Smart Buildings",
        "Autonomous Vehicles",
        "Inventory Management",
        "Remote Monitoring",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold lg:w-1/2">
            What AI/ML technologies will deliver the greatest value{" "}
            <span className="text-[#0B5EFF]">to your business?</span>
          </h2>
          <p className="text-lg text-gray-700 lg:w-1/2">
            Address customer challenges by leveraging advanced AI/ML
            technologies tailored for your tech stack. Elevate your business
            with customized AI/ML solutions designed to meet your specific
            needs.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white p-6 shadow-lg w-full h-96 border-t-4 border-[#0B5EFF]"
            >
              <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
              <ul className="text-gray-700 space-y-2">
                {tech.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiMlTechnologies;
