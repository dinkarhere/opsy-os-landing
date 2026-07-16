import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useScroll, useTransform, animate } from 'framer-motion'
import { APP_URL, FREE_UNTIL_LABEL, stagger, rise } from '../anim.js'

export function GoogleG({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#FBBC05" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  )
}

const AMOUNTS = [15000, 30000, 45000]
const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

export function InvoicePanel() {
  const [idx, setIdx] = useState(1)
  const value = useMotionValue(AMOUNTS[1])
  const display = useTransform(value, (v) => inr(v))

  useEffect(() => {
    const controls = animate(value, AMOUNTS[idx], {
      type: 'spring', stiffness: 120, damping: 22,
    })
    return controls.stop
  }, [idx, value])

  return (
    <div className="w-panel">
      <div className="w-head">
        <div className="w-avatar">AR</div>
        <div>
          <div className="w-name">Aditi Rao</div>
          <div className="w-title-line">Website redesign — M2</div>
        </div>
      </div>
      <p className="w-desc">Homepage, auth screens, and the case-study template. Paid in three parts.</p>

      <div className="w-row">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" /></svg>
        <div className="w-amounts">
          {AMOUNTS.map((a, i) => (
            <button key={a} className={`w-amount${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)}>
              {i === idx && (
                <motion.span
                  className="amount-bg"
                  layoutId="amountBg"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="amount-label">₹{a / 1000}k</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-row">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" /></svg>
        <span>Due 20 July · IST</span>
      </div>

      <div className="w-total-row">
        <span className="w-inv-chip">INV-2026-014</span>
        <motion.span className="w-total">{display}</motion.span>
      </div>
      <div className="w-row" style={{ justifyContent: 'flex-end', margin: '6px 0 0' }}>
        <span className="w-upi">UPI · dinkar@icici</span>
      </div>
    </div>
  )
}

export function CalendarPanel() {
  const cells = []
  cells.push({ t: '', cls: 'blank' })
  for (let d = 1; d <= 30; d++) {
    let cls = ''
    if (d === 4 || d === 12) cls = 'paid'
    if (d === 20) cls = 'due'
    cells.push({ t: String(d), cls })
  }
  for (let d = 1; d <= 4; d++) cells.push({ t: String(d), cls: 'dim' })

  return (
    <div className="w-panel">
      <div className="w-cal-head">
        <span className="w-cal-month">July</span>
        <span className="w-cal-year">2026</span>
      </div>
      <div className="w-cal">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div className="dow" key={i}>{d}</div>
        ))}
        {cells.map((c, i) => (
          <motion.div
            key={i}
            className={`day ${c.cls}`}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.008, duration: 0.25 }}
          >
            {c.t}
          </motion.div>
        ))}
      </div>
      <div className="w-legend">
        <span><span className="legend-dot" style={{ background: 'var(--success)' }} />Paid</span>
        <span><span className="legend-dot" style={{ background: 'var(--ink)' }} />Due</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const widgetY = useTransform(scrollYProgress, [0, 1], [0, 56])

  return (
    <section className="hero-section" id="top" ref={ref}>
      <div className="wrap">
        <div className="hero">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.a variants={rise} className="badge-pill" href="#pricing">
              <span className="live-dot" />
              Free for everyone until {FREE_UNTIL_LABEL}
            </motion.a>

            <motion.h1 variants={rise} className="display-xl">
              Your freelance business shouldn&rsquo;t live in five browser tabs.
            </motion.h1>

            <motion.p variants={rise} className="hero-sub">
              Client list in Notion. Numbers in a spreadsheet. Invoices from a PDF template you
              edit by hand. Payment reminders on WhatsApp. Opsy&nbsp;OS puts all of it —{' '}
              <strong>clients, projects, tasks, notes, invoices, and payments</strong> — in one
              calm place.
            </motion.p>

            <motion.div variants={rise} className="btn-stack">
              <motion.a
                className="btn-primary btn-lg"
                href={APP_URL}
                target="_blank"
                rel="noopener"
                whileHover={{ y: -1, boxShadow: '0 10px 30px rgba(17,17,17,0.20)' }}
                whileTap={{ scale: 0.98 }}
              >
                <GoogleG />
                Sign up with Google — free right now
              </motion.a>
              <motion.a
                className="btn-secondary btn-lg"
                href="#invoicing"
                whileHover={{ backgroundColor: 'var(--surface-soft)' }}
                whileTap={{ scale: 0.98 }}
              >
                See how it works
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </motion.a>
            </motion.div>

            <motion.div variants={rise} className="fineprint">
              <span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                No card required
              </span>
              <span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                Nothing to install
              </span>
              <span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                Your data exports any time
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ y: widgetY }}
          >
            <div className="hero-mockup">
              <motion.div
                className="paid-toast"
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 1.4 }}
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
        </div>
      </div>
    </section>
  )
}
