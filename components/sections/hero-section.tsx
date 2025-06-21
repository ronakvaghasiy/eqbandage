"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

const slides = [
  {
    title: "GROCERIES DELIVERY",
    description:
      "We know how large objects will act, but things on a small scale just do not act that way.",
    image: "bg-red-600", // Replace with your image class or url e.g., "bg-[url('/path/to/your/image.jpg')]"
  },
  {
    title: "FRESH FOOD GUARANTEE",
    description:
      "Experience the freshness of farm-to-table right at your doorstep.",
    image: "bg-green-600", // Example for a second slide
  },
  {
    title: "24/7 SUPPORT",
    description: "Our team is here to help you anytime, day or night.",
    image: "bg-blue-600", // Example for a third slide
  },
];

const HeroSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full container mx-auto h-[90vh] max-h-[640px] text-white">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div
                className={`w-full relative h-[90vh] max-h-[640px] bg-cover bg-center flex items-center justify-center`}
              >
                <Image
                  src="/assets/hero-banner.jpg"
                  alt="hero-section"
                  fill
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/35 z-10"></div>
                <div className="text-center max-w-3xl mx-auto px-4 z-20">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-xl mb-8 max-w-lg mx-auto">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-10 rounded-md text-sm"
                  >
                    Start Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none text-white w-12 h-12 hover:bg-white/10 hover:text-white" />
        <CarouselNext className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none text-white w-12 h-12 hover:bg-white/10 hover:text-white" />
      </Carousel>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-14 h-1.5 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
