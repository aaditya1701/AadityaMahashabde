import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/content'

const CertificationsSection = () => {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuing growth beyond the classroom"
          description="These certificate cards are designed as polished placeholders that can be updated as new credentials are earned."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8"
            >
              <div className="h-28 rounded-[1.2rem] border border-white/10 bg-slate-950/70" />
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-cyan-200">{item.issuer}</p>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
