module.exports = {
    purge: {
        content: [
            '../cms/templates/**/*.{twig,html}',
            '../src/vue/**/*.{vue,html}',
        ],
        layers: [
            'base',
            'components',
            'utilities',
        ],
        mode: 'layers',
        options: {
            whitelist: [
                '../src/css/components/**/*.{css}',
            ],
            safelist: [
                'text-pink-600',
                'bg-pink-600',
                'text-pink-800',
                'bg-pink-800',
                'hover:text-pink-800',
                'hover:bg-pink-800',
                'text-red-600',
                'bg-red-600',
                'text-red-800',
                'bg-red-800',
                'hover:text-red-800',
                'hover:bg-red-800',
                'text-orange-500',
                'bg-orange-500',
                'text-orange-700',
                'bg-orange-700',
                'hover:text-orange-700',
                'hover:bg-orange-700',
                'text-yellow-400',
                'bg-yellow-400',
                'text-yellow-500',
                'bg-yellow-500',
                'hover:text-yellow-500',
                'hover:bg-yellow-500',
                'text-green-400',
                'bg-green-400',
                'text-green-600',
                'bg-green-600',
                'hover:text-green-600',
                'hover:bg-green-600',
                'text-teal-400',
                'bg-teal-400',
                'text-teal-600',
                'bg-teal-600',
                'hover:text-teal-600',
                'hover:bg-teal-600',
                'text-blue-600',
                'bg-blue-600',
                'text-blue-800',
                'bg-blue-800',
                'hover:text-blue-800',
                'hover:bg-blue-800',
                'text-purple-600',
                'bg-purple-600',
                'text-purple-800',
                'bg-purple-800',
                'hover:text-purple-800',
                'hover:bg-purple-800',
            ],
        }
    },
    theme: {
        typography: (theme) => ({
            default: {
                css: {
                    // maxWidth: '80ch',
                    maxWidth: theme('maxWidth.screens.lg'),
                    strong: {
                        color: theme('colors.white.100'),
                    },
                },
            },
            '3xl': {
                css: {
                    fontSize: theme('fontSize.3xl'),
                    fontWeight: theme('fontWeight.medium'),
                }
            }
        }),
        extend: {

            screens: {
                '2xl': '1536px',
            },

            colors: {

                primary: {
                    50: '#ebf5ff',
                    100: '#e1effe',
                    200: '#c3ddfd',
                    300: '#a4cafe',
                    400: '#76a9fa',
                    500: '#3f83f8',
                    600: '#1c64f2',
                    700: '#1a56db',
                    800: '#1e429f',
                    900: '#233876',
                },

                gradients: {
                    'dark-navy': 'rgba(0,6,51,1)',
                    black: 'rgba(0,2,20,1)',
                },

                transparent: 'transparent',
                current: 'currentColor',

                black: {
                    10: 'rgba(0,0,0,.1)',
                    20: 'rgba(0,0,0,.2)',
                    30: 'rgba(0,0,0,.3)',
                    40: 'rgba(0,0,0,.4)',
                    50: 'rgba(0,0,0,.5)',
                    60: 'rgba(0,0,0,.6)',
                    70: 'rgba(0,0,0,.7)',
                    80: 'rgba(0,0,0,.8)',
                    90: 'rgba(0,0,0,.9)',
                    100: 'rgba(0,0,0,1)',
                },
                white: {
                    10: 'rgba(255,255,255,.1)',
                    20: 'rgba(255,255,255,.2)',
                    30: 'rgba(255,255,255,.3)',
                    40: 'rgba(255,255,255,.4)',
                    50: 'rgba(255,255,255,.5)',
                    60: 'rgba(255,255,255,.6)',
                    70: 'rgba(255,255,255,.7)',
                    80: 'rgba(255,255,255,.8)',
                    90: 'rgba(255,255,255,.9)',
                    100: 'rgba(255,255,255,1)',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f4f5f7',
                    200: '#e5e7eb',
                    300: '#d2d6dc',
                    400: '#9fa6b2',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#252f3f',
                    900: '#161e2e',
                },
                'cool-gray': {
                    50: '#fbfdfe',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cfd8e3',
                    400: '#97a6ba',
                    500: '#64748b',
                    600: '#475569',
                    700: '#364152',
                    800: '#27303f',
                    900: '#1a202e',
                },
                
            },
            borderWidth: {
                DEFAULT: '1px',
                '0': '0',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '6': '6px',
                '8': '8px',
            },

            inset: (theme, { negative }) => ({
                auto: 'auto',
                ...theme('spacing'),
                ...negative(theme('spacing')),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                full: '100%',
                '-1/2': '-50%',
                '-1/3': '-33.333333%',
                '-2/3': '-66.666667%',
                '-1/4': '-25%',
                '-2/4': '-50%',
                '-3/4': '-75%',
                '-full': '-100%',
            }),

            minWidth: {
                '3/4': '75%'
            },

            minHeight: {
                '3/4': '75vh',
            },

            opacity: {
                20: '0.2',
            },

            translate: {
                '-1/2': '-50%',
            },

            width: {
                16: '4rem',
                200: '200%',
                300: '300%',
                400: '400%',
                500: '500%',
                600: '600%',
            },

            zIndex: {
                '-10': '-10',
                '-20': '-20',
                '1': '1',
                '2': '2',
            },
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
        inset: ['responsive'],
        scale: ['group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
        zIndex: ['responsive', 'hover', 'focus'],
    },
    corePlugins: {},
    plugins: [require('@tailwindcss/typography')],
};
