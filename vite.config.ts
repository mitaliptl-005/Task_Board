// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Task_Board_Application/', // <-- important for GitHub Pages!
  plugins: [react()],
});
