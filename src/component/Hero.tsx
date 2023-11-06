"use client";
import { CustomsButton } from "@/component/index";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex maw-w-[1440px] mx-auto">
      {/* hero content  */}
      <div className="flex-1 pt-36 padding-x  ">
        <h1 className="hero__title ">
          Find, book, rent a car-quick and super easy!
        </h1>
        <p className="hero__subtitle">
          Stremline your car rental exprience with our effortless booking
          process.
        </p>
        <CustomsButton
          title="explore Cars"
          className="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      {/* hero image  */}
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
