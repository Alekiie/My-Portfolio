/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    darkMode: "class",
    theme: {
        extend: {
            spacing: {
                "big": "36rem"
            }
        },
        fontFamily: {
            nunito: ['Nunito', 'sans-serif']
        }

    },
    plugins: [],
}