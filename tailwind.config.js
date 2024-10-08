/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray1: '#F8F9FA',
        gray2: '#6C757D',
        gray3: '#CED4DA',
        green1: '#198754',
        black1: '#212529',
        'black-0.2': 'rgba(0,0,0,0.2)',
        red1: '#DC3545'
      },
      spacing: {
        15: '60px',
        25: '100px',
        30: '120px',
        35: '140px',
        120: '480px'
      }
    }
  },
  plugins: []
}
