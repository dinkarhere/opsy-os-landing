import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { viewportOnce } from '../anim.js'

function Section({ id, gray, reverse, num, eyebrow, title, lede, chips, children }) {
  return (
    <section className={`feature-section${gray ? ' gray' : ''}`} id={id}>
      <div className="wrap">
        <div className={`split${reverse ? ' reverse' : ''}`}>
          <motion.div
            className="copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="eyebrow"><span className="num">{num}</span> {eyebrow}</span>
            <h2 className="display-lg">{title}</h2>
            <p className="lede">{lede}</p>
            {chips}
          </motion.div>
          <motion.div
            className="visual"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MockWindow({ title, children }) {
  return (
    <motion.div className="mock-card" whileHover={{ y: -3, boxShadow: 'var(--shadow-lg)' }} transition={{ duration: 0.25 }}>
      <div className="mock-titlebar">
        <span className="traffic"><i /><i /><i /></span>
        <span className="mock-title">{title}</span>
      </div>
      <div className="mock-body">{children}</div>
    </motion.div>
  )
}

/* ---------- 01 · Invoice editor mock ---------- */
function InvoiceMock() {
  return (
    <MockWindow title="opsyos.com — New invoice">
      <div className="inv-mock-grid">
        <div>
          <div className="form-field">
            <div className="form-label">Client</div>
            <div className="form-input">Aditi Rao — Meraki Studio</div>
          </div>
          <div className="form-field">
            <div className="form-label">Line item</div>
            <div className="form-input typing">Homepage redesign</div>
          </div>
          <div className="form-field">
            <div className="form-label">Amount</div>
            <div className="form-input">₹30,000</div>
          </div>
          <div className="form-field">
            <div className="form-label">Due date</div>
            <div className="form-input">20 June 2026</div>
          </div>
        </div>
        <div className="inv-preview">
          <div className="inv-preview-head">
            <span className="inv-brand">Dinkar Sable</span>
            <span className="w-inv-chip">INV-2026-014</span>
          </div>
          <div className="inv-line"><span>Homepage redesign</span><span>₹30,000</span></div>
          <div className="inv-line"><span>Auth screens</span><span>₹12,000</span></div>
          <div className="inv-line"><span>Case-study template</span><span>₹8,000</span></div>
          <div className="inv-total"><span>Total due</span><span>₹50,000</span></div>
          <div className="inv-status-row">
            <span className="status-pill">Draft</span>
            <span className="status-pill on">Sent</span>
            <span className="status-pill">Partial</span>
            <span className="status-pill">Paid</span>
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function NumberTicker() {
  const nums = ['INV-2026-011', 'INV-2026-012', 'INV-2026-013']
  return (
    <div className="ticker-strip">
      {nums.map((n, i) => (
        <motion.span
          key={n}
          className="ticker-num"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3 + i * 0.12 }}
        >
          {n}
        </motion.span>
      ))}
      <motion.span
        className="ticker-num hot"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.75, type: 'spring', stiffness: 300, damping: 16 }}
      >
        INV-2026-014 — assigned at finalize, never a gap
      </motion.span>
    </div>
  )
}

/* ---------- 02 · Portal / UPI mock ---------- */
function QR() {
  const N = 13
  const cells = []
  const inFinder = (r, c) =>
    (r < 5 && c < 5) || (r < 5 && c >= N - 5) || (r >= N - 5 && c < 5)
  const finderFilled = (r, c) => {
    const lr = r < 5 ? r : r - (N - 5)
    const lc = c < 5 ? c : c - (N - 5)
    return lr === 0 || lr === 4 || lc === 0 || lc === 4 || (lr === 2 && lc === 2)
  }
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      let filled
      if (inFinder(r, c)) filled = finderFilled(r, c)
      else filled = ((r * 31 + c * 17 + ((r * c) % 7)) % 9) < 4
      cells.push(filled)
    }
  }
  return (
    <div className="qr-grid" aria-hidden="true">
      {cells.map((f, i) => <i key={i} className={f ? 'f' : ''} />)}
    </div>
  )
}

