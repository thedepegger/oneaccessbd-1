"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats29() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">
              Behind the story of One Access BD
            </p>
            <h2 className="heading-h2 font-bold">
              Trusted by Thousands. Built on Reliability.
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Since 2020, One Access BD has been helping people get more from
              their digital experience. With thousands of satisfied customers
              and a growing range of products, we are committed to delivering
              value, trust, and consistency every single day.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Get ChatGPT Plus" variant="secondary">
                Get ChatGPT Plus
              </Button>
              <Button
                title="See Our Reviews"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                See Our Reviews
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Fragment>
            <Card className="p-8 first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2">
              <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                2020
              </p>
              <h3 className="heading-h6 font-bold mt-auto">Founded in 2020</h3>
              <p className="mt-2">Serving customers since October 2020</p>
            </Card>
          </Fragment>
          <Fragment>
            <div>
              <img
                className="aspect-[3/2] size-full rounded-image object-cover"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
              />
            </div>
          </Fragment>
          <Fragment>
            <Card className="p-8">
              <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                2020
              </p>
              <h3 className="heading-h6 font-bold">Founded in 2020</h3>
              <p className="mt-2">Serving customers since October 2020</p>
            </Card>
          </Fragment>
          <Fragment>
            <Card className="p-8 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
              <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                2020
              </p>
              <h3 className="heading-h6 font-bold">Founded in 2020</h3>
              <p className="mt-2">Serving customers since October 2020</p>
            </Card>
          </Fragment>
          <Fragment>
            <div>
              <img
                className="aspect-[3/2] size-full rounded-image object-cover"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
              />
            </div>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
