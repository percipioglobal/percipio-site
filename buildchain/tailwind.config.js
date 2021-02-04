module.exports = {
    purge: {
        content: [
            '../cms/templates/**/*.{twig,html,svg}',
            '../src/vue/**/*.{vue,html}',
        ],
        layers: [
            'base',
            'components',
            'utilities',
        ],
        mode: 'layers',
        options: {
            safelist: [
                /pink-600$/,
                /pink-800$/,
                /yellow-300$/,
                /red-500$/,
                /red-600$/,
                /red-800$/,
                /orange-500$/,
                /orange-700$/,
                /yellow-400$/,
                /yellow-500$/,
                /green-400$/,
                /green-600$/,
                /teal-400$/,
                /teal-600$/,
                /blue-600$/,
                /blue-800$/,
                /purple-600$/,
                /purple-800$/,
            ],
        }
    },
    theme: {

        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                '2xl': '0',
            },
        },

        extend: {

            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: '80ch',
                        strong: {
                            color: theme('colors.white.100'),
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
                '3xl': {
                    css: {
                        fontSize: theme('fontSize.3xl'),
                        fontWeight: theme('fontWeight.medium'),
                    }
                }
            }),

            screens: {
                '2xl': '1536px',
            },

            fontFamily: {
                primary: [
                    'Open Sans', 
                    'ui-sans-serif', 
                    'system-ui', 
                    '-apple-system', 
                    'Roboto', 
                    'Helvetica Neue', 
                    'Arial', 
                    'Noto Sans', 
                    'sans-serif',
                ],
                mono: [
                    'Source Code Pro', 
                    'ui-monospace', 
                    'SFMono-Regular', 
                    'Menlo', 
                    'Monaco', 
                    'Consolas', 
                    'Liberation Mono', 
                    'Courier New', 
                    'monospace'
                ]
            },

            colors: {

                transparent: 'transparent',
                current: 'currentColor',

                black: {
                    '10': 'rgba(0,0,0,.1)',
                    '20': 'rgba(0,0,0,.2)',
                    '30': 'rgba(0,0,0,.3)',
                    '40': 'rgba(0,0,0,.4)',
                    '50': 'rgba(0,0,0,.5)',
                    '60': 'rgba(0,0,0,.6)',
                    '70': 'rgba(0,0,0,.7)',
                    '80': 'rgba(0,0,0,.8)',
                    '90': 'rgba(0,0,0,.9)',
                    '100': 'rgba(0,0,0,1)',
                },

                white: {
                    '10': 'rgba(255,255,255,.1)',
                    '20': 'rgba(255,255,255,.2)',
                    '30': 'rgba(255,255,255,.3)',
                    '40': 'rgba(255,255,255,.4)',
                    '50': 'rgba(255,255,255,.5)',
                    '60': 'rgba(255,255,255,.6)',
                    '70': 'rgba(255,255,255,.7)',
                    '80': 'rgba(255,255,255,.8)',
                    '90': 'rgba(255,255,255,.9)',
                    '100': 'rgba(255,255,255,1)',
                },

                gray: {
                    '50': '#f9fafb',
                    '100': '#f4f5f7',
                    '200': '#e5e7eb',
                    '300': '#d2d6dc',
                    '400': '#9fa6b2',
                    '500': '#6b7280',
                    '600': '#4b5563',
                    '700': '#374151',
                    '800': '#252f3f',
                    '900': '#161e2e',
                },

                'cool-gray': {
                    '50': '#fbfdfe',
                    '100': '#f1f5f9',
                    '200': '#e2e8f0',
                    '300': '#cfd8e3',
                    '400': '#97a6ba',
                    '500': '#64748b',
                    '600': '#475569',
                    '700': '#364152',
                    '800': '#27303f',
                    '900': '#1a202e',
                },

                red: {
                    '50': '#fdf2f2',
                    '100': '#fde8e8',
                    '200': '#fbd5d5',
                    '300': '#f8b4b4',
                    '400': '#f98080',
                    '500': '#f05252',
                    '600': '#e02424',
                    '700': '#c81e1e',
                    '800': '#9b1c1c',
                    '900': '#771d1d',
                },

                orange: {
                    '50': '#fff8f1',
                    '100': '#feecdc',
                    '200': '#fcd9bd',
                    '300': '#fdba8c',
                    '400': '#ff8a4c',
                    '500': '#ff5a1f',
                    '600': '#d03801',
                    '700': '#b43403',
                    '800': '#8a2c0d',
                    '900': '#771d1d',
                },

                yellow: {
                    '50': '#fdfdea',
                    '100': '#fdf6b2',
                    '200': '#fce96a',
                    '300': '#faca15',
                    '400': '#e3a008',
                    '500': '#c27803',
                    '600': '#9f580a',
                    '700': '#8e4b10',
                    '800': '#723b13',
                    '900': '#633112',
                },

                green: {
                    '50': '#f3faf7',
                    '100': '#def7ec',
                    '200': '#bcf0da',
                    '300': '#84e1bc',
                    '400': '#31c48d',
                    '500': '#0e9f6e',
                    '600': '#057a55',
                    '700': '#046c4e',
                    '800': '#03543f',
                    '900': '#014737',
                },

                teal: {
                    '50': '#edfafa',
                    '100': '#d5f5f6',
                    '200': '#afecef',
                    '300': '#7edce2',
                    '400': '#16bdca',
                    '500': '#0694a2',
                    '600': '#047481',
                    '700': '#036672',
                    '800': '#05505c',
                    '900': '#014451',
                },

                blue: {
                    '50': '#ebf5ff',
                    '100': '#e1effe',
                    '200': '#c3ddfd',
                    '300': '#a4cafe',
                    '400': '#76a9fa',
                    '500': '#3f83f8',
                    '600': '#1c64f2',
                    '700': '#1a56db',
                    '800': '#1e429f',
                    '900': '#233876',
                },

                indigo: {
                    '50': '#f0f5ff',
                    '100': '#e5edff',
                    '200': '#cddbfe',
                    '300': '#b4c6fc',
                    '400': '#8da2fb',
                    '500': '#6875f5',
                    '600': '#5850ec',
                    '700': '#5145cd',
                    '800': '#42389d',
                    '900': '#362f78',
                },

                purple: {
                    '50': '#f6f5ff',
                    '100': '#edebfe',
                    '200': '#dcd7fe',
                    '300': '#cabffd',
                    '400': '#ac94fa',
                    '500': '#9061f9',
                    '600': '#7e3af2',
                    '700': '#6c2bd9',
                    '800': '#5521b5',
                    '900': '#4a1d96',
                },

                pink: {
                    '50': '#fdf2f8',
                    '100': '#fce8f3',
                    '200': '#fad1e8',
                    '300': '#f8b4d9',
                    '400': '#f17eb8',
                    '500': '#e74694',
                    '600': '#d61f69',
                    '700': '#bf125d',
                    '800': '#99154b',
                    '900': '#751a3d',
                },
            },

            inset: (theme, { negative }) => ({
                auto: 'auto',
                ...theme('spacing'),
                ...negative(theme('spacing')),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '3/4': '75%',
                full: '100%',
                '-1/2': '-50%',
                '-1/3': '-33.333333%',
                '-2/3': '-66.666667%',
                '-1/4': '-25%',
                '-3/4': '-75%',
                '-full': '-100%',
            }),

            maxWidth: {
                '1/2': '50%',
                '1/4': '25%',
                '1/3': '33.33%',
            },

            minWidth: {
                '3/4': '75%'
            },

            minHeight: (theme) => ({
                ...theme('spacing'),
                '2/3': '66.666vh',
                '3/4': '75vh',
            }),

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
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
        zIndex: ['responsive'],
    },

    corePlugins: {},
    plugins: [require('@tailwindcss/typography')],
};
