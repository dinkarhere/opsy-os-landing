import { useEffect, useRef, useState } from 'react'
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion'
import {
  Receipt,
  CalendarBlank,
  CheckSquare,
  Users,
  Note,
  CurrencyInr,
  FolderSimple,
  Bell,
} from '@phosphor-icons/react'
import { CONTACT_EMAIL, stagger, rise } from './anim.js'

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

// Decorative icons drifting in the whitespace beside the hero copy.
const FLOATING_ICONS = [
  [Receipt, { top: '14%', left: '9%' }, 28, 0],
  [CalendarBlank, { top: '34%', left: '5%' }, 22, 1.2],
  [CheckSquare, { top: '52%', left: '12%' }, 24, 2.4],
  [CurrencyInr, { top: '22%', left: '18%' }, 18, 3.1],
  [Note, { top: '13%', right: '10%' }, 24, 0.8],
  [Users, { top: '33%', right: '5%' }, 26, 1.9],
  [FolderSimple, { top: '52%', right: '13%' }, 22, 2.8],
  [Bell, { top: '24%', right: '18%' }, 18, 3.6],
]

function FloatingIcons() {
  return (
    <div className="wl-icons" aria-hidden="true">
      {FLOATING_ICONS.map(([Icon, pos, size, delay], i) => (
        <span key={i} className="wl-float" style={{ ...pos, animationDelay: `${delay}s` }}>
          <Icon size={size} weight="duotone" />
        </span>
      ))}
    </div>
  )
}

export default function Waitlist() {
  const [count, setCount] = useState(null)
  const shotRef = useRef(null)
  // Scroll-linked: grows from 0.7x as the screenshot enters until it reaches
  // the middle of the viewport at full size.
  const { scrollYProgress } = useScroll({ target: shotRef, offset: ['start end', 'center center'] })
  const shotScale = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  useEffect(() => {
    fetch(WAITLIST_API)
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && d.count > 0) setCount(d.count)
      })
      .catch(() => {})
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <main className="wl-page">
        <FloatingIcons />
        <motion.div className="wl-inner" variants={stagger} initial="hidden" animate="show">
          <motion.a variants={rise} className="wl-logo" href="/" aria-label="Opsy OS">
            <img src="/Icons/logo-black.svg" alt="Opsy OS" />
          </motion.a>

          <motion.span variants={rise} className="badge-pill">
            <span className="live-dot" />
            Launching {LAUNCH_LABEL}
          </motion.span>

          <motion.h1 variants={rise} className="display-xl wl-title">
            Own your
            <br />
            freelance business.
          </motion.h1>

          <motion.p variants={rise} className="wl-sub">
            Clients, projects, <strong>invoices in ₹</strong>, and a client portal your clients
            pay through — one keyboard-fast app. Doors open {LAUNCH_LABEL}.
          </motion.p>

          <motion.div variants={rise} className="wl-form-wrap">
            <WaitlistForm />
          </motion.div>

          <motion.p variants={rise} className="wl-fineprint">
            One email when we open. No spam, ever.
            {count != null && (
              <>
                {' '}
                <strong>{count === 1 ? '1 person' : `${count} people`}</strong> already joined.
              </>
            )}
          </motion.p>

          <motion.div ref={shotRef} className="wl-visual" style={{ scale: shotScale }}>
            <img className="wl-shot" src="/Screenshots/Updated.png" alt="Opsy OS dashboard" loading="lazy" />
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
