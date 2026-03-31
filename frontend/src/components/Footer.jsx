import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import rkLogo from '../assets/rkLogoGood.png'

export default function Footer() {
    const { t } = useContext(AppContext)
    if (!t || !t.quickLinks) return null

    return (
        <footer className="bg-white dark:bg-slate-900 pt-20 pb-10 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <a href="#home" className="flex items-center gap-2">
                            <img src={rkLogo} alt="RK Institute Logo" className="h-16 w-auto object-contain" />
                        </a>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                            {t.aboutSub} - Empowering students with the skills they need for academic and career growth since 2009.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-bold text-slate-900 dark:text-white mb-6 text-base tracking-tight">{t.quickLinks}</h5>
                        <ul className="space-y-3.5">
                            {['home', 'courses', 'about', 'gallery', 'testimonials', 'contact'].map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-all inline-block hover:translate-x-1 capitalize"
                                    >
                                        {t.nav[item]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="font-bold text-slate-900 dark:text-white mb-6 text-base tracking-tight">{t.contactTitle}</h5>
                        <div className="space-y-4">
                            <p className="text-slate-500 dark:text-slate-400 text-sm flex items-start gap-2.5">
                                <span className="text-primary-600 dark:text-primary-400">📍</span>
                                {t.addr}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2.5">
                                <span className="text-primary-600 dark:text-primary-400">📞</span>
                                {t.ph1}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2.5">
                                <span className="text-primary-600 dark:text-primary-400">✉️</span>
                                {t.email}
                            </p>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-6 text-base tracking-tight">{t.followUs}</h5>
                        <div className="flex items-center gap-3.5">
                            {[
                                { icon: 'Facebook', bg: 'bg-blue-600' },
                                { icon: 'Twitter', bg: 'bg-blue-400' },
                                { icon: 'Instagram', bg: 'bg-pink-600' },
                                { icon: 'YouTube', bg: 'bg-red-600' }
                            ].map(s => (
                                <a
                                    key={s.icon}
                                    href="#"
                                    className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center text-white shadow-sm hover:scale-110 hover:-translate-y-1 transition-all text-sm`}
                                    title={s.icon}
                                >
                                    {s.icon.charAt(0)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">
                        {t.copyright}
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-xs text-slate-400 dark:text-slate-500 hover:text-primary-600 font-medium tracking-tight">Privacy Policy</a>
                        <a href="#" className="text-xs text-slate-400 dark:text-slate-500 hover:text-primary-600 font-medium tracking-tight">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
