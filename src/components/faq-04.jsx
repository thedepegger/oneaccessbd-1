"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq4() {
  return (
    <section id="faq" className="scroll-mt-28 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Find answers to the most common questions about our ChatGPT Plus
            subscription.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="grid items-start justify-stretch gap-4"
        >
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-0" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                What is the subscription fee for 3 months?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                The ChatGPT Plus 3-Month package costs 499 BDT ($4.99).
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-1" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                How long does it take for activation?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                Your subscription will be activated within 12 hours after we
                receive your payment and account information.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-2" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                Do I need a new ChatGPT account or can I use my existing one?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                This offer is only valid for newly created ChatGPT accounts.
                Existing accounts are not eligible.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-3" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                Why do I need to share my email and password?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                We need your ChatGPT login info to activate the subscription.
                After activation, you can change your password for extra
                security.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-4" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                Can I use this offer on an old account?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                No, this offer is only applicable to new accounts. You must
                create a new one before purchase.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-5" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                Is the subscription refundable?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                No, once the subscription is activated, there is no refund
                option.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-6" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                What if ChatGPT service goes down?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                That depends on OpenAI's servers and policies. We are not
                responsible for any service downtime.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-7" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                Will I get support after activation?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                Our support is limited to activation only. Any issues after that
                are the user's responsibility, and One Access BD will not be
                liable.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-8" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                Can I transfer my subscription to another account?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                No, once activated, the subscription remains on the same account
                and cannot be transferred.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-9" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                Can it be used from any country?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                Yes, ChatGPT Plus can be used worldwide. Once activated, you can
                log in from anywhere.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="rounded-xl border shadow-sm">
            <AccordionItem value="item-10" className="border-none p-0 rounded-xl overflow-hidden">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-current transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] data-[state=open]:[&>svg]:text-[#0E0F0C] rounded-t-xl px-5 md:px-6"
              >
                Why is the price so low?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 bg-[#F2F2F2] data-[state=open]:bg-[#80EE67] data-[state=open]:text-[#0E0F0C] px-5 md:px-6 rounded-b-xl">
                We use promotional codes, which allow us to offer it at a much
                lower price than the official one. This is why the offer is for
                a limited time only.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
        <div id="contact" className="scroll-mt-28 mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">Need help? Contact us anytime.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact Us on Facebook" variant="secondary">
              Contact Us on Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}