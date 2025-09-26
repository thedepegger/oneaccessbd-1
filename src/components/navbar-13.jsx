"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { MoreHorizontal, X } from "lucide-react";

const useRelume = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotate" : "initial";
  return {
    menuRef,
    buttonRef,
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    isMobileMenuOpen,
  };
};

export function Navbar13() {
  const useActive = useRelume();
  const [scrolled, setScrolled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when full-screen mobile menu is open
  useEffect(() => {
    if (useActive.isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [useActive.isMobileMenuOpen]);

  // Accessibility: ESC to close + focus trap when drawer is open
  useEffect(() => {
    if (!useActive.isMobileMenuOpen) return;
    const prev = document.activeElement;
    const container = useActive.menuRef.current;
    const focusables = container?.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables?.[0];
    const last = focusables?.[focusables.length - 1];
    if (first && (first instanceof HTMLElement)) first.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        useActive.toggleMobileMenu();
        return;
      }
      if (e.key === "Tab" && focusables && focusables.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last instanceof HTMLElement) && last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first instanceof HTMLElement) && first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (prev && prev instanceof HTMLElement) prev.focus();
    };
  }, [useActive.isMobileMenuOpen, useActive.toggleMobileMenu]);

  const scrollToId = (id) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: update hash so navigation still works
      window.location.hash = `#${id}`;
    }
  };

  return (
    <section className="sticky top-0 z-[999] mx-auto flex w-full items-center justify-center px-[5%] pt-2 pb-2 md:pt-3 lg:pt-4 lg:mx-[5%] lg:w-auto lg:px-0">
      <Card
        className={`relative grid grid-cols-[auto_1fr_auto] items-center gap-2 md:flex md:justify-between md:gap-4 min-h-16 w-full overflow-visible rounded-xl px-5 md:min-h-18 md:px-8 lg:w-auto transition-all duration-300 ease-in-out
        ${scrolled ? "backdrop-blur-3xl backdrop-saturate-200 backdrop-brightness-110 bg-white/78 border border-slate-200/70 shadow-lg" : "backdrop-blur-2xl backdrop-saturate-200 backdrop-brightness-110 bg-white/55 border border-slate-200/60 shadow"}
        `}
      >
        <a href="#" className="shrink-0 min-w-[112px]">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-1758908738168.png"
            alt="Team One Access BD logo"
            className="block h-6 w-auto md:h-7 lg:h-8 shrink-0 object-contain z-10"
          />
        </a>
        {useActive.isMobileMenuOpen && (
          <motion.div
            initial={isDesktop ? "open" : "close"}
            exit="close"
            animate={isDesktop ? "open" : useActive.animateMobileMenu}
            className="md:hidden fixed inset-0 z-[9999]"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/10 z-0"
              onClick={useActive.toggleMobileMenu}
              aria-hidden="true"
            />
            <motion.div
              variants={{
                open: { opacity: 1, y: 0 },
                close: { opacity: 0, y: -8 },
              }}
              animate={isDesktop ? "open" : useActive.animateMobileMenu}
              initial={isDesktop ? "open" : "close"}
              exit="close"
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "ease-out" }}
              className="relative h-full w-full text-slate-900 dark:text-white"
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <div className="absolute inset-0 overflow-hidden relative z-10 backdrop-blur-0 bg-white/5 dark:bg-zinc-900/5">
                <div ref={useActive.menuRef} className="flex h-full w-full flex-col">
                  {/* Overlay Header */}
                  <div className="sticky top-0 z-[1] grid grid-cols-[auto_1fr_auto] items-center px-5 py-4 border-b-0 bg-transparent">
                    <a href="#" className="shrink-0 min-w-[112px]" onClick={() => useActive.toggleMobileMenu()}>
                      <img
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-1758908738168.png"
                        alt="Team One Access BD logo"
                        className="block h-6 w-auto md:h-7 lg:h-8"
                      />
                    </a>
                    <div className="flex items-center justify-end gap-2 pointer-events-auto">
                      <Button 
                        title="Get Plus" 
                        size="sm" 
                        variant="default" 
                        type="button"
                        className={`relative isolate overflow-hidden rounded-full px-6 py-2 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "!bg-transparent text-[#003720] hover:!bg-transparent hover:text-[#003720] focus-visible:ring-[#003720]/30" : "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900/30"}`}
                        onClick={(e) => { e.preventDefault(); useActive.toggleMobileMenu(); scrollToId("contact"); }}
                      >
                        <span
                          aria-hidden
                          className={`pointer-events-none absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#97F182] to-[#88E16F] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] ${scrolled ? "opacity-100" : "opacity-0"}`}
                        />
                        <span className="relative z-10">Get Plus</span>
                      </Button>
                      <button
                        type="button"
                        onClick={useActive.toggleMobileMenu}
                        aria-label="Close menu"
                        className="inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10 dark:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      >
                        <X className="size-6" />
                      </button>
                    </div>
                  </div>

                  {/* Overlay Body - Use same options as navbar */}
                  <div className="flex-1 overflow-y-auto px-5 pt-6">
                    <nav className="flex flex-col gap-6">
                      <a
                        href="#features"
                        onClick={(e) => {
                          e.preventDefault();
                          useActive.toggleMobileMenu();
                          scrollToId("features");
                        }}
                        className="text-2xl font-medium text-slate-900 dark:text-white"
                      >
                        Features
                      </a>
                      <a
                        href="#faq"
                        onClick={(e) => {
                          e.preventDefault();
                          useActive.toggleMobileMenu();
                          scrollToId("faq");
                        }}
                        className="text-2xl font-medium text-slate-900 dark:text-white"
                      >
                        FAQ
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          useActive.toggleMobileMenu();
                        }}
                        className="text-2xl font-medium text-slate-900 dark:text-white"
                      >
                        Terms & Conditions
                      </a>
                      <a
                        href="#reviews"
                        onClick={(e) => {
                          e.preventDefault();
                          useActive.toggleMobileMenu();
                          scrollToId("reviews");
                        }}
                        className="text-2xl font-medium text-slate-900 dark:text-white"
                      >
                        Reviews
                      </a>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          useActive.toggleMobileMenu();
                          scrollToId("contact");
                        }}
                        className="text-2xl font-medium text-slate-900 dark:text-white"
                      >
                        Contact
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {/* Menu: desktop/tablet */}
        <div className="hidden md:flex flex-1 items-center justify-center flex-wrap gap-0">
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("features");
            }}
            className="inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("faq");
            }}
            className="inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
          >
            FAQ
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
          >
            Terms & Conditions
          </a>
          <a
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("reviews");
            }}
            className="inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
          >
            Reviews
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact");
            }}
            className="inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-4 shrink-0">
          <Button 
            title="Get Plus" 
            size="sm" 
            variant="default" 
            type="button"
            className={`relative isolate overflow-hidden rounded-full px-6 py-2 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "!bg-transparent text-[#003720] hover:!bg-transparent hover:text-[#003720] focus-visible:ring-[#003720]/30" : "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900/30"}`}
            onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}
           >
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#97F182] to-[#88E16F] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] ${scrolled ? "opacity-100" : "opacity-0"}`}
            />
            <span className="relative z-10">Get Plus</span>
          </Button>
          <button
            ref={useActive.buttonRef}
            className="inline-flex md:hidden items-center justify-center rounded-full p-2 hover:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
            onClick={useActive.toggleMobileMenu}
            type="button"
            aria-label={useActive.isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={useActive.isMobileMenuOpen}
          >
            {useActive.isMobileMenuOpen ? (
              <X className="size-6 text-slate-900" />
            ) : (
              <MoreHorizontal className="size-6 text-slate-900" />
            )}
          </button>
        </div>
      </Card>
    </section>
  );
}