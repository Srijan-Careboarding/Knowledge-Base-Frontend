import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SLIDES } from "@/Data";

const CardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = SLIDES[currentIndex];

  useEffect(()=> {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex h-fit w-100 flex-col gap-5 rounded-[5px] border-none bg-[#000000]/40 p-5 backdrop-blur-md">
      
      {/* 
        ANIMATED WRAPPER
        key={currentIndex} forces React to replay the animation on slide change.
        Added fade-in and fixed duration to a valid Tailwind class.
      */}
      <div 
        key={currentIndex} 
      >
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="h-55 w-full rounded-none "
        />
        
        <CardHeader className="p-0 space-y-2">
          <p className="text-[13px] text-gray-300/80">{currentSlide.date}</p>
          <CardTitle className="text-xl font-bold text-white">{currentSlide.title}</CardTitle>

          <CardDescription className="h-17.5 text-[15px] leading-relaxed text-gray-300/90 p-0">
            {currentSlide.desc}
          </CardDescription>
        </CardHeader>
        
        <button className="w-fit rounded-lg bg-bg-primary px-5 py-2.5 font-semibold text-white hover:bg-bg-primary/90 transition-colors">
          Watch Video
        </button>
      </div>

      {/* 
        STATIC NAVIGATION
        Kept outside the animated div so the controls don't slide/flash.
      */}
      <div className="mt-2 flex items-center justify-between">
        
        <button 
          onClick={handlePrev}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <div className="flex items-center gap-2.5">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-bg-primary" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
        
      </div>
    </Card>
  );
};

export default CardsCarousel;