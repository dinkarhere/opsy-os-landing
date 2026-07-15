import React from 'react'
import ReactDOM from 'react-dom/client'
import LegalLayout from './LegalLayout.jsx'
import '../index.css'

function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="16 July 2026">
      <p className="legal-intro">
        Opsy OS is built and operated by Dinkar Sable, a solo developer in Pune, India
        (&ldquo;I&rdquo;, &ldquo;we&rdquo;). This page explains, in plain language, what data
        Opsy OS collects, why, and what happens to it. The short version: your data exists to run
        your workspace, nothing else. No ads, no selling, no third-party marketing.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Your Google account basics.</strong> Opsy OS signs you in with Google (via
          Firebase Authentication). We receive your name, email address, and profile photo —
          never your Google password.
        </li>
        <li>
          <strong>What you put into your workspace.</strong> Clients, projects, tasks, notes,
          invoices, and receipts — including contact and billing details you enter about your own
          clients. This content belongs to you; we store and process it only to run the service
          for you.
        </li>
        <li>
          <strong>Billing details.</strong> Paid subscriptions are processed by Dodo Payments,
          our merchant of record. Card and payment details go directly to them — Opsy OS never
          sees or stores your card number. We keep only your subscription status.
        </li>
        <li>
          <strong>Technical basics.</strong> Standard server and hosting logs (IP address,
          browser type, timestamps) needed to keep the service running and secure. There are no
          advertising trackers on the app or this site.
        </li>
      </ul>

      <h2>How it&rsquo;s used</h2>
      <ul>
        <li>To run your workspace and keep it isolated to your account.</li>
        <li>To generate invoice and receipt PDFs, and to send invoice emails when you choose to send them (delivered via Resend).</li>
        <li>To manage your subscription and the free-access window.</li>
        <li>To respond when you email for support.</li>
      </ul>
      <p>That&rsquo;s the whole list. Your data is never sold, rented, or used for advertising.</p>

      <h2>Who processes data on our behalf</h2>
      <ul>
        <li><strong>Google Firebase / Google Cloud</strong> — authentication and the database where workspace data lives.</li>
        <li><strong>Vercel</strong> — application and website hosting.</li>
        <li><strong>Dodo Payments</strong> — subscription billing, as merchant of record.</li>
        <li><strong>Resend</strong> — delivery of invoice and receipt emails you trigger.</li>
      </ul>
      <p>Each processes data only to provide their service, under their own security and privacy commitments.</p>

      <h2>The client portal</h2>
      <p>
        If you grant a client portal access, they sign in with a per-client link and password —
        no account is created for them, and no Google sign-in is involved. Portal visitors can
        see only their own invoices and projects: never your drafts, tasks, notes, or other
        clients. Portal sessions use a cookie/local storage strictly for keeping them signed in.
      </p>

      <h2>Your clients&rsquo; data</h2>
      <p>
        Details you record about your own clients are yours: you decide what to enter and whom to
        grant portal access. We process that information solely on your instructions, to run your
        workspace. If one of your clients wants their details corrected or removed, that&rsquo;s
        between you and them — and the app gives you full edit and delete controls to do it.
      </p>

      <h2>Cookies</h2>
      <p>
        Opsy OS uses cookies and local storage for one thing: keeping you (and your portal
        visitors) signed in. There are no advertising or cross-site tracking cookies.
      </p>

      <h2>Retention, export, and deletion</h2>
      <p>
        Your data stays as long as your workspace does. If the free window ends and you
        don&rsquo;t subscribe, your workspace goes read-only — nothing is deleted. You can export
        your data at any time, and you can request full deletion of your workspace and account by
        emailing us; we&rsquo;ll confirm and complete it within 30 days.
      </p>

      <h2>Security</h2>
      <p>
        Data moves over encrypted connections (HTTPS) and lives on Google Cloud infrastructure.
        Every workspace is isolated per account — one signed-in owner, plus any portal access you
        explicitly grant.
      </p>

      <h2>Children</h2>
      <p>Opsy OS is a business tool and isn&rsquo;t directed at anyone under 18.</p>

      <h2>Changes</h2>
      <p>
        If this policy changes in a way that matters, the &ldquo;last updated&rdquo; date above
        changes with it, and significant changes will be flagged in the app.
      </p>
    </LegalLayout>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Privacy />
  </React.StrictMode>,
)
