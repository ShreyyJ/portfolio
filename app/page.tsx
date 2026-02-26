import dynamic from 'next/dynamic'
import Hero from '../components/Hero'
import ScrollGradient from '../components/ScrollGradient'
import About from '../type animations/About'
import Skills from '../type animations/Skills'
import Projects from '../marquee + certs/Projects'
import Contact from '../modals/Contact'
import Footer from '../links/Footer'

const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false })
const ScrollProgress = dynamic(() => import('../components/ScrollProgress'), { ssr: false })
const Nav = dynamic(() => import('../components/Nav'), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <ScrollGradient />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <div className="h-24 md:h-32" style={{ minHeight: '6rem' }} />
      <Skills />
      <div className="h-12 md:h-16" style={{ minHeight: '3rem' }} />
      <Projects />
      <div className="h-24 md:h-32" style={{ minHeight: '6rem' }} />
      <Contact />
      <div className="h-16 md:h-24" />
      <Footer />
    </main>
  )
}
