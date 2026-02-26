'use client'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shreyareddy5544@gmail.com',
    href: 'mailto:shreyareddy5544@gmail.com',
    color: '#7c6af7',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9902069193',
    href: 'tel:+919902069193',
    color: '#4fd1c5',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, Karnataka, India',
    href: '#',
    color: '#f687b3',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ShreyyJ',
    href: 'https://github.com/ShreyyJ',
    color: '#68d391',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreyyj',
    href: 'https://linkedin.com/in/shreyyj',
    color: '#f6ad55',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = (form.querySelector('[name=name]') as HTMLInputElement).value
    const email = (form.querySelector('[name=email]') as HTMLInputElement).value
    const message = (form.querySelector('[name=message]') as HTMLTextAreaElement).value
    window.location.href = `mailto:shreyareddy5544@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AFrom: ${email}`
  }

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="blob w-96 h-96 bg-accent" style={{ bottom: '-10%', left: '-5%' }} />
      <div className="blob w-72 h-72 bg-accent2" style={{ top: '10%', right: '-5%' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">04 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2" style={{ gap: '4rem' }}>
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6"
            >
              Let&apos;s{' '}
              <em className="gradient-text not-italic">collaborate</em>{' '}
              on something great
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-dim leading-relaxed mb-12"
            >
              I&apos;m currently open to internship and full-time opportunities. Whether you have a project in mind, want to chat about AI/ML, or just want to say hi — my inbox is always open.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-6 p-6 md:p-7 glass glass-hover rounded-2xl group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-text-dim tracking-widest uppercase mb-2">{item.label}</div>
                    <div className="font-body text-sm text-text truncate">{item.value}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-text-dim group-hover:text-text transition-colors flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl space-y-7" style={{ padding: '3rem' }}>
              <div className="space-y-3">
                <label className="font-mono text-xs text-text-dim tracking-widest uppercase">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg px-4 py-3 text-text placeholder-text-dim/50 font-body text-sm focus:outline-none transition-all"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#e0e0e0'
                  }}
                />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs text-text-dim tracking-widest uppercase">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg px-4 py-3 text-text placeholder-text-dim/50 font-body text-sm focus:outline-none transition-all"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#e0e0e0'
                  }}
                />
              </div>
              <div className="space-y-3">
                <label className="font-mono text-xs text-text-dim tracking-widest uppercase">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full rounded-lg px-4 py-3 text-text placeholder-text-dim/50 font-body text-sm focus:outline-none transition-all resize-none"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#e0e0e0'
                  }}
                />
              </div>
              <button
                type="submit"
                className="group relative font-body text-sm tracking-widest uppercase flex items-center justify-center gap-2 mx-auto transition-all duration-300 mt-2"
                style={{
                  backgroundColor: '#7c6af7',
                  color: 'white',
                  padding: '0.75rem 2.5rem',
                  borderRadius: '8px',
                  minWidth: '200px',
                  boxShadow: '0 4px 20px rgba(124, 106, 247, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#8b7afe'
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(124, 106, 247, 0.5)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#7c6af7'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 106, 247, 0.3)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Send size={16} className="group-hover:rotate-12 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
