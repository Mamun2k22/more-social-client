/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {

    styled: true,
    themes: [
      {
        more: {

          "primary": "#ffffff00",

          "secondary": "#ffffff00",

          "accent": "#ffffff00",

          "base-200": "#ffffff00",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}