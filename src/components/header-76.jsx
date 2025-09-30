"use client";

import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import React from "react";
import { useLanguage } from "@/hooks/use-language";
import { BookmarkCheck } from "lucide-react";

export function Header76() {
  const language = useLanguage();
  const isBangla = language === "bn";
  const banglaFontClass = isBangla ? "font-bangla" : "";

  const headingText = isBangla
    ? "৩ মাসের জন্য ChatGPT Plus মাত্র ৪৯৯ টাকায় ($৪.৯৯)"
    : "Get ChatGPT Plus for 3 Months at Just 499৳ ($4.99)";

  const announcementText = isBangla
    ? "আপনার পার্সোনাল ChatGPT Plus সাবস্ক্রিপশন"
    : "Your Personal ChatGPT Plus Subscription";

  const descriptionText = isBangla
    ? "ChatGPT Plus নিয়ে পড়াশোনা, কাজ আর আইডিয়া শেয়ার করুন আরও দ্রুত ও সহজে। পাবেন ঝটপট উত্তর, সার্ভারে অগ্রাধিকার সুবিধা, আর প্রতিদিনের জন্য একদম ঝামেলাহীন স্মার্ট AI অভিজ্ঞতা।"
    : "ChatGPT Plus makes studying, working, and sharing ideas effortless. Enjoy quick answers, priority access even when servers are packed, and a seamless AI experience every day.";

  const buyNowLabel = isBangla ? "এখনই কিনুন" : "Buy Now";
  const faqLabel = isBangla ? "প্রশ্নোত্তর দেখুন" : "Explore FAQ";
  const columnOneImages = [
    { src: "/assets/header/header-1.jpg", alt: "Header 1" },
    { src: "/assets/header/header-2.jpg", alt: "Header 2" },
    { src: "/assets/header/header-3.jpg", alt: "Header 3" },
    { src: "/assets/header/header-4.jpg", alt: "Header 4" },
    { src: "/assets/header/header-5.jpg", alt: "Header 5" },
    { src: "/assets/header/header-6.jpg", alt: "Header 6" },
  ];

  const columnTwoImages = [
    { src: "/assets/header/header-7.jpg", alt: "Header 7" },
    { src: "/assets/header/header-8.jpg", alt: "Header 8" },
    { src: "/assets/header/header-9.jpg", alt: "Header 9" },
    { src: "/assets/header/header-10.jpg", alt: "Header 10" },
    { src: "/assets/header/header-11.jpg", alt: "Header 11" },
    { src: "/assets/header/header-12.jpg", alt: "Header 12" },
  ];

  const renderColumn = (images, keyPrefix, { className = "", style } = {}) => {
    const loopImages = [...images, ...images];
    return (
      <div
        className={`grid size-full animate-loop-vertically gap-4 group-hover:[animation-play-state:paused] ${className}`.trim()}
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
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3 md:mb-5">
          <HoverBorderGradient
            as="span"
            role="status"
            aria-live="polite"
            className={`gap-2 px-4 py-1.5 text-sm font-semibold text-[#063815] md:px-5 md:text-base ${banglaFontClass}`}
            containerClassName="rounded-full"
          >
            <span
              className="relative flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#073815] text-[#c9ffb0] shadow-[0_2px_6px_rgba(7,56,21,0.28)]"
              aria-hidden="true"
            >
              <BookmarkCheck className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span className={`text-sm leading-snug md:text-base ${banglaFontClass}`}>
              {announcementText}
            </span>
          </HoverBorderGradient>
        </div>
        <h1 className={`heading-h1 mb-5 font-bold md:mb-6 ${banglaFontClass}`}>
          {headingText}
        </h1>
        <p className={`text-medium ${banglaFontClass}`}>{descriptionText}</p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button
            type="button"
            onClick={() => window.open("https://www.facebook.com/share/p/16GuxvEB4y/", "_blank", "noopener,noreferrer")}
            className={`bg-[#0EFF00] text-black shadow-[0_6px_0_0_rgba(0,0,0,0.35)] hover:bg-[#2bd60f] focus-visible:ring-[#32E910]/40 active:bg-[#28c30e] active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)] ${banglaFontClass}`}
            title={buyNowLabel}
          >
            {buyNowLabel}
          </Button>
          <Button
            title={faqLabel}
            className={`bg-scheme-text text-white shadow-[0_6px_0_0_rgba(0,0,0,0.45)] hover:bg-scheme-text/90 focus-visible:ring-scheme-text/40 active:bg-scheme-text/80 active:shadow-[0_2px_0_0_rgba(0,0,0,0.45)] ${banglaFontClass}`}
            onClick={handleExploreFaq}
            type="button"
          >
            {faqLabel}
          </Button>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="group grid w-full grid-cols-2 gap-x-4 overflow-hidden">
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
