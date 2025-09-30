"use client";

import React, { useCallback, useId } from "react";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "@/hooks/use-language";

export function Footer17() {
  const language = useLanguage();
  const isBangla = language === "bn";
  const banglaFontClass = isBangla ? "font-bangla" : "";
  const marqueeItems = Array(4).fill("Be One, Be Accessible");

  const handleLogoClick = useCallback((event) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }, []);

  const footerLinks = isBangla
    ? [
        { label: "প্রাইভেসি পলিসি", href: "/privacy-policy" },
        { label: "শর্ত ও নিয়মাবলী", href: "/terms-and-conditions" },
        { label: "রিফান্ড নীতিমালা", href: "/refund-policy" },
      ]
    : [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Refund Policy", href: "/refund-policy" },
      ];

  const copyrightText = isBangla
    ? "© ২০২৫ ওয়ান একসেস বিডি. সকল অধিকার সংরক্ষিত।"
    : "© 2025 One Access BD. All rights reserved.";

  return (
    <>
      <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-black text-white">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-6 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:pb-20">
            <a
              href="/"
              onClick={handleLogoClick}
              aria-label="Reload page from footer logo"
              className="inline-flex"
            >
              <img
                src="/white-logo.svg"
                alt="One Access BD logo"
                className="h-16 w-auto"
              />
            </a>
            <div className="flex items-center gap-4 text-2xl text-white">
              <a
                href="https://www.facebook.com/oneaccessbd"
                aria-label="Follow on Facebook"
                className="footer-icon footer-icon--facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://m.me/oneaccessbd"
                aria-label="Message on Messenger"
                className="footer-icon footer-icon--messenger"
              >
                <MessengerIcon />
              </a>
              <a
                href="https://t.me/oneaccessbd"
                aria-label="Join on Telegram"
                className="footer-icon footer-icon--telegram"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>
          <div className="pb-8 md:pb-10 lg:pb-12">
            <div className="relative overflow-hidden">
              <div className="footer-marquee flex w-max items-center gap-16 whitespace-nowrap text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
                {marqueeItems.map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-white/20" />
          <div className="text-small flex flex-col items-start justify-start gap-3 pt-6 pb-4 md:flex-row md:items-center md:justify-between md:gap-0 md:pt-8 md:pb-0 md:text-center">
            <ul className="text-small grid grid-flow-row grid-cols-[max-content] gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center text-white">
              {footerLinks.map((link) => (
                <li key={link.label} className="underline">
                  <a className={`text-white ${banglaFontClass}`} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className={`text-white ${banglaFontClass}`}>{copyrightText}</p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes footer-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .footer-marquee {
          animation: footer-marquee 10s linear infinite;
        }

        :global(.footer-icon) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: color 200ms ease, transform 200ms ease, -webkit-text-fill-color 200ms ease;
        }

        :global(.footer-icon:hover) {
          transform: translateY(-2px);
        }

        :global(.footer-icon--facebook:hover) {
          color: #0765fe;
        }

        :global(.footer-icon--messenger svg) {
          width: 1em;
          height: 1em;
        }

        :global(.footer-icon--messenger svg path) {
          transition: opacity 200ms ease;
        }

        :global(.footer-icon--messenger .messenger-base-path) {
          fill: #ffffff;
        }

        :global(.footer-icon--messenger .messenger-gradient-path) {
          opacity: 0;
        }

        :global(.footer-icon--messenger:hover .messenger-base-path) {
          opacity: 0;
        }

        :global(.footer-icon--messenger:hover .messenger-gradient-path) {
          opacity: 1;
        }

        :global(.footer-icon--telegram:hover) {
          color: #27a5e5;
        }
      `}</style>
    </>
  );
}

function MessengerIcon() {
  const gradientId = useId();
  return (
    <svg
      className="size-[1em]"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} gradientTransform="rotate(170)">
          <stop offset="20%" stopColor="#00ADFF" />
          <stop offset="100%" stopColor="#0070FF" />
        </linearGradient>
      </defs>
      <path
        className="messenger-base-path"
        fill="#ffffff"
        d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
      />
      <path
        className="messenger-gradient-path"
        fill={`url(#${gradientId})`}
        d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
      />
    </svg>
  );
}
