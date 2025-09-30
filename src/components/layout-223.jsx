"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "@/hooks/use-language";

export function Layout223() {
  const language = useLanguage();
  const isBangla = language === "bn";
  const banglaFontClass = isBangla ? "font-bangla" : "";

  const steps = isBangla
    ? [
        {
          title: "একটি ফ্রেশ ChatGPT অ্যাকাউন্ট খুলুন",
          description: "নতুন অ্যাকাউন্ট খুলুন (পুরনো অ্যাকাউন্টে এই অফারটি প্রযোজ্য নয়)।",
        },
        {
          title: "আমাদের সাথে লগইন ইনফো শেয়ার করুন",
          description: "ChatGPT ইমেইল ও পাসওয়ার্ড দিন (পরে চাইলে আপনি বদলাতে পারবেন)।",
        },
        {
          title: "পেমেন্ট সম্পন্ন করুন",
          description:
            "আমাদের ফেসবুক পেইজের মাধ্যমে পেমেন্ট সম্পন্ন করুন।",
        },
        {
          title: "দ্রুত সাবস্ক্রিপশন অ্যাক্টিভেশন",
          description:
            "১২ ঘণ্টার মধ্যেই ChatGPT Plus সাবস্ক্রিপশন চালু হয়ে যাবে ইনশাআল্লাহ।",
        },
      ]
    : [
        {
          title: "Create a New ChatGPT Account",
          description: "Make a fresh ChatGPT account (offer not valid for old ones).",
        },
        {
          title: "Share Login Info with us",
          description: "Send us the email & password (you can change later).",
        },
        {
          title: "Make the Payment",
          description: "Complete your payment securely through our Facebook Page.",
        },
        {
          title: "Quick Activation",
          description: "We'll activate your subscription within 12 hours.",
        },
      ];

  const primaryCta = isBangla ? "কনফিউশন আছে?" : "Got Questions?";
  const secondaryCta = isBangla ? "চ্যাট করুন" : "Chat With Us";

  const handleFaqScroll = React.useCallback(() => {
    const section = document.getElementById("faq");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleChat = React.useCallback(() => {
    window.open("https://m.me/oneaccessbd", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section id="features" className="scroll-mt-28 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-image">
              <img
                src="/assets/banner/banner-4.png"
                className="w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                alt="Relume placeholder image"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              {[
                {
                  icon: "/assets/icons/IcRoundContactEmergency.svg",
                  alt: "Emergency contact icon",
                },
                {
                  icon: "/assets/icons/IcBaselineScreenShare.svg",
                  alt: "Screen share icon",
                },
                {
                  icon: "/assets/icons/IcBaselineMonetizationOn.svg",
                  alt: "Payments icon",
                },
                {
                  icon: "/assets/icons/IcOutlineAccessTimeFilled.svg",
                  alt: "Clock icon",
                },
              ].map((visual, index) => {
                const content = steps[index];
                return (
                  <div key={content.title} className="flex self-start">
                    <div className="mr-6 flex-none self-start">
                      <img
                        src={visual.icon}
                        className="size-12"
                        alt={visual.alt}
                      />
                    </div>
                    <div>
                      <h3 className={`heading-h5 mb-3 font-bold md:mb-4 ${banglaFontClass}`}>
                        {content.title}
                      </h3>
                      <p className={banglaFontClass}>{content.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button
                type="button"
                onClick={handleFaqScroll}
                className={`bg-[#0EFF00] text-black shadow-[0_6px_0_0_rgba(0,0,0,0.35)] hover:bg-[#2bd60f] focus-visible:ring-[#32E910]/40 active:bg-[#28c30e] active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)] ${banglaFontClass}`}
                title={primaryCta}
              >
                {primaryCta}
              </Button>
              <Button
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                type="button"
                onClick={handleChat}
                title={secondaryCta}
                className={banglaFontClass}
              >
                {secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
