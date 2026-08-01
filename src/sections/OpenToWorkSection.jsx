import { motion } from 'framer-motion'

const OpenToWorkSection = () => {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900/80 to-violet-500/10 p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.12)] sm:p-10 lg:p-14"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Open to Work</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Actively looking for full-time opportunities</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          I am excited to contribute as a Software Engineer, Java Backend Developer, Backend Developer, MERN Stack Developer, or Full Stack Developer.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Software Engineer', 'Java Backend Developer', 'Backend Developer', 'MERN Stack Developer', 'Full Stack Developer'].map((role) => (
            <span key={role} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              {role}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default OpenToWorkSection
