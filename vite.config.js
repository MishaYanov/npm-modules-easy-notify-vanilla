import { defineConfig } from 'vite'

export default defineConfig({
    build: {
      // generate manifest.json in outDir
      manifest: true,
      minify: true,
      reportCompressedSize: true,
      lib:{
        entry: 'src/main.ts',
        name: 'easy-notify-vanilla',
        formats: ["es", "cjs"],
        fileName: (format) => `easy-notify-vanilla.${format}.js`,
      },
      rollupOptions: {
        // overwrite default .html entry
        input: '/src/main.ts',
      },
    },
  })