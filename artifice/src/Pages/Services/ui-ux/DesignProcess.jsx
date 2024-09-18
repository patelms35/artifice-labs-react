const DesignProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Define",
      description:
        "During the UI/UX design discovery phase, we gather valuable insights from user and stakeholder interviews. This helps us understand user information, and technical constraints, and align our efforts with your business goals and requirements.",
      points: [
        "Understanding the problem",
        "Project scope",
        "Technical restraints",
        "Value proposition",
        "Business goals",
      ],
    },
    {
      number: "02",
      title: "User Research",
      description:
        "Our in-depth user research is instrumental in understanding what users expect from your mobile app UI design. We create user journeys to gain a deeper insight into behavioral aspects and improve workflows.",
      points: [
        "User personas",
        "User scenarios",
        "Competitive research",
        "User experience map",
      ],
    },
    {
      number: "03",
      title: "Analytics and Discovery",
      description:
        "During this stage, our UI UX design agency focuses on data analysis, creating user profiles, handpicking features, and defining your mobile UI UX design requirements to ensure we have a clear and well-informed strategy in place.",
      points: [
        "Data profiles",
        "User profiles",
        "Prioritizing features",
        "Defining project requirements",
      ],
    },
    {
      number: "04",
      title: "Create",
      description:
        "We meticulously organize the wireframing, structuring usable content from complex sets of information. This involves creating a well-organized outline for visual design, defining information relationships, and establishing smooth navigation.",
      points: [
        "Wireframes",
        "Prototypes",
        "Visual design",
        "Data visualization",
      ],
    },
    {
      number: "05",
      title: "Test",
      description:
        "We prioritize usability testing, ensuring that the interface is design-driven, and fosters increased customer engagement. We take ergonomic considerations into account and re-engineer designs based on client feedback in the testing phase.",
      points: [
        "Usability testing",
        "User testing",
        "QA and UX Audit",
        "Accessibility Evaluation",
        "Editing and fixing",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">UI/UX Design Process</h2>
        <p className="text-lg text-gray-600 mb-16">
          As a top provider of UI/UX design services, we regularly refine each
          element of your project. Our approach guarantees a user experience
          that is carefully designed to align with your business objectives and
          surpass expectations.
        </p>

        {/* Vertical Process Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center mb-12 lg:mb-32 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } `}
            >
              {/* Step Content */}
              <div className="lg:w-1/2 px-8 lg:px-12 py-8 text-left bg-white border border-gray-200 rounded-lg shadow-md z-10">
                <h3 className="text-xl font-bold text-[#0B5EFF]">
                  {step.title}
                </h3>
                <p className="mt-4 text-gray-700">{step.description}</p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  {step.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              {/* Step Number - Visible only on large screens */}
              <div className="hidden lg:flex lg:w-1/2 justify-center lg:justify-center mt-8 lg:mt-0">
                <div className="text-8xl lg:text-9xl text-blue-100 font-bold translate-y-10 lg:ml-8">
                  {step.number}
                </div>
              </div>

              {/* Vertical Line - Only visible on large screens */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -bottom-28 transform h-24 w-1 bg-blue-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
