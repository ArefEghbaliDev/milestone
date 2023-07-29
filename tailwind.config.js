/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    700: '#0052CC',
                    500: '#6A00F4',
                    100: '#85B6FF',
                },
                secondary: {
                    700: '#D19FA7',
                    500: '#FFA630',
                    100: '#E4C8CD',
                },
                dark: {
                    600: '#000000',
                    500: '#111111',
                    400: '#1A1A1A',
                    300: '#1E1E1E',
                    200: '#343434',
                    100: '#424242',
                },
                powder: {
                    500: '#FFFDF7',
                    200: '#999999'
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
