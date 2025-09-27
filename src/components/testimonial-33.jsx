"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "motion/react";
import React, { Fragment, useId, useRef } from "react";
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
      <Card className="container grid min-h-svh auto-cols-fr grid-cols-1 bg-[#F2F2F2] lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
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
                  <RatingStars />
                  <blockquote className="text-medium">
                    "They are very good about giving first service!Moreover,they are authentic and trustworthy. So,If you want to hassle free  service knock on them, undoubtedly.I am satisfied with their service ❤️"
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Suhala%20Ashraf%20Zeba.jpg"
                    alt="Suhala Ashraf Zeba"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Suhala Ashraf Zeba</p>
                    <p>Founder, INFO Dorkar</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <RatingStars />
                  <blockquote className="text-medium">
                    "The page moderator is one of the most helpful moderators I have ever witnessed. I subsribed to Chegg for a month through him and he helped me using Chegg throughout the whole month. He does way more than he receives for his services. Best of luck, One Access BD. I would never doubt for a second before knocking this page if I ever find myself in the need of similar services."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Shahriar%20Alif.jpg"
                    alt="Shahriar Alif"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Shahriar Alif</p>
                    <p>Regional Manager, BRAC</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <RatingStars />
                  <blockquote className="text-medium">
                    "It was a great experience as they have delivered as they had promised and the account was perfectly working so will recommend! 😃"
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Fahim%20Abrar.jpg"
                    alt="Fahim Abrar"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Fahim Abrar</p>
                    <p>MSc IT, University of Western Australia</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <RatingStars />
                  <blockquote className="text-medium">
                    "very good service. was a bit skeptical at first whether they are trusted or not but got the account within few minutes. anyone can take accounts from them. very satisfied."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Anik%20Khan.jpg"
                    alt="Anik Khan"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Anik Khan</p>
                    <p>Fitness Coach, Lions Fitness & Gym Banasree Branch</p>
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
                  <RatingStars />
                  <blockquote className="text-medium">
                    "Chegg,Scribd,Amazon,Netflix সহ বিভিন্ন অনলাইন প্রিমিয়াম অ্যাকাউন্ট এর জন্য নির্ভরযোগ্য পেইজ। ওনাদের সার্ভিস অসাধারণ। তারা খুবই হেল্পফুল।আমি ১ মাস chegg ইউজ করছি ওনাদের থেকে।তারা যেকোন সমস্যায় খুবই সাপোর্টিভ ছিলো। One access BD এর জন্য শুভকামনা ❤"
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Shikdar%20M%20Fahad.jpg"
                    alt="Shikdar M Fahad"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Shikdar M Fahad</p>
                    <p>Assistant Manager,  Bangladesh Petroleum Corporation-BPC</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <RatingStars />
                  <blockquote className="text-medium">
                    "১ মাস আগে আমি একটি কন্টেস্ট এ আপনাদের থেকে চেগ একাউন্ট পাই। আলহামদুলিল্লাহ্‌ গত এক মাসে আমার অনেক কাজে লেগেছে। আপনাদের জন্য শুভকামনা রইল"
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Asif%20Haider%20Rafi.jpg"
                    alt="Asif Haider Rafi"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Asif Haider Rafi</p>
                    <p>Lead Content Writer, ATC Android ToTo Company</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <RatingStars />
                  <blockquote className="text-medium">
                    "1.Good Service 
                    2. Helpful. 
                    Wish them all the best 🤗"
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Ehasanuzzaman%20Ezaz.jpg"
                    alt="Ehasanuzzaman Ezaz"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Ehasanuzzaman Ezaz</p>
                    <p>PMIR, University of Dhaka</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <RatingStars />
                  <blockquote className="text-medium">
                    "Very responsive and service was good .. 😊😊recommended ❤"
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Moonwar%20Al%20Wardiful%20Nishan.jpg"
                    alt="Moonwar Al Wardiful Nishan"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Moonwar Al Wardiful Nishan</p>
                    <p>Software Engineer, Brain Station 23</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <RatingStars />
                  <blockquote className="text-medium">
                    "topnotch service👌highly recommended"
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="/assets/reviews/Rafi%20Rahman.jpg"
                    alt="Rafi Rahman"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Rafi Rahman</p>
                    <p>Employee, Rokomari.com</p>
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

function RatingStars({ className = "" }) {
  const classes = ["mb-6 flex gap-1", className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      {[...Array(5)].map((_, index) => (
        <GradientStar key={index} />
      ))}
    </div>
  );
}

function GradientStar({ className = "" }) {
  const gradientId = useId();
  return (
    <svg
      className={`inline-block ${className}`.trim()}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} gradientTransform="rotate(170)">
          <stop offset="20%" stopColor="#7eff5e" />
          <stop offset="100%" stopColor="#5dd53f" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
      />
    </svg>
  );
}
