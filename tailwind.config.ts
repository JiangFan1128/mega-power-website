import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "1024px",
        mobile: "768px",
      },
      colors: {
        mega: {
          primary: "rgb(var(--mega-primary-rgb) / <alpha-value>)",
          accent: "rgb(var(--mega-accent-rgb) / <alpha-value>)",
          dark: "rgb(var(--mega-dark-rgb) / <alpha-value>)",
          "dark-mid": "rgb(var(--mega-dark-mid-rgb) / <alpha-value>)",
          surface: "rgb(var(--mega-surface-rgb) / <alpha-value>)",
          "surface-light": "rgb(var(--mega-surface-light-rgb) / <alpha-value>)",
          text: "rgb(var(--mega-text-rgb) / <alpha-value>)",
          muted: "rgb(var(--mega-muted-rgb) / <alpha-value>)",
          energy: "rgb(var(--mega-energy-rgb) / <alpha-value>)",
          warning: "rgb(var(--mega-warning-rgb) / <alpha-value>)",
        },
      },
      boxShadow: {
        panel: "0 20px 60px rgba(0, 0, 0, 0.3)",
        panelSoft: "0 16px 48px rgba(0, 0, 0, 0.2)",
        accent: "0 8px 30px rgba(45, 212, 168, 0.4)",
      },
      maxWidth: {
        shell: "80rem",
      },
      borderRadius: {
        megaSm: "6px",
        megaMd: "14px",
        megaLg: "16px",
        megaXl: "20px",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "hero-radial": "var(--theme-hero-radial)",
        "grid-fade": "var(--theme-grid-fade)",
        "cta-panel": "var(--theme-cta-bg)",
      },
    },
  },
  plugins: [],
};

export default config;
