import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/content'

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work that reflects technical depth and attention to detail"
          description="These projects are presented as portfolio highlights with careful structure and clear impact, while keeping placeholders where project specifics are not available."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="h-40 bg-[linear-gradient(135deg,_rgba(34,211,238,0.25),_rgba(168,85,247,0.2))]" />
              <div className="p-7">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <div className="mt-6 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                  <div>
                    <p className="font-semibold text-cyan-200">Features</p>
                    <ul className="mt-2 space-y-1">
                      {project.features.map((item) => (<li key={item}>• {item}</li>))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-200">Challenges</p>
                    <ul className="mt-2 space-y-1">
                      {project.challenges.map((item) => (<li key={item}>• {item}</li>))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 rounded-[1.1rem] border border-white/10 bg-slate-900/70 p-4">
                  <p className="font-semibold text-violet-200">What I learned</p>
                  <p className="mt-2 text-slate-300">{project.learned.join(' • ')}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.github} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white"><FiGithub /> GitHub</a>
                  <a href={project.demo} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"><FiExternalLink /> Live Demo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
