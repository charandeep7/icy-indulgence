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
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      strawberry: {
        extend: 'light',
        colors: {
          background: '#ffe3ef',
          foreground: '#f00',
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
