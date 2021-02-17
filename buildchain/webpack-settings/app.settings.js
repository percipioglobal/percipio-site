// app.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    },
    copyright: '©2020 Percipio.London',
    entry: {
        'app': [
            'prismjs',
            'prismjs/components/prism-bash', 
            'prismjs/components/prism-css', 
            'prismjs/components/prism-docker', 
            'prismjs/components/prism-git', 
            'prismjs/components/prism-graphql', 
            'prismjs/components/prism-javascript', 
            'prismjs/components/prism-json', 
            'prismjs/components/prism-markdown', 
            'prismjs/components/prism-markup', 
            'prismjs/components/prism-sql', 
            'prismjs/components/prism-twig', 
            'prismjs/components/prism-typescript', 
            'prismjs/components/prism-yaml',
            //'prismjs/components/prism-php', 
            'prismjs/plugins/line-numbers/prism-line-numbers',
            '../src/fonts/open-sans-regular.woff',
            '../src/fonts/open-sans-regular.woff2',
            '../src/fonts/open-sans-italic.woff',
            '../src/fonts/open-sans-italic.woff2',
            '../src/fonts/open-sans-600.woff',
            '../src/fonts/open-sans-600.woff2',
            '../src/fonts/open-sans-700.woff',
            '../src/fonts/open-sans-700.woff2',
            '../src/fonts/open-sans-800.woff',
            '../src/fonts/open-sans-800.woff2',
            '../src/fonts/source-code-pro-regular.woff',
            '../src/fonts/source-code-pro-regular.woff2',
            '../src/js/app.ts',
            '../src/js/assets/icons.js',
            '../src/css/tailwind-base.pcss',
            '../src/css/tailwind-components.pcss',
            '../src/css/tailwind-utilities.pcss',
            '../src/css/app-components.pcss',
            '../src/css/app-utilities.pcss',
            '../src/css/vendor.pcss',
        ],
        'lazysizes-wrapper': '../src/js/utils/lazysizes-wrapper.ts',
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
    name: 'percipio.london',
    paths: {
        dist: '../../cms/web/dist/',
    },
    urls: {
        criticalCss: 'https://sandbox.percipio.london/',
        publicPath: () => process.env.PUBLIC_PATH || '/dist/',
    },
};