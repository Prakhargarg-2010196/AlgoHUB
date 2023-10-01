import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
// To get the resolution from the node path module for the file system
import path from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
    plugins: [react(), eslint()],
    // Used to resolve alias in absolute paths in vite
    resolve: {
        alias: [
            // write all the aliases here in the format below which you want vite to resolve for you
            /*
        I used here the path library from node for getting the absolute path  
      */
            { find: '~', replacement: path.resolve(__dirname, './src') },
            {
                find: 'components',
                replacement: path.resolve(__dirname, './src/components'),
            },
            {
                find: 'views',
                replacement: path.resolve(__dirname, './src/views'),
            },
        ],
    },
    css: {
        modules: {
            // Use the camelCase convention in css modules
            localsConvention: 'camelCase',
        },
    },
});
