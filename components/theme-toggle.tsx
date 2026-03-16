"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem("mega-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme("dark");
    applyTheme("dark");
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="toolbar-button flex min-w-[3.25rem] items-center justify-center"
      onClick={() => {
        setTheme(nextTheme);
        applyTheme(nextTheme);
      }}
      type="button"
    >
      {theme === "dark" ? (
        <svg aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2.4M12 19.1v2.4M4.93 4.93l1.7 1.7M17.37 17.37l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.93 19.07l1.7-1.7M17.37 6.63l1.7-1.7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      ) : (
        <svg aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" fill="none" viewBox="0 0 24 24">
          <path
            d="M19 15.2A7.6 7.6 0 0 1 8.8 5a8.8 8.8 0 1 0 10.2 10.2Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      )}
    </button>
  );
}
