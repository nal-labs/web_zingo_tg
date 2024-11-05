import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "@/styles/index.less";

import { init, backButton, viewport } from '@telegram-apps/sdk-react';
init();

// backButton.mount();
viewport.isMounted()
viewport.expand()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
