import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import MainHeading from "./MainHeading";

const MissionVisionSection = () => {
  return (
    <section id="mission" className="py-20 from-slate-50  to-indigo-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      
      
      
      <div className="container mx-auto px-4 relative z-10">
        <MainHeading
          title="Mission & Vision"
          backgroundTitle="Mission & Vision"
        />

        <div className="mt-16 space-y-16">
          {/* Mission Section */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Mission Text Card */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 group hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                  <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                </div>
                
                <div className="relative">
                  <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium mb-4">
                    To bridge the gap between people and technology by creating
                    innovative solutions that simplify daily tasks, enhance user
                    experiences, and improve quality of life.
                  </p>
                  
                  {/* Decorative quote mark */}
                  <div className="absolute -top-4 -left-2 text-6xl text-blue-200 font-serif opacity-50">"</div>
                </div>

                {/* Mission highlights */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {['Innovation', 'User Experience', 'Quality of Life'].map((tag, index) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission Image */}
            <div className="order-1 lg:order-2" data-aos="zoom-in" data-aos-delay="400">
              <div className="relative group">
                <div className="absolute inset-0 from-blue-400 to-indigo-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative p-8 ">
                  <img
                    src={mission}
                    alt="Mission Illustration"
                    className="w-full max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Vision Image */}
            <div className="order-1" data-aos="zoom-in" data-aos-delay="600">
              <div className="relative group">
                <div className="absolute  from-indigo-400 to-purple-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative  duration-500">
                  <img 
                    src={vision} 
                    alt="Vision Illustration" 
                    className="w-full max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Vision Text Card */}
            <div className="order-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 group hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-12 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mr-4"></div>
                  <h3 className="text-3xl lg:text-4xl font-syne font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                </div>
                
                <div className="relative">
                  <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium mb-4">
                    To be a global leader in technology solutions, empowering
                    individuals and businesses through innovative, user-friendly, and
                    impactful technological advancements.
                  </p>
                  
                  {/* Decorative quote mark */}
                  <div className="absolute -top-4 -left-2 text-6xl text-indigo-200 font-serif opacity-50">"</div>
                </div>

                {/* Vision highlights */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {['Global Leadership', 'Empowerment', 'Innovation'].map((tag, index) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200 hover:from-indigo-200 hover:to-purple-200 transition-all duration-300"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
