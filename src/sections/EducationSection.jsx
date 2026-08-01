import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/content'

const EducationSection = () => {
  return (
    <section id="education" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          // title="Computer Science foundation with a growth mindset"
          // description="The academic base has prepared me to approach software engineering with rigor, adaptability, and curiosity."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-1">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[1.6rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Degree</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-3 text-lg text-slate-300">{item.institution}</p>
              <p className="mt-5 max-w-3xl text-slate-300">{item.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
