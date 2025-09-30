"use client";

import { Button } from "@/components/ui/button";
import { TextRevealByWord } from "@/components/text-reveal-by-word";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "@/hooks/use-language";

export function Layout484() {
  const language = useLanguage();
  const isBangla = language === "bn";
  const banglaFontClass = isBangla ? "font-bangla" : "";

  const headlineText = isBangla
    ? "আজকের দুনিয়ায় আইডিয়াকে বাস্তবায়ন করতে দেরি করা মানে সুযোগ হারানো। ChatGPT Plus তোমাকে দিচ্ছে দ্রুত রেসপন্স, প্রায়োরিটি অ্যাক্সেস আর স্মার্ট সাপোর্ট, যাতে ক্যারিয়ার, স্টাডি বা প্রজেক্ট বাস্তবায়নের পথে যাতে আর কোনো বাধা না আসে।"
    : "Great ideas shouldn't have to wait. With ChatGPT Plus, you get priority access, faster responses, and the freedom to focus on your work, your studies, or your next big project without interruptions.";

  const quoteAttribution = isBangla
    ? "- স্যাম অল্টম্যান, সিইও, ওপেন এআই"
    : "- Sam Altman, CEO, OpenAI";

  const subscribeLabel = isBangla
    ? "ChatGPT Plus সাবস্ক্রাইব করুন"
    : "Subscribe to ChatGPT Plus";

  const faqLabel = isBangla ? "সাধারণ জিজ্ঞাসা" : "FAQ";

  const handleSubscribe = React.useCallback(() => {
    window.open(
      "https://www.facebook.com/share/p/16GuxvEB4y/",
      "_blank",
      "noopener,noreferrer",
    );
  }, []);

  return (
    <section className="overflow-hidden px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container lg:max-w-5xl xl:max-w-6xl">
        <p className={`mb-1.5 font-semibold md:mb-2 ${banglaFontClass}`}>
          {quoteAttribution}
        </p>
        <TextRevealByWord
          text={headlineText}
          className="min-h-[26vh] md:min-h-[30vh] lg:min-h-[34vh]"
          stickyClassName="top-8 md:top-11 lg:top-13"
          textClassName={`heading-h2 font-bold text-slate-900 ${banglaFontClass}`}
        />
        <div
          className={`flex flex-wrap items-center gap-4 ${
            isBangla ? "mt-1 md:mt-2" : "mt-3 md:mt-4"
          }`}
        >
          <Button
            type="button"
            title={subscribeLabel}
            onClick={handleSubscribe}
            className={`bg-[#0EFF00] text-black shadow-[0_6px_0_0_rgba(0,0,0,0.35)] hover:bg-[#2bd60f] focus-visible:ring-[#32E910]/40 active:bg-[#28c30e] active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)] ${banglaFontClass}`}
          >
            {subscribeLabel}
          </Button>
          <Button
            title={faqLabel}
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
            onClick={() => {
              const el = document.getElementById("faq");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={banglaFontClass}
          >
            {faqLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
