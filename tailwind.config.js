/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["pubic/*.{html,js}"],
  content: [
    './public/**/*.{html,js}'
  ],

  theme: {
    screens: {
      xm: "375px",
      sm: "480px",
      md: "786px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1480px",
    },
    extend: {
      colors: {
        'primary': '#171717',
        'secondary': '#0070ad',
        'white': '#fff',
        'black': '#15011d',
      },
      backgroundImage: {
        'intro-img': "url('./src/img/intro-bg.jpeg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Poppins', 'serif'],
        // 'body': ['Open Sans', '...fontFamilly.sans'],
      },
    }
  },
  plugins: [],
}