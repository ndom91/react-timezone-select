import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ['index.html', 'src/App.tsx', 'src/index.tsx', 'src/Timezone.tsx'],
    },
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  server: {
    fs: {
      allow: ['..'],
      strict: false,
    },
  },
  plugins: [react()],
});
