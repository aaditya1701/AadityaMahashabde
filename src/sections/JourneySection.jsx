import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { learningJourney } from '../data/content'

const JourneySection = () => {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl sm:p-10 lg:p-14">
        <SectionHeading
          eyebrow="Learning Journey"
          title="From curiosity to capability"
          description="This timeline reflects the path from beginning with core computer science fundamentals to building meaningful projects and preparing for software engineering opportunities."
        />
        <div className="mt-12 space-y-6">
          {learningJourney.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex flex-col gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-6 md:flex-row md:items-start"
            >
              <div className="min-w-[120px] rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-center text-cyan-200">
                {item.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneySection
