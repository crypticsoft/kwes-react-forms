/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    '__APP_VERSION__': JSON.stringify(pkg.version),
  },
  plugins: [
    react(),
    isProduction && (await import('@rollup/plugin-terser')).default(),
  ],

  // vitest
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    // include: './src/components/___tests___/**/*.test.tsx',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
      ],
    },
    // transformMode: {
    //   web: [/\.[jt]sx$/],
    // },
  },

  // build
  build: {
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react',
        "react/jsx-runtime",
        'react-dom',
      ],
      // multiple entrypoints are supported (https://rollupjs.org/configuration-options/#input)

      input : {
        form: path.resolve(__dirname, 'src/components/Form.tsx'),
        loader: path.resolve(__dirname, 'src/lib/loader.tsx'),
      },

      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        format: 'esm',
        dir: 'dist',
        exports: 'named',
        entryFileNames: 'entry-[name].js'
      },
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
})
