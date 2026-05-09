/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#8A4DFF',
          light: '#AD6BFF',
          dark: '#7244FF',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FF428A',
        },
        brand: {
          dark: '#111827',
          gray: '#6B7280',
          lightGray: '#9CA3AF',
          bg: '#FAFBFF',
          sidebar: '#F0F2FF',
          sidebarActive: '#5C5CFF',
          buttonDark: '#2D31A6',
          aiPurple: '#A582FF',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      boxShadow: {
        'soft': '0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.05)',
        'glow': '0px 8px 20px -6px rgba(138, 77, 255, 0.6)',
        'float': '0px 20px 50px -15px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'hero-sky': "url('https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=3000&auto=format&fit=crop')",
        'newsletter-sky': "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=2000&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}
