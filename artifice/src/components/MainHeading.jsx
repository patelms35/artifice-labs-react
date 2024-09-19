const MainHeading = ({ title, backgroundTitle }) => {
  return (
    <div className="flex flex-col items-center relative" data-aos="fade-up">
      <div className="relative">
        {/* Background Title */}
        <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-200">
          {backgroundTitle}
        </span>

        {/* Foreground Title */}
        <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 absolute top-4 sm:top-4 md:top-8 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-24 2xl:left-20">
          {title}
        </span>
      </div>

      {/* Line below the title */}
      <div className="h-1 w-16 bg-[#106eea] mt-2 sm:mt-3 md:mt-4 ml-[2rem] sm:ml-[3rem] md:ml-[5rem]"></div>
    </div>
  );
};

export default MainHeading;
