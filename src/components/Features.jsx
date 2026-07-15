import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
    <MockWindow title="app.opsyos.com — New invoice">
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
            <div className="form-input">20 July 2026</div>
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
  const months = ['A', 'S', 'O', 'N', 'D', 'J', 'F', 'M', 'A', 'M', 'J', 'J']
  return (
    <MockWindow title="app.opsyos.com — Dashboard">
      <div className="dash-stats">
        {[
          { lbl: 'Outstanding', val: '₹1,10,000', d: '3 invoices' },
          { lbl: 'Paid this year', val: '₹9,40,000', d: '+31%' },
          { lbl: 'Active clients', val: '7', d: '+2 this month' },
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
    { g: 'Create', items: [{ t: 'New task for Aditi Rao…', k: '' }] },
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
        id="invoicing" num="01" eyebrow="Invoicing"
        title="An invoicing app you'll actually want to open."
        lede="Form on the left, brand-styled invoice on the right, updating as you type. Draft → Sent → Partial → Paid, with receipts tracking every partial payment. And every invoice gets a gapless, per-year number the moment you finalize it — assigned inside a database transaction, so numbers never collide or skip. Once numbered, it's locked: void it to correct a mistake, the way real bookkeeping works."
        chips={<NumberTicker />}
      >
        <InvoiceMock />
      </Section>

      <Section
        id="payments" gray reverse num="02" eyebrow="Payments"
        title="Get paid without a processor's cut."
        lede="Each client gets their own portal — one link, no account to create. It shows their invoices, a UPI QR code, and your bank details. They pay you directly; you keep 100% and just log the receipt. No gateway fees, no waiting on a payout schedule."
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
        id="practice" num="03" eyebrow="One place, not five"
        title="Clients, projects, tasks, notes — all cross-linked."
        lede="Open a project and its tasks, notes, and invoices are already there — no hunting. Clients move through a light pipeline, from lead to closed. And the dashboard answers the only question that matters — where's the money? — with outstanding, paid this year, drafts, and active clients at a glance."
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
        <DashboardMock />
      </Section>

      <Section
        id="keyboard" gray reverse num="04" eyebrow="Keyboard-first"
        title="Built to move at the speed you think."
        lede="⌘K opens a palette that finds or creates anything — a client, a task, a note, an invoice — one field at a time, Enter to advance. Create something from inside a project and it's linked to that project automatically. No setup tax, no mouse required."
        chips={
          <div className="chips">
            <span className="kbd">⌘</span>
            <span className="kbd">K</span>
            <span className="kbd">↵</span>
            <span className="kbd">esc</span>
          </div>
        }
      >
        <PaletteMock />
      </Section>
    </>
  )
}
