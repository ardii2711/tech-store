import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

function CarauselSection() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-full overflow-hidden">
            <img src="Banner-Slider-1.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-full overflow-hidden">
            <img src="/Banner-Slider-2.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px]  w-full overflow-hidden">
            <img src="/Banner-Slider-3.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-full overflow-hidden">
            <img src="/Banner-Slider-4.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-full overflow-hidden">
            <img src="/Banner-Slider-5.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 transition-colors hover:bg-white">
        <ChevronLeftIcon className="h-6 w-6 text-black" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 transition-colors hover:bg-white">
        <ChevronRightIcon className="h-6 w-6 text-black" />
      </CarouselNext>
    </Carousel>
  );
}

export default CarauselSection;
