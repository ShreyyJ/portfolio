'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const scaleRef = useRef({ cursor: 1, follower: 1 })

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0) scale(${scaleRef.current.cursor})`
      }
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX - 18}px, ${followerY - 18}px, 0) scale(${scaleRef.current.follower})`
      }
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      scaleRef.current = { cursor: 1.8, follower: 1.5 }
    }
    const onLeave = () => {
      scaleRef.current = { cursor: 1, follower: 1 }
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
