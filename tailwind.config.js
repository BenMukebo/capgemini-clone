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
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1480px",
    },
    colors: {
      'primary': '#171717',
      'secondary': '#0070ad',
      'white': '#fff',
      'black': '#15011d',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Poppins', 'serif'],
      // 'body': ['Open Sans', '...fontFamilly.sans'],
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'intro-img': "url('./src/img/intro-bg.jpeg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}