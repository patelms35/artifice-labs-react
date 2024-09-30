import OrbitingCircles from "./orbitingCircle.jsx";

export function OrbitingCirclesDemo({ innerIcons =[], outerIcons = [] }) {
  return (
    <div className="h-[400px] w-[500px] relative flex md:w-full flex-col items-center justify-center mt-5 md:mt-0 md:mr-32 2xl">
      <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Technology
      </span>

      {innerIcons.map((Iconn, index) => (
        <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={index * 8}
        radius={70} 
        key={index}
        reverse
        >
          <Iconn />
        </OrbitingCircles>
      ))}

      {outerIcons.map((Iconn, index) => (
        <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={index * 8}
        radius={180} 
        key={index}
        >
          <Iconn />
        </OrbitingCircles>
      ))}
    </div>
  );
}


