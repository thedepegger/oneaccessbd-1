"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout484() {
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <p className="mb-3 font-semibold md:mb-4">- Sam Altman, CEO, OpenAI</p>
        <p className="heading-h2 font-bold">
          Great ideas shouldn't have to wait. With ChatGPT Plus, you get
          priority access, faster responses, and the freedom to focus on your
          work, your studies, or your next big project without interruptions.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <Button title="Activate Plus" variant="secondary">
            Activate Plus
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