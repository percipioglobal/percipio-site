const { convertToObject } = require('typescript');

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
                'percipio-blue': {
                    500: '#1C64F2',
                    700: '#1E429F'
                },
                'percipio-green': {
                    500: '#057A55',
                    700: '#03543F'
                },
                'percipio-grey': {
                    500: '#27303F',
                    700: '#03543F'
                },
                'percipio-orange': {
                    500: '#FF5A1F',
                    700: '#B43403'
                },
                'percipio-pink': {
                    500: '#D61F69',
                    700: '#99154B'
                },
                'percipio-purple': {
                    500: '#7E3AF2',
                    700: '#5521B5'
                },
                'percipio-red': {
                    500: '#E02424',
                    700: '#9B1C1C'
                },
                'percipio-teal': {
                    500: '#0694A2',
                    700: '#036672'
                },
                'percipio-yellow': {
                    500: '#FACA15',
                    700: '#C27803'
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
                prose: [
                    'sans-serif',
                    'Open Sans',
                ]
            },

            height: {
                '90vh': '90vh',
            },

            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: '80ch',
                        fontFamily: theme('fontFamily.prose'),
                        h1: {
                            fontWeight: 'bold'
                        },
                        h2: {
                            fontWeight: 'bold'
                        },
                        h3: {
                            fontWeight: 'bold'
                        },
                        h4: {
                            fontWeight: 'bold'
                        },
                        h5: {
                            fontWeight: 'bold'
                        },
                        h6: {
                            fontWeight: 'bold'
                        },
                    },
                },
                'white': {
                    css: {
                        h1: {
                            color: theme('colors.white.100')
                        },
                        h2: {
                            color: theme('colors.white.100')
                        },
                        h3: {
                            color: theme('colors.white.100')
                        },
                        h4: {
                            color: theme('colors.white.100')
                        },
                        h5: {
                            color: theme('colors.white.100')
                        },
                        h6: {
                            color: theme('colors.white.100')
                        },
                        color: theme('colors.white.100')
                    }
                },
            }),
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        // require('@tailwindcss/aspect-ratio'),
    ],
};
