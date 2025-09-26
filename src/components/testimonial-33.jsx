"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

const useAnimation = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 767px)");

  const leftCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const leftCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10rem", "5rem"],
  );
  const rightCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const rightCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["10rem", "-5rem"],
  );

  const leftCards = isMobile ? leftCardsMobile : leftCardsDesktop;
  const rightCards = isMobile ? rightCardsMobile : rightCardsDesktop;

  return {
    sectionRef,
    leftCards,
    rightCards,
  };
};

export function Testimonial33() {
  const animationState = useAnimation();
  return (
    <section
      id="reviews"
      ref={animationState.sectionRef}
      className="scroll-mt-28 overflow-hidden px-[5%] py-12 md:py-16 lg:py-20"
    >
      <Card className="container grid min-h-svh auto-cols-fr grid-cols-1 lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div>
            <h2 className="heading-h1 mb-5 font-bold md:mb-6">
              What Our Customers Say
            </h2>
            <p className="text-medium">
              We're trusted by thousands of happy users. Here's what they think
              about One Access BD and their ChatGPT Plus experience.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button title="Read More Reviews" variant="secondary">
              Read More Reviews
            </Button>
            <Button
              title="Share Your Experience"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Share Your Experience
            </Button>
          </div>
        </div>
        <div className="grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t border-scheme-border px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pr-12 lg:pl-0">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: animationState.leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
          <motion.div
            className="grid size-full auto-cols-fr grid-cols-1 gap-4"
            style={{ y: animationState.rightCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 5"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 6"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 7"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 8"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 9"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </Card>
    </section>
  );
}