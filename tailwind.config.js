/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/pages/*.{js,jsx}",
    "./src/components/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'default-product': "url('/sproduto1.jpg')"
      },
      width : {
        '76' : '18.75rem',
        '192': '48rem'
      },
      padding: {
        '100': '40rem'
      },
    },
  },
  plugins: [],
}
