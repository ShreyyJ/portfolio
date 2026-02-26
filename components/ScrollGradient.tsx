'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollGradient() {
  const { scrollY } = useScroll()

  // Create smooth gradient transforms based on scroll
  const gradientY = useTransform(scrollY, [0, 3000], ['0%', '100%'], { clamp: false })
  const gradientX = useTransform(scrollY, [0, 3000], ['0%', '30%'], { clamp: false })
  const gradientY2 = useTransform(scrollY, [0, 3000], ['100px', '500px'], { clamp: false })
  const gradientY3 = useTransform(scrollY, [0, 3000], ['-200px', '100px'], { clamp: false })
  const gradientX3 = useTransform(scrollY, [0, 3000], ['50%', '60%'], { clamp: false })
  
  // Opacity shifts
  const opacity1 = useTransform(scrollY, [0, 3000], [0.4, 0.3], { clamp: false })
  const opacity2 = useTransform(scrollY, [0, 3000], [0.3, 0.5], { clamp: false })
  const opacity3 = useTransform(scrollY, [0, 3000], [0.2, 0.6], { clamp: false })

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
      {/* Dark gradient blob 1 */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(124, 106, 247, 0.15) 0%, transparent 70%)',
          left: gradientX,
          top: gradientY,
          opacity: opacity1,
          willChange: 'transform, opacity',
        }}
      />

      {/* Dark gradient blob 2 */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(79, 209, 197, 0.1) 0%, transparent 70%)',
          right: gradientX,
          top: gradientY2,
          opacity: opacity2,
          willChange: 'transform, opacity',
        }}
      />

      {/* Dark gradient blob 3 */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(246, 135, 179, 0.08) 0%, transparent 70%)',
          left: gradientX3,
          bottom: gradientY3,
          opacity: opacity3,
          willChange: 'transform, opacity',
        }}
      />
    </div>
  )
}
