'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Ambient blobs */}
      <motion.div
        className="blob w-[600px] h-[600px] bg-accent"
        style={{ top: '-10%', left: '-10%' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob w-[500px] h-[500px] bg-accent2"
        style={{ bottom: '-5%', right: '-5%' }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="blob w-[300px] h-[300px] bg-accent3"
        style={{ top: '40%', right: '20%' }}
        animate={{ x: [0, 20, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse" />
          <span className="font-mono text-xs text-text-dim tracking-widest uppercase">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-[clamp(4rem,12vw,10rem)] leading-none tracking-tight mb-4"
        >
          <span className="gradient-text">Shreya</span>
          <span className="text-text/20"> J</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-mono text-base md:text-lg text-text-dim mb-8 h-8"
        >
          <TypeAnimation
            sequence={[
              '> Full Stack Developer',
              2000,
              '> AI/ML Engineer',
              2000,
              '> RAG Systems Builder',
              2000,
              '> Open Source Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-text-dim text-base leading-relaxed mb-12"
        >
          Final year ISE student at DSCE, Bengaluru. I build intelligent systems and beautiful interfaces — from real-time chat apps to agentic AI pipelines.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-accent text-white rounded-full font-body text-sm tracking-widest uppercase hover:bg-accent/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,106,247,0.4)]"
          >
            View Projects
          </button>
          <a
            href="mailto:shreyareddy5544@gmail.com"
            className="px-8 py-3 glass glass-hover rounded-full font-body text-sm tracking-widest uppercase text-text"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/ShreyyJ', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/shreyyj', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:shreyareddy5544@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+919902069193', label: 'Phone' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-text-dim tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-text-dim" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-accent/20 rounded-tl-xl" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-accent2/20 rounded-tr-xl" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-accent3/20 rounded-bl-xl" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-accent/20 rounded-br-xl" />
    </section>
  )
}
