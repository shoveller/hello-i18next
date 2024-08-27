import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next).init({
    debug: true,
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
    backend: {
        // 리소스 파일의 경로를 지정
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
})
