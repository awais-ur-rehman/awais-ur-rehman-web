import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f5f5f5",
        secondary: "#171717",
      },
      fontFamily: {
        saans: ['"Inter"', "sans-serif", '"saans Fallback"'],
      },
    },
  },
  plugins: [],
};
export default config;

