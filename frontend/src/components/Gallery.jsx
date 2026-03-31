import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Gallery() {
    const { t } = useContext(AppContext)
    if (!t || !t.galleryItems) return null

    return (
        <section id="gallery" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-14">
                    <span className="section-tag">Gallery</span>
                    <h2 className="section-title">{t.galleryTitle}</h2>
                    <p className="section-sub">{t.gallerySub}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                    {t.galleryItems.map((item, i) => (
                        <div
                            key={i}
                            className={`relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center group cursor-pointer shadow-sm hover:shadow-lg transition-all hover:-translate-y-1`}
                        >
                            <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                {item.emoji}
                            </span>
                            <span className="text-white text-sm font-semibold text-center px-4 drop-shadow">
                                {item.label}
                            </span>
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
