/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                'primary-dark': '#4f46e5',
                secondary: '#8b5cf6',
                accent: '#ec4899',
                'bg-dark': '#000000',
                'bg-darker': '#0a0a0a',
                'text-primary': '#ffffff',
                'text-secondary': '#9ca3af',
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
            },
            animation: {
                'gradient-shift': 'gradient-shift 5s ease infinite',
                'pulse-slow': 'pulse-gradient 8s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
