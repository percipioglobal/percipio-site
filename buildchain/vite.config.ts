import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart'
import viteCompression from 'vite-plugin-compression'
import manifestSRI from 'vite-plugin-manifest-sri'
import {visualizer} from 'rollup-plugin-visualizer'
import eslintPlugin from 'vite-plugin-eslint'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import {ViteFaviconsPlugin} from 'vite-plugin-favicon2'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        emptyOutDir: true,
        manifest: true,
        outDir: '../cms/web/dist',
        rollupOptions: {
            input: {
                app: './src/js/app.ts',
                'lazysizes-wrapper': './src/js/utils/lazysizes-wrapper.ts',
            },
            output: {
                sourcemap: true
            },
        }
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        nodeResolve({
            moduleDirectories: [
                path.resolve('./node_modules'),
            ],
        }),
        ViteFaviconsPlugin({
            logo: './src/img/favicon-src.png',
            inject: false,
            outputPath: 'favicons',
        }),
        ViteRestart({
            reload: [
                './src/templates/**/*',
            ],
        }),
        vue(),
        viteCompression({
            filter: /\.(js|mjs|json|css|map)$/i
        }),
        manifestSRI(),
        visualizer({
            filename: '../src/web/dist/assets/stats.html',
            template: 'treemap',
            sourcemap: true,
        }),
        eslintPlugin({
            cache: false,
        }),
    ],
    publicDir: './src/public',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            vue: 'vue/dist/vue.esm-bundler.js',
        },
        preserveSymlinks: true,
    },
    server: {
        fs: {
            strict: false
        },
        host: '0.0.0.0',
        origin: 'http://localhost:3501',
        port: 3501,
        strictPort: true,
    }
}));
