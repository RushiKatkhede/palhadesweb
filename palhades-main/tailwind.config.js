/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#7f22ba",
        header: "#f24b46",
        subtitle: "#7f22ba",
        card: "#c643db",
        backgroud: "#dee5ff",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
