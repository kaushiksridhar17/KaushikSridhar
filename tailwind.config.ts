import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c2a24",
        "ink-soft": "#5b6661",
        accent: "#2d5f4f",
        "accent-dark": "#234a3e",
        "accent-tint": "#e8f0ec",
        paper: "#ffffff",
        mist: "#f5f7f6",
        line: "#e3e8e5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
