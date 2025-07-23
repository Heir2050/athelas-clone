import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'slide-left': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                    'slide-left': 'slide-left 8s linear infinite',
            },
        },
    },
    plugins: [],
}

export default config
