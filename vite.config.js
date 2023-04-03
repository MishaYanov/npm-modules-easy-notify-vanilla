import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
      // generate manifest.json in outDir
      manifest: true,
      minify: true,
      reportCompressedSize: true,
      lib:{
        entry: resolve(__dirname, 'lib/index.js'),
        name: 'easy-notify-vanilla',
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        // overwrite default .html entry
        input: '/src/index.ts',
      },
      sourcemap: true,
      emptyOutDir: true,
    },
    plugins: [dts()],
  })