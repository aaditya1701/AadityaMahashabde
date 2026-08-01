import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { profiles } from '../data/content'

const GitHubSection = () => {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 lg:p-14">
        <SectionHeading
          eyebrow="GitHub & Coding Profiles"
          title="A growing code footprint with consistent learning"
          description="This section highlights the professional profiles I want recruiters to explore, with polished placeholders for stats and contribution activity."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {['GitHub Stats', 'Contribution Graph', 'Top Languages'].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8"
          >
            <h3 className="text-xl font-semibold text-white">Profiles</h3>
            <div className="mt-6 space-y-3">
              {profiles.map((profile) => (
                <a key={profile.label} href={profile.href} className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-200">
                  <span>{profile.label}</span>
                  <span className="text-sm text-cyan-200">{profile.value}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GitHubSection
