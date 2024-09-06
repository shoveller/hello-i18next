import './App.css'
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const useTransationFromUrl = () => {
    const { t } = useTranslation()
    const { language } = useParams<{ language: string }>()

    return (text: string) => t(text, {lng: language})
}

function App() {
    const navigate = useNavigate()
    const t = useTransationFromUrl()
    const {i18n} = useTranslation()

    return (
        <div>
            <div>
                <button onClick={async () => {
                    await i18n.changeLanguage('ko');
                    navigate('/ko');
                }}>한국어
                </button>
                <button onClick={async () => {
                    await i18n.changeLanguage('en');
                    navigate('/en');
                }}>영어
                </button>
                <button onClick={async () => {
                    await i18n.changeLanguage('ja');
                    navigate('/ja');
                }}>일본어
                </button>
                <button onClick={async () => {
                    await i18n.changeLanguage('zh');
                    navigate('/zh');
                }}>중국어
                </button>
            </div>
            <>{t('환영합니다')}</>
            <>{t('환영합니다2')}</>
        </div>
    )
}

export default App
