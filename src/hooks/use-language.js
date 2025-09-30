import { useEffect, useState } from "react";

const LANGUAGE_COOKIE = "language";
const DEFAULT_LANGUAGE = "en";

function readLanguageCookie() {
  if (typeof document === "undefined") return undefined;
  const cookies = document.cookie?.split("; ") ?? [];
  const match = cookies.find((entry) => entry.startsWith(`${LANGUAGE_COOKIE}=`));
  if (!match) return undefined;
  const value = decodeURIComponent(match.split("=")[1] ?? "");
  return value === "bn" || value === "en" ? value : undefined;
}

export function persistLanguageCookie(value) {
  if (typeof document === "undefined") return;
  const safeValue = value === "bn" ? "bn" : DEFAULT_LANGUAGE;
  const maxAge = 60 * 60 * 24 * 365; // one year
  document.cookie = `${LANGUAGE_COOKIE}=${encodeURIComponent(safeValue)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function useLanguage() {
  const [language, setLanguage] = useState(() => getInitialLanguage());

  useEffect(() => {
    const handleLanguageChange = (event) => {
      const next = event?.detail === "bn" ? "bn" : DEFAULT_LANGUAGE;
      setLanguage(next);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("language-change", handleLanguageChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("language-change", handleLanguageChange);
      }
    };
  }, []);

  return language;
}

export function getInitialLanguage() {
  const stored = readLanguageCookie();
  if (stored) return stored;
  if (typeof document !== "undefined") {
    return document.documentElement.lang === "bn" ? "bn" : DEFAULT_LANGUAGE;
  }
  return DEFAULT_LANGUAGE;
}
