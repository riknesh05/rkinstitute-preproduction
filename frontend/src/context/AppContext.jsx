import { createContext, useState, useEffect } from 'react'
import { translations } from '../translations'

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [dark, setDarkState] = useState(() => {
        return localStorage.getItem('rk-dark') === 'true'
    })

    const [lang, setLangState] = useState(() => {
        return localStorage.getItem('rk-lang') || 'en'
    })

    const t = translations[lang] || translations.en

    // Apply dark class to <html> for Tailwind
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('rk-dark', dark)
    }, [dark])

    // Persist language
    useEffect(() => {
        localStorage.setItem('rk-lang', lang)
        document.documentElement.lang = lang === 'ta' ? 'ta' : 'en'
    }, [lang])

    const setDark = (val) => {
        setDarkState(val)
        localStorage.setItem('rk-dark', val)
    }

    const setLang = (val) => {
        setLangState(val)
        localStorage.setItem('rk-lang', val)
    }

    return (
        <AppContext.Provider value={{ dark, setDark, lang, setLang, t }}>
            {children}
        </AppContext.Provider>
    )
}
