import { motion } from 'framer-motion'
import { viewportOnce } from '../anim.js'

const TOOLS = ['Notion', 'Excel', 'PDF template', 'WhatsApp reminders']

export default function Chaos() {
  return (
    <section className="chaos-section">
      <div className="wrap">
        <motion.div
          className="chaos-head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-md">Right now, your business lives in five tabs.</h2>
          <p>Client list in Notion. Numbers in Excel. Invoices from a PDF template. Payment reminders on WhatsApp. Opsy&nbsp;OS folds all of it into one keyboard-fast app.</p>
        </motion.div>

        <div className="chaos-line">
          {TOOLS.map((t, i) => (
            <motion.span
              key={t}
              className="chaos-chip"
              initial={{ opacity: 0, y: 16, rotate: i % 2 ? 4 : -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1 + i * 0.09, duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <s>{t}</s>
            </motion.span>
          ))}
          <motion.span
            className="chaos-arrow"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.55, duration: 0.4 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </motion.span>
          <motion.span
            className="chaos-opsy"
            initial={{ opacity: 0, scale: 0.4, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.72, type: 'spring', stiffness: 240, damping: 11 }}
            whileHover={{ scale: 1.12, rotate: -3 }}
          >
            <motion.img
              src="/Icons/logo-black.svg"
              alt="Opsy OS"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
            />
          </motion.span>
        </div>
      </div>
    </section>
  )
}
