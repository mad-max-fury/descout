import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fill: {
        current: "currentColor",
      },

      fontWeight: {
        thin: "100",
        "extra-light": "200",
        light: "300",
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      fontSize: {
        // Header element styles
        "h-m": ["3rem", { lineHeight: "3.72rem", fontWeight: 900 }],
        "h-1": ["2.25rem", { lineHeight: "2.79rem", fontWeight: 800 }],
        "h-2": ["1.5rem", { lineHeight: "1.86rem", fontWeight: 500 }],
        "h-4": ["1.5rem", { lineHeight: "1.86rem", fontWeight: 700 }],
        // Body variant styles - [Large, Medium, Regular, Small]
        "body-m": ["1.125rem", { lineHeight: "1.395rem", fontWeight: 400 }],
        "body-r": ["1rem", { lineHeight: "1.24rem", fontWeight: 400 }],
        "body-s": ["0.875rem", { lineHeight: "1.09rem", fontWeight: 400 }],
        "body-t": ["1rem", { lineHeight: "1.6rem", fontWeight: 500 }],
        "body-u": ["1rem", { lineHeight: "1.4rem", fontWeight: 400 }],
        "body-v": ["1rem", { lineHeight: "1.6rem", fontWeight: 900 }],
        "caption-s": ["0.875rem", { lineHeight: "1.25rem", fontWeight: 400 }],
        "caption-v": ["0.875rem", { lineHeight: "1.25rem", fontWeight: 700 }],
      },
      borderRadius: {
        xxl: "30px",
      },
      fontFamily: {
        CabinetGrotesk: ["Cabinet Grotesk", "sans-serif"],
      },
      backgroundImage: {
        'custom-image': "url('/Pattern.svg')",
        'back-image': "url('/shabala.svg')",
          "cata-image":"url('/videocover.png')"
        
      },
      colors: {
        veryBlack: "#000000",
        superError: "#b42121",
        "star-dust": {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dfdfdf",
          "300": "#c8c8c8",
          "400": "#adadad",
          "500": "#9b9b9b",
          "600": "#888888",
          "700": "#7b7b7b",
          "800": "#676767",
          "900": "#545454",
          "950": "#363636",
        },
        "fuchsia-blue": {
          "50": "#eeefff",
          "100": "#dfe2ff",
          "200": "#c6c8ff",
          "300": "#a4a5fd",
          "400": "#887ffa",
          "500": "#654ef2",
          "600": "#6843e8",
          "700": "#5936cc",
          "800": "#482ea5",
          "900": "#3e2d82",
          "950": "#251a4c",
        },
        woodsmoke: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#161616",
        },
        apicolor:"#B8C4CE",
        special: "#4C4C4C",
        admin: "#1671D9",
        auditor: "#0F973D",
        editor: "#F3A218",
        info: "var(--info)",
        primary: "var(--primary)",
        border: "var(--border-color)",
        warning: "var(--warning)",
        error: "#d61414",
      },
      screens: {
        mxl: { max: "1279px" },
        // => @media (max-width: 1279px){...}

        mlg: { max: "1023px" },
        // => @media (max-width: 1023px){...}

        mmd: { max: "775px" },
        // => @media (max-width: 767px){...}

        msm: { max: "639px" },
        // => @media (max-width: 639px){...}

        mxs: { max: "480px" },
        // => @media (max-width: 480px){...}

        mxxs: { max: "425px" },
        // => @media (max-width: 400px){...}

        mxxxs: { max: "320px" },
        // => @media (max-width: 320px){...}

        "ms-height": { raw: "(max-height: 700px)" },

        "mxl-height": { raw: "(max-height: 850px)" },
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
