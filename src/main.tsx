import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18next from "i18next";

i18next.init({
    lng: 'ko',
    resources: {
        en: {
            translation: {
                "환영합니다": "Welcome"
            }
        }
    }
})

console.log(i18next.t('환영합니다', { ns: 'en' }));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
