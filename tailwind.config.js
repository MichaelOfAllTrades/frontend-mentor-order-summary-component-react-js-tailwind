/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-desktop': "url('./images/pattern-background-desktop.svg')",
        'bg-mobile': "url('./images/pattern-background-mobile.svg')"
      }
    },
    fontWeight: {
      'annual-plan': 900,
      'order-summary': 700,
      'proceed-to-payment': 500,
    },
    fontFamily: {
      'red-hat-display': ['red', 'hat', 'display']
    }
  },
  plugins: [],
}
