import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

export default function Contact() {
    const { t } = useContext(AppContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        query: '',
    })
    const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name || !formData.phone || !formData.course) return

        setStatus('sending')
        try {
            await axios.post('/api/contact', formData)
            setStatus('success')
            setFormData({ name: '', email: '', phone: '', course: '', query: '' })
            setTimeout(() => setStatus(null), 6000)
        } catch (err) {
            console.error(err)
            setStatus('error')
            setTimeout(() => setStatus(null), 6000)
        }
    }

    if (!t || !t.contactTitle) return null

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="section-tag">Contact</span>
                    <h2 className="section-title">{t.contactTitle}</h2>
                    <p className="section-sub">{t.contactSub}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Info Side */}
                    <div className="space-y-6">
                        <div className="card flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-2xl shrink-0">📍</div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Address</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t.addr}</p>
                            </div>
                        </div>

                        <div className="card flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center text-2xl shrink-0">📞</div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{t.ph1}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{t.ph2}</p>
                            </div>
                        </div>

                        <div className="card flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center text-2xl shrink-0">✉️</div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{t.email}</p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-2xl overflow-hidden h-64 opacity-80 border border-slate-200 dark:border-slate-700">
                            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 text-sm font-medium">
                                Google Map Embed Placeholder
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 sm:p-10"
                    >
                        <div className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    {t.yourName} <span className="text-red-400">*</span>
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    {t.yourEmail}
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    {t.yourPhone} <span className="text-red-400">*</span>
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="+91 XXXXX XXXXX"
                                    required
                                />
                            </div>

                            {/* Select Course */}
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    {t.selectCourse} <span className="text-red-400">*</span>
                                </label>
                                <select
                                    id="contact-course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                >
                                    <option value="" disabled>— {t.selectCourse} —</option>
                                    {t.courseOptions.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Query */}
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    {t.yourQuery}
                                </label>
                                <textarea
                                    id="contact-query"
                                    rows="4"
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                    className="input-field resize-none"
                                    placeholder="I am interested in..."
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                id="contact-submit"
                                disabled={status === 'sending'}
                                className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center gap-2 justify-center">
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                        {t.sending}
                                    </span>
                                ) : t.sendMessage}
                            </button>

                            {/* Feedback */}
                            {status === 'success' && (
                                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium text-center animate-fade-in">
                                    {t.formSuccess}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium text-center animate-fade-in">
                                    {t.formError}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
