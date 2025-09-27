"use client";

import { Button } from "@/components/ui/button";
import { TextRevealByWord } from "@/components/text-reveal-by-word";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout484() {
  const headlineText =
    "Great ideas shouldn't have to wait. With ChatGPT Plus, you get priority access, faster responses, and the freedom to focus on your work, your studies, or your next big project without interruptions.";

  return (
    <section className="overflow-hidden px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container lg:max-w-5xl xl:max-w-6xl">
        <p className="mb-1.5 font-semibold md:mb-2">- Sam Altman, CEO, OpenAI</p>
        <TextRevealByWord
          text={headlineText}
          className="min-h-[26vh] md:min-h-[30vh] lg:min-h-[34vh]"
          stickyClassName="top-8 md:top-11 lg:top-13"
          textClassName="heading-h2 font-bold text-slate-900"
        />
        <div className="mt-3 flex flex-wrap items-center gap-4 md:mt-4">
          <Button title="Activate Plus" variant="secondary">
            Subscribe to ChatGPT Plus
          </Button>
          <Button
            title="FAQ"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
            onClick={() => {
              const el = document.getElementById("faq");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
