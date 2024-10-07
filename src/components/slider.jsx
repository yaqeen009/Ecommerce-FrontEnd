import React, { useState, useEffect } from "react";
import ButtonComp from "./button";
import { useNavigate } from "react-router-dom";

const Carousel = ({ images, btnPath, btnName }) => {
  //   const images = [girl, gym, pitch];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  //handle nav to shop
  const goToLoc = () => {
    navigate(btnPath);
  };
  return (
    <div className="relative w-[100vw] lg:h-[60vh] h-[40vh] overflow-hidden grow">
      <div
        className="w-full h-full flex transition-transform ease-in-out duration-500 bg-black bg-opacity-70"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center bg-font w-full h-full bg-opacity-70">
        <h1 className="font-montserrat text-background text-mobile-title md:text-tablet-display lg:text-display text-center">
          Gear up for the game
        </h1>
        <p className="text-center font-open_sans text-background lg:text-body md:text-tablet-body text-mobile-body">
          Get ready for the field with our top picks
        </p>
        <span className="mt-4">
          <ButtonComp
            btnTextSize={"px-2"}
            btnName={btnName}
            btnColor={"bg-accent border-accent"}
            btnTextColor={"text-background"}
            btnHover={"hover:bg-opacity-70"}
            btnFunction={goToLoc}
          />
        </span>
        {/* Indicators (Dots) */}
        <div className="absolute left-1/2 mt-10 -bottom-24 md:-bottom-[100%] transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-accent " : "bg-background"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
