import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { APP_URL, CONTACT_EMAIL, FREE_UNTIL_LABEL, PRICE_MONTHLY, viewportOnce } from '../anim.js'
import { GoogleG } from './Hero.jsx'

export function NotList() {
  const items = [
    { t: 'Not accounting software.', p: 'No ledgers, journals, GST returns, or TDS. If you need those, keep your accountant — Opsy OS handles the part of the business between you and your clients.' },
    { t: 'Not a payment processor.', p: 'No gateway, no percentage cut, no “funds available in 3–5 business days.” Clients pay you directly; you keep 100% and log the receipt.' },
    { t: 'Not a CRM.', p: 'Clients move through a light pipeline — lead, negotiation, active, closed — not a sales-forecast dashboard you’ll never fill in.' },
    { t: 'Not a team tool.', p: 'Single-owner workspaces, on purpose. No seats, roles, or permissions to pay for or configure around.' },
  ]
  return (
    <section className="not-section">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Deliberately narrow</span>
          <h2 className="display-lg">Everything your practice needs. Nothing it doesn&rsquo;t.</h2>
        </motion.div>
        <div className="not-grid">
          {items.map((it, i) => (
            <motion.div
              className="not-item"
              key={it.t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              <span className="no">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{it.t}</h3>
                <p>{it.p}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-section">
      <div className="wrap">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="display-lg">Stop juggling. Start invoicing.</h2>
          <p className="cta-sub">
            Signing up takes two minutes. Free for everyone until {FREE_UNTIL_LABEL} — then one
            simple plan. No card required, no surprise charges.
          </p>
          <motion.a
            className="btn-primary btn-lg"
            href={APP_URL}
            target="_blank"
            rel="noopener"
            whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(255,255,255,0.22)' }}
            whileTap={{ scale: 0.98 }}
          >
            <GoogleG />
            Sign up with Google — free right now
          </motion.a>
          <div className="cta-fineprint">{PRICE_MONTHLY}/month after the free window · Your data exports any time</div>
        </motion.div>
      </div>
    </section>
  )
}

export function Maker() {
  return (
    <section className="maker-section">
      <div className="wrap">
        <motion.div
          className="maker"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <div className="avatar">
            <img src="/shots/dinkar.jpg" alt="Dinkar Sable" />
          </div>
          <div>
            <h3>Built by Dinkar Sable.</h3>
            <p>
              A freelancer working out of Pune, India. I built Opsy&nbsp;OS because my own practice
              was scattered across Notion, Excel, a PDF template, and WhatsApp reminders. It sends
              my real invoices to my real clients, every week. If something feels off, tell me —
              feedback lands straight in my inbox at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or find me at{' '}
              <a href="https://dinkarsable.com" target="_blank" rel="noopener">dinkarsable.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div>
            <span className="footer-logo">
              <img src="/Icons/logo-white.svg" alt="Opsy OS" />
            </span>
            <p className="tag">The whole freelance business, in one calm place. Free for everyone until {FREE_UNTIL_LABEL}.</p>
          </div>
          <div className="col">
            <div className="col-title">Product</div>
            <a href={APP_URL} target="_blank" rel="noopener">Open the app</a>
            <a href="#invoicing">Invoicing</a>
            <a href="#payments">₹ &amp; UPI</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="col">
            <div className="col-title">Company</div>
            <a href="https://dinkarsable.com" target="_blank" rel="noopener">dinkarsable.com</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
          </div>
          <div className="col">
            <div className="col-title">Legal</div>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/refunds">Refunds &amp; Cancellation</a>
          </div>
        </div>
        <div className="footer-meta">
          <span>Made in Pune, India</span>
          <span>© 2026 Opsy OS</span>
        </div>
      </div>
    </footer>
  )
}

export function MobileCta() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setShow(y > 640))

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="mobile-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        >
          <a className="btn-primary" href={APP_URL} target="_blank" rel="noopener">
            <GoogleG size={15} />
            Sign up free — Opsy OS
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
