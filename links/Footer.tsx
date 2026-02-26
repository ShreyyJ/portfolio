'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-2xl gradient-text font-light">SJ</div>

        <p className="font-mono text-xs text-text-dim tracking-widest text-center">
          © {new Date().getFullYear()} Shreya J · Built with Next.js + Framer Motion
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/ShreyyJ' },
            { icon: Linkedin, href: 'https://linkedin.com/in/shreyyj' },
            { icon: Mail, href: 'mailto:shreyareddy5544@gmail.com' },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-8 glass rounded-full flex items-center justify-center text-text-dim hover:text-accent transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Big name watermark */}
      <div className="text-center mt-8 overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display font-light text-[clamp(3rem,15vw,12rem)] text-white/[0.02] leading-none select-none"
        >
        
        </motion.p>
      </div>
    </footer>
  )
}
