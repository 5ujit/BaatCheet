// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 tells Tailwind to scan all files in src/
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // if you're using daisyUI
}
