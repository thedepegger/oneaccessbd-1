"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { useLanguage } from "@/hooks/use-language";

export function Cta51() {
  const language = useLanguage();
  const isBangla = language === "bn";
  const banglaFontClass = isBangla ? "font-bangla" : "";

  const heading = isBangla
    ? "ChatGPT Plus-এ আপগ্রেড করুন এখনই!!"
    : "Upgrade to ChatGPT Plus Today!!";

  const subheading = isBangla
    ? "ChatGPT Plus-এ পেয়ে যান প্রায়োরিটি সার্ভিস আর দ্রুত AI রেসপন্স—সাবস্ক্রিপশন অ্যাক্টিভ হবে মাত্র ১২ ঘণ্টায়।"
    : "Get priority access, faster replies, and smooth AI support — activated in just 12 hours.";

  const primaryCta = isBangla ? "অফারটি নিন" : "Claim This Deal";
  const secondaryCta = isBangla ? "বিস্তারিত সুবিধা দেখুন" : "See Benefits";

  const handleClaimDeal = React.useCallback(() => {
    window.open(
      "https://www.facebook.com/share/p/16GuxvEB4y/",
      "_blank",
      "noopener,noreferrer",
    );
  }, []);

  const handleSeeBenefits = React.useCallback(() => {
    const el = document.getElementById("faq");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Card
          className="flex flex-col items-center border-none bg-transparent p-8 text-slate-900 shadow-lg md:p-12 lg:p-16"
          style={{
            backgroundImage: "linear-gradient(170deg, #7eff5eff 20%, #5dd53fff 100%)",
          }}
        >
          <div className="max-w-lg text-center">
            <h2 className={`heading-h2 mb-5 font-bold md:mb-6 ${banglaFontClass}`}>
              {heading}
            </h2>
            <p className={`text-medium text-slate-900 ${banglaFontClass}`}>
              {subheading}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button
              type="button"
              title={primaryCta}
              onClick={handleClaimDeal}
              className={banglaFontClass}
            >
              {primaryCta}
            </Button>
            <Button
              type="button"
              title={secondaryCta}
              variant="secondary"
              onClick={handleSeeBenefits}
              className={banglaFontClass}
            >
              {secondaryCta}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
