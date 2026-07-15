import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  APP_URL, FREE_UNTIL, FREE_UNTIL_LABEL,
  PRICE_MONTHLY, PRICE_YEARLY, PRICE_YEARLY_FULL,
  viewportOnce,
} from '../anim.js'
import { GoogleG } from './Hero.jsx'

function partsLeft() {
  const diff = Math.max(0, FREE_UNTIL.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
  }
}

function Countdown() {
  const [t, setT] = useState(partsLeft)

  useEffect(() => {
    const id = setInterval(() => setT(partsLeft()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="price-countdown" role="timer" aria-label={`Free access ends ${FREE_UNTIL_LABEL}`}>
      {[
        [t.days, 'days'],
        [t.hours, 'hrs'],
        [t.minutes, 'min'],
      ].map(([v, u]) => (
        <span className="cd-cell" key={u}>
          <span className="cd-num">{String(v).padStart(2, '0')}</span>
          <span className="cd-unit">{u}</span>
        </span>
      ))}
    </div>
  )
}

function Check({ dark }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: dark ? 'var(--success)' : 'var(--success)', flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
  )
}

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="wrap">
        <motion.div
          className="pricing-head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Pricing</span>
          <h2 className="display-lg">Free for everyone. Then one simple plan.</h2>
          <p className="pricing-sub">
            No tier chart to decode. Right now every workspace is fully unlocked — and once you
            sign up, a live countdown in your own Settings shows exactly where you stand.
          </p>
        </motion.div>

        <div className="pricing-grid">
          <motion.div
            className="price-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="price-plan">Today</div>
            <h3 className="price-title">The free window</h3>
            <Countdown />
            <p className="price-note">of full free access left — for every workspace, until {FREE_UNTIL_LABEL}.</p>
            <ul className="price-list">
              <li><Check /> Every feature unlocked — no gates</li>
              <li><Check /> No usage caps on clients, invoices, or notes</li>
              <li><Check /> No card required, ever, to start</li>
              <li><Check /> Your data exports any time</li>
            </ul>
            <motion.a
              className="btn-secondary btn-lg"
              href={APP_URL}
              target="_blank"
              rel="noopener"
              whileHover={{ backgroundColor: 'var(--surface-soft)' }}
              whileTap={{ scale: 0.98 }}
            >
              <GoogleG size={15} />
              Start free with Google
            </motion.a>
          </motion.div>

          <motion.div
            className="price-card featured"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="price-plan">After {FREE_UNTIL_LABEL}</div>
            <h3 className="price-title">Pro</h3>
            <div className="price-amount">
              {PRICE_MONTHLY}<span className="per">/month</span>
            </div>
            <p className="price-note">
              or {PRICE_YEARLY}/year — 20% off <s>{PRICE_YEARLY_FULL}</s>
            </p>
            <ul className="price-list">
              <li><Check dark /> Full access — keep creating and editing, no limits</li>
              <li><Check dark /> Client portal, UPI payments, receipts</li>
              <li><Check dark /> Brand-styled PDFs and invoice emails</li>
              <li><Check dark /> Cancel anytime — access runs to period end</li>
            </ul>
            <motion.a
              className="btn-primary btn-lg inverted"
              href={APP_URL}
              target="_blank"
              rel="noopener"
              whileHover={{ y: -1, boxShadow: '0 10px 30px rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
            >
              Sign up now — pay nothing today
            </motion.a>
            <p className="price-fineprint">
              No auto-charge when the free window ends. Unsubscribed workspaces go read-only —
              your data stays visible and exportable, never deleted.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
