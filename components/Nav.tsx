'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
    setActive(id)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
        scrolled ? 'glass py-3 px-6 mx-4 shadow-2xl' : ''
      }`}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl font-light tracking-wider gradient-text"
        >
          SJ
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`font-body text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                active === link ? 'text-accent' : 'text-text-dim hover:text-text'
              }`}
            >
              {link}
              <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-accent to-accent2 transition-all duration-300 ${
                active === link ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
          <a
            href="mailto:shreyareddy5544@gmail.com"
            className="px-4 py-2 text-xs tracking-widest uppercase font-mono glass glass-hover rounded-full text-accent border border-accent/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu btn */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-4 h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mx-4 mt-2 glass rounded-2xl p-6 flex flex-col gap-4"
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link)}
                className="text-left font-display text-2xl text-text-dim hover:text-text transition-colors"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
