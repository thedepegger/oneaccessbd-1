"use client";

import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

export function TextRevealByWord({
  text,
  className,
  textClassName,
  stickyClassName,
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 10%"],
  });

  const words = useMemo(() => text.split(" "), [text]);
  const totalWords = words.length;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-[24vh] md:min-h-[28vh] lg:min-h-[32vh]",
        className,
      )}
    >
      <div
        className={cn(
          "sticky top-8 flex min-h-[26vh] items-center md:top-11 lg:top-13",
          stickyClassName,
        )}
      >
        <p
          className={cn(
            "flex flex-wrap text-slate-900 dark:text-white text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
            textClassName,
          )}
        >
          {words.map((word, index) => (
            <Word
              key={`${word}-${index}`}
              progress={scrollYProgress}
              range={[index / totalWords, (index + 1) / totalWords]}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </div>
  );
}

function Word({ children, progress, range }) {
  const color = useTransform(progress, (latest) => {
    const [start, end] = range;
    if (latest <= start) return "#EFEFEF";
    if (latest >= end) return "#0f172a";
    const distance = Math.max(end - start, 1e-5);
    const ratio = (latest - start) / distance;
    return ratio >= 0.55 ? "#0f172a" : "#B1B1B1";
  });

  return (
    <motion.span style={{ color }} className="mx-1 inline-block font-inherit lg:mx-2">
      {children}
      {"\u00A0"}
    </motion.span>
  );
}
