import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import JourneySection from './sections/JourneySection'
import ProjectsSection from './sections/ProjectsSection'
import EducationSection from './sections/EducationSection'
import CertificationsSection from './sections/CertificationsSection'
import GitHubSection from './sections/GitHubSection'
import OpenToWorkSection from './sections/OpenToWorkSection'
import ContactSection from './sections/ContactSection'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: 0.001 })
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <motion.div className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" style={{ scaleX }} />
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_40%)]" />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <JourneySection /> */}
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <GitHubSection />
        <OpenToWorkSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 sm:px-8 lg:px-10">
        <p>Designed and developed for Aaditya Mahashabde • Built with React, Tailwind CSS, Framer Motion, and React Icons.</p>
      </footer>
      {showTop && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-cyan-400/30 bg-slate-900/80 px-4 py-3 text-sm text-cyan-200 backdrop-blur"
        >
          ↑ Top
        </motion.a>
      )}
    </div>
  )
}

export default App
