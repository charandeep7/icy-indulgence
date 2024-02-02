import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      strawberry: {
        extend: 'light',
        colors: {
          background: '#ffeaec',
          foreground: '#472c4c',
          primary: {
            50: "#ffe3ef",
            100: "#ffb2cb",
            200: "#fe81a8",
            300: "#fc5086",
            400: "#fa2163",
            500: "#e00a4a",
            600: "#af0339",
            700: "#7e0029",
            800: "#4d0018",
            900: "#1f0008",
          }
        },
        layout: {
        }
      }
    }
  })],
}
export default config
