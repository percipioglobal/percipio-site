module.exports = {
    content: [
        '../cms/templates/**/*.{twig,html,svg}',
        '../src/vue/**/*.{vue,html}',
    ],
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
        /black-100$/,
        /col-span-1$/,
        /col-span-2$/,
        /col-span-3$/,
        /col-span-4$/,
        /col-span-5$/,
        /col-span-6$/,
        /w-1\/4$/,
        /w-1\/3$/,
        /w-1\/2$/,
        /w-2\/3$/,
        /w-3\/4$/,
        /grid-article$/,
        /grid-article-sm$/,
        /grid-article-large$/,
        /grid-article-large-sm$/,
        /pl-2$/,
    ],

    theme: {

        extend: {

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
                '3xl': {
                    css: {
                        fontSize: theme('fontSize.3xl'),
                        fontWeight: theme('fontWeight.medium'),
                    }
                },
                'grid': {
                    css: {
                        p: {
                            fontSize: theme('fontSize.xl'),
                        },
                        h3: {
                            fontSize: theme('fontSize.4xl'),
                        },
                    }
                },
                'grid-sm': {
                    css: {
                        p: {
                            fontSize: theme('fontSize.lg'),
                        },
                        h3: {
                            fontSize: theme('fontSize.xl'),
                        },
                    }
                },
                'grid-article': {
                    css: {
                        p: {
                            fontSize: theme('fontSize.2xl'),
                        },
                        h3: {
                            fontSize: theme('fontSize.6xl'),
                        },
                    }
                },
                'grid-article-sm': {
                    css: {
                        p: {
                            fontSize: theme('fontSize.lg'),
                        },
                        h3: {
                            fontSize: theme('fontSize.3xl'),
                        },
                    }
                },
                'grid-article-large': {
                    css: {
                        p: {
                            fontWeight: theme('fontWeight.bold'),
                            fontSize: theme('fontSize.5xl'),
                            lineHeight: '1.25',
                        },
                    }
                },
                'grid-article-large-sm': {
                    css: {
                        p: {
                            fontWeight: theme('fontWeight.bold'),
                            fontSize: theme('fontSize.2xl'),
                            lineHeight: '1.25',
                        },
                    }
                },
                'handbook': {
                    css: {
                        'ol > li::before': {
                            content: 'counter(list-counter, ' + theme('listStyleType.alpha') + ') "."',
                        },
                        'ol > li > ol > li::before': {
                            content: 'counter(list-counter, ' + theme('listStyleType.roman') + ') "."',
                        }
                    }
                },
            }),

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
                ],
                prose: [
                    'sans-serif',
                    'Noto Sans',
                    'Arial',
                    'Helvetica Neue',
                    'Roboto',
                    '-apple-system',
                    'system-ui',
                    'ui-sans-serif',
                    'Open Sans',
                ]
            },

            animation: {
                glitch: 'glitch .2s cubic-bezier(.25, .46, .45, .94) both infinite, opacity 4s infinite',
                'glitch-reverse': 'glitch .2s cubic-bezier(.25, .46, .45, .94) reverse both infinite, opacity 4s infinite',
            },

            keyframes: {
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-6px, 6px)' }, 
                    '40%': { transform: 'translate(-6px, -6px)' }, 
                    '60%': { transform: 'translate(6px, 6px)' }, 
                    '80%': { transform: 'translate(6px, -6px)' },
                    '100%': { transform: 'translate(0)' }, 
                },
                opacity: {
                    '0%': { opacity: '0' },
                    '40%': { opacity: '0' }, 
                    '50%': { opacity: '1' }, 
                }
            },

            lineHeight: {
                'number': '0.75',
            },

            listStyleType: {
                alpha: 'lower-alpha',
                roman: 'upper-roman',
            },

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
                '90vh': '90vh',
            }),

            height: {
                '90vh': '90vh',
                '128': '32rem',
            },

            transitionTimingFunction: {
                'blog': 'cubic-bezier(.58,.3,.005,1) 0s 1',
            },

            translate: {
                '-full-1/2': '-150%',
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

            fontSize: {
                'number': '37.5rem',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
