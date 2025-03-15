// filepath: c:\Users\moket\Desktop\IT Projects\met-portfolio\tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screen:{
           'sm':{min: "300px", max: "768px" },
           'lg':{min: "769px", max: "1024px"},
           'xl':{min: "1280px", max: "1536px"},
      },
      boxShadow: {
        'glow': '0 0 10px rgba(120,150, 0, 0.5)',
      },
    },
  },
  plugins: [],
}