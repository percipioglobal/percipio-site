module.exports = {
    content: [
        '../cms/templates/**/*.{twig,html,svg}',
        '../src/vue/**/*.{vue,html}',
    ],

    safelist: [
        'bg-gray-600',
        'bg-gray-800',
        'bg-gray-900',
        {
            pattern: /bg-(blue|green|orange|pink|purple|red|teal|yellow)-(500|700)/,
            variants: ['hover','focus','md','lg'],
        },
    ],

    theme: {

        container: {
            padding: {
                DEFAULT: '1.5rem',
                sm: '2rem',
                '2xl': '0',
            },
        },

        extend: {
            aspectRatio: {
                '3/2': '3 / 2',
                '4/3': '4 / 3',
                '4/5': '4 / 5',
                '4/5': '7 / 5',
                '9/16': '9 / 16',
                '16/9': '16 / 9',
            },

            borderRadius: {
                '4xl': '30px',
            },

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
                    600: '#64748B',
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
                    'sans-serif'
                ],
                mono: [
                    'Source Code Pro',
                    'monospace'
                ],
            },

            fontSize: {
                'sm': ['0.875rem', '1.5rem'],
                'base-extra': ['1rem','1.875rem'],
                'xl-extra': ['1.25rem', '2.25rem'],
                '2xl': ['1.5rem', '2.25rem'],
                '2xl-md': ['1.5rem', '2rem'],
                '3xl-md': ['1.5rem', '1.75rem'],
                '5xl-md': ['2.25rem', '2.875rem'],
                '5xl': ['3rem', '3.5rem'],
                '7xl-md': ['3.75rem', '4.5rem'],
                '7xl': ['4.5rem', '5rem'],
                'standfirst': ['1.875rem', '3rem'],
                'standfirst-md': ['1.25rem', '2rem'],
            },

            letterSpacing: {
                'tightest': '-.07em',
                'tighter': '-.04em',
            },

            transitionTimingFunction: {
                'slide': 'cubic-bezier(0.99, 0.3, 0.22, 0.85)'
            },

            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.900'),
                        fontFamily: theme('fontFamily.primary').map(font => `'${font}'`).join(', '),
                        ul: {
                            '& > li': {
                                '&::marker': {
                                    'color': theme('colors.gray.600')
                                }
                            }
                        }
                    }
                },
                'standfirst': {
                    css: {
                        color: theme('colors.gray.900'),
                        fontFamily: theme('fontFamily.primary').map(font => `'${font}'`).join(', '),
                        fontSize: theme('fontSize.standfirst')[0],
                        letterSpacing: theme('letterSpacing.tighter'),
                        lineHeight: theme('fontSize.standfirst')[1]
                    }
                },
                'standfirst-md': {
                    css: {
                        color: theme('colors.gray.900'),
                        fontFamily: theme('fontFamily.primary').map(font => `'${font}'`).join(', '),
                        fontSize: theme('fontSize.standfirst-md')[0],
                        letterSpacing: theme('letterSpacing.thighter'),
                        lineHeight: theme('fontSize.standfirst-md')[1]
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
