"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "@/hooks/use-language";

export function Stats29() {
  const language = useLanguage();
  const isBangla = language === "bn";
  const banglaFontClass = isBangla ? "font-bangla" : "";

  const copy = isBangla
    ? {
        eyebrow: "ওয়ান একসেস বিডি'র পেছনের গল্প",
        heading: "হাজারো গ্রাহকের ভরসা, নির্ভরযোগ্যতার প্রতীক।",
        body: "২০২০ সাল থেকেই One Access BD ডিজিটাল দুনিয়ায় মানুষের পাশে আছে। হাজারো সন্তুষ্ট গ্রাহক আর নিত্যনতুন প্রোডাক্টের মাধ্যমে আমরা তৈরি করেছি বিশ্বাস, গুণগত মান আর ধারাবাহিকতার এক আলাদা পরিচয়। প্রতিদিনই আমাদের প্রতিশ্রুতি—আপনাকে সেরা অভিজ্ঞতা দেওয়া।",
        primaryCta: "আমাদের গল্প জানুন",
        primaryTitle: "আমাদের গল্প জানুন",
        secondaryCta: "রিভিউ দেখুন",
        card2020Heading: "আমাদের শুরুটা ২০২০-এ",
        card2020Copy:
          "আমাদের যাত্রা শুরু হয়েছিল অক্টোবর ২০২০-এ। লক্ষ্য ছিল সবার জন্য প্রিমিয়াম ডিজিটাল টুল সহজলভ্য করা। ছোট্ট শুরু থেকে আজ আমরা হয়ে উঠেছি একটি বিশ্বাসের নাম আর প্রতিটি পদক্ষেপ সম্ভব হয়েছে আপনাদের আস্থার কারণে।",
        card12kHeading: "১২,০০০+ হ্যাপি কাস্টমার",
        card12kCopy:
          "আমাদের কমিউনিটিতে ইতিমধ্যেই যুক্ত হয়েছেন ১২,০০০+ মানুষ। ছাত্র, শিক্ষক, পেশাজীবী কিংবা কোডার—সবার পাশে আছে ওয়ান একসেস বিডি।",
        card100Heading: "১০০% সন্তুষ্টির নিশ্চয়তা",
        card100Copy:
          "প্রতিটি রিভিউ আর প্রতিটি প্রশংসা আমাদের জন্য একেকটি পুরস্কার। আমরা শুধু সেবা দিই না, তৈরি করি এমন এক অভিজ্ঞতা যা মানুষকে আবার ওয়ান একসেস বিডিতেই ফিরে আসতে বাধ্য করে।",
        numerals: {
          year: "২০২০",
          customers: "১২K+",
          satisfaction: "১০০%",
        },
      }
    : {
        eyebrow: "Behind the story of One Access BD",
        heading: "Trusted by Thousands. Built on Reliability.",
        body: "Since 2020, One Access BD has been helping people get more from their digital experience. With thousands of satisfied customers and a growing range of products, we are committed to delivering value, trust, and consistency every single day.",
        primaryCta: "Discover Our Story",
        primaryTitle: "Discover Our Story",
        secondaryCta: "See Our Reviews",
        card2020Heading: "Founded in 2020",
        card2020Copy:
          "Since 2020, our mission has been simple: make digital tools accessible to everyone. From small beginnings to a trusted name, every step has been powered by your support.",
        card12kHeading: "12,000+ Customers",
        card12kCopy:
          "12,000+ people worldwide: students, professionals, creators, & coders trust us to achieve more with the right tools.",
        card100Heading: "100% Satisfaction Rate",
        card100Copy:
          "Our users don’t just buy, they stay. Every review and recommendation is proof of the trust we’ve built. Your satisfaction keeps us going strong.",
        numerals: {
          year: "2020",
          customers: "12K+",
          satisfaction: "100%",
        },
      };

  const handleDiscover = React.useCallback(() => {
    window.open(
      "https://www.facebook.com/oneaccessbd/posts/pfbid02JxjjrCbRtFER31qEkJJALPDKg9Wjw1aVzaTZwsU9oQzsopbadVtM5jGvSvDvUwANl",
      "_blank",
      "noopener,noreferrer",
    );
  }, []);

  const handleSeeReviews = React.useCallback(() => {
    const section = document.getElementById("reviews");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className={`mb-3 font-semibold md:mb-4 ${banglaFontClass}`}>
              {copy.eyebrow}
            </p>
            <h2 className={`heading-h2 font-bold ${banglaFontClass}`}>
              {copy.heading}
            </h2>
          </div>
          <div>
            <p className={`text-medium ${banglaFontClass}`}>{copy.body}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                type="button"
                title={copy.primaryTitle}
                onClick={handleDiscover}
                className={`bg-[#0966FF] text-white shadow-[0_6px_0_0_rgba(0,0,0,0.35)] hover:bg-[#023ea9] focus-visible:ring-[#0247C3]/40 active:bg-[#023997] active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)] ${banglaFontClass}`}
              >
                {copy.primaryCta}
              </Button>
              <Button
                title={copy.secondaryCta}
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                type="button"
                onClick={handleSeeReviews}
                className={banglaFontClass}
              >
                {copy.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Fragment>
            <Card className="p-8 first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2">
              <p className={`mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem] ${banglaFontClass}`}>
                {copy.numerals.year}
              </p>
              <h3 className={`heading-h6 font-bold mt-auto ${banglaFontClass}`}>
                {copy.card2020Heading}
              </h3>
              <p className={`mt-2 ${banglaFontClass}`}>{copy.card2020Copy}</p>
            </Card>
          </Fragment>
          <Fragment>
            <div className="overflow-hidden rounded-image">
              <img
                className="aspect-[3/2] size-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                src="/assets/banner/banner-1.jpeg"
                alt="Relume placeholder image"
              />
            </div>
          </Fragment>
          <Fragment>
            <Card className="p-8">
              <p className={`mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem] ${banglaFontClass}`}>
                {copy.numerals.satisfaction}
              </p>
              <h3 className={`heading-h6 font-bold ${banglaFontClass}`}>
                {copy.card100Heading}
              </h3>
              <p className={`mt-2 ${banglaFontClass}`}>{copy.card100Copy}</p>
            </Card>
          </Fragment>
          <Fragment>
            <Card className="p-8 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
              <p className={`mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem] ${banglaFontClass}`}>
                {copy.numerals.customers}
              </p>
              <h3 className={`heading-h6 font-bold ${banglaFontClass}`}>
                {copy.card12kHeading}
              </h3>
              <p className={`mt-2 ${banglaFontClass}`}>{copy.card12kCopy}</p>
            </Card>
          </Fragment>
          <Fragment>
            <div className="overflow-hidden rounded-image">
              <img
                className="aspect-[3/2] size-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                src="/assets/banner/banner-3.jpeg"
                alt="Relume placeholder image"
              />
            </div>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
