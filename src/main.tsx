import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'ko',
        fallbackLng: 'ko',
        supportedLngs: ['ko', 'en', 'ja', 'zh'],
        detection: {
            // path variable 만 사용
            order: ['path'],
            // 경로의 첫 번째 부분을 언어로 감지
            lookupFromPathIndex: 0,
            // localStorage, cookie, sessionStorage 등에 언어 정보를 저장하지 않도록 함
            caches: []
        },
        resources: {
            en: {
                translation: {
                    "환영합니다": "Welcome"
                }
            },
            ja: {
                translation: {
                    "환영합니다": "こんにちは"
                }
            },
            zh: {
                translation: {
                    "환영합니다": "欢迎"
                }
            }
        }
    })

import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Outlet/>}>
        <Route index path="/:language" element={<App/>}/>
    </Route>
))

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
