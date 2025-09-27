"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Cta51() {
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
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Upgrade to ChatGPT Plus Today
            </h2>
            <p className="text-medium text-slate-900">
              Get priority access, faster replies, and smooth AI support —
              activated in just 12 hours.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Get Started">Claim This Deal</Button>
            <Button title="How It Works" variant="secondary">
              See Benefits
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
