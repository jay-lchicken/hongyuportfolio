/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            inter: ["var(--font-inter)"],
        },

      colors: {

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'text-gradient': "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        'gradient-1': "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        'gradient-2': "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        'gradient-3':  "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
        'gradient-4': "  linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)",
      },
    },

  },
  plugins: [],
};
