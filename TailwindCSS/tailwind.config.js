/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html}"],
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch 