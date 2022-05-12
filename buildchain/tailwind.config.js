module.exports = {
    content: [
        '../cms/templates/**/*.{twig,html,svg}',
        '../src/vue/**/*.{vue,html}',
    ],

    safelist: [
    ],

    theme: {
        extend: {
            colors: {
                'blue': {
                    500: '#1C64F2',
                    700: '#1E429F',
                },
                'green': {
                    500: '#057A55',
                    700: '#03543F',
                },
                'gray': {
                    800: '#27303F',
                    900: '#161E2E',
                },
                'orange': {
                    500: '#FF5A1F',
                    700: '#B43403',
                },
                'pink': {
                    500: '#D61F69',
                    700: '#99154B',
                },
                'purple': {
                    500: '#7E3AF2',
                    700: '#5521B5',
                },
                'red': {
                    500: '#E02424',
                    700: '#9B1C1C',
                },
                'teal': {
                    500: '#0694A2',
                    700: '#036672',
                },
                'yellow': {
                    500: '#FACA15',
                    700: '#C27803',
                },
            },

            fontFamily: {
                primary: [
                    'Open Sans',
                    'sans-serif',
                ],
                mono: [
                    'Source Code Pro',
                    'monospace'
                ],
            },

            typography: (theme) => ({
                'standfirst': {
                    css: { 
                        color: theme('colors.gray.900')
                        
                    }
                }
            }),
        },
    },

    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography')
    ],
};