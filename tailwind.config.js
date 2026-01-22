/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom color palette from the design doc
      colors: {
        primary: '#5D5CDE', // purple - used for buttons and accents
        'bg-secondary': '#F8F9FB', // light gray background
        'text-primary': '#111827', // almost black for main text
        'text-secondary': '#6B7280', // gray for secondary text
        'accent-blue': '#EFF6FF', // light blue for badges
        'footer-dark': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Typography system from the design requirements
      fontSize: {
        'display-1': ['42px', { lineHeight: '1.2', fontWeight: '700' }],
        'display-2': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-1': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-2': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'tiny': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}
