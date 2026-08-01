import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navItems } from '../data/content'

const Navbar = () => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.45 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.3em] text-white">
          AADITYA
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${active === item.href.replace('#', '') ? 'bg-cyan-400/20 text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.2)]' : 'text-slate-300 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.03 }}
          href="#contact"
          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200"
        >
          Let’s Talk
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar
