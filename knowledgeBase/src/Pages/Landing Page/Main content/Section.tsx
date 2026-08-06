import { ArrowRight } from "lucide-react";
import { INSIGHTS_LIST } from "@/Data";



const Section = () => {
  return (
    
    <div className="w-full bg-white  py-16">
      
      {/* Inner Container */}
      <div className="mx-auto flex w-[90%] max-w-screen-2xl flex-col gap-10 px-4">
        
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-black">
          Discover Insights, Knowledge and resources
        </h2>

        {/*  Main Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT COLUMN: Featured Article */}
          <div className="flex flex-col gap-4">
            <img
              src="src/assets/Image (3).svg" 
              alt="Team meeting"
              className="h-87.5 w-full rounded-md object-cover"
            />
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500">Jul 23 , 2026</span>
              <h3 className="text-2xl font-semibold text-black">
                Getting Started - Welcome to AMP
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-400">
                Welcome to the Agency Management Platform (AMP). AMP is designed to help home healthcare agencies streamline day-to-day operations by bringing administrative tasks.
              </p>
              <button className="mt-2 flex w-fit items-center gap-2 text-sm font-semibold text-bg-primary transition-colors">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: List of Articles */}
          <div className="flex flex-col justify-between gap-10">
            {INSIGHTS_LIST.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-gray-400">{item.desc}</p>
                <button className="mt-1 flex w-fit items-center gap-2 text-sm font-semibold text-bg-primary transition-colors">
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section;