function PortalMock() {
  const rows = [
    { n: 'INV-2026-014', a: '₹50,000', s: 'due' },
    { n: 'INV-2026-009', a: '₹30,000', s: 'paid' },
    { n: 'INV-2026-004', a: '₹15,000', s: 'paid' },
  ]
  return (
    <MockWindow title="opsyos.com/p/aditi — Client portal">
      <div className="portal-grid">
        <div>
          <div className="form-label" style={{ marginBottom: 8 }}>Invoices — Aditi Rao</div>
          {rows.map((r, i) => (
            <motion.div
              className="portal-inv-row"
              key={r.n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.25 + i * 0.1 }}
            >
              <span className="portal-inv-num">{r.n}</span>
              <span className="portal-inv-amt">{r.a}</span>
              <span className={`portal-pill ${r.s}`}>{r.s === 'paid' ? 'Paid' : 'Due'}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="qr-card"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.45, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <span className="qr-label">Scan to pay</span>
          <QR />
          <span className="qr-upi">
            dinkar@icici
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          </span>
        </motion.div>
      </div>
    </MockWindow>
  )
}

/* ---------- 03 · Dashboard mock ---------- */
function DashboardMock() {
  const bars = [28, 42, 35, 55, 48, 70, 62, 78, 66, 88, 74, 96]
  const months = ['J', 'A', 'S', 'O', 'N', 'D', 'J', 'F', 'M', 'A', 'M', 'J']
  return (
    <MockWindow title="opsyos.com — Dashboard">
      <div className="dash-stats">
        {[
          { lbl: 'Outstanding', val: '₹1,10,000', d: '3 invoices' },
          { lbl: 'Sent this month', val: '₹1,85,000', d: '+22%' },
          { lbl: 'Collected FY', val: '₹9,40,000', d: '+31%' },
        ].map((s, i) => (
          <motion.div
            className="dash-stat"
            key={s.lbl}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="lbl">{s.lbl}</div>
            <div className="val">{s.val}</div>
            <div className="delta">{s.d}</div>
          </motion.div>
        ))}
      </div>
      <div className="dash-chart">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className={`dash-bar${i === bars.length - 1 ? ' accent' : ''}`}
            style={{ height: `${h}%` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.35 + i * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
          />
        ))}
      </div>
      <div className="dash-months">
        {months.map((m, i) => <span key={i}>{m}</span>)}
      </div>
    </MockWindow>
  )
}

/* ---------- 03b · Real dashboard screenshots (light/dark) ---------- */
const SHOT = { light: '/shots/dashboard-light.png', dark: '/shots/dashboard-dark.png' }

function DashboardShowcase() {
  const [avail, setAvail] = useState({ light: null, dark: null })
  const [dark, setDark] = useState(true)

  useEffect(() => {
    Object.entries(SHOT).forEach(([mode, url]) => {
      const img = new Image()
      img.onload = () => setAvail((a) => ({ ...a, [mode]: true }))
      img.onerror = () => setAvail((a) => ({ ...a, [mode]: false }))
      img.src = url
    })
  }, [])

  const both = avail.light && avail.dark

  useEffect(() => {
    if (!both) return
    const t = setInterval(() => setDark((d) => !d), 5000)
    return () => clearInterval(t)
  }, [both])

  if (avail.light === false && avail.dark === false) return <DashboardMock />
  if (avail.light === null && avail.dark === null) return <DashboardMock />

  const mode = both ? (dark ? 'dark' : 'light') : (avail.dark ? 'dark' : 'light')
  const src = SHOT[mode]
  return (
    <motion.div className="mock-card" whileHover={{ y: -3, boxShadow: 'var(--shadow-lg)' }} transition={{ duration: 0.25 }}>
      <div className="mock-titlebar">
        <span className="traffic"><i /><i /><i /></span>
        <span className="mock-title">opsyos.com — Dashboard</span>
        {both && (
          <button
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle light/dark screenshot"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-flex' }}
              >
                {dark ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        )}
      </div>
      <div className="shot-frame">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={src}
            src={src}
            alt="Opsy OS dashboard — revenue chart, outstanding balance, recent tasks and projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ---------- 04 · Command palette mock ---------- */
const QUERY = 'aditi'
function PaletteMock() {
  const [typed, setTyped] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let i = 0
    const t = setInterval(() => {
      i += 1
      setTyped(QUERY.slice(0, i))
      if (i >= QUERY.length) clearInterval(t)
    }, 160)
    return () => clearInterval(t)
  }, [started])

  const done = typed.length === QUERY.length
  const results = [
    { g: 'Clients', items: [{ t: 'Aditi Rao — Meraki Studio', k: '↵', sel: true }] },
    { g: 'Invoices', items: [{ t: 'INV-2026-014 · ₹50,000 · Due', k: '' }, { t: 'INV-2026-009 · ₹30,000 · Paid', k: '' }] },
    { g: 'Projects', items: [{ t: 'Website redesign — M2', k: '' }] },
  ]

  return (
    <motion.div
      className="palette-wrap"
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
    >
      <div className="palette">
        <div className="palette-input">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <span>{typed}<span className="palette-caret" /></span>
        </div>
        {done && results.map((grp, gi) => (
          <motion.div key={grp.g} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: gi * 0.09 }}>
            <div className="palette-group">{grp.g}</div>
            {grp.items.map((it) => (
              <div key={it.t} className={`palette-item${it.sel ? ' sel' : ''}`}>
                <span className="p-ico">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                </span>
                {it.t}
                {it.k && <span className="p-kbd">{it.k}</span>}
              </div>
            ))}
          </motion.div>
        ))}
        <div className="palette-foot">
          <span><span className="kbd">↑↓</span> navigate</span>
          <span><span className="kbd">↵</span> open</span>
          <span><span className="kbd">esc</span> close</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <>
      <Section
        id="invoicing" gray num="01" eyebrow="Invoicing"
        title="Not accounting software. An invoicing app you'll want to open."
        lede="Live-preview editor — form on the left, brand-styled invoice on the right, updating as you type. Gapless per-year numbering assigned atomically at finalize. Draft → Sent → Partial → Paid lifecycle, with receipts tracking every partial payment."
        chips={<NumberTicker />}
      >
        <InvoiceMock />
      </Section>

      <Section
        id="payments" reverse num="02" eyebrow="Payments"
        title="₹ and UPI, first-class."
        lede="Your client gets one link — no account, no password. It shows every invoice, a UPI QR code, your UPI ID, and bank details. No gateway, no cut: clients pay you directly, you log the receipt."
        chips={
          <div className="chips">
            <span className="chip">UPI QR</span>
            <span className="chip">₹ INR</span>
            <span className="chip">No gateway fees</span>
            <span className="chip">One link per client</span>
          </div>
        }
      >
        <PortalMock />
      </Section>

      <Section
        id="os-layer" gray num="03" eyebrow="The OS layer"
        title="Not just invoices. The whole practice."
        lede="Clients from lead to closed. Projects with statuses and retainers. Tasks with priorities and due dates. Notion-style notes with icons. A dashboard that answers the only question that matters: where's the money?"
        chips={
          <div className="chips">
            <span className="chip">Clients</span>
            <span className="chip">Projects</span>
            <span className="chip">Tasks</span>
            <span className="chip">Notes</span>
            <span className="chip">Dashboard</span>
          </div>
        }
      >
        <DashboardShowcase />
      </Section>

      <Section
        id="keyboard" reverse num="04" eyebrow="Keyboard-first"
        title="⌘K to anywhere. Space to create."
        lede={<>Command palette jumps to any client, project, invoice, or note. On any list, Space means &ldquo;new&nbsp;___&rdquo; — context-aware. <span className="kbd">?</span> opens help wherever you are.</>}
        chips={
          <div className="chips">
            <span className="kbd">⌘</span>
            <span className="kbd">K</span>
            <span className="kbd">Space</span>
            <span className="kbd">?</span>
          </div>
        }
      >
        <PaletteMock />
      </Section>
    </>
  )
}
