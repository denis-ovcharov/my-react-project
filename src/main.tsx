import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./global.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
