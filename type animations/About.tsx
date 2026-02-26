'use client'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" ref={ref} className="py-32 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-xs text-accent tracking-widest uppercase">01 / About</span>
        <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6"
          >
            Crafting digital{' '}
            <em className="gradient-text not-italic">experiences</em>{' '}
            with code & curiosity
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-dim leading-relaxed mb-6"
          >
            I&apos;m Shreya, a final-year Information Science Engineering student at DSCE, Bengaluru. I thrive at the intersection of AI/ML systems and clean, performant web interfaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-dim leading-relaxed mb-8"
          >
            From building RAG-powered tutoring systems to agentic expense managers with LangGraph, I love tackling problems that sit at the bleeding edge of what&apos;s possible. I believe great software is both technically rigorous and beautifully crafted.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2"
          >
            {['LITSOC Member', 'Hospitality Club', 'AI/ML Enthusiast', 'Open Source'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>
        
        </div>

        {/* Right: Education card */}
        <div className="mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass glass-hover rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-accent" />
              </div>
              <div>
                <div className="font-body font-medium text-text mb-1">B.E. Information Science Engineering</div>
                <div className="font-mono text-xs text-text-dim mb-1">DSCE, Bengaluru · 2022 – 2026</div>
                <div className="font-mono text-xs text-accent">CGPA: 8.1</div>
              </div>
            </div>
            <div className="h-px bg-border my-4" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent2/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-accent2" />
              </div>
              <div>
                <div className="font-body font-medium text-text mb-1">12th Grade — Science</div>
                <div className="font-mono text-xs text-text-dim mb-1">Christ Academy Junior College, Bengaluru · 2021-22</div>
                <div className="font-mono text-xs text-accent2">81%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
