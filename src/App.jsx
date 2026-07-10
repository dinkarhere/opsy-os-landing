import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Chaos from './components/Chaos.jsx'
import Features from './components/Features.jsx'
import { NotList, CtaBand, Maker, Footer, MobileCta } from './components/Closing.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Chaos />
        <Features />
        <NotList />
        <CtaBand />
        <Maker />
      </main>
      <Footer />
      <MobileCta />
    </MotionConfig>
  )
}
