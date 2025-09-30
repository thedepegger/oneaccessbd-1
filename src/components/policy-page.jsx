"use client";

import React, { useEffect, useRef, useState } from "react";
import { POLICY_CONTENT } from "@/content/policies";
import { useLanguage } from "@/hooks/use-language";
import { useRouter } from "next/navigation";

export function PolicyPage({ policyKey }) {
  const router = useRouter();
  const language = useLanguage();
  const isBangla = language === "bn";
  const content = POLICY_CONTENT[policyKey]?.[isBangla ? "bn" : "en"];
  const [isPressed, setIsPressed] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (!content) {
    return null;
  }

  const banglaFontClass = isBangla ? "font-bangla" : "";
  const backLabel = isBangla ? "পেছনে যান" : "Back";

  const handleBack = () => {
    if (timerRef.current) return;
    setIsPressed(true);
    timerRef.current = setTimeout(() => {
      router.back();
    }, 160);
  };

  const backButtonClasses = `mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-transform duration-200 ease-out hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300 ${
    isPressed ? "translate-x-[-4px] -translate-y-[2px] scale-95 shadow-none" : ""
  }`;

  return (
    <main className={`px-[5%] py-16 md:py-20 lg:py-24 bg-slate-50 ${banglaFontClass}`}>
      <div className="container mx-auto max-w-3xl">
        <button
          type="button"
          onClick={handleBack}
          className={backButtonClasses}
        >
          <span aria-hidden="true">←</span>
          {backLabel}
        </button>
        <header className="mb-12 md:mb-16">
          <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {content.title}
          </h1>
          {content.subtitle && (
            <p className="mt-3 text-base text-slate-600 md:text-lg lg:text-xl">
              {content.subtitle}
            </p>
          )}
          {content.meta && (
            <p className="mt-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              {content.meta}
            </p>
          )}
        </header>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          {content.intro?.map((paragraph, index) => (
            <p
              key={`intro-${index}`}
              className={`text-base leading-relaxed text-slate-600 md:text-lg ${
                index > 0 ? "mt-4" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-10 space-y-10">
            {content.sections?.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
                  {section.heading}
                </h2>
                {section.body?.map((paragraph, index) => (
                  <p
                    key={`${section.heading}-body-${index}`}
                    className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && section.list.length > 0 && (
                  <ul className="mt-4 space-y-3 rounded-lg bg-slate-50/70 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
                    {section.list.map((item, index) => (
                      <li key={`${section.heading}-item-${index}`} className="flex gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
