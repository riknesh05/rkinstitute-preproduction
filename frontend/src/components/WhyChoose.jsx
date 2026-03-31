import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const whyData = [
    { bg: 'bg-blue-50 dark:bg-blue-900/20', icon: '👨‍🏫', iconBg: 'bg-blue-100 dark:bg-blue-800', key: 'w1' },
    { bg: 'bg-green-50 dark:bg-green-900/20', icon: '💰', iconBg: 'bg-green-100 dark:bg-green-800', key: 'w2' },
    { bg: 'bg-orange-50 dark:bg-orange-900/20', icon: '⏰', iconBg: 'bg-orange-100 dark:bg-orange-800', key: 'w3' },
    { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: '📜', iconBg: 'bg-purple-100 dark:bg-purple-800', key: 'w4' },
]

export default function WhyChoose() {
    const { t } = useContext(AppContext)
    if (!t || !t.whyTitle) return null

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="section-tag">Why Us</span>
                    <h2 className="section-title">{t.whyTitle}</h2>
                    <p className="section-sub">{t.whySub}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {whyData.map((w, i) => {
                        const item = t[w.key]
                        return (
                            <div
                                key={i}
                                className={`${w.bg} rounded-2xl p-7 text-center border border-transparent hover:border-primary-200 dark:hover:border-primary-700 transition-all hover:-translate-y-1`}
                            >
                                <div className={`${w.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5`}>
                                    {w.icon}
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
