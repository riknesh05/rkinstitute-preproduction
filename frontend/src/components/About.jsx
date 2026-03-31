import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function About() {
    const { t } = useContext(AppContext)
    if (!t || !t.aboutTitle) return null

    const features = [
        { icon: '👨‍🏫', label: t.aboutF1 },
        { icon: '📜', label: t.aboutF2 },
        { icon: '🕐', label: t.aboutF3 },
        { icon: '💼', label: t.aboutF4 },
    ]

    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual side */}
                    <div className="relative">
                        {/* Main card */}
                        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 p-10 h-80 flex items-center justify-center shadow-xl">
                            <div className="text-center text-white">
                                <div className="text-7xl mb-4">🏛️</div>
                                <div className="text-3xl font-extrabold">RK Institute</div>
                                <div className="text-primary-200 mt-2 text-sm font-medium">Est. 2009 · Chennai</div>
                            </div>
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 border border-slate-100 dark:border-slate-700">
                            <div className="text-3xl mb-1">🎓</div>
                            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">16+</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Years of Excellence</div>
                        </div>
                        {/* Second badge */}
                        <div className="absolute -top-5 -left-5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 border border-slate-100 dark:border-slate-700">
                            <div className="text-3xl mb-1">👨‍🎓</div>
                            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">500+</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Happy Students</div>
                        </div>
                    </div>

                    {/* Content side */}
                    <div>
                        <span className="section-tag">About Us</span>
                        <h2 className="section-title mb-2">{t.aboutTitle}</h2>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4 text-base">{t.aboutSub}</p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-base">
                            {t.aboutText}
                        </p>

                        {/* Feature tags */}
                        <div className="grid grid-cols-2 gap-3">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl p-3.5 border border-slate-100 dark:border-slate-700"
                                >
                                    <span className="text-2xl">{f.icon}</span>
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{f.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
