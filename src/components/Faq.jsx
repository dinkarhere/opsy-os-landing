import { motion } from 'framer-motion'
import { FREE_UNTIL_LABEL, PRICE_MONTHLY, PRICE_YEARLY, viewportOnce } from '../anim.js'

const ITEMS = [
  {
    q: `What happens on ${FREE_UNTIL_LABEL}?`,
    a: `The free window ends. If you haven't subscribed, your workspace goes read-only — everything stays visible and exportable, but new invoices and edits pause until you subscribe to Pro (${PRICE_MONTHLY}/month or ${PRICE_YEARLY}/year). Nothing is deleted, and you're never charged automatically.`,
  },
  {
    q: 'Do I need a card to sign up?',
    a: 'No. You sign in with Google and your workspace is created on the spot. There’s no per-signup trial timer either — the free window is one shared date for everyone, so signing up earlier just means more free time.',
  },
  {
    q: 'How do my clients pay me?',
    a: 'Each client gets a portal link that shows their invoices, a UPI QR code, and your bank details. They pay you directly — there’s no payment gateway in the middle, so you keep 100%. You log the receipt, and the invoice moves to Partial or Paid.',
  },
  {
    q: 'Is Opsy OS accounting software?',
    a: 'Deliberately not. There are no ledgers, journals, GST returns, or TDS. Opsy OS handles the side of your business that faces clients — the work, the invoices, the payments. For statutory bookkeeping, keep your accountant.',
  },
  {
    q: 'Who can see my data?',
    a: 'Your workspace is single-owner: only you, signed in with your Google account. Clients you grant portal access see only their own invoices and projects — never drafts, tasks, or notes. Your data isn’t sold or used for ads, and you can export it any time.',
  },
  {
    q: 'Can I use it with my team?',
    a: 'Not yet. Workspaces are single-owner today, on purpose — Opsy OS is built for people who run their own practice. If teams come, they’ll come deliberately.',
  },
]

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <motion.div
          className="faq-head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">FAQ</span>
          <h2 className="display-lg">Fair questions, straight answers.</h2>
        </motion.div>

        <div className="faq-list">
          {ITEMS.map((it, i) => (
            <motion.details
              className="faq-item"
              key={it.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.45 }}
            >
              <summary>
                {it.q}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <p>{it.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
