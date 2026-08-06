import SearchBox from "./SearchBox";
import QuickLinksButtons from "./QuickLinksButtons";
import { ExploreMoreButton } from "./ExploreMoreButton";


import { quickLinks, exploreResources } from "@/Data";

const HeroSection = () => {
  

  return (
    // Outer Container
    <section className="relative flex h-182 w-full flex-col justify-center overflow-hidden">
      
      {/* Background Image */}
      <img 
        src="src/assets/Background Image.svg" 
        alt="Library Background" 
        className="absolute  z-0 h-full w-full object-cover" 
      />

      <div className="absolute inset-0 z-10 "></div>

      {/* Main Content  */}
      <div className="relative z-20 mx-auto flex w-[90%] max-w-screen-2xl flex-col items-start gap-16 px-4">
        
        {/* Top conetent*/}
        <div className="flex w-full flex-col gap-6">
          <h1 className="font-['Inter'] text-[48px] font-bold  text-white">
            A Nexus of Insight, Learning, <br /> and Collaboration
          </h1>

          <div className="w-full max-w-4xl">
            <SearchBox  />
          </div>
        </div>

        {/* Bottom content */}
        <div className="flex w-full flex-col gap-8">
          ``
          {/* Quick Links Wrapper*/}
          <div className="flex flex-wrap items-start gap-4 max-w-4xl">
            {quickLinks.map((link) => (
              <QuickLinksButtons key={link} buttonText={link} />
            ))}
          </div>

          {/* Topics Wrapper */}
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-['Inter'] text-[16px] font-bold  text-white">
              Explore Resources
            </h2>
            
            {/* Topics List */}
            <div className="flex flex-wrap items-start gap-14">
              {exploreResources.map((resource) => (
                <ExploreMoreButton
                  key={resource.name}
                  buttonName={resource.name}
                  icon={resource.icon}
                />
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;