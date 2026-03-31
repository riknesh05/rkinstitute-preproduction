import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

export default function Header() {
    const { dark, setDark, lang, setLang, t } = useContext(AppContext)
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const navItems = ['home', 'courses', 'about', 'gallery', 'testimonials', 'contact']

    if (!t || !t.nav) return null

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800
        ${scrolled ? 'shadow-md shadow-slate-100 dark:shadow-slate-900/50' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2.5 shrink-0">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm select-none">
                            RK
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white leading-none">
                            RK <span className="text-primary-600 dark:text-primary-400">Institute</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map(item => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors capitalize"
                            >
                                {t.nav[item]}
                            </a>
                        ))}
                    </nav>

                    {/* Right Controls */}
                    <div className="flex items-center gap-2">

                        {/* Language Toggle */}
                        <button
                            onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
                            className="hidden sm:flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                            aria-label="Switch language"
                        >
                            🌐 {lang === 'en' ? 'தமிழ்' : 'EN'}
                        </button>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDark(!dark)}
                            aria-label="Toggle dark mode"
                            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-yellow-400 hover:scale-105 transition-all text-base"
                        >
                            {dark ? '☀️' : '🌙'}
                        </button>

                        {/* Call Now CTA */}
                        <a
                            href="tel:+919876543210"
                            className="hidden sm:inline-flex items-center gap-1.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md"
                        >
                            📞 {t.callNow}
                        </a>

                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-200 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-200 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                            <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-200 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                    <div className={`border-t pt-3 ${dark ? 'border-slate-700' : 'border-slate-100'}`}>
                        {navItems.map(item => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={() => setMenuOpen(false)}
                                className="block py-2.5 px-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors capitalize"
                            >
                                {t.nav[item]}
                            </a>
                        ))}
                        <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                            <button
                                onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
                                className="flex-1 text-xs font-semibold py-2 px-3 rounded-full border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300"
                            >
                                🌐 {lang === 'en' ? 'தமிழ்' : 'EN'}
                            </button>
                            <a
                                href="tel:+919876543210"
                                className="flex-1 text-center bg-accent-500 text-white text-sm font-semibold py-2 px-3 rounded-full"
                            >
                                📞 {t.callNow}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
