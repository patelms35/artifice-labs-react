const MainHeading = ({ title, backgroundTitle }) => {
  return (
    <div className="flex flex-col items-center relative" data-aos="fade-up">
      {/* Background Title */}
      <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-200">
        {backgroundTitle}
      </span>

      {/* Foreground Title */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <span className="text-[20px] sm:text-[24px] md:text-5xl lg:text-6xl top-2 md:top-6 lg: font-bold text-gray-800 relative">
          {title}
          {/* Line directly under the foreground title */}
          <div className="absolute bottom-[-1px] md:bottom-[-6px] right-0">
            <div className="h-0.5 md:h-1 w-8 md:w-12 lg:w-16 bg-[#106eea]"></div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default MainHeading;
