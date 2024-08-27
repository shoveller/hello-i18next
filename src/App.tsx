import './App.css'
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { FC } from "react";

const useTransationFromUrl = () => {
    const { t } = useTranslation()
    const { language } = useParams<{ language: string }>()

    return (text: string) => t(text, {lng: language})
}

const T: FC<{ children: string }> = ({ children }) => {
    const t = useTransationFromUrl()

    return <>{t(children)}</>
}

function App() {
  const navigate = useNavigate()
  const t = useTransationFromUrl()

  return (
    <div>
      <div>
        <button onClick={() => navigate('/ko')}>한국어</button>
        <button onClick={() => navigate('/en')}>영어</button>
        <button onClick={() => navigate('/ja')}>일본어</button>
        <button onClick={() => navigate('/zh')}>중국어</button>
      </div>
      <>{t('환영합니다')}</>
      <T>환영합니다</T>
    </div>
  )
}

export default App
