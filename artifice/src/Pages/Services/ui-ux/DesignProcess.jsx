const DesignProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Define",
      description:
        "During the UI/UX design discovery phase, we gather valuable insights from key stakeholders. This helps us understand essential information, set clear intentions, and align our efforts with your business goals and requirements.",
      points: ["Understanding the problem", "Project scope", "Technical resources", "Value proposition", "Business goals"],
    },
    {
      number: "02",
      title: "User Research",
      description:
        "Our in-depth user research is instrumental in understanding what users expect from your product. We analyze users and competitors to gain a deeper insight into behavior and optimize workflows.",
      points: ["User personas", "User scenarios", "Competitive research", "User experience map"],
    },
    {
      number: "03",
      title: "Analytics and Discovery",
      description:
        "We focus on data analysis to uncover insights, enabling us to make UX design decisions based on real user data. We ensure a clear strategy is in place.",
      points: ["Data profiles", "User profiles", "Prioritizing features", "Defining project requirements"],
    },
    {
      number: "04",
      title: "Create",
      description:
        "We organize the wireframing, structuring usable content into simple visual information. This step includes creating prototypes and visual designs for user testing and feedback.",
      points: ["Wireframes", "Prototypes", "Visual design", "Data visualization"],
    },
    {
      number: "05",
      title: "Test",
      description:
        "We prioritize usability testing, ensuring that the interface is design-driven, easy to use, and optimized for engagement. We also perform QA and audits to ensure accessibility and refine the design.",
      points: ["Usability testing", "User testing", "QA and Audit", "Accessibility evaluation", "Editing and fixing"],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">UI/UX Design Process</h2>
        <p className="text-lg text-gray-600 mb-16">
          As a top provider of UI/UX design services, we regularly refine each element of your project. Our approach guarantees a user experience that is carefully designed to align with your business objectives and surpass expectations.
        </p>

        {/* Vertical Process Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 lg:mb-32 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} `}
            >
              {/* Step Content */}
              <div className="lg:w-1/2 px-8 lg:px-12 py-8 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                <h3 className="text-xl font-bold text-[#0B5EFF]">{step.title}</h3>
                <p className="mt-4 text-gray-700">{step.description}</p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  {step.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              {/* Step Number */}
              <div className="lg:w-1/2 flex justify-center lg:justify-start mt-8 lg:mt-0">
                <div className="text-8xl lg:text-9xl text-blue-100 font-bold translate-y-10">{step.number}</div>
              </div>

              {/* Vertical Line Below Each Card */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-16 w-1 bg-blue-500 bottom-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
