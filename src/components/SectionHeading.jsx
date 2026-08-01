import { motion } from 'framer-motion'

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </motion.div>
  )
}

export default SectionHeading
