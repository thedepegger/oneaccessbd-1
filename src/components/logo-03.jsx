"use client";

import React from "react";

const ROW_ONE_LOGOS = [
  { src: "/assets/logo/impact-academy.png", alt: "Impact Academy" },
  { src: "/assets/logo/khalid-farhan.png", alt: "Khalid Farhan" },
  { src: "/assets/logo/Madkoffee.png", alt: "Madkoffee" },
  { src: "/assets/logo/furrighor.png", alt: "Furrighor" },
  { src: "/assets/logo/dropout-skool.png", alt: "Dropout Skool" },
  { src: "/assets/logo/ghorer-bazar.png", alt: "Ghorer Bazar BD" },
  { src: "/assets/logo/fabrilife.svg", alt: "Fabrilife" },
  { src: "/assets/logo/whatever.png", alt: "Whatever" },
];

const ROW_TWO_LOGOS = [
  { src: "/assets/logo/pcb.png", alt: "PC Builder Bangladesh" },
  { src: "/assets/logo/empress-origin.png", alt: "Empress Origin" },
  { src: "/assets/logo/head-gear.png", alt: "Head Gear" },
  { src: "/assets/logo/mbrella.png", alt: "Mbrella" },
];

const renderLogoRow = (logos, prefix, { animationDelay } = {}) => {
  const loopLogos = [...logos, ...logos];
  return (
    <div
      className="flex shrink-0 animate-loop-horizontally items-center"
      style={animationDelay ? { animationDelay } : undefined}
    >
      {loopLogos.map((logo, index) => (
        <img
          key={`${prefix}-${index}-${logo.alt}`}
          className="mx-7 h-12 w-auto shrink-0 md:mx-10 md:h-14"
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export function Logo3() {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mb-8 max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="heading-h6 text-center font-bold">
          Used by the Bangladesh's Top Brands
        </h1>
      </div>
      <div className="flex items-center overflow-hidden pt-7 md:pt-0">
        {renderLogoRow(ROW_ONE_LOGOS, "row-one")}
        {renderLogoRow(ROW_TWO_LOGOS, "row-two", { animationDelay: "-12.5s" })}
      </div>
    </section>
  );
}
