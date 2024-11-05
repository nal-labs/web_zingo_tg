import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "@/styles/index.less";

// import { init, backButton } from '@telegram-apps/gitsdk-react';
// init();

// backButton.mount();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
