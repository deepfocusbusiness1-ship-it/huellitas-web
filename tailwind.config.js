/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e1a14",
          light: "#1a3025",
          dark: "#060f0a",
        },
        accent: {
          DEFAULT: "#f0c060",
          light: "#f5d080",
          dark: "#c09040",
        },
        green: {
          forest: "#4a7c59",
          moss: "#2d6a4f",
          bright: "#25D366",
        },
        coral: {
          DEFAULT: "#e8523a",
          light: "#f07060",
          dark: "#c03828",
        },
        cream: {
          DEFAULT: "#f7f5f0",
          warm: "#f2ede4",
          dark: "#e8e2d6",
        },
      },
      fontFamily: {
        heading: ["Fraunces", "serif"],
        body: ["Plus Jakarta Sans", "DM Sans", "sans-serif"],
        sans: ["Plus Jakarta Sans", "DM Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-green": "0 8px 32px rgba(37, 211, 102, 0.35)",
        "glow-accent": "0 8px 32px rgba(240, 192, 96, 0.35)",
        "glow-primary": "0 8px 32px rgba(14, 26, 20, 0.35)",
        card: "0 4px 24px rgba(0, 0, 0, 0.07)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.14)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "scale-in": "scaleIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "badge-float": "badgeFloat 3s ease-in-out infinite",
        "wa-pulse": "waPulse 2.5s ease-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        badgeFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        waPulse: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "70%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};