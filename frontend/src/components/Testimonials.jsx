import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

export default function Testimonials() {
    const { t } = useContext(AppContext)
    const [current, setCurrent] = useState(0)
    const [auto, setAuto] = useState(true)

    const list = t?.testimonials || []
    const len = list.length

    useEffect(() => {
        if (!auto || len === 0) return
        const timer = setInterval(() => setCurrent(c => (c + 1) % len), 5000)
        return () => clearInterval(timer)
    }, [auto, len])

    if (!t || !t.testimonialsTitle || len === 0) return null

    const go = (idx) => {
        setCurrent((idx + len) % len)
        setAuto(false)
        setTimeout(() => setAuto(true), 8000)
    }

    return (
        <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-14">
                    <span className="section-tag">Reviews</span>
                    <h2 className="section-title">{t.testimonialsTitle}</h2>
                    <p className="section-sub">{t.testimonialsSub}</p>
                </div>

                {/* Slider */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {list.map((item, i) => (
                                <div key={i} className="w-full shrink-0 px-2">
                                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 sm:p-10 text-center">
                                        {/* Stars */}
                                        <div className="flex justify-center gap-1 mb-5">
                                            {Array.from({ length: item.stars }).map((_, s) => (
                                                <span key={s} className="text-yellow-400 text-xl">★</span>
                                            ))}
                                        </div>
                                        {/* Quote */}
                                        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed italic mb-7">
                                            "{item.text}"
                                        </p>
                                        {/* Author */}
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div className="text-left">
                                                <div className="font-bold text-slate-900 dark:text-white text-base">{item.name}</div>
                                                <div className="text-sm text-slate-500 dark:text-slate-400">{item.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={() => go(current - 1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 transition-all text-lg"
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => go(current + 1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 transition-all text-lg"
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-7">
                    {list.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => go(i)}
                            className={`rounded-full transition-all duration-300 ${i === current
                                    ? 'w-6 h-2.5 bg-primary-600 dark:bg-primary-400'
                                    : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600'
                                }`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
