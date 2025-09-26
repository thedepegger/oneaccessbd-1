"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout223() {
  return (
    <section id="features" className="scroll-mt-28 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                    Create a New ChatGPT Account
                  </h3>
                  <p>
                    Make a fresh ChatGPT account (offer not valid for old ones).
                  </p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                    Share Login Info with us
                  </h3>
                  <p>Send us the email & password (you can change later).</p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                    Make the Payment
                  </h3>
                  <p>
                    Complete your payment securely through our official Facebook
                    Page.
                  </p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                    Quick Activation
                  </h3>
                  <p>We'll activate your subscription within 12 hours.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">Get Started Now</Button>
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Message Us on Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}