/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,svelte,js,jsx,ts,tsx}", "./public/**/*.html"],

  theme: {
    extend: {
      colors: {
        "hex-blue-200": " #0397AB",
        "hex-blue-300": "#005A82",
        "hex-blue-400": "#0A1428",
        "hex-gold-100": "#F0E6D2",
        "hex-gold-400": "#C89B3C",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
