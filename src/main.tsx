import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'virtual:windi.css'
import './index.less'

import "@purge-icons/generated"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./locales/en"


i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        }
    },
    lng: "en",
    fallbackLng: "en",
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
