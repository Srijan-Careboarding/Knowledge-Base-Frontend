import CardsCarousel from "../../../components/CardsCarousel";

const VideoSection = () => {
  return (
    
    <section className="w-full bg-white py-16">
      
      {/* Container  */}
      <div className="mx-auto flex w-[90%] max-w-screen-2xl flex-col gap-6">
        
        <h2 className="text-2xl font-bold text-black">
          Video Tutorials
        </h2>

        {/* Container for the background image and overlay */}
        <div className="relative flex w-full overflow-hidden rounded-xl">
          
          {/* Background video  */}
          <video
            src="src/assets/videosection.mp4"
            className="absolute inset-0 z-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
          />
          
          {/* Gradient overlay  */}
          <div className="absolute inset-0 z-10 "></div>

          <div className="relative z-20 grid w-full grid-cols-1 items-end gap-10 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
            
            {/* Text content and call to action button */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-4xl font-bold text-white md:text-[44px]">
                Watch. Learn. Apply.
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-gray-300">
                Gain hands-on knowledge through practical video tutorials that demonstrate common workflows, feature configurations, and everyday tasks.
              </p>
              
              <button className="mt-4 rounded-lg bg-bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-bg-primary/90">
                Watch All Tutorials
              </button>
            </div>

            
            <div className="flex w-full justify-end">
              <CardsCarousel />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;