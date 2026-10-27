import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Certificates from "./components/Certificates.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem('theme')
        if (saved) return saved === 'dark'
    } catch {
        // localStorage may be unavailable — fall back to the default
    }
    return true
}

const App = () => {
    const [darkMode, setDarkMode] = useState(getInitialTheme)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
            disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        })
    }, [])

    // Single source of truth: the `dark` class always follows the state
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        try {
            localStorage.setItem('theme', darkMode ? 'dark' : 'light')
        } catch {
            // ignore
        }
        AOS.refresh()
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode((prev) => !prev)

    return (
        <div className={
            darkMode
                ? 'bg-linear-to-br from-gray-900 via-[#2e0d10] to-red-900 min-h-screen'
                : 'bg-linear-to-br from-gray-50 to-red-50 min-h-screen'
        }>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Certificates />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
