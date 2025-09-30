"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { getInitialLanguage, persistLanguageCookie } from "@/hooks/use-language";

const useRelume = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    [],
  );
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
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
    closeMobileMenu,
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
  const {
    menuRef,
    buttonRef,
    toggleMobileMenu,
    closeMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    isMobileMenuOpen,
  } = useRelume();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState(() => getInitialLanguage());
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const easingCurve = [0.22, 1, 0.36, 1];
  const menuEase = [0.16, 1, 0.3, 1];
  const dropdownListVariants = {
    closed: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.04,
        staggerChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };
  const dropdownItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.22,
        ease: reduceMotion ? "linear" : easingCurve,
      },
    },
  };
  const dropdownDividerVariants = {
    closed: { opacity: 0, scaleX: 0.65 },
    open: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.24,
        ease: reduceMotion ? "linear" : easingCurve,
      },
    },
  };

  const collapsedClipPath = reduceMotion ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)";
  const expandedClipPath = "inset(0% 0% 0% 0%)";

  const mobileMenuVariants = {
    collapsed: {
      opacity: 0,
      clipPath: collapsedClipPath,
      pointerEvents: "none",
      paddingTop: 0,
      paddingBottom: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.28,
        ease: reduceMotion ? "linear" : menuEase,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      clipPath: expandedClipPath,
      pointerEvents: "auto",
      paddingTop: 14,
      paddingBottom: 14,
      transition: {
        duration: reduceMotion ? 0 : 0.33,
        ease: reduceMotion ? "linear" : menuEase,
        when: "beforeChildren",
      },
    },
  };

  const navContainerBackground = scrolled
    ? "bg-white border border-slate-200/70 shadow-lg"
    : "bg-white border border-slate-200/60 shadow";

  const baseGetPlusClasses =
    "relative isolate overflow-hidden rounded-full px-6 py-2 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const getPlusScrolledClasses =
    "bg-[#0EFF00] text-black shadow-[0_6px_0_0_rgba(0,0,0,0.35)] hover:bg-[#2bd60f] focus-visible:ring-[#32E910]/40 active:bg-[#28c30e] active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)]";
  const getPlusDefaultClasses =
    "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900/30";

  const getPlusButtonClassName = `${baseGetPlusClasses} ${scrolled ? getPlusScrolledClasses : getPlusDefaultClasses}`;
  const getPlusOverlayClasses = scrolled
    ? "hidden"
    : "pointer-events-none absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#97F182] to-[#88E16F] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] opacity-0";

  const languageButtonClasses =
    "relative overflow-hidden rounded-full bg-transparent text-transparent shadow-[0_6px_0_0_rgba(0,0,0,0.35)] transition-[transform,filter] duration-200 hover:brightness-110 focus-visible:ring-[#32E910]/40 active:translate-y-[4px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.35)]";

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  }, []);

  useEffect(() => {
    persistLanguageCookie(language);
    if (typeof document !== "undefined") {
      document.documentElement.lang = language === "bn" ? "bn" : "en";
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("language-change", { detail: language }));
    }
  }, [language]);

  const isEnglish = language === "en";
  const languageLabel = isEnglish ? "English" : "বাংলা";
  const currentFlagSrc = isEnglish
    ? "/assets/language/uk.svg"
    : "/assets/language/bd.svg";
  const banglaFontClass = isEnglish ? "" : "font-bangla";

  const navLabels = isEnglish
    ? {
        features: "Features",
        faq: "FAQ",
        terms: "Terms & Conditions",
        reviews: "Reviews",
        cta: "Explore ChatGPT",
        privacy: "Privacy Policy",
        refund: "Refund Policy",
        facebook: "Facebook",
        messenger: "Messenger",
        telegram: "Telegram",
      }
    : {
        features: "ফিচারস",
        faq: "সাধারণ প্রশ্ন",
        terms: "শর্তাবলী",
        reviews: "রিভিউ",
        cta: "চ্যাটজিপিটি'তে যান",
        privacy: "গোপনীয়তা নীতি",
        refund: "রিফান্ড নীতি",
        facebook: "ফেসবুক",
        messenger: "মেসেঞ্জার",
        telegram: "টেলিগ্রাম",
      };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  // Accessibility: ESC to close + focus trap when drawer is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.activeElement;
    const container = menuRef.current;
    const focusables = container?.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables?.[0];
    const last = focusables?.[focusables.length - 1];
    if (first && (first instanceof HTMLElement)) first.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMobileMenu();
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
  }, [isMobileMenuOpen, closeMobileMenu]);

  const scrollToId = (id) => {
    if (typeof window === "undefined") return;
    if (pathname && pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = `#${id}`;
    }
  };

  const handleVisitChatgpt = useCallback(() => {
    if (typeof window === "undefined") return;
    window.open("https://chatgpt.com/", "_blank", "noopener,noreferrer");
  }, []);

  const handleLogoClick = useCallback((event) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }, []);

  return (
    <section className="sticky top-0 z-[999] mx-auto flex w-full items-center justify-center px-[5%] pt-2 pb-2 md:pt-3 lg:pt-4 lg:mx-[5%] lg:w-auto lg:px-0 relative">
      <Card
        className={`relative w-full overflow-visible rounded-[22px] transition-all duration-300 ease-in-out lg:w-auto ${navContainerBackground}`}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 px-5 md:flex md:justify-between md:gap-4 md:px-8 min-h-16 md:min-h-18 lg:w-auto">
          <a
            href="/"
            onClick={handleLogoClick}
            className="shrink-0 min-w-[112px]"
            aria-label="Reload page from logo"
          >
            <img
              src="/logo.svg"
              alt="One Access BD logo"
              className="block h-6 w-auto md:h-7 lg:h-8 shrink-0 object-contain z-10"
            />
          </a>
          {/* Menu: desktop/tablet */}
          <div className="hidden md:flex flex-1 items-center justify-center flex-wrap gap-0">
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("features");
              }}
              className={`inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 ${banglaFontClass}`}
            >
              {navLabels.features}
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("faq");
              }}
              className={`inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 ${banglaFontClass}`}
            >
              {navLabels.faq}
            </a>
            <Link
              href="/terms-and-conditions"
              className={`inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 ${banglaFontClass}`}
            >
              {navLabels.terms}
            </Link>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("reviews");
              }}
              className={`inline-flex items-center justify-start rounded-full px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:text-slate-900 hover:bg-slate-900/10 active:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 ${banglaFontClass}`}
            >
              {navLabels.reviews}
            </a>
            <Button
              type="button"
              size="sm"
              onClick={toggleLanguage}
              className={`${languageButtonClasses} ml-2 flex h-10 w-[4.5rem] items-center justify-center`}
              aria-label={`Switch language. Current language ${languageLabel}`}
              aria-pressed={language === "bn"}
              style={{
                backgroundImage: `url(${currentFlagSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="sr-only">Switch language</span>
            </Button>
          </div>
          <div className="relative flex items-center justify-center gap-2 md:gap-4 shrink-0">
            <Button
              title={navLabels.cta}
              size="sm"
              variant="default"
              type="button"
              className={`${getPlusButtonClassName} ${banglaFontClass}`}
              onClick={handleVisitChatgpt}
            >
              <span aria-hidden className={getPlusOverlayClasses} />
              <span className="relative z-10">{navLabels.cta}</span>
            </Button>
            <button
              ref={buttonRef}
              className="inline-flex md:hidden items-center justify-center rounded-full p-2 hover:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
              onClick={toggleMobileMenu}
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="size-6 text-slate-900" />
              ) : (
                <Menu className="size-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              variants={mobileMenuVariants}
              initial={reduceMotion ? "open" : "collapsed"}
              animate="open"
              exit="collapsed"
              style={{
                overflow: "hidden",
                transformOrigin: "top",
                willChange: "clip-path, opacity, padding",
              }}
              className="md:hidden flex flex-col gap-[10px] border-t border-slate-200/60 px-[18px]"
            >
              <motion.nav
                className="flex flex-col gap-[10px]"
                variants={dropdownListVariants}
              >
                <motion.a
                  variants={dropdownItemVariants}
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    scrollToId("features");
                  }}
                  className={`rounded-2xl px-2 text-xl font-semibold text-slate-900 transition-colors hover:text-slate-600 ${banglaFontClass}`}
                >
                  {navLabels.features}
                </motion.a>
                <motion.a
                  variants={dropdownItemVariants}
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    scrollToId("faq");
                  }}
                  className={`rounded-2xl px-2 text-xl font-semibold text-slate-900 transition-colors hover:text-slate-600 ${banglaFontClass}`}
                >
                  {navLabels.faq}
                </motion.a>
                <motion.div variants={dropdownItemVariants}>
                  <Link
                    href="/terms-and-conditions"
                    onClick={closeMobileMenu}
                    className={`block rounded-2xl px-2 text-xl font-semibold text-slate-900 transition-colors hover:text-slate-600 ${banglaFontClass}`}
                  >
                    {navLabels.terms}
                  </Link>
                </motion.div>
                <motion.a
                  variants={dropdownItemVariants}
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    scrollToId("reviews");
                  }}
                  className={`rounded-2xl px-2 text-xl font-semibold text-slate-900 transition-colors hover:text-slate-600 ${banglaFontClass}`}
                >
                  {navLabels.reviews}
                </motion.a>
              </motion.nav>
              <motion.div
                className="flex flex-col gap-[14px]"
                variants={dropdownListVariants}
              >
                <motion.div variants={dropdownItemVariants}>
                  <Button
                    type="button"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLanguage();
                    }}
                    className={`${languageButtonClasses} flex h-10 w-[4.5rem] items-center justify-center self-start`}
                    aria-label={`Switch language. Current language ${languageLabel}`}
                    aria-pressed={language === "bn"}
                    style={{
                      backgroundImage: `url(${currentFlagSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <span className="sr-only">Switch language</span>
                  </Button>
                </motion.div>
                <motion.hr
                  variants={dropdownDividerVariants}
                  className="border-slate-200/70 mt-2"
                />
                <motion.div
                  className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-600"
                  variants={dropdownListVariants}
                >
                  <motion.div
                    variants={dropdownItemVariants}
                    className="flex flex-col gap-2"
                  >
                    <Link
                      href="/privacy-policy"
                      onClick={closeMobileMenu}
                      className={`transition-colors hover:text-slate-900 ${banglaFontClass}`}
                    >
                      {navLabels.privacy}
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      onClick={closeMobileMenu}
                      className={`transition-colors hover:text-slate-900 ${banglaFontClass}`}
                    >
                      {navLabels.terms}
                    </Link>
                    <Link
                      href="/refund-policy"
                      onClick={closeMobileMenu}
                      className={`transition-colors hover:text-slate-900 ${banglaFontClass}`}
                    >
                      {navLabels.refund}
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={dropdownItemVariants}
                    className="flex flex-col gap-2"
                  >
                    <a
                      href="https://www.facebook.com/oneaccessbd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors hover:text-slate-900 ${banglaFontClass}`}
                    >
                      {navLabels.facebook}
                    </a>
                    <a
                      href="https://m.me/oneaccessbd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors hover:text-slate-900 ${banglaFontClass}`}
                    >
                      {navLabels.messenger}
                    </a>
                    <a
                      href="https://t.me/oneaccessbd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors hover:text-slate-900 ${banglaFontClass}`}
                    >
                      {navLabels.telegram}
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </section>
  );
}
