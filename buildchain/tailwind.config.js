module.exports = {
    content: [
        '../cms/templates/**/*.{twig,html,svg}',
        '../src/vue/**/*.{vue,html}',
    ],

    safelist: [
        'aspect-video',
        'aspect-1/1',
        'aspect-1/2',
        'aspect-3/1',
        'aspect-4/3',
        'aspect-3/4',
        'aspect-7/5',
        'aspect-8/5',
        'aspect-16/9',
        'aspect-21/9',
        'bg-gray-600',
        'bg-gray-800',
        'bg-gray-900',
        'duration-1000',
        'sm:col-span-1',
        'sm:col-span-2',
        'sm:col-span-3',
        'sm:col-span-4',
        'sm:col-span-5',
        'sm:col-span-6',
        'from-blue-600',
        'to-pink-600',
        '-translate-x-5',
        'translate-x-5',
        'translate-y-10',
        'md:-translate-x-10',
        'md:translate-x-10',
        'md:translate-y-20',
        {
            pattern: /bg-(blue|green|orange|pink|purple|red|teal|yellow)-(500|600|700)/,
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
                '1/1': '1 / 1',
                '1/2': '1 / 2',
                '3/1': '3 / 1',
                '3/2': '3 / 2',
                '3/4': '3 / 4',
                '4/3': '4 / 3',
                '4/5': '4 / 5',
                '4/5': '7 / 5',
                '7/5': '7 / 5',
                '8/5': '8 / 5',
                '9/16': '9 / 16',
                '16/9': '16 / 9',
                '21/9': '21 / 9',
            },

            borderRadius: {
                '4xl': '30px',
            },
            colors: {
                'blue': {
                    50: '#F2F7FC',
                    100: '#C7DAFA',
                    200: '#9CBCF8',
                    300: '#729FF6',
                    400: '#4781F4',
                    500: '#1C64F2',
                    600: '#1A58D2',
                    700: '#194CB2',
                    800: '#143E89',
                    900: '#0F3060',
                },
                'green': {
                    50: '#F0FCF4',
                    100: '#C1E2D4',
                    200: '#92C8B4',
                    300: '#63AE95',
                    400: '#349475',
                    500: '#057A55',
                    600: '#086245',
                    700: '#0A4934',
                    800: '#0C3A2B',
                    900: '#0E2B21',
                },
                'gray': {
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                    900: '#0F172A',
                },
                'orange': {
                    50: '#FFEDE9',
                    100: '#FFD0C1',
                    200: '#FFB298',
                    300: '#FF9570',
                    400: '#FF7747',
                    500: '#FF5A1F',
                    600: '#DD4816',
                    700: '#BA360D',
                    800: '#932A0B',
                    900: '#6B1E09',
                },
                'pink': {
                    50: '#FFEEF8',
                    100: '#FAD4E6',
                    200: '#F5BAD4',
                    300: '#EB87B1',
                    400: '#E0538D',
                    500: '#D61F69',
                    600: '#BA1A5D',
                    700: '#9E1452',
                    800: '#820F46',
                    900: '#660A3A',
                },
                'purple': {
                    50: '#EDEDF7',
                    100: '#D9CCF6',
                    200: '#C2A7F5',
                    300: '#AC83F4',
                    400: '#955EF3',
                    500: '#7E3AF2',
                    600: '#6A2ECE',
                    700: '#5521A9',
                    800: '#3D1A84',
                    900: '#241360',
                },
                'red': {
                    50: '#F9EFEF',
                    100: '#F4C6C6',
                    200: '#EF9E9E',
                    300: '#EA7575',
                    400: '#E54D4D',
                    500: '#E02424',
                    600: '#BF2222',
                    700: '#9E2020',
                    800: '#851A1A',
                    900: '#6B1313',
                },
                'teal': {
                    50: '#EBF5F7',
                    100: '#BDE2E6',
                    200: '#8FCED5',
                    300: '#62BBC4',
                    400: '#34A7B3',
                    500: '#0694A2',
                    600: '#087C85',
                    700: '#096468',
                    800: '#074D4F',
                    900: '#043535',
                },
                'yellow': {
                    50: '#FCFBF0',
                    100: '#FFF4BB',
                    200: '#FFEA90',
                    300: '#FFE164',
                    400: '#FBD43F',
                    500: '#FACA15',
                    600: '#F5BA10',
                    700: '#F0A90B',
                    800: '#EA9905',
                    900: '#E58800',
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
                'tightest': '-.03em',
                'tighter': '-.04em',
            },

            transitionTimingFunction: {
                'slide': 'cubic-bezier(0.99, 0.3, 0.22, 0.85)'
            },

            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.500'),
                        fontFamily: theme('fontFamily.primary').map(font => `'${font}'`).join(', '),
                        maxWidth: '80ch',
                        ul: {
                            '& > li': {
                                '&::marker': {
                                    'color': theme('colors.gray.500')
                                }
                            }
                        }
                    }
                },
                'standfirst': {
                    css: {
                        color: theme('colors.gray.500'),
                        fontFamily: theme('fontFamily.primary').map(font => `'${font}'`).join(', '),
                        fontSize: theme('fontSize.standfirst')[0],
                        letterSpacing: theme('letterSpacing.tighter'),
                        lineHeight: theme('fontSize.standfirst')[1]
                    }
                },
                'standfirst-md': {
                    css: {
                        color: theme('colors.gray.500'),
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
