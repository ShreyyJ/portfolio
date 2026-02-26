'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface ProjectSplashProps {
  isActive: boolean
  color: string
  title: string
  number: string
}

export default function ProjectSplash({ isActive, color, title, number }: ProjectSplashProps) {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isActive])

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${color}30 0%, ${color}12 35%, #050508 100%)`,
            backdropFilter: 'blur(14px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 45%), radial-gradient(circle at 80% 80%, ${color}18 0%, transparent 50%)`,
            }}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center rounded-3xl px-10 py-12 border"
            style={{
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))`,
              borderColor: `${color}55`,
              boxShadow: `0 20px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18), 0 0 80px ${color}25`,
              backdropFilter: 'blur(18px)',
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center"
              style={{
                background: `radial-gradient(circle, ${color}40 0%, ${color}15 68%, rgba(255,255,255,0.06) 100%)`,
                boxShadow: `0 0 80px ${color}50, inset 0 0 45px ${color}28`,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, transparent, ${color}80, transparent)`,
                }}
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color }}>
                {number} / PROJECT
              </div>
              <h2
                className="font-display text-4xl font-light text-text"
                style={{ textShadow: `0 0 24px ${color}35` }}
              >
                {title}
              </h2>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
