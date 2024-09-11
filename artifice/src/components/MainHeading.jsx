const MainHeading = ({ title, backgroundTitle }) => {
  return (
    <div className="flex flex-col items-center relative" data-aos="fade-down">
      <div className="relative">
        {/* First About Us */}
        <span className="text-6xl font-bold text-gray-200">
          {backgroundTitle}
        </span>
        {/* Second About Us overlapping between the top and middle of the first */}
        <span className="text-4xl font-bold text-gray-800 absolute top-8 left-12">
          {title}
        </span>
      </div>
      <div className="h-1 w-16 bg-blue-500 mt-3 ml-20"></div>
    </div>
  );
};

export default MainHeading;
