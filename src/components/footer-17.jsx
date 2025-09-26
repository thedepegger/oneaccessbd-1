"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer17() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-between gap-x-[8vw] gap-y-12 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:pb-20">
          <div className="flex flex-col items-start">
            <a href="#" className="mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
                className="inline-block"
              />
            </a>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <div>
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Subscribe" variant="secondary" size="sm">
                  Subscribe
                </Button>
              </form>
              <p className="text-tiny">
                By subscribing you agree to with our Privacy Policy
              </p>
            </div>
          </div>
        </div>
        <div className="pb-8 md:pb-10 lg:pb-12">
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/company-name.svg"
              alt="Company image"
              className="inline-block"
            />
          </a>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col items-start justify-start pt-6 pb-4 md:flex-row md:items-center md:justify-between md:pt-8 md:pb-0 md:text-center">
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center">
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="underline">
              <a href="#">Refund Policy</a>
            </li>
          </ul>
          <p>© 2024 Relume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
