// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
       custom: ["Old Standard TT", "serif"]
      },
      boxShadow: {
        'soft-black': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'frosted': '0 8px 24px rgba(255, 255, 255, 0.2)',
        'blue-glow': '0 0 10px rgba(0, 123, 255, 0.3)',
      },
    },
  },
  plugins: [],
}