module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mobile':{'min':'365px','max':'480px'},

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @
    },
    extend: {},
  },
  plugins: [],
}