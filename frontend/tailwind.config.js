/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0d6a0d',
        'primary-lg': '#17ac17',
        'secondary': '#1880f0',
        'secondary-lg': '#4395ed',
        'dark': '#111',
        'grey-dk': '#333',
        'grey-md': '#888',
        'grey-lg': '#ccc',
        'grey-xl': '#eee',
        'lighter-green': '#efffef',
        'lighter-blue': '#edf7ff'
      }
    },
  },
  plugins: [],
}

