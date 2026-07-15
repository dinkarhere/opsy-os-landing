export const APP_URL = 'https://app.opsyos.com'

// Mirrors FREE_ACCESS_UNTIL in the product (src/lib/models/workspace.ts)
export const FREE_UNTIL = new Date('2027-01-01T00:00:00.000Z')
export const FREE_UNTIL_LABEL = '1 January 2027'

export const PRICE_MONTHLY = '₹499'
export const PRICE_YEARLY = '₹4,790'
export const PRICE_YEARLY_FULL = '₹5,988'

export const CONTACT_EMAIL = 'dinkarsablehere@gmail.com'

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const rise = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export const viewportOnce = { once: true, margin: '0px 0px -10% 0px' }
