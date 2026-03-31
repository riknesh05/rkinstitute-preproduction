import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function LearningPaths() {
    const { t } = useContext(AppContext)
    if (!t || !t.paths) return null

    return (
        <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-14">
                    <span className="section-tag">Pathways</span>
                    <h2 className="section-title">{t.pathsTitle}</h2>
                    <p className="section-sub">{t.pathsSub}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {t.paths.map((path, i) => (
                        <a
                            key={i}
                            href="#courses"
                            className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md transition-all hover:-translate-y-1 text-center"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform`}>
                                {path.icon}
                            </div>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">
                                {path.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
