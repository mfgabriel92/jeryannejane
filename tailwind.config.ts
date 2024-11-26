import { default as typography } from "@tailwindcss/typography";
import { default as daisyui } from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: "#fffee0",
          400: "#FFFD9E",
        },
        brown: {
          400: "#D49B6C",
        },
        gray: {
          300: "#FAFAFA",
          900: "#313131",
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["bumblebee"],
  },
} satisfies Config;
