/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    700: '#0052CC',
                    500: '#005CE6',
                    100: '#85B6FF',
                },
                secondary: {
                    700: '#D19FA7',
                    500: '#DEBAC0',
                    100: '#E4C8CD',
                },
                dark: {
                    500: '#0D0221',
                    300: '#292929',
                    200: '#121212',
                    100: '#242424',
                },
                powder: {
                    500: '#FFFDF7',
                },
            },
        },
        maxWidth: {
            container: '90%',
        },
        borderRadius: {
            DEFAULT: '8px',
            full: '99px',
            lg: '12px',
            sm: '4px',
        },
    },
    plugins: [],
};
