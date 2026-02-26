'use client'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

type SkillLevel = 'Beginner' | 'Intermediate' | 'Intermediate Plus' | 'Advanced'

const levelToPercent: Record<SkillLevel, number> = {
  Beginner: 40,
  Intermediate: 65,
  'Intermediate Plus': 75,
  Advanced: 85,
}

const skillCategories = [
  {
    title: 'Languages',
    color: '#7c6af7',
    skills: [
      { name: 'Python', level: 'Advanced' as SkillLevel },
      { name: 'JavaScript', level: 'Intermediate Plus' as SkillLevel },
      { name: 'Java', level: 'Intermediate' as SkillLevel },
      { name: 'C/C++', level: 'Intermediate' as SkillLevel },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    color: '#4fd1c5',
    skills: [
      { name: 'React', level: 'Intermediate' as SkillLevel },
      { name: 'Node.js', level: 'Intermediate' as SkillLevel },
      { name: 'LangChain', level: 'Beginner' as SkillLevel },
      { name: 'Express', level: 'Beginner' as SkillLevel },
    ]
  },
  {
    title: 'Tools & DevOps',
    color: '#68d391',
    skills: [
      { name: 'Docker', level: 'Intermediate' as SkillLevel },
      { name: 'Git', level: 'Intermediate' as SkillLevel },
      { name: 'REST APIs', level: 'Intermediate Plus' as SkillLevel },
      { name: 'Linux', level: 'Intermediate' as SkillLevel },
    ]
  },
  {
    title: 'Databases',
    color: '#f6ad55',
    skills: [
      { name: 'MongoDB', level: 'Intermediate' as SkillLevel },
      { name: 'PostgreSQL', level: 'Intermediate' as SkillLevel },
    ]
  },
  {
    title: 'Testing',
    color: '#76e4f7',
    skills: [
      { name: 'Selenium', level: 'Intermediate' as SkillLevel },
      { name: 'Pytest', level: 'Intermediate' as SkillLevel },
      { name: 'API Testing', level: 'Intermediate' as SkillLevel },
    ]
  },
]

const techPills = [
  'Python', 'React', 'Node.js', 'LangChain', 'LangGraph', 'Docker', 
  'MongoDB', 'PostgreSQL', 'FastAPI', 'Streamlit', 'Pinecone', 'Socket.IO',
  'OpenAI', 'Git', 'Linux', 'Selenium', 'Pytest', 'Express', 'REST APIs', 'MCP'
]

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          
          <span className="font-mono text-xs text-accent tracking-widest uppercase">02 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-[clamp(2.5rem,5vw,4rem)] mb-16"
        >
          Technical <em className="gradient-text-warm not-italic">arsenal</em>
        </motion.h2>

        {/* Scrolling tech pill marquee */}
        <div className="relative overflow-hidden mb-20 py-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-3 whitespace-nowrap"
          >
            {[...techPills, ...techPills].map((pill, i) => (
              <span key={i} className="tag flex-shrink-0">{pill}</span>
            ))}
          </motion.div>
        </div>

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                />
                <h3 className="font-mono text-xs tracking-widest uppercase" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-sm text-text">{skill.name}</span>
                      <span className="font-mono text-xs text-text-dim">{skill.level}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${levelToPercent[skill.level]}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: ci * 0.08 + si * 0.06 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spacer */}
        <div className="h-16 md:h-20" style={{ minHeight: '4rem' }} />

        {/* Certifications */}
        <div>
          <h3 className="font-mono text-xs text-accent2 tracking-widest uppercase mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Deep Learning', org: 'NPTEL', color: '#4fd1c5' },
              { name: 'Python Development', org: 'Infosys SpringBoard', color: '#7c6af7' },
              { name: 'AI, ML & Data Science Bootcamp', org: 'Udemy', color: '#f687b3' },
            ].map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass glass-hover rounded-2xl p-6"
                style={{ borderLeft: `2px solid ${cert.color}40` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cert.color, boxShadow: `0 0 8px ${cert.color}` }} />
                  <div className="font-body text-sm text-text font-medium">{cert.name}</div>
                </div>
                <div className="font-mono text-xs text-text-dim">{cert.org}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
