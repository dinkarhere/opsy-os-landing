import { APP_URL, CONTACT_EMAIL } from '../anim.js'

export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <nav className="nav scrolled legal-nav">
        <div className="wrap">
          <div className="nav-row">
            <a className="nav-logo" href="/" aria-label="Opsy OS home">
              <img src="/Icons/logo-black.svg" alt="Opsy" />
            </a>
            <div className="nav-actions">
              <a className="nav-signin" href="/">Home</a>
              <a className="btn-primary" href={APP_URL} target="_blank" rel="noopener">
                Go to app
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="legal">
        <div className="legal-wrap">
          <h1 className="display-md">{title}</h1>
          <p className="legal-updated">Last updated: {updated}</p>
          {children}
          <div className="legal-contact">
            <p>
              Questions about this page? Email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> — it goes straight to the
              person who builds Opsy OS.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer legal-footer">
        <div className="wrap">
          <div className="footer-meta">
            <span>© 2026 Opsy OS · Made in Pune, India</span>
            <span className="legal-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/refunds">Refunds</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
