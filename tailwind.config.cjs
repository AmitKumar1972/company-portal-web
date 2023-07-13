/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    boxShadow: {
      sm: "0px 1px 9px rgba(230, 230, 230, 0.5)",
      DEFAULT: "0px 4px 8px rgba(26, 26, 26, 0.16)",
      md: "box-shadow: 0px 1px 9px rgba(230, 230, 230, 0.5);",
      none: "none",
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    extend: {
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "1rem" }],
      },
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.light-1", "currentColor"),
      }),
      colors: {
        black: "#1A1A1A",
        white: "#FFFFFF",
        accent: {
          DEFAULT: "#FFEE55",
          border: "#FFE920",
        },
        primary: "#37DBFF",
        secondary: {
          DEFAULT: "#2196F3",
          fill: "#F5FBFF",
        },
        gray: {
          "extra-light": "#FAFAFA",
          "light-1": "#E6E6E6",
          "light-2": "#CCCCCC",
          "medium-1": "#B3B3B3",
          "medium-2": "#7A7A7A",
          "dark-1": "#4E4E4E",
          "dark-2": "#2E2E2E",
        },
        alert: {
          error: "#E53935",
          success: "#43A047",
        },
        extras: {
          white: "#F9F9F8",
          gray: "#DCE4FF",
          aquaBlue: "#2DB7D6",
          aquaBlue1: "#4DD7FF",
          seaGreen2: "#00A0CE",
          seaGreen: "#2DB7B6",
          blue: "#1F6AB1",
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
