// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IdiomaProvider } from './components/IdiomaContext';
import '@fontsource/noto-serif-sc/700.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  </StrictMode>,
);