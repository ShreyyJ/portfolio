'use client'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ProjectSplash from '../components/ProjectSplash'

const projects = [
  {
    id: 1,
    title: 'Personal Tutor',
    subtitle: 'RAG-based Conversational AI',
    tags: ['Python', 'LangChain', 'Pinecone'],
    color: '#7c6af7',
    number: '01',
  },
  {
    id: 2,
    title: 'Real-Time Chat',
    subtitle: 'Scalable Chat Application',
    tags: ['React', 'Node.js', 'Socket.IO'],
    color: '#4fd1c5',
    number: '02',
  },
  {
    id: 3,
    title: 'Agentic ExpenseManager',
    subtitle: 'AI-powered Financial Automation',
    tags: ['Python', 'FastAPI', 'LangGraph'],
    color: '#f687b3',
    number: '03',
  },
]

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [splashActive, setSplashActive] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const router = useRouter()

  const stepActive = (dir: 'left' | 'right') => {
    const newIndex = dir === 'right'
      ? Math.min(activeIndex + 1, projects.length - 1)
      : Math.max(activeIndex - 1, 0)
    setActiveIndex(newIndex)
  }

  const handleProjectClick = (e: React.MouseEvent, project: typeof projects[0]) => {
    e.preventDefault()
    setSelectedProject(project)
    setSplashActive(true)
    setTimeout(() => {
      router.push(`/project/${project.id}`)
    }, 1100)
  }

  return (
    <>
      <ProjectSplash
        isActive={splashActive}
        color={selectedProject?.color || '#7c6af7'}
        title={selectedProject?.title || 'Loading'}
        number={selectedProject?.number || '00'}
      />
      <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">03 / Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="flex items-end justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-[clamp(2.5rem,5vw,4rem)]"
          >
            Things I&apos;ve{' '}
            <em className="gradient-text not-italic">built</em>
          </motion.h2>

          {/* Navigation arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => stepActive('left')}
              disabled={activeIndex === 0}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-dim hover:text-text transition-all disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => stepActive('right')}
              disabled={activeIndex === projects.length - 1}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-dim hover:text-text transition-all disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Project cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <Link href={`/project/${project.id}`} onClick={(e) => handleProjectClick(e, project)}>
                <motion.div
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  onHoverStart={() => setActiveIndex(i)}
                  animate={{
                    scale: i === activeIndex ? 1.02 : 0.98,
                    opacity: i === activeIndex ? 1 : 0.85,
                    filter: i === activeIndex ? 'saturate(1)' : 'saturate(0.85)',
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-3xl h-96 flex flex-col cursor-pointer"
                  style={{
                    transformOrigin: 'center center',
                    zIndex: i === activeIndex ? 2 : 1,
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                    border: `1px solid ${project.color}20`,
                    boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 ${project.color}10`,
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Hover overlay */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.color}15, transparent 60%)`,
                    }}
                  />

                  {/* Number - top left */}
                  <div className="absolute top-6 left-6 z-20 opacity-40 group-hover:opacity-60 transition-opacity">
                    <div
                      className="font-display text-4xl leading-none font-light"
                      style={{ color: project.color }}
                    >
                      {project.number}
                    </div>
                  </div>

                  {/* Image area - flexible fill */}
                  <div
                    className="flex-1 flex items-center justify-center border-b rounded-t-3xl relative overflow-hidden"
                    style={{
                      borderColor: `${project.color}15`,
                      background: `linear-gradient(135deg, ${project.color}12, ${project.color}06)`,
                    }}
                  >
                    <img
                      src={`/project-${project.id}.svg`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info section - minimal */}
                  <div className="relative z-10 px-6 py-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3
                        className="font-display text-xl font-light text-text mb-1 transition-colors duration-300"
                        style={{}}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="font-mono text-xs tracking-widest opacity-70"
                        style={{ color: project.color }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tags at bottom */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md font-mono text-[8px] border opacity-70"
                          style={{
                            background: `${project.color}08`,
                            border: `0.5px solid ${project.color}20`,
                            color: `${project.color}99`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA - subtle */}
                  <div
                    className="absolute bottom-6 right-6 z-20 opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ color: project.color }}
                  >
                    <p className="font-mono text-xs tracking-widest">Explore →</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
      </section>
    </>
  )
}
