import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute z-40 left-0 m-auto text-4xl text-transparent inset-y-1/2 cursor-pointer hover:text-gray-400 hover:bg-gray-700 hover:rounded-full"
      />
      <div className="w-full h-screen flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative w-full h-full -mt-20"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <img
                  key={index}
                  src={image}
                  fill
                  className="snap-x scroll-smooth object-contain"
                  alt="Imagens da Pedreira Carrascoza"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-4xl text-transparent inset-y-1/2 cursor-pointer hover:text-gray-400 z-20 hover:bg-gray-700 hover:rounded-full"
      />

      <div className="relative flex justify-center -mt-72">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer hover:bg-gray-700"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer hover:bg-gray-700"
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