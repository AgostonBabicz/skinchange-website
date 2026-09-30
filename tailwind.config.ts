import type { Config } from "tailwindcss";

// Design tokens for the "Fokus" redesign (September 2026).
// Warm paper ground, deep ink text, brand blue for actions, cyan signal only on ink.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1438",
          2: "#2A3052",
          soft: "#454B68",
        },
        paper: {
          DEFAULT: "#F6F5F1",
          deep: "#EEECE5",
        },
        line: {
          DEFAULT: "#E2DFD5",
          soft: "#EEECE5",
          strong: "#CFCBBE",
          input: "#D5D2C7",
        },
        brand: {
          DEFAULT: "#304FFE",
          hover: "#2A43E0",
          ink: "#2336C9",
          tint: "#ECEFFF",
          deep: "#1D2A7A",
        },
        signal: "#00E5FF",
        body: "#3C4260",
        muted: "#5A5F78",
        "on-ink": {
          muted: "#B7BDD9",
          soft: "#C9CEE6",
          faint: "#8F96BC",
        },
        warn: {
          bg: "#FFF1EC",
          line: "#F4CDBF",
          ink: "#7C2D12",
          icon: "#C2410C",
        },
        // Legacy palette, still referenced by a few pages during the migration.
        primary: {
          DEFAULT: "#304FFE",
          50: "#E8EAF6",
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#3f51b5",
          600: "#3949ab",
          700: "#303f9f",
          800: "#283593",
          900: "#1A237E",
          950: "#0d1137",
        },
        nordic: {
          fog: "#EEECE5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        page: "1440px",
      },
      boxShadow: {
        pill: "0 1px 2px rgba(14, 20, 56, 0.04), 0 14px 36px -20px rgba(14, 20, 56, 0.30)",
        card: "0 1px 2px rgba(14, 20, 56, 0.04), 0 24px 48px -32px rgba(14, 20, 56, 0.25)",
        lift: "0 24px 40px -24px rgba(14, 20, 56, 0.35)",
        cta: "0 12px 24px -12px rgba(48, 79, 254, 0.9)",
        "cta-hover": "0 14px 26px -12px rgba(48, 79, 254, 1)",
        chip: "0 16px 30px -14px rgba(14, 20, 56, 0.6)",
      },
      keyframes: {
        fokus: {
          from: { opacity: "0", filter: "blur(12px)", transform: "translateY(24px)" },
          to: { opacity: "1", filter: "blur(0)", transform: "none" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(64px) rotate(-3deg)" },
          to: { opacity: "1", transform: "none" },
        },
        "rise-flat": {
          from: { opacity: "0", transform: "translateY(48px)" },
          to: { opacity: "1", transform: "none" },
        },
        ring: {
          from: { opacity: "0", transform: "translate(-50%, -50%) scale(0.82)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "translate(-50%, -50%) scale(0.6)", opacity: "0.55" },
          "100%": { transform: "translate(-50%, -50%) scale(1.6)", opacity: "0" },
        },
        "menu-in": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fokus: "fokus 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
        rise: "rise 1100ms cubic-bezier(0.22, 1, 0.36, 1) 220ms both",
        "rise-flat": "rise-flat 1000ms cubic-bezier(0.22, 1, 0.36, 1) 240ms both",
        ring: "ring 1400ms cubic-bezier(0.22, 1, 0.36, 1) both",
        drift: "drift 6s ease-in-out 1.4s infinite",
        marquee: "marquee 44s linear infinite",
        "marquee-fast": "marquee 32s linear infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "menu-in": "menu-in 520ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 300ms linear both",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
