import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
      include: ['src/**/*.ts'],
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@styles': resolve(__dirname, './src/styles'),
      '@utils': resolve(__dirname, './src/utils'),
      '@types': resolve(__dirname, './src/types'),
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RPGUI',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        const formatMap: Record<string, string> = {
          es: 'esm/index.js',
          cjs: 'cjs/index.js',
          umd: 'umd/rpgui.js',
        };
        return formatMap[format] ?? `${format}/index.js`;
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/rpgui.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Copy static assets
    copyPublicDir: true,
  },

  // Static assets directory
  publicDir: 'assets',

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // Preview server (for testing production build)
  preview: {
    port: 4173,
    open: true,
  },

  // Asset handling
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.cur'],
});
