import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        cssInjectedByJsPlugin(),
    ],
    build: {
        lib: {
            entry: 'src/main.jsx',
            name: 'Chatbot',
            formats: ['iife'],
            fileName: () => 'chatbot.js'
        },
        rollupOptions: {
            output: {
                entryFileNames: 'chatbot.js',
                assetFileNames: 'chatbot.[ext]',
            },
        },
        cssCodeSplit: false,
        emptyOutDir: true,
    },
    define: {
        'process.env.NODE_ENV': '"production"'
    }
});
