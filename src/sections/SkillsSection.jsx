import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/content'

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Crafting solutions across modern development stacks"
          description="The skill set below reflects a balanced mix of core programming, backend depth, web fundamentals, and practical development tools."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.4rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
