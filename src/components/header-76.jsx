"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header76() {
  const columnOneImages = [
    { src: "/assets/header/header-1.png", alt: "Header 1" },
    { src: "/assets/header/header-2.png", alt: "Header 2" },
    { src: "/assets/header/header-3.png", alt: "Header 3" },
    { src: "/assets/header/header-4.png", alt: "Header 4" },
    { src: "/assets/header/header-5.png", alt: "Header 5" },
    { src: "/assets/header/header-6.png", alt: "Header 6" },
  ];

  const columnTwoImages = [
    { src: "/assets/header/header-7.png", alt: "Header 7" },
    { src: "/assets/header/header-8.png", alt: "Header 8" },
    { src: "/assets/header/header-9.png", alt: "Header 9" },
    { src: "/assets/header/header-10.png", alt: "Header 10" },
    { src: "/assets/header/header-11.png", alt: "Header 11" },
    { src: "/assets/header/header-12.png", alt: "Header 12" },
  ];

  const renderColumn = (images, keyPrefix, { className = "", style } = {}) => {
    const loopImages = [...images, ...images];
    return (
      <div
        className={`grid size-full animate-loop-vertically gap-4 ${className}`.trim()}
        style={style}
      >
        {loopImages.map((image, index) => (
          <div key={`${keyPrefix}-${index}`} className="aspect-[5/6] overflow-hidden rounded-image">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  };

  const handleExploreFaq = React.useCallback((event) => {
    event.preventDefault();
    const target = document.getElementById("faq");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="heading-h1 mb-5 font-bold md:mb-6">
          Get ChatGPT Plus for 3 Months at Just 499৳ ($4.99)
        </h1>
        <p className="text-medium">
          Experience ChatGPT without limits. With Plus, you’ll get quicker
          answers, priority availability when servers are busy, and a more
          seamless AI experience tailored to your daily needs.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button
            type="button"
            onClick={() => window.open("https://www.facebook.com/share/p/16GuxvEB4y/", "_blank", "noopener,noreferrer")}
            className="bg-[#32E910] text-black shadow-[0_6px_0_0_rgba(0,0,0,0.35)] hover:bg-[#2bd60f] focus-visible:ring-[#32E910]/40 active:bg-[#28c30e] active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)]"
            title="Buy Now"
          >
            Buy Now
          </Button>
          <Button
            title="Explore FAQ"
            className="bg-scheme-text text-white shadow-[0_6px_0_0_rgba(0,0,0,0.45)] hover:bg-scheme-text/90 focus-visible:ring-scheme-text/40 active:bg-scheme-text/80 active:shadow-[0_2px_0_0_rgba(0,0,0,0.45)]"
            onClick={handleExploreFaq}
            type="button"
          >
            Explore FAQ
          </Button>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4 overflow-hidden">
          <div className="-translate-y-[6%]">
            {renderColumn(columnOneImages, "col-one")}
          </div>
          <div className="translate-y-[6%]">
            {renderColumn(columnTwoImages, "col-two", {
              style: { animationDelay: "-12.5s" },
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
