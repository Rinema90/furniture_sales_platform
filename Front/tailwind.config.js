/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gistesy: ["Gistesy", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         timberwolf: {
//           DEFAULT: "#ddd0c8",
//           100: "#342820",
//           200: "#695040",
//           300: "#9d7861",
//           400: "#bea595",
//           500: "#ddd0c8",
//           600: "#e5dad4",
//           700: "#ebe4df",
//           800: "#f2ede9",
//           900: "#f8f6f4",
//         },
//         champagne_pink: {
//           DEFAULT: "#ebd8c9",
//           100: "#3f2917",
//           200: "#7f512f",
//           300: "#bc7a49",
//           400: "#d3a888",
//           500: "#ebd8c9",
//           600: "#eedfd2",
//           700: "#f3e7dd",
//           800: "#f7efe9",
//           900: "#fbf7f4",
//         },
//         linen: {
//           DEFAULT: "#f4ebe4",
//           100: "#432d1c",
//           200: "#875a37",
//           300: "#be885f",
//           400: "#d9baa2",
//           500: "#f4ebe4",
//           600: "#f7f0eb",
//           700: "#f9f4f0",
//           800: "#fbf7f5",
//           900: "#fdfbfa",
//         },
//         isabelline: {
//           DEFAULT: "#f2eeed",
//           100: "#382b28",
//           200: "#6f5751",
//           300: "#a2857e",
//           400: "#cabab6",
//           500: "#f2eeed",
//           600: "#f5f2f1",
//           700: "#f7f5f4",
//           800: "#faf8f8",
//           900: "#fcfcfb",
//         },
//       },
//     },
//   },
//   // ...
// };
