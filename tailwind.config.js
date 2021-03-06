module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      fontFamily: {
        nunito: ["Nunito"] 
      },
      colors: {
        primary: '#095590',
        secondary: '#59A5E3',
      },
      backgroundImage: {
        'header-background': "url('/public/assets/img/head/bg.png')",
      }
    },
  },
  plugins: [],
}
