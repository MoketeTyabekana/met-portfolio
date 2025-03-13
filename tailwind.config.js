// filepath: c:\Users\moket\Desktop\IT Projects\met-portfolio\tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screen:{
           'sm':{min: "319px", max: "479px" },
           'md':{min: "768px", max: "1023px"},
           'lg':{min: "1024px", max: "1279px"},
      },
      boxShadow: {
        'glow': '0 0 10px rgba(120,150, 0, 0.5)',
      },
    },
  },
  plugins: [],
}