"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq4() {
  const language = useLanguage();
  const isBangla = language === "bn";
  const banglaFontClass = isBangla ? "font-bangla" : "";

  const heading = isBangla ? "প্রশ্নোত্তর (FAQ)" : "FAQs";
  const subheading = isBangla
    ? "ChatGPT Plus সম্পর্কে যা জানার দরকার, সব উত্তর পাবেন এখানেই — সব এক জায়গায় সহজভাবে।"
    : "Find answers to the most common questions about our ChatGPT Plus subscription.";

  const entries = isBangla
    ? [
        {
          question: "৩ মাসের সাবস্ক্রিপশনের মূল্য কত?",
          answer: "ChatGPT Plus ৩ মাসের প্যাকেজের দাম ৪৯৯ টাকা ($৪.৯৯)।",
        },
        {
          question: "সাবস্ক্রিপশন অ্যাক্টিভ হতে কত সময় লাগে?",
          answer: "পেমেন্ট এবং অ্যাকাউন্ট ইনফো পাওয়ার পর সর্বোচ্চ ১২ ঘণ্টার মধ্যে অ্যাক্টিভ হয়ে যাবে।",
        },
        {
          question: "নতুন ChatGPT অ্যাকাউন্ট লাগবে নাকি পুরনো ব্যবহার করা যাবে?",
          answer: "শুধুমাত্র নতুন ChatGPT অ্যাকাউন্টের জন্য প্রযোজ্য। পুরনো অ্যাকাউন্টের ক্ষেত্রে এই অফারটি প্রযোজ্য নয়।",
        },
        {
          question: "ইমেইল ও পাসওয়ার্ড কেন দিতে হবে?",
          answer: "ChatGPT সাবস্ক্রিপশন চালু করতে লগইন ইনফো প্রয়োজন। সাবস্ক্রিপশন অ্যাক্টিভ হওয়ার পর আপনি চাইলে পাসওয়ার্ড পরিবর্তন করে নিতে পারবেন।",
        },
        {
          question: "পুরনো অ্যাকাউন্টে ব্যবহার করা যাবে কি?",
          answer: "না, শুধুমাত্র নতুন ChatGPT অ্যাকাউন্টে এই অফারটি দেওয়া হচ্ছে।",
        },
        {
          question: "এটা কি রিফান্ডযোগ্য?",
          answer: "না, সাবস্ক্রিপশন একবার অ্যাক্টিভ হয়ে গেলে রিফান্ডের কোনো অপশন নেই।",
        },
        {
          question: "যদি ChatGPT সার্ভিস ডাউন হয়ে যায়?",
          answer: "এটি OpenAI-এর সার্ভার ও নীতির উপর নির্ভরশীল। OpenAI থেকে কোনো সমস্যা হলে তার জন্য আমরা দায়ী নই।",
        },
        {
          question: "অ্যাক্টিভেশনের পর কি সাপোর্ট পাবো?",
          answer: "আমাদের সাপোর্ট কেবল সাবস্ক্রিপশন অ্যাক্টিভেশন পর্যন্ত সীমাবদ্ধ। ব্যবহারের সময়কার সমস্যার সকল দায়ভার ব্যবহারকারীর নিজস্ব, এক্ষেত্রে ওয়ান একসেস বিডি কোনো ধরনের দায়ভার বহন করবে নাহ।",
        },
        {
          question: "সাবস্ক্রিপশন কি অন্য অ্যাকাউন্টে ট্রান্সফার করা যাবে?",
          answer: "না, একবার সাবস্ক্রিপশন অ্যাক্টিভ হলে সেটা ওই অ্যাকাউন্টেই থাকবে, ট্রান্সফারের সুযোগ নেই।",
        },
        {
          question: "কোন দেশ থেকে ব্যবহার করা যাবে?",
          answer: "ChatGPT Plus সারা বিশ্ব থেকে ব্যবহার করা যাবে। একবার সাবস্ক্রিপশন চালু হয়ে গেলে যেকোনো দেশ থেকে ব্যবহার করতে পারবেন।",
        },
        {
          question: "আপনারা এত কম দামে ChatGPT Plus দিতে পারছেন কীভাবে?",
          answer: "আমরা প্রোমোশনাল কোড ব্যবহার করে থাকি, তাই অফিসিয়াল দামের তুলনায় অনেক সস্তায় দিতে পারি। এজন্যই অফারটি সীমিত সময়ের জন্য।",
        },
        {
          question: "সাবস্ক্রিপশন অ্যাক্টিভেশনের পর কী করতে হবে?",
          answer: "অ্যাকাউন্টে লগইন করে Plus একটিভ হয়েছে কিনা দেখুন, এরপর পাসওয়ার্ড পরিবর্তন করুন।",
        },
        {
          question: "সাবস্ক্রিপশন একটিভের পর অ্যাকাউন্ট সিকিউর রাখব কীভাবে?",
          answer: "শক্তিশালী পাসওয়ার্ড ব্যবহার করুন, নিরাপত্তা সেটিংস চালু করুন, প্রয়োজনে ২ ফ্যাক্টর অথেনটিকেশন এবং সবশেষে অ্যাকাউন্টের ইনফো কারও সাথে শেয়ার করবেন না।",
        },
      ]
    : [
        {
          question: "What is the subscription fee for 3 months?",
          answer: "The ChatGPT Plus 3-Month package costs 499 BDT ($4.99).",
        },
        {
          question: "How long does it take for activation?",
          answer:
            "Your subscription will be activated within 12 hours after we receive your payment and account information.",
        },
        {
          question: "Do I need a new ChatGPT account or can I use my existing one?",
          answer: "This offer is only valid for newly created ChatGPT accounts. Existing accounts are not eligible.",
        },
        {
          question: "Why do I need to share my email and password?",
          answer:
            "We need your ChatGPT login info to activate the subscription. After activation, you can change your password for extra security.",
        },
        {
          question: "Can I use this offer on an old account?",
          answer: "No, this offer is only applicable to new accounts. You must create a new one before purchase.",
        },
        {
          question: "Is the subscription refundable?",
          answer: "No, once the subscription is activated, there is no refund option.",
        },
        {
          question: "What if ChatGPT service goes down?",
          answer: "That depends on OpenAI's servers and policies. We are not responsible for any service downtime.",
        },
        {
          question: "Will I get support after activation?",
          answer:
            "Our support is limited to activation only. Any issues after that are the user's responsibility, and One Access BD will not be liable.",
        },
        {
          question: "Can I transfer my subscription to another account?",
          answer: "No, once activated, the subscription remains on the same account and cannot be transferred.",
        },
        {
          question: "Can it be used from any country?",
          answer: "Yes, ChatGPT Plus can be used worldwide. Once activated, you can log in from anywhere.",
        },
        {
          question: "Why is the price so low?",
          answer:
            "We use promotional codes, which allow us to offer it at a much lower price than the official one. This is why the offer is for a limited time only.",
        },
        {
          question: "What should I do first after activation?",
          answer: "Log in, confirm Plus is active, then change your password.",
        },
        {
          question: "How can I keep my account secure after activation?",
          answer:
            "Use a strong, unique password, enable available security settings, and don't share credentials again.",
        },
      ];

  const contactHeading = isBangla ? "সব উত্তর পাননি?" : "Still have questions?";
  const contactBody = isBangla
    ? "চলুন কথা বলি, সমাধান বের হবে একসাথে।"
    : "Need help? Contact us anytime.";
  const contactCta = isBangla ? "ফেসবুকে চ্যাট করুন এখনই" : "Chat With Us on Facebook";

  return (
    <section id="faq" className="scroll-mt-28 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className={`heading-h2 mb-5 font-bold md:mb-6 ${banglaFontClass}`}>
            {heading}
          </h2>
          <p className={`text-medium ${banglaFontClass}`}>{subheading}</p>
        </div>
        <Accordion type="single" collapsible className="grid items-start justify-stretch gap-4">
          {entries.map((item, idx) => {
            const value = `item-${idx}`;
            return (
              <div key={value} className="rounded-xl border shadow-sm">
                <AccordionItem value={value} className="border-none p-0 rounded-xl overflow-hidden">
                  <AccordionTrigger
                    icon={
                      <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                    }
                    className={`text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#7eff5eff] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6 ${banglaFontClass}`}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className={`md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#7eff5eff] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl ${banglaFontClass}`}>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
        <div id="contact" className="scroll-mt-28 mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className={`heading-h4 mb-3 font-bold md:mb-4 ${banglaFontClass}`}>
            {contactHeading}
          </h4>
          <p className={`text-medium ${banglaFontClass}`}>{contactBody}</p>
          <div className="mt-6 md:mt-8">
            <Button
              type="button"
              title={contactCta}
              onClick={() =>
                window.open(
                  "https://m.me/oneaccessbd",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className={`bg-[#0966FF] text-white shadow-[0_6px_0_0_rgba(0,0,0,0.35)] hover:bg-[#023ea9] focus-visible:ring-[#0247C3]/40 active:bg-[#023997] active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)] ${banglaFontClass}`}
            >
              {contactCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
