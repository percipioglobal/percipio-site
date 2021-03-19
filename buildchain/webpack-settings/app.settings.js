// app.settings.js

// node modules
require('dotenv').config();
const path = require('path');

// settings
module.exports = {
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('../src'),
    },
    copyright: '©2020 Percipio.London',
    entry: {
        'app': [
            '@/js/app.ts',
            '@/js/assets/icons.js',
            '@/css/app.pcss',
            'prismjs',
            'prismjs/components/prism-markup-templating', 
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
            'prismjs/components/prism-php',
            '@/fonts/open-sans-regular.woff',
            '@/fonts/open-sans-regular.woff2',
            '@/fonts/open-sans-italic.woff',
            '@/fonts/open-sans-italic.woff2',
            '@/fonts/open-sans-600.woff',
            '@/fonts/open-sans-600.woff2',
            '@/fonts/open-sans-700.woff',
            '@/fonts/open-sans-700.woff2',
            '@/fonts/open-sans-800.woff',
            '@/fonts/open-sans-800.woff2',
            '@/fonts/source-code-pro-regular.woff',
            '@/fonts/source-code-pro-regular.woff2',
        ],
        'lazysizes-wrapper': '@/js/utils/lazysizes-wrapper.ts',
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
    name: 'percipio.london',
    paths: {
        dist: path.resolve('../cms/web/dist'),
    },
    urls: {
        criticalCss: 'https://percipio.london/',
        publicPath: () => process.env.PUBLIC_PATH || '/dist/',
    },
};