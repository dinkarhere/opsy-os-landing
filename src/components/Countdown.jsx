import { Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { viewportOnce } from '../anim.js'

const TARGET = new Date('2027-01-01T00:00:00+05:30').getTime()

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Min', value: time.minutes },
    { label: 'Sec', value: time.seconds },
  ]

  return (
    <section className="countdown-section" id="beta">
      <div className="wrap">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="eyebrow countdown-eyebrow">Coming up</span>
          <h2 className="display-lg">The beta opens January&nbsp;1.</h2>
          <p className="cta-sub">
            I&rsquo;m polishing the last few rough edges before the wider beta. Bookmark this page
            and watch the clock — or jump in early above.
          </p>
          <div className="countdown-grid">
            {units.map((u, i) => (
              <Fragment key={u.label}>
                {i > 0 && <span className="countdown-sep">:</span>}
                <div className="countdown-unit">
                  <span className="countdown-num">{String(u.value).padStart(2, '0')}</span>
                  <span className="countdown-label">{u.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="cta-fineprint">1 January 2027 · 12:00 AM IST</div>
        </motion.div>
      </div>
    </section>
  )
}
