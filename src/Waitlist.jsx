import { useState } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import { CONTACT_EMAIL, stagger, rise } from './anim.js'
import { InvoicePanel, CalendarPanel } from './components/Hero.jsx'

const WAITLIST_API = 'https://app.opsyos.com/api/waitlist'
const LAUNCH_LABEL = 'Monday, 20 July'

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const [error, setError] = useState('')

  async function submit(e) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setError('')
    try {
      const res = await fetch(WAITLIST_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'opsyos.com' }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        setStatus('error')
        setError(data.error || 'Something went wrong — try again?')
        return
      }
      setStatus('done')
    } catch {
      setStatus('error')
      setError('Could not reach the server — try again in a moment.')
    }
  }

  if (status === 'done') {
    return (
      <motion.div
        className="wl-success"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        role="status"
      >
        <span className="tick">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        You&rsquo;re on the list — see you Monday.
      </motion.div>
    )
  }

  return (
    <form className="wl-form" onSubmit={submit}>
      <div className="wl-row">
        <input
          className="wl-input"
          type="email"
          required
          placeholder="you@yourstudio.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'sending'}
        />
        <motion.button
          className="btn-primary btn-lg wl-btn"
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ y: -1, boxShadow: '0 10px 30px rgba(17,17,17,0.20)' }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'sending' ? 'Joining…' : 'Join the waitlist'}
        </motion.button>
      </div>
      {status === 'error' && <p className="wl-error" role="alert">{error}</p>}
    </form>
  )
}

export default function Waitlist() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="wl-page">
        <motion.div className="wl-inner" variants={stagger} initial="hidden" animate="show">
          <motion.a variants={rise} className="wl-logo" href="/" aria-label="Opsy OS">
            <img src="/Icons/logo-black.svg" alt="Opsy OS" />
          </motion.a>

          <motion.span variants={rise} className="badge-pill">
            <span className="live-dot" />
            Launching {LAUNCH_LABEL}
          </motion.span>

          <motion.h1 variants={rise} className="display-xl wl-title">
            The whole freelance business, in one calm place.
          </motion.h1>

          <motion.p variants={rise} className="wl-sub">
            Clients, projects, tasks, notes, <strong>invoices in ₹</strong>, and a client portal
            your clients pay through — one keyboard-fast app instead of five browser tabs. Doors
            open {LAUNCH_LABEL}. Leave your email and be first in.
          </motion.p>

          <motion.div variants={rise} className="wl-form-wrap">
            <WaitlistForm />
          </motion.div>

          <motion.p variants={rise} className="wl-fineprint">
            One email when we open. No spam, ever. Curious?{' '}
            <a href="/lander">Preview the full site →</a>
          </motion.p>

          <motion.div
            className="hero-visual wl-visual"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="hero-mockup">
              <motion.div
                className="paid-toast"
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 1.6 }}
              >
                <span className="tick">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </span>
                Payment received — ₹15,000
              </motion.div>
              <InvoicePanel />
              <CalendarPanel />
            </div>
          </motion.div>
        </motion.div>

        <footer className="wl-footer">
          <span>© 2026 Opsy OS · Made in Pune, India</span>
          <span className="wl-footer-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/refunds">Refunds</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
          </span>
        </footer>
      </main>
    </MotionConfig>
  )
}
