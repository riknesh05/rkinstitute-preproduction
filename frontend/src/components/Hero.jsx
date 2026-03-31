import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function HeroIllustration() {
    return (
        <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto">
            {/* Background circle */}
            <circle cx="260" cy="210" r="180" fill="url(#heroGrad1)" opacity="0.15" />
            <circle cx="260" cy="210" r="130" fill="url(#heroGrad1)" opacity="0.1" />

            {/* Desk/table */}
            <rect x="80" y="290" width="360" height="18" rx="9" fill="#0d9488" opacity="0.25" />
            <rect x="100" y="308" width="12" height="60" rx="6" fill="#0d9488" opacity="0.2" />
            <rect x="408" y="308" width="12" height="60" rx="6" fill="#0d9488" opacity="0.2" />

            {/* Laptop screen */}
            <rect x="170" y="180" width="180" height="110" rx="10" fill="#1e293b" />
            <rect x="178" y="188" width="164" height="94" rx="6" fill="#0f172a" />
            <rect x="178" y="188" width="164" height="94" rx="6" fill="url(#screenGrad)" opacity="0.8" />
            {/* Code lines on screen */}
            <rect x="188" y="200" width="80" height="4" rx="2" fill="#14b8a6" opacity="0.8" />
            <rect x="188" y="212" width="60" height="4" rx="2" fill="#f97316" opacity="0.7" />
            <rect x="196" y="224" width="70" height="4" rx="2" fill="#6366f1" opacity="0.7" />
            <rect x="196" y="236" width="50" height="4" rx="2" fill="#14b8a6" opacity="0.6" />
            <rect x="188" y="248" width="90" height="4" rx="2" fill="#f97316" opacity="0.5" />
            <rect x="196" y="260" width="65" height="4" rx="2" fill="#6366f1" opacity="0.6" />
            {/* Laptop base */}
            <rect x="155" y="290" width="210" height="10" rx="5" fill="#334155" />
            <rect x="195" y="298" width="130" height="4" rx="2" fill="#475569" />

            {/* Student 1 - left */}
            <circle cx="130" cy="230" r="30" fill="url(#stu1Grad)" />
            <circle cx="130" cy="218" r="14" fill="#fbbf24" />
            <rect x="108" y="234" width="44" height="36" rx="12" fill="#0d9488" />
            {/* Book in hand */}
            <rect x="90" y="250" width="28" height="20" rx="4" fill="#f97316" />
            <rect x="93" y="254" width="22" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="93" y="259" width="16" height="2" rx="1" fill="white" opacity="0.4" />
            <rect x="93" y="264" width="19" height="2" rx="1" fill="white" opacity="0.4" />

            {/* Student 2 - right */}
            <circle cx="390" cy="230" r="30" fill="url(#stu2Grad)" />
            <circle cx="390" cy="218" r="14" fill="#c084fc" />
            <rect x="368" y="234" width="44" height="36" rx="12" fill="#7c3aed" />
            {/* Pencil */}
            <rect x="405" y="248" width="6" height="26" rx="3" transform="rotate(25 405 248)" fill="#f59e0b" />
            <polygon points="408,272 412,280 404,276" fill="#f59e0b" />

            {/* Floating badges */}
            <rect x="30" y="150" width="100" height="36" rx="12" fill="white" filter="url(#shadow)" />
            <text x="50" y="174" fontSize="18">🎓</text>
            <text x="68" y="173" fontSize="11" fill="#0d9488" fontWeight="700">Certified</text>

            <rect x="390" y="140" width="110" height="36" rx="12" fill="white" filter="url(#shadow)" />
            <text x="408" y="164" fontSize="18">⭐</text>
            <text x="428" y="163" fontSize="11" fill="#f97316" fontWeight="700">Top Rated</text>

            <rect x="50" y="120" width="90" height="36" rx="12" fill="white" filter="url(#shadow)" />
            <text x="66" y="144" fontSize="18">📚</text>
            <text x="85" y="143" fontSize="11" fill="#6366f1" fontWeight="700">8 Courses</text>

            <defs>
                <linearGradient id="heroGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e3a5f" />
                </linearGradient>
                <linearGradient id="stu1Grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ccfbf1" />
                    <stop offset="100%" stopColor="#99f6e4" />
                </linearGradient>
                <linearGradient id="stu2Grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ede9fe" />
                    <stop offset="100%" stopColor="#ddd6fe" />
                </linearGradient>
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0000001a" />
                </filter>
            </defs>
        </svg>
    )
}

export default function Hero() {
    const { t } = useContext(AppContext)
    if (!t || !t.heroHeadline) return null

    return (
        <section
            id="home"
            className="relative pt-16 min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-slate-50 via-primary-50 to-sky-50
        dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
        >
            {/* Decorative blobs */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-primary-200 dark:bg-primary-900/30 rounded-full blur-3xl opacity-50 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-200 dark:bg-sky-900/30 rounded-full blur-3xl opacity-40 translate-x-1/3 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="animate-fade-in">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 bg-accent-100 dark:bg-accent-700/20 text-accent-600 dark:text-accent-400 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
                            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                            Admissions Open 2025–26
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-5">
                            {t.heroHeadline}
                        </h1>

                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-md">
                            {t.heroSub}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            <a href="#courses" className="btn-primary">
                                📚 {t.browseCourses}
                            </a>
                            <a href="tel:+919876543210" className="btn-outline">
                                📞 {t.callUs}
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { num: t.stat1Num, lbl: t.stat1Lbl, emoji: '🎓' },
                                { num: t.stat2Num, lbl: t.stat2Lbl, emoji: '🏆' },
                                { num: t.stat3Num, lbl: t.stat3Lbl, emoji: '📅' },
                            ].map((s, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                                    <div className="text-2xl mb-1">{s.emoji}</div>
                                    <div className="text-2xl font-extrabold text-primary-600 dark:text-primary-400 leading-none">{s.num}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{s.lbl}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Illustration */}
                    <div className="hidden lg:flex items-center justify-center animate-slide-left">
                        <HeroIllustration />
                    </div>
                </div>
            </div>
        </section>
    )
}
