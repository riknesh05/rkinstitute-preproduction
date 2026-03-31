import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function CTA() {
    const { t } = useContext(AppContext)
    if (!t || !t.ctaTitle) return null

    return (
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-sky-700 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="text-5xl mb-5">🎯</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                    {t.ctaTitle}
                </h2>
                <p className="text-primary-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                    {t.ctaSub}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-base"
                    >
                        🎓 {t.enrollNow}
                    </a>
                    <a
                        href="tel:+919876543210"
                        className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-base"
                    >
                        📞 {t.callNow}
                    </a>
                </div>
            </div>
        </section>
    )
}
