import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi'
import { socialLinks } from '../data/content'

const iconMap = {
  Github: FiGithub,
  Linkedin: FiLinkedin,
  Code: FiCode,
  Mail: FiMail,
}

const roles = ['Software Engineer', 'Java Backend Developer', 'MERN Stack Developer']

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        if (displayedText.length === currentRole.length) {
          window.setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1))
        if (displayedText.length === 0) {
          setIsDeleting(false)
          setCurrentRoleIndex((previous) => (previous + 1) % roles.length)
        }
      }
    }, isDeleting ? 60 : 90)

    return () => window.clearTimeout(timeout)
  }, [currentRoleIndex, displayedText, isDeleting])

  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.2),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300/80">Hello, I&apos;m</p>
          <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Aaditya Mahashabde
          </h1>
          <div className="mt-6 h-16 text-2xl font-medium text-slate-200 sm:text-3xl">
            <motion.span
              key={displayedText}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent"
            >
              {displayedText}
              <span className="ml-1 animate-pulse">|</span>
            </motion.span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Computer Science graduate building thoughtful backend systems and modern web experiences with Java, Spring Boot, React, and the MERN stack.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#projects"
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-200"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="/resume.pdf"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white"
            >
              <span className="inline-flex items-center gap-2"><FiDownload /> Download Resume</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#contact"
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-3 font-medium text-violet-200"
            >
              Contact Me
            </motion.a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <motion.a
                  key={link.label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_0_80px_rgba(34,211,238,0.16)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-8">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Availability</span>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-emerald-300">Open to work</span>
              </div>
              <div className="mt-8 grid gap-4">
                {['Java', 'Spring Boot', 'React', 'REST APIs'].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white">{item}</span>
                      <span className="text-cyan-300">0{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default HeroSection
