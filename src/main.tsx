import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.ts'

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
        <Suspense fallback="로딩중">
            <RouterProvider router={router}/>
        </Suspense>
    </StrictMode>,
)
