import './App.css'
import {useTranslation} from "react-i18next";

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <div>
        <button onClick={() => i18n.changeLanguage('ko')}>한국어</button>
        <button onClick={() => i18n.changeLanguage('en')}>영어</button>
      </div>
      <>{t("환영합니다")}</>
    </div>
  )
}

export default App
