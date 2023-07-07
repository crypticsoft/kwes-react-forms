/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],

  // vitest
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
      ],
    },
  },
  // build
  build: {
    // lib: {
    //   // Could also be a dictionary or array of multiple entry points
    //   entry: [resolve(__dirname, 'src/lib/main.ts'), ],
    //   name: 'KwesReactForm',
    //   // the proper extensions will be added
    //   fileName: 'kwes-react-form',
    // },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],

      // multiple entrypoints are supported (https://rollupjs.org/configuration-options/#input)
      input: {
        loader: resolve(__dirname, 'src/lib/loader.tsx'),
        main: resolve(__dirname, 'src/main.tsx'),
        index: resolve(__dirname, 'src/index.ts'),
      },
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
        format: 'es',
        dir: 'dist',
      },
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
    ],
  },
})
