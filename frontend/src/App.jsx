import { useContext } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import LearningPaths from './components/LearningPaths'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'

export default function App() {
    const { dark } = useContext(AppContext)

    // dark class is handled by AppContext on document.documentElement
    return (
        <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
            <Header />
            <main>
                <Hero />
                <Courses />
                <About />
                <WhyChoose />
                <LearningPaths />
                <Testimonials />
                <Gallery />
                <CTA />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
