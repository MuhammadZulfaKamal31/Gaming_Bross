/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", //supaya menambahkan class di htmlnya
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: false
    }
};
