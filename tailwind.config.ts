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
          primary: "#0A5E5C",
          accent: "#2DD4A8",
          dark: "#0B1A1F",
          "dark-mid": "#122830",
          surface: "#163038",
          "surface-light": "#1D3E48",
          text: "#E8F4F0",
          muted: "#8AACB8",
          energy: "#00E5FF",
          warning: "#F5A623",
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
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(13, 125, 122, 0.25), transparent), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(45, 212, 168, 0.08), transparent)",
        "grid-fade":
          "linear-gradient(rgba(45, 212, 168, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 212, 168, 0.04) 1px, transparent 1px)",
        "cta-panel":
          "linear-gradient(135deg, #0A5E5C, #122830)",
      },
    },
  },
  plugins: [],
};

export default config;
