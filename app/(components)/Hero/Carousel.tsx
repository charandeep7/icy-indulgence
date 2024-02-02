"use client";
import NextImage, { StaticImageData } from "next/image";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import i1 from "@/public/i1.jpg";
import i2 from "@/public/i2.jpg";
import i3 from "@/public/i3.jpg";
import i4 from "@/public/i4.jpg";
/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */

const images: StaticImageData[] = [i3, i4, i1, i2];
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <div className="relativ mt-4 p-1">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-3xl inset-y-1/2 top-2 sm:top-52 cursor-pointer text-gray-400 z-20 hover:text-4xl"
      />
      <div className="w-full h-[30vh] sm:h-[50vh] md:h-[65vh] flex justify-center items-center overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full flex justify-center items-center"
        >
          {images?.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  as={NextImage}
                  key={index.toString()}
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  width={1400}
                  height={800}
                  sizes="(min-width: 1500px) 1400px, 93.9vw"
                  className={`transition-opacity duration-500 ${
                    currentSlide === index ? "animate-fadeIn" : ""
                  }`}
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-3xl inset-y-1/2 top-2 sm:top-52 cursor-pointer text-gray-400 z-20 hover:text-4xl"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-1 w-1 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
