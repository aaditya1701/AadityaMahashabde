import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-10 lg:p-14">
        <SectionHeading
          eyebrow="About Me"
          title="A strong foundation for modern software engineering"
          description="I am a Computer Science Engineering graduate who is passionate about backend development, problem solving, and building reliable digital products with a thoughtful user experience."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8"
          >
            <p className="text-lg leading-8 text-slate-300">
              I am a fresher actively pursuing full-time opportunities in Software Engineering, Java Backend Development, Backend Development, and MERN Stack Development. My interests lie in crafting clean APIs, building scalable backend logic, and creating polished web interfaces that feel effortless to use.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I enjoy learning continuously, solving technical challenges, and turning requirements into practical, well-structured solutions. I would love to contribute to a team that values curiosity, consistency, and quality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            {[
              ['Java', 'Spring Boot'],
              ['MERN Stack', 'REST APIs'],
              ['Problem Solving', 'Continuous Learning'],
            ].map(([primary, secondary]) => (
              <div key={primary} className="rounded-[1.25rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Focus</p>
                <p className="mt-3 text-xl font-semibold text-white">{primary}</p>
                <p className="mt-1 text-slate-300">{secondary}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
