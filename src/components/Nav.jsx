import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { APP_URL } from '../anim.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`nav${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="wrap">
        <div className="nav-row">
          <a className="nav-logo" href="#top" aria-label="Opsy OS home">
            <img src="/Icons/logo-black.svg" alt="Opsy" />
          </a>
          <div className="nav-links">
            <a href="#invoicing">Invoicing</a>
            <a href="#payments">₹ &amp; UPI</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-actions">
            <a className="nav-signin" href={APP_URL} target="_blank" rel="noopener">
              Sign in
            </a>
            <motion.a
              className="btn-primary"
              href={APP_URL}
              target="_blank"
              rel="noopener"
              whileHover={{ y: -1, boxShadow: '0 6px 20px rgba(17,17,17,0.18)' }}
              whileTap={{ scale: 0.97 }}
            >
              Get started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </motion.a>
          </div>
        </div>
      </div>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    </motion.nav>
  )
}
