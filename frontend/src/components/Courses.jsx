import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Courses() {
    const { t } = useContext(AppContext)
    if (!t || !t.courses) return null

    const accent = [
        'border-t-blue-500', 'border-t-teal-500', 'border-t-purple-500', 'border-t-sky-500',
        'border-t-green-500', 'border-t-orange-500', 'border-t-rose-500', 'border-t-amber-500',
    ]

    return (
        <section id="courses" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-tag">Our Programs</span>
                    <h2 className="section-title">{t.coursesTitle}</h2>
                    <p className="section-sub">{t.coursesSub}</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.courses.map((c, i) => {
                        const course = t[c.key]
                        return (
                            <div
                                key={c.key}
                                className={`card border-t-4 ${accent[i]} flex flex-col`}
                            >
                                <div className="text-4xl mb-4">{c.icon}</div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                                    {course.name}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                                    {course.desc}
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-semibold hover:gap-2 transition-all"
                                >
                                    {t.viewDetails} →
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
