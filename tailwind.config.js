/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/assets/**/*.{jpg,png,svg}"],

  safelist: ["from-blue-purple", "to-lavender-shade"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "991px",
      xl: "1199px",
      xxl: "1310px",
    },

    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "576px",
        md: "768px",
        lg: "991px",
        xl: "1199px",
        xxl: "1310px",
      },
    },

    backgroundImage: {
      hero: "url('./assets/images/hero-bg.png')",
      footer: "url(./assets/images/footer-shape.png)",
      customGradient: "linear-gradient(to right, #6C5CE7, #A29BFE)",
    },

    backgroundSize: {
      size: "100% 110px",
      "size-hero": ["100% 100vh"],
      "xs-size-hero": ["100% 90vh"],
      "md-size-hero": ["100% 87vh"],
      "lg-size-hero": ["100% 100vh"],
    },

    colors: {
      "orange-yellow": "#FFB400",
      "blue-purple": "#6C5CE7",
      "lavender-shade": "#A29BFE",
      "dark-indigo": "#292740",
      white: "#ffffff",
    },

    fontSize: {
      tiny: ["35px"],
      "tiny-xs": ["18px"],
      "tiny-sm": ["24px"],
      "tiny-md": ["28px"],
      "tiny-lg": ["35px"],

      medium: ["46px"],
      "medium-xs": ["20px", { lineHeight: "24px" }],
      "medium-sm": ["24px", { lineHeight: "28px" }],
      "medium-md": ["28px", { lineHeight: "34px" }],
      "medium-lg": ["35px", { lineHeight: "40px" }],
      "medium-xl": ["46px", { lineHeight: "58px" }],

      big: ["60px"],
      "big-xs": ["30px"],
      "big-sm": ["36px"],
      "big-md": ["48px"],
      "big-lg": ["50px"],
      "big-xl": ["60px"],

      huge: ["100px"],
      "huge-xs": ["44px"],
      "huge-sm": ["50px"],
      "huge-md": ["60px"],
      "huge-lg": ["76px"],
      "huge-xl": ["100px"],
    },

    fontFamily: {
      lilita: ['"Lilita One"', "sans-serif"],
      poppins: ['"Poppins"', "sans-serif"],
    },
  }
};
