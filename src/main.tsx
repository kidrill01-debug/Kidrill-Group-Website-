import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrandProvider } from './context/BrandContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrandProvider>
    <App />
  </BrandProvider>
);